import db from '../util/pg-connector'; // To allow access to the database at all
import * as D from '../models/Dungeon';
import {Dungeon, Trap} from '../models/Dungeon';
import * as S from '../models/Civilization';
import * as E from '../models/Etc';
import {FifthMonster, CRValues} from '../models/5eMonsters';

function ranDom(size:number) { //edit how big we want the value to be
    var num = Math.floor( (Math.random() * size) + 1); //round up a random number with a maximum size of "size" + 1 (1 is minimum and allows size to be maximum)
    return num;
}

export async function getDungeon(): Promise<Dungeon> {
    var ReturnDungeon = new Dungeon();
    var queryString1 = `select name from $1 where id = $2`;
    var queryString2 = `select name, explanation from $1 where id = $2`;

    var Result = await db.query(`select name from qualityofdungeon where id = $1`, [ranDom(D.QualityOfDungeon.length)]);
    ReturnDungeon.Quality = Result.rows[0].name;


    Result = await db.query(`select name from Light where id = $1`, [ranDom(D.LightLevel.length)]);
    ReturnDungeon.LightLevel = Result.rows[0].name;


    Result = await db.query(`select name from Material where id = $1`, [ranDom(D.Material.length)]);
    ReturnDungeon.Material1 = Result.rows[0].name;
    Result = await db.query(`select name from Material where id = $1`, [ranDom(D.Material.length)]);
    ReturnDungeon.Material2 = Result.rows[0].name;

    Result = await db.query(`select name from Buildings where id = $1`, [ranDom(E.BuildingNames.length)]);
    ReturnDungeon.Building = Result.rows[0].name;


    Result = await db.query(`select name, explanation from ReasonForDungeon where id = $1`, [ranDom(D.ReasonForDungeonNames.length)]);
    ReturnDungeon.ReasonForDungeonName = Result.rows[0].name; ReturnDungeon.ReasonForDungeonExplanation = Result.rows[0].explanation;


    Result = await db.query(`select name, explanation from MonsterStationary where id = $1`, [ranDom(D.MonsterStationaryBehaviorNames.length)]);
    ReturnDungeon.MonsterStationaryName = Result.rows[0].name; ReturnDungeon.MonsterStationaryExplanation = Result.rows[0].explanation;

    Result = await db.query(`select name, explanation from MonsterWandering where id = $1`, [ranDom(D.MonsterWanderingBehaviorNames.length)]);
    ReturnDungeon.MonsterWanderingName = Result.rows[0].name; ReturnDungeon.MonsterWanderingExplanation = Result.rows[0].explanation;

    Result = await db.query(`select name, explanation from Biomes where id = $1`, [ranDom(S.BiomeNames.length)]);
    ReturnDungeon.BiomeName = Result.rows[0].name; ReturnDungeon.BiomeExplanation = Result.rows[0].explanation;

    return ReturnDungeon;

}

