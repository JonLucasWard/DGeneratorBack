import { AreaControlNames } from "./Civilization";
import {categories, FifthEMonsters} from './5eMonsters';
import {Quests} from './Etc';

export function GenericTableCreate(tableName:string){
    let query = `CREATE TABLE ${tableName}(
        id serial PRIMARY KEY,
        Name varchar (150) NOT NULL,
        Explanation text
    );`; //should create a table with an auto-incrementing ID, name of 100 chars, and explanation if needed, name of table must be provided
    return query; 
}

export function GenericAdminTableCreate(tableName:string){
    let query = `CREATE TABLE ${tableName}(
        id serial PRIMARY KEY,
        mainid integer,
        Name varchar (150) NOT NULL,
        Explanation text,
        timestamp varchar(150) NOT NULL
    );`; //should create a table with an auto-incrementing ID, name of 100 chars, and explanation if needed, name of table must be provided
    return query; 
}

export function GenericAdminInsert(tableName:string, data){
    let quests = "";
        if(tableName === "quests"){
            quests = " tags,";
        }
    let query;
    if(tableName === "DnD5eMonsters"){
        query = `INSERT INTO ${tableName}(mainid, name, cr, size, type, alignment, environment, source, timestamp) ${AdminValues(data)};`
    } else{
        query = `INSERT INTO ${tableName}(mainid, name, explanation,${quests} timestamp) ${AdminValues(data)};` //to automatically insert a series of values into Name and Explanation
    }
    //the values function is called which will turn the string arrays into a single string of value rows for SQL
    return query;
}

export function GenericTableDrop(tableName:string){
    let query = `DROP TABLE IF EXISTS ${tableName} CASCADE;`; //basically deletes a given table
    return query;
}
export function GenericTableInsert(tableName:string, Names:Array<string>, Explanations:Array<string>){
    let query = `INSERT INTO ${tableName}(Name, Explanation)
    ${values(Names, Explanations)};` //to automatically insert a series of values into Name and Explanation
    //the values function is called which will turn the string arrays into a single string of value rows for SQL
    return query;
}
export function GenericTableInsertNameOnly(tableName:string, Names:Array<string>){
    let query = `INSERT INTO ${tableName}(Name)
    ${valuesNames(Names)};` //to automatically insert a series of values into Name and Explanation
    //the values function is called which will turn the string arrays into a single string of value rows for SQL
    return query;
}

export function CreateAdminTable(){
    let query = `CREATE TABLE admindb(
        id serial PRIMARY KEY,
        affectedTable varchar(150),
        otherid integer,
        timestamp varchar(150)
    );`;
    return query;
}

//make logic for creating encounter table (try to make generic version for all based on inputted columns needed for each game system
//then logic for actually filling those values once filled with data

export function Create5eEncounterTable(tableName:string){
    let query = `CREATE TABLE ${tableName}(
        id serial PRIMARY KEY,
        name varchar (150) NOT NULL,
        cr decimal NOT NULL,
        size varchar (50) NOT NULL,
        type varchar (150) NOT NULL,
        alignment varchar (50),
        environment text,
        source text
    );`
    return query
}

export function Create5eEncounterAdminTable(tableName:string){
    let query = `CREATE TABLE ${tableName}(
        id serial PRIMARY KEY,
        mainid integer,
        name varchar (150) NOT NULL,
        cr decimal NOT NULL,
        size varchar (50) NOT NULL,
        type varchar (150) NOT NULL,
        alignment varchar (50),
        environment text,
        source text,
        timestamp varchar (150)
    );`
    return query
}

export function Insert5eEncounterTable(tableName:string, isAdmin:number){
    let query = `INSERT INTO ${tableName}(name, cr, size, type, alignment, environment, source)
    ${FifthEEncounterValues(FifthEMonsters, isAdmin)};`
    return query;
}

export function CreateQuestTable(tableName:string){
    let query = `Create Table ${tableName}(
        id serial PRIMARY KEY,
        name varchar (150) NOT NULL,
        explanation text,
        tags text
    );`
    return query;
}

export function CreateAdminQuestTable(tableName:string){
    let query = `Create Table ${tableName}(
        id serial PRIMARY KEY,
        mainid integer,
        name varchar (150) NOT NULL,
        explanation text,
        tags text,
        timestamp varchar (150)
    );`
    return query;
}

export function InsertQuestTable(tableName:string){
    let query = `INSERT INTO ${tableName}(name, explanation, tags) ${QuestValues(Quests)};`
    return query;
}


export const DropDatabase =
`DROP SCHEMA IF EXISTS public CASCADE`; //kills the whole database
export const RebuildPublic =
`CREATE SCHEMA PUBLIC`; //remakes the public schema so things can be added to database again

export const TestTableNames = [`January`, `February`, `March`]; //test names, there must be names
export const TestTableExplanations = [`April`, `May`, `June`]; //test explanations, including strings, a null, and just plain text

function values(names:Array<string>, explanations:Array<string>){ //hard data will be saved as an array, empty "explanations" will simply be as such
    let valueString = `VALUES`; //start the string
    for(let i = 0; i < names.length; i++){ //there will ALWAYS be a name, increment over those
        if(i < names.length-1){ //so long as we're not at the last item in names, do the following:
            valueString += `('${names[i]}', '${explanations[i]}'), `; //create a row entry, includes period
        } else {
            valueString += `('${names[i]}', '${explanations[i]}')`; //create row entry, no period as it is final entry
        }   
    }
    return valueString; //give back the giant string to be used as values
}

function valuesNames(names:Array<string>){ //hard data will be saved as an array, empty "explanations" will simply be as such
    let valueString = `VALUES`; //start the string
    for(let i = 0; i < names.length; i++){ //there will ALWAYS be a name, increment over those
        if(i < names.length-1){ //so long as we're not at the last item in names, do the following:
            valueString += `('${names[i]}'), `; //create a row entry, includes comma
        } else {
            valueString += `('${names[i]}')`; //create row entry, no comma as it is final entry
        }   
    }
    return valueString; //give back the giant string to be used as values
}

function QuestValues(data){
    let valueString = `VALUES`;
    for(let i = 0; i<data.length; i++){
        valueString += `(`; //starting new entry
        for(let x = 0; x<data[i].length; x++){
            if(x < data[i].length-1){ //entry in a row that is not the last
                valueString +=`'${data[i][x]}', `;
            } else if(x === data[i].length-1 && i === data.length-1){
                valueString += `'${data[i][x]}')`; //very last entry
            } else { //last entry of a row
                valueString += `'${data[i][x]}'),`;
            }
        }
    }
    return valueString;
}


function FifthEEncounterValues(data, isAdmin){
    let valueString = `VALUES`;
    let thisTime = new Date(); //creates timestamp of current date
    for(let i = 0; i < data.length; i++){
            valueString += `(`; //starting a new row
        for(let x = 0; x < data[i].length; x++){
            if(x === 1){ //check if CR, it wants a number so no quotes around it like a string would have
                valueString += `${data[i][x]}, `;
            }
            else if(x < data[i].length-1){ //most entries go here, somewhere in the middle
                valueString += `'${data[i][x]}', `;
            }
            else if(x === data[i].length-1 && i === data.length-1 ){ //the very last entry of the whole thing
                if(isAdmin === 1){
                    valueString += `'${thisTime}')`;
                } else{
                    valueString += `'${data[i][x]}')`;
                }
            } else { //end of a row
                if(isAdmin ===1){
                    valueString += `'${thisTime}'),`;
                } else{
                    valueString += `'${data[i][x]}'),`;
                }
            }
        }
    }
    return valueString;
}

function AdminValues(data){ //we want the data to have "nulls" for timestamp coming in
    //ALSO! ALL DATA PASSING IN should be in [[]] format
    let valueString = `VALUES`;
    let thisTime = new Date(); //creates timestamp of current date
    for(let i = 0; i<data.length; i++){
        valueString += `(`; //starting new entry
        let objSize = Object.keys(data[i]).length;
        let count = 0;
        Object.keys(data[i]).forEach((key) =>{
            if(count < objSize-1){
                if(key === "mainid" || key === "cr" || key === "id"){
                    valueString +=`${data[i][key]},`;
                } else{
                valueString +=`'${data[i][key]}',`;}
            } else if(count === objSize-1 && i === data.length-1){
                valueString += `'${data[i][key]}', '${thisTime}')`;
            } else {
                valueString += `'${data[i][key]}', '${thisTime}'),`;
            }
            count++;
        });

    }

    return valueString;
} 