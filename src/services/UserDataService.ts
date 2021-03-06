/**
 * This file contains all the methods needed when a user wants to interact with user data.
 * Most functions here will call and return user information.
 */
import db from '../util/pg-connector'; // To allow access to the database at all
import {addb} from '../util/pg-connector';
import * as Tables from '../models/Tables';

export async function getTable(table, pageMin:number, pageMax:number){
    if( ((pageMax - pageMin) > 19) || ((pageMax-pageMin) < 1) ){ //if user tries to query more than 20 items, reject them (difference of 20 and 1 is 19), or tries to make a negative query
        return "Stop that";
    }

    let query = `SELECT * FROM ${table} WHERE id >= ${pageMin} AND id <= ${pageMax} ORDER BY id`;
    let results = await db.query(query);
    return results.rows;
}

export async function addData(table, columnData){ //user adds or edits any kind of data to database
    let query = Tables.GenericAdminInsert(table, columnData);
    await addb.query(query);
    query = `SELECT id FROM ${table} ORDER BY id DESC LIMIT 1`; //get the last value added to that table, it SHOULD be the result of the last query
    let result = await addb.query(query);
    let foreignId = result.rows[0].id;
    let thisTime = new Date(); //creates timestamp of current date
    query = `INSERT into admindb(affectedTable, otherid, timestamp) VALUES('${table}', ${foreignId}, '${thisTime}');` //only the last part of the entry will be counted
    //this is O-K for now, we should be able to just "count up" from there to see other entries
    await addb.query(query);
    return;
}

export async function massUploadValues(table, data){
    let query = Tables.GenericAdminMassInsert(table, data);
    await addb.query(query);
    query = `SELECT id FROM ${table} ORDER BY id DESC LIMIT 1`; //get the last value added to that table, it SHOULD be the result of the last query
    let result = await addb.query(query);
    let foreignId = result.rows[0].id;
    let thisTime = new Date(); //creates timestamp of current date
    let values = "";
    for(let i = 0; i < data.length; i++){ //we want to upload into admindb a row for each piece of data we just entered
        if(i < data.length-1){ //include comma if not the end of data set
            values += `('${table}', ${foreignId+i-1}, '${thisTime}'), `;
        } else{ //foreignId will at minimum be 1, -1 to make it match proper array value, then +i to indicate position relative to data
            values += `('${table}', ${foreignId+i-1}, '${thisTime}')`;
        }
    }
    query = `INSERT into admindb(affectedTable, otherid, timestamp) VALUES${values};`
    await addb.query(query);
    return;
}

export async function downloadTable(table){
    let query = `SELECT * from ${table};`;
    let results = await db.query(query);
    return results.rows;
}