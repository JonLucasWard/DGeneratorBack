import db from '../util/pg-connector'; // To allow access to the database at all
import {MagicItem, Quest} from '../models/Etc';
import * as E from '../models/Etc';
import {Event} from '../models/Events';
import * as Events from '../models/Events';

function ranDom(size:number) { //edit how big we want the value to be
    var num = Math.floor( (Math.random() * size) + 1); //round up a random number with a maximum size of "size" + 1 (1 is minimum and allows size to be maximum)
    return num;
}

export async function getMagicItem(power:number, curses:string, curselevel:number): Promise<MagicItem> { //magic items have a number of powers, and whether or not they have curses
  
    var ReturnItem = new MagicItem(); //create a magic item

    var queryString = `select name, explanation from items where id = $1`; //query to be passed into DB, $1 will be replaced with a random number. We must supply a table name every time
    var Result = await db.query(queryString, [ranDom(E.ItemsNames.length)] ); //call for the data, using a random number limited by the size of the table
    var Data = Result.rows[0]; //assign rows0 to the data variable for easier manipulation
    ReturnItem.Item = Data.name; ReturnItem.ItemExplanation = Data.explanation; //assign as needed

    queryString = `select name, explanation from itemage where id = $1`;
    Result = await db.query(queryString, [ranDom(E.TimingOfApocalypseExplanations.length)] );
    Data = Result.rows[0];
    ReturnItem.ItemAge = Data.name; ReturnItem.ItemAgeExplanation = Data.explanation;

    queryString = `select name, explanation from activation where id = $1`;
    Result = await db.query(queryString, [ranDom(E.ActivationName.length)] );
    Data = Result.rows[0];
    ReturnItem.Activation = Data.name;

    if(power == 0){ //power 0 means truly random powers
        var x:number = 2;
        queryString = `select name, explanation from power where id = $1`;
        while(x > 1){ //for as long as x is 1, make a new power.
            Result = await db.query(queryString, [ranDom(E.Power.length)] );
            Data = Result.rows[0];
            ReturnItem.Powers.push(Data.name); //must push data into powers array
            x = ranDom(2); //coin flip, if 2 then it ends, if 1 then it keeps going
        }
    } else { //some number of powers were assigned
        queryString = `select name, explanation from power where id = $1`;
        for(var i:number = 0; i < power; i++){ //for the number of powers, assign a new power
            Result = await db.query(queryString, [ranDom(E.Power.length)] );
            Data = Result.rows[0];
            ReturnItem.Powers.push(Data.name);
        }
    }

    if(curses == "true"){ //if no curses are desired, skip all this
        if(curselevel == 0){ //same logic as to the powers section now, but assigned to curses
            queryString = `select name, explanation from power where id = $1`;
            var x:number = 2;
            while(x > 1){
                Result = await db.query(queryString, [ranDom(E.Power.length)] );
                Data = Result.rows[0];
                ReturnItem.Curses.push(Data.name);
                x = ranDom(2);
            }
        } else{
            queryString = `select name, explanation from power where id = $1`;
            for(var i:number = 0; i < curselevel; i++){
            Result = await db.query(queryString, [ranDom(E.Power.length)] );
            Data = Result.rows[0];
            ReturnItem.Curses.push(Data.name);
        }
    } 
    
    } 
    return ReturnItem;
}

export async function getRoom(): Promise<String> {
    var queryString = 'select name from Rooms where id = $1';
    var Result = await db.query(queryString, [ranDom(E.RoomsNames.length)]);
    var Room = Result.rows[0].name;
    return Room;
}

export async function getBuilding(): Promise<String> {
    var queryString = 'select name from Buildings where id = $1';
    var Result = await db.query(queryString, [ranDom(E.BuildingNames.length)]);
    var Building = Result.rows[0].name;
    return Building;
}

export async function getEvent(type:string): Promise<Event>{
    var queryString = `select name from ${type} where id = $1`;
    var EffectsQuery = `select name, explanation from EventEffects where id = $1`;
    var ReturnEvent = new Event();
    switch(type){
        case 'TownEvents':
                var Result = await db.query(queryString, [ranDom(Events.RandTownEvent.length)]);
                ReturnEvent.Event = Result.rows[0].name;
                Result = await db.query(EffectsQuery, [ranDom(Events.RandEventEffectNames.length)]);
                ReturnEvent.EventEffect = Result.rows[0].name; ReturnEvent.EventEffectExplanation = Result.rows[0].explanation;
            break;
        case 'TravelEvents':
            var Result = await db.query(queryString, [ranDom(Events.RandTravelEvent.length)]);
            ReturnEvent.Event = Result.rows[0].name;
            Result = await db.query(EffectsQuery, [ranDom(Events.RandEventEffectNames.length)]);
            ReturnEvent.EventEffect = Result.rows[0].name; ReturnEvent.EventEffectExplanation = Result.rows[0].explanation;
            break;
        case 'DungeonEvents':
            var Result = await db.query(queryString, [ranDom(Events.RandDungeonEvent.length)]);
            ReturnEvent.Event = Result.rows[0].name;
            Result = await db.query(EffectsQuery, [ranDom(Events.RandEventEffectNames.length)]);
            ReturnEvent.EventEffect = Result.rows[0].name; ReturnEvent.EventEffectExplanation = Result.rows[0].explanation;
            break;
        default:
            break;
    }
    return ReturnEvent;
}

export async function getQuest(tags:string): Promise<Quest>{
    var returnQuest:Quest = new Quest();
    if(tags === "--ANY--"){
        var queryString = `select name, explanation, tags from Quests where id = ${ranDom(E.Quests.length)};`;
        var Result = await db.query(queryString);
        returnQuest.QuestName = Result.rows[0].name; returnQuest.QuestExplanation = Result.rows[0].explanation; returnQuest.Tags = Result.rows[0].tags;
    } else{
        var queryString = `create temp table myTable as
        SELECT id, name, explanation, tags FROM Quests WHERE tags ILIKE '%${tags}%';`
        await db.query(queryString);
        queryString = `SELECT name, explanation, tags from myTable ORDER BY random() LIMIT 1;`
        let Result = await db.query(queryString);
        returnQuest.QuestName = Result.rows[0].name; returnQuest.QuestExplanation = Result.rows[0].explanation; returnQuest.Tags = Result.rows[0].tags;
        queryString = `DROP TABLE IF EXISTS myTable CASCADE;`;
        await db.query(queryString);
    }
    return returnQuest;
} 