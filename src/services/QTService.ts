import db from '../util/pg-connector'; // To allow access to the database at all
import {MagicItem} from '../models/Etc';
import * as E from '../models/Etc';

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