export async function get5eEncounter(name, maxMonsters, crMax, crMin, size, type, alignment, environment, source, XPTotal) {

//get a creature using "likes" for all text features
//create an array of acceptable CRs
//pop it out, subtract the CR value from total XP
//repeat until no more can be added, tack on a 0 CR creatuer to put it slightly over
//should end with an array of 5e creatures, send it back to be mapped
let query = `DROP TABLE IF EXISTS myTable CASCADE;`;
await db.query(query); //initial drop, just in case


let andy = "";
if(name != "" || size !="" || type !="" || alignment !="" || environment !="" || source!=""){
    andy = " AND "; //if there's a string, add AND to the query
}
//if else tree, if a string has another non-empty string following it, add a , to it
if(name !="" && (size !="" || type !="" || alignment !="" || environment !="" || source!="")){
    name += ",";
} else if( size !="" && (type !="" || alignment !="" || environment !="" || source!="")){
    size += ",";
} else if(type !="" && (alignment !="" || environment !="" || source!="")){
    type +=",";
} else if(alignment !="" && (environment !="" || source!="")){
    alignment +=",";
} else if(environment !="" && source!=""){
    environment +=",";
} //source is always an end, it doesn't need a ,

let CRArray = []; //Array to store CR values currently in use for calculation
let CRMultiplier = 1; //starting value, just in case
let total = 0; //total encounter XP value
let monsterArray:Array<FifthMonster> = []; //Array to store monsters

let newMax = crMax; //set newMax value equal to passed in number, will be changed

while(total < XPTotal){ //for as long as the encounter total is under the allowed XPTotal passed in value...
    let monster = new FifthMonster; //create new monster for us to put data into, MUST BE LOCAL TO THE LOOP
    
    let query = `create temp table myTable as 
    SELECT id, name, cr, size, type, alignment, environment, source
    FROM DND5eMonsters
    WHERE 
    ${name}${size}${type}${alignment}${environment}${source}${andy}
    cr>=${crMin} AND cr<=${newMax};
    `; //temp table string, allows us to select randomly only what we want, row of values might be blank or could have data
    await db.query(query); //create temp table

    query = `SELECT name, cr, size, type, alignment, environment, source
    FROM myTable
    ORDER BY random() LIMIT 1;`; //now the query to randomly pull a value from the result table
    let result = await db.query(query);
    let data = result.rows[0];
    monster.alignment = data.alignment; monster.cr = data.cr; monster.environment = data.environment; monster.name = data.name; monster.size = data.size; monster.source = data.source; monster.type = data.type;
    CRArray.push(data.cr);
    monsterArray.push(monster); //add monster to array now that we have it

    query = `DROP TABLE IF EXISTS myTable CASCADE;`;
    await db.query(query); //drop table, we'll probably make more as time goes on

    if(monsterArray.length < 2){ //if-else tree to establish multiplier
        CRMultiplier = 1;
    } else if(monsterArray.length < 3){
        CRMultiplier = 1.5;
    } else if(monsterArray.length < 6){
        CRMultiplier = 2;
    } else if(monsterArray.length < 10){
        CRMultiplier = 2.5;
    } else if(monsterArray.length < 14){
        CRMultiplier = 3;
    } else{
        CRMultiplier = 4;
    }

    let localTotal = 0; //local total XP

    for(let i = 0; i<CRArray.length; i++){ //iterate over current list of CRs
        if(CRArray[i] > 30){ //monster greater than CR 30, add 20K for each CR above 30.
            localTotal += (((CRArray[i]-30)*20000)+155000)*CRMultiplier;
        } else {
            localTotal += CRValues[CRArray[i]]*CRMultiplier; //match the monster's CR with the value in the CRValues key-value pair object
        } // all values are multiplied by the current multiplier
    }

    total = localTotal; // assign localTotal to total (due to above maths, we don't need to add to total)

    if(total >= XPTotal){//return early if possible
        return monsterArray;
    }

    if(monsterArray.length == maxMonsters){ //if max monsters, return early
        return monsterArray;
    }


    //do we still have room for another monster?
    //check check if multiplier would increase with another monster in the array

    localTotal = localTotal/CRMultiplier; //assume no multiplier

    if(monsterArray.length+1 < 2){ //if-else tree to establish multiplier, repeat again for checking +1
        CRMultiplier = 1;
    } else if(monsterArray.length+1 < 3){
        CRMultiplier = 1.5;
    } else if(monsterArray.length+1 < 6){
        CRMultiplier = 2;
    } else if(monsterArray.length+1 < 10){
        CRMultiplier = 2.5;
    } else if(monsterArray.length+1 < 14){
        CRMultiplier = 3;
    } else{
        CRMultiplier = 4;
    }

    localTotal = localTotal*CRMultiplier; //multiply in a "+1" multiplier


    let possibleTotal = localTotal; //estimate possible total
    let counter = 0;
    while(possibleTotal < XPTotal){
        if(counter <= 30){
        possibleTotal += CRValues[counter]*CRMultiplier;
        } else{
            possibleTotal += (((CRArray[counter]-30)*20000)+155000)*CRMultiplier;
        }
        //deal with fractions
        if(counter === 0){
            counter = 0.125;
        } else if(counter === 0.125){
            counter = 0.25;
        } else if(counter === 0.25){
            counter = 0.5;
        } else if(counter === 0.5){
            counter = 1;
        } else{
            counter++;
        }
        }

        newMax = counter;
        newMax = 5; //TESTING PURPOSES don't have values under 2 yet

    if(newMax < crMin){
        newMax = crMin;
        //make it so that it only adds 1 more of CRmin
    }
//check the highest value that could be added by increasing the total XP by the new multiplier (if there is one) over the values object, the second something would breach the maximum, return false and end
//check that CR relative to the minimum and highest values the user indicated that they wanted, top off the enemy list with a CR 0 enemy if possible or whatever was indicated as their min CR enemy

}
console.log("exiting for other reason...");
return monsterArray;
}

export async function getTrap(): Promise<Trap> {
    var returnTrap = new Trap();
    let Result =  await db.query(`select name from TrapTriggers where id = $1`, [ranDom(D.TrapTriggers.length)]);
    returnTrap.Trigger = Result.rows[0].name;
    Result = await db.query(`select name from TrapEffects where id = $1`, [ranDom(D.TrapEffect.length)]);
    returnTrap.Effect = Result.rows[0].name;
    Result = await db.query(`select name from TrapDetails where id = $1`, [ranDom(D.TrapDetails.length)]);
    returnTrap.Details = Result.rows[0].name;
    Result = await db.query(`select name from Difficulty where id = $1`, [ranDom(D.Difficulties.length)]);
    returnTrap.disableDifficulty = Result.rows[0].name;
    Result = await db.query(`select name from Difficulty where id = $1`, [ranDom(D.Difficulties.length)]);
    returnTrap.findDifficulty = Result.rows[0].name;

    return returnTrap;
}

export async function getTreasure(number:number){
    let returnItems= [[]];    
    for (let i = 0; i < number; i++){
        let Result = await db.query(`select name from items where id = $1`, [ranDom(E.ItemsNames.length)]);
        returnItems[0].push(Result.rows[0].name);
    }
    return returnItems;
}