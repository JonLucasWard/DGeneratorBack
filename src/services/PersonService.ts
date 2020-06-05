import db from '../util/pg-connector'; // To allow access to the database at all
import * as P from '../models/Person';
import {Person} from '../models/Person';

function ranDom(size:number) { //edit how big we want the value to be
    var num = Math.floor( (Math.random() * size) + 1); //round up a random number with a maximum size of "size" + 1 (1 is minimum and allows size to be maximum)
    return num;
}

export async function getPerson(Criminal: string): Promise<Person> {
    const ReturnPerson = new Person(); // We will pass userData into this
    
    var queryString = `select name, explanation from vice where id = $1`;//select the Name and Explanation columns from [variable table name] where id = [random number]
    var Result = await db.query(queryString, [ranDom(P.ViceNames.length)] ); // enter the random value, ensure that variables are inputted as an array
    var Data = Result.rows[0]; //data isn't quite readable right away, pull only "rows" which will be an object
    ReturnPerson.vice = Data.name; //apply "name" value, we know we receive it since that's the column name

    queryString = `select name, explanation from virtue where id = $1`; //note the new table name
    Result = await db.query(queryString, [ranDom(P.VirtueNames.length)] ); //note the changed table size
    Data = Result.rows[0];
    ReturnPerson.virtue = Data.name;
    
    queryString = `select name, explanation from motive where id = $1`; 
    Result = await db.query(queryString, [ranDom(P.MotiveNames.length)] ); 
    Data = Result.rows[0];
    ReturnPerson.motive = Data.name; ReturnPerson.motiveExplanation = Data.explanation; //we expect an explanation value, so it is added

    
    queryString = `select name, explanation from height where id = $1`;
    Result = await db.query(queryString, [ranDom(P.HeightNames.length)] );
    Data = Result.rows[0];
    ReturnPerson.height = Data.name;

    queryString = `select name, explanation from weight where id = $1`;
    Result = await db.query(queryString, [ranDom(P.WeightNames.length)] );
    Data = Result.rows[0];
    ReturnPerson.weight = Data.name;

    queryString = `select name, explanation from firstinteraction where id = $1`;
    Result = await db.query(queryString, [ranDom(P.FirstInteractionNames.length)] );
    Data = Result.rows[0];
    ReturnPerson.firstInteraction = Data.name; ReturnPerson.firstInteractionExplanation = Data.explanation;

    queryString = `select name, explanation from genderfeatures where id = $1`;
    Result = await db.query(queryString, [ranDom(P.GenderFeaturesNames.length)] );
    Data = Result.rows[0];
    ReturnPerson.gender = Data.name;

    queryString = `select name, explanation from sexuality where id = $1`;
    Result = await db.query(queryString, [ranDom(P.SexualityNames.length)] );
    Data = Result.rows[0];
    ReturnPerson.sexuality = Data.name;

    queryString = `select name, explanation from age where id = $1`;
    Result = await db.query(queryString, [ranDom(P.AgesNames.length)] );
    Data = Result.rows[0];
    ReturnPerson.age = Data.name;

    queryString = `select name, explanation from hobby where id = $1`;
    Result = await db.query(queryString, [ranDom(P.HobbyNames.length)] );
    Data = Result.rows[0];
    ReturnPerson.hobby = Data.name; ReturnPerson.hobbyExplanation = Data.explanation;

    queryString = `select name, explanation from occupation where id = $1`;
    Result = await db.query(queryString, [ranDom(P.OccupationNames.length)] );
    Data = Result.rows[0];
    ReturnPerson.Occupation = Data.name; ReturnPerson.OccupationExplanation = Data.explanation;

    if((Criminal == "true") && (ranDom(2)>1)){ //if Criminal option is on and coin flip, it runs, else it doesn't
        queryString = `select name, explanation from crime where id = $1`;
        Result = await db.query(queryString, [ranDom(P.CrimeExplanations.length)]); 
        Data = Result.rows[0];
        ReturnPerson.Crime = Data.name; ReturnPerson.CrimeExplanation = Data.explanation;
        if(ranDom(2) > 1){ //another coin flip if they were caught or not
            ReturnPerson.Caught = "and was caught.";
        }
        else{
            ReturnPerson.Caught = "and was not caught.";
        }
    } else {
        ReturnPerson.Crime = "no"; ReturnPerson.Caught = "";
    }
    return ReturnPerson; // return the completed User object to be read
}