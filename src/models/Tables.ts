export function GenericTableCreate(tableName:string){
    let query = `CREATE TABLE ${tableName}(
        id serial PRIMARY KEY,
        Name varchar (150) NOT NULL,
        Explanation text
    );`; //should create a table with an auto-incrementing ID, name of 100 chars, and explanation if needed, name of table must be provided
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
            valueString += `('${names[i]}'), `; //create a row entry, includes period
        } else {
            valueString += `('${names[i]}')`; //create row entry, no period as it is final entry
        }   
    }
    return valueString; //give back the giant string to be used as values
}

