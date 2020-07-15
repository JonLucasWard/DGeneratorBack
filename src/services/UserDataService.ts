/**
 * This file contains all the methods needed when a user wants to interact with user data.
 * Most functions here will call and return user information.
 */
import db from '../util/pg-connector'; // To allow access to the database at all

export async function getTable(table:string, pageMin:number, pageMax:number){
    if( ((pageMax - pageMin) > 19) || ((pageMax-pageMin) < 1) ){ //if user tries to query more than 20 items, reject them (difference of 20 and 1 is 19), or tries to make a negative query
        return "Stop that";
    }

    let query = `SELECT * FROM ${table} WHERE id >= ${pageMin} AND id <= ${pageMax} ORDER BY id`;
    let results = await db.query(query);
    return results.rows;
}

export async function updateData(table, pid, columnData){}

export async function addNewValue(table, columnData){}

export async function massUploadValues(table, data){}