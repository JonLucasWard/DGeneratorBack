/**
 * This file contains all the methods needed when a user wants to interact with user data.
 * Most functions here will call and return user information.
 */
import Test from '../models/test'; // We want to have data conform to the user object model
import * as Tables from '../models/Tables';
import db from '../util/pg-connector'; // To allow access to the database at all
import * as Religion from '../models/Religion';
import * as Person from '../models/Person';
//import * as Events from '../models/Events';
import * as Etc from '../models/Etc';
//import * as Dungeon from '../models/Dungeon';
import * as Civilization from '../models/Civilization';
import * as Events from '../models/Events';
import * as Dungeon from '../models/Dungeon';


/**
 * The following function is meant to allow the user of the app to login. This is done by
 * checking their inputted information against the database, if it comes up positive, then the
 * Logger global variable is updated with the users information and the function returns true.
 * Otherwise, the login is ignored and the function returns false.
 * @param usrnam The username passed in from a user's JSON
 * @param passy The password given by a user's JSON
 */
// export async function userLogin(usrnam, passy) {
//     const queryString = `select * from users where username = $1 and password = $2`; /* Select all from users
//     where a passed in username and password are BOTH true of the same row */
//     let answer = false; // Probably excess code now, to be safe the function assumes a failure to start
//     const result = await db.query(queryString, [usrnam, passy]); // send a query and its inputs to SQL
//     /**
//      * The following checks for a failed login, if there was a failure, nothing is returned to the result object
//      * HOWEVER! result is, an object, result itself is defined but its stored variables may not be
//      * result will take in the same data STRUCTURE that the database gives it, which is why we call rows.
//      * @result - is a new object/array that receives all the information from the database's query
//      * .rows[] - this is the datastructure given by PostGresSQL, each row has information that defines each
//      * row of data. But the FIRST row (.rows[0]) has the data we're actually interested in. The values 
//      * actually ON the table. Everything else is dressing.
//      */
//     if (result.rows[0] === undefined) {
//         answer = false;
//     } else {
//         answer = true;
//         Logger.UserID = result.rows[0].id; // result object -> row array [0] (first one) 
//         // -> .id is a property on that array object
//         Logger.Role = result.rows[0].role; // and again for the role
//     }
//     return answer; // ends the function
// }

export async function rebuildTest(){ //create the Test table so it can be messed around with
    //await db.query(`CREATE TABLE Test (id serial PRIMARY KEY, Name varchar (100) NOT NULL, Explanation text);`);
    let query = Tables.GenericTableCreate('Test');
    await db.query(query);
    return;
};

export async function insertTest(){
    let query = Tables.GenericTableInsert('Test', Tables.TestTableNames, Tables.TestTableExplanations);
    await db.query(query);
    return;
};

export async function resetTest(){ //drop and remake Test table after doing something stupid to it
    let query = Tables.GenericTableDrop('Test');
    await db.query(query);
    await rebuildTest();
    return;
}

export async function rebuildDatabase(){
    await db.query(Tables.DropDatabase); await db.query(Tables.RebuildPublic); //completely reset database, current is deleted and only a public schema is left
    
    //other notes: table names can't have spaces (I know there's a way to do it, but it's annoying to me)
    //Can't have \' in the text, postgres doesn't like that

    //what follows is the creation of each given table, and inserting the appropriate values into that table, the same query string variable is used to avoid unnecessary creation 
    //Religion
    let query:string = Tables.GenericTableCreate('Belief'); await db.query(query); query = Tables.GenericTableInsert('Belief', Religion.BeliefNames, Religion.BeliefExplanations); await db.query(query);
    query = Tables.GenericTableCreate('DivineIs'); await db.query(query); query = Tables.GenericTableInsert('DivineIs', Religion.DivineIsNames, Religion.DivineIsExplanation); await db.query(query);
    query = Tables.GenericTableCreate('RelationsWithOtherReligions'); await db.query(query); query = Tables.GenericTableInsert('RelationsWithOtherReligions', Religion.RelationsWithOtherReligionsNames, Religion.RelationsWithOtherReligionsExplanation); await db.query(query);
    query = Tables.GenericTableCreate('StudyofDivineIs'); await db.query(query); query = Tables.GenericTableInsert('StudyofDivineIs', Religion.StudyOfDivineNames, Religion.StudyOfDivineExplanations); await db.query(query);
    query = Tables.GenericTableCreate('Cosmology'); await db.query(query); query = Tables.GenericTableInsert('Cosmology', Religion.CosmologyNames, Religion.CosmologyExplanations); await db.query(query);
    query = Tables.GenericTableCreate('ExistenceIs'); await db.query(query); query = Tables.GenericTableInsert('ExistenceIs', Religion.ExistenceIsNames, Religion.ExistenceIsExplanation); await db.query(query);
    query = Tables.GenericTableCreate('PeopleAre'); await db.query(query); query = Tables.GenericTableInsert('PeopleAre', Religion.PeopleAreNames, Religion.PeopleAreExplanations); await db.query(query);
    query = Tables.GenericTableCreate('TheAfterlifeIs'); await db.query(query); query = Tables.GenericTableInsert('TheAfterlifeIs', Religion.TheAfterlifeIsNames, Religion.TheAfterlifeIsExplanations); await db.query(query);
    query = Tables.GenericTableCreate('ToBeSavedYou'); await db.query(query); query = Tables.GenericTableInsert('ToBeSavedYou', Religion.ToBeSavedYouNames, Religion.ToBeSavedYouExplanations); await db.query(query);
    query = Tables.GenericTableCreate('EvilIs'); await db.query(query); query = Tables.GenericTableInsert('EvilIs', Religion.EvilIsName, Religion.EvilIsExplanations); await db.query(query);
    query = Tables.GenericTableCreate('NatureIs'); await db.query(query); query = Tables.GenericTableInsert('NatureIs', Religion.NatureIsNames, Religion.NatureIsExplanation); await db.query(query);
    query = Tables.GenericTableCreate('OrganizedReligionIs'); await db.query(query); query = Tables.GenericTableInsert('OrganizedReligionIs', Religion.OrganizedReligionIsNames, Religion.OrganizedReligionIsExplanations); await db.query(query);
    query = Tables.GenericTableCreate('ClergyQuirk'); await db.query(query); query = Tables.GenericTableInsert('ClergyQuirk', Religion.ClergyQuirkNames, Religion.ClergyQuirkExplanations); await db.query(query);
    //NameOnly Religion Inserts
    query = Tables.GenericTableCreate('ViceThemeVirtue'); await db.query(query); query = Tables.GenericTableInsertNameOnly('ViceThemeVirtue', Religion.ViceThemeVirtueNames); await db.query(query);
    query = Tables.GenericTableCreate('PoliticalRelations'); await db.query(query); query = Tables.GenericTableInsertNameOnly('PoliticalRelations', Religion.PoliticalRelationsNames); await db.query(query);
    query = Tables.GenericTableCreate('Demographic'); await db.query(query); query = Tables.GenericTableInsertNameOnly('Demographic', Religion.DemographicNames); await db.query(query);
    //NOTE, govt style is included in religion generation
    //Person
    query = Tables.GenericTableCreate('Motive'); await db.query(query); query = Tables.GenericTableInsert('Motive', Person.MotiveNames, Person.MotiveExplanations); await db.query(query);
    query = Tables.GenericTableCreate('FirstInteraction'); await db.query(query); query = Tables.GenericTableInsert('FirstInteraction', Person.FirstInteractionNames, Person.FirstInteractionExplanations);await db.query(query);
    query = Tables.GenericTableCreate('Hobby'); await db.query(query); query = Tables.GenericTableInsert('Hobby', Person.HobbyNames, Person.HobbyExplanations); await db.query(query);
    query = Tables.GenericTableCreate('Crime'); await db.query(query); query = Tables.GenericTableInsert('Crime', Person.CrimeNames, Person.CrimeExplanations); await db.query(query);
    //NameOnly Person Inserts
    query = Tables.GenericTableCreate('Vice'); await db.query(query); query = Tables.GenericTableInsertNameOnly('Vice', Person.ViceNames); await db.query(query);
    query = Tables.GenericTableCreate('Virtue'); await db.query(query); query = Tables.GenericTableInsertNameOnly('Virtue', Person.VirtueNames); await db.query(query);
    query = Tables.GenericTableCreate('Height'); await db.query(query); query = Tables.GenericTableInsertNameOnly('Height', Person.HeightNames); await db.query(query);
    query = Tables.GenericTableCreate('Weight'); await db.query(query); query = Tables.GenericTableInsertNameOnly('Weight', Person.WeightNames); await db.query(query);
    query = Tables.GenericTableCreate('Sexuality');await db.query(query); query = Tables.GenericTableInsertNameOnly('Sexuality', Person.SexualityNames); await db.query(query);
    query = Tables.GenericTableCreate('GenderFeatures'); await db.query(query); query = Tables.GenericTableInsertNameOnly('GenderFeatures', Person.GenderFeaturesNames); await db.query(query);
    query = Tables.GenericTableCreate('Age'); await db.query(query); query = Tables.GenericTableInsertNameOnly('Age', Person.AgesNames); await db.query(query);
    query = Tables.GenericTableCreate('Occupation'); await db.query(query); query = Tables.GenericTableInsertNameOnly('Occupation', Person.OccupationNames); await db.query(query);
    //Civilization
    query = Tables.GenericTableCreate('GovtType'); await db.query(query); query = Tables.GenericTableInsert('GovtType', Civilization.GovtTypeNames, Civilization.GovtTypeExplanations); await db.query(query);
    query = Tables.GenericTableCreate('Biomes'); await db.query(query); query = Tables.GenericTableInsert('Biomes', Civilization.BiomeNames, Civilization.BiomeExplanations); await db.query(query);
    query = Tables.GenericTableCreate('AreaControlled'); await db.query(query); query = Tables.GenericTableInsert('AreaControlled', Civilization.AreaControlNames, Civilization.AreaControlExplanations); await db.query(query);
    query = Tables.GenericTableCreate('EnergyInfrastructure'); await db.query(query); query = Tables.GenericTableInsert('EnergyInfrastructure', Civilization.EnergyInfrastructureNames, Civilization.EnergyInfrastructureExplanations); await db.query(query);
    query = Tables.GenericTableCreate('GovernmentReligiousRelations'); await db.query(query); query = Tables.GenericTableInsert('GovernmentReligiousRelations', Civilization.GovtReligiousRelationsNames, Civilization.GovtReligiousRelationsExplanations);await db.query(query);
    query = Tables.GenericTableCreate('EconomicFocus'); await db.query(query); query = Tables.GenericTableInsert('EconomicFocus', Civilization.EconomicFocusNames, Civilization.EconomicFocusExplanations); await db.query(query);
    query = Tables.GenericTableCreate('GenderRelations'); await db.query(query); query = Tables.GenericTableInsert('GenderRelations', Civilization.GenderRelationsNames, Civilization.GenderRelationsExplanation); await db.query(query);
    query = Tables.GenericTableCreate('MagicorTechRelations'); await db.query(query); query = Tables.GenericTableInsert('MagicorTechRelations', Civilization.MagicOrTechRelationsNames, Civilization.MagicOrTechRelationsExplanations); await db.query(query);
    query = Tables.GenericTableCreate('ForeignRelations'); await db.query(query); query = Tables.GenericTableInsert('ForeignRelations', Civilization.ForeignRelationsNames, Civilization.ForeignRelationsExplanations); await db.query(query);
    query = Tables.GenericTableCreate('MilitarySpecialty'); await db.query(query); query = Tables.GenericTableInsert('MilitarySpecialty', Civilization.MilitarySpecialtyNames, Civilization.MilitarySpecialtyExplanations); await db.query(query);
    query = Tables.GenericTableCreate('FrequentIssue'); await db.query(query); query = Tables.GenericTableInsert('FrequentIssue', Civilization.FrequentIssueNames, Civilization.FrequentIssueExplanations); await db.query(query);
    //NameOnly Civilization Inserts
    query = Tables.GenericTableCreate('PopulationDistribution'); await db.query(query); query = Tables.GenericTableInsertNameOnly('PopulationDistribution', Civilization.PopulationDistributionNames); await db.query(query);
    query = Tables.GenericTableCreate('MajoritiesandMinorities'); await db.query(query); query = Tables.GenericTableInsertNameOnly('MajoritiesandMinorities', Civilization.MajoritiesandMinoritiesNames); await db.query(query);
    query = Tables.GenericTableCreate('PopulationTrait'); await db.query(query); query = Tables.GenericTableInsertNameOnly('PopulationTrait', Civilization.PopulationTraitNames); await db.query(query);
    query = Tables.GenericTableCreate('TransportationInfrastructure'); await db.query(query); query = Tables.GenericTableInsertNameOnly('TransportationInfrastructure', Civilization.TransportationInfrastructureNames); await db.query(query);
    query = Tables.GenericTableCreate('PopularIssue'); await db.query(query); query = Tables.GenericTableInsertNameOnly('PopularIssue', Civilization.PopularIssueNames); await db.query(query);
    query = Tables.GenericTableCreate('CulturalValue'); await db.query(query); query = Tables.GenericTableInsertNameOnly('CulturalValue', Civilization.MajorCulturalValueNames); await db.query(query);
    query = Tables.GenericTableCreate('CulturalTaboo'); await db.query(query); query = Tables.GenericTableInsertNameOnly('CulturalTaboo', Civilization.MajorTabooNames); await db.query(query);
    query = Tables.GenericTableCreate('SocialProblem'); await db.query(query); query = Tables.GenericTableInsertNameOnly('SocialProblem', Civilization.MajorSocialProblemNames); await db.query(query);
    //Dungeon list
    query = Tables.GenericTableCreate('ReasonForDungeon'); await db.query(query); query = Tables.GenericTableInsert('ReasonForDungeon', Dungeon.ReasonForDungeonNames, Dungeon.ReasonForDungeonExplanation); await db.query(query);
    query = Tables.GenericTableCreate('MonsterStationary'); await db.query(query); query = Tables.GenericTableInsert('MonsterStationary', Dungeon.MonsterStationaryBehaviorNames, Dungeon.MonsterStationaryBehaviorExplanation); await db.query(query);
    query = Tables.GenericTableCreate('MonsterWandering'); await db.query(query); query = Tables.GenericTableInsert('MonsterWandering', Dungeon.MonsterWanderingBehaviorNames, Dungeon.MonsterWanderingBehaviorExplanation); await db.query(query);
    //Dungeon List name only
    query = Tables.GenericTableCreate('Light'); await db.query(query); query = Tables.GenericTableInsertNameOnly('Light', Dungeon.LightLevel); await db.query(query);
    query = Tables.GenericTableCreate('QualityOfDungeon'); await db.query(query); query = Tables.GenericTableInsertNameOnly('QualityOfDungeon', Dungeon.QualityOfDungeon); await db.query(query);
    query = Tables.GenericTableCreate('Material'); await db.query(query); query = Tables.GenericTableInsertNameOnly('Material', Dungeon.Material); await db.query(query);
    //Event list
    query = Tables.GenericTableCreate('TownEvents'); await db.query(query); query = Tables.GenericTableInsertNameOnly('TownEvents', Events.RandTownEvent); await db.query(query);
    query = Tables.GenericTableCreate('TravelEvents'); await db.query(query); query = Tables.GenericTableInsertNameOnly('TravelEvents', Events.RandTravelEvent); await db.query(query);
    query = Tables.GenericTableCreate('DungeonEvents'); await db.query(query); query = Tables.GenericTableInsertNameOnly('DungeonEvents', Events.RandDungeonEvent); await db.query(query);
    query = Tables.GenericTableCreate('EventEffects'); await db.query(query); query = Tables.GenericTableInsert('EventEffects', Events.RandEventEffectNames, Events.RandEventEffectExplanations); await db.query(query);
    //Encounter lists?
    //Etc
    query = Tables.GenericTableCreate('Items'); await db.query(query); query = Tables.GenericTableInsert('Items', Etc.ItemsNames, Etc.ItemsExplanations); await db.query(query);
    query = Tables.GenericTableCreate('ItemAge'); await db.query(query); query = Tables.GenericTableInsert('ItemAge', Etc.ItemAgeName, Etc.ItemAgeExplanation); await db.query(query);
    query = Tables.GenericTableCreate('Apocalypse'); await db.query(query); query = Tables.GenericTableInsert('Apocalypse', Etc.ApocalypseNames, Etc.ApcalypseExplanations); await db.query(query);
    query = Tables.GenericTableCreate('ApocalypseTiming'); await db.query(query); query = Tables.GenericTableInsert('ApocalypseTiming', Etc.TimingOfApocalypseNames, Etc.TimingOfApocalypseExplanations); await db.query(query);
    query = Tables.GenericTableCreate('SizeofTown'); await db.query(query); query = Tables.GenericTableInsert('SizeofTown', Etc.TownSizeNames, Etc.TownSizeExplanations); await db.query(query);
    //NameOnly Etc Inserts
    query = Tables.GenericTableCreate('Buildings'); await db.query(query); query = Tables.GenericTableInsertNameOnly('Buildings', Etc.BuildingNames); await db.query(query);
    query = Tables.GenericTableCreate('Rooms'); await db.query(query); query = Tables.GenericTableInsertNameOnly('Rooms', Etc.RoomsNames);await db.query(query);
    query = Tables.GenericTableCreate('Power'); await db.query(query); query = Tables.GenericTableInsertNameOnly('Power', Etc.Power); await db.query(query);
    query = Tables.GenericTableCreate('Activation'); await db.query(query); query = Tables.GenericTableInsertNameOnly('Activation', Etc.ActivationName); await db.query(query);
    query = Tables.GenericTableCreate('TownWealth'); await db.query(query); query = Tables.GenericTableInsertNameOnly('TownWealth', Etc.WealthOfTownNames); await db.query(query);
    return;
}

/**
 * The following function should return a User object matching the ID of the desired user.
 * @param ID passed in from the app user's Json, should equal an ID in the database
 */
export async function getid(ID: number): Promise<Test> {
    const queryString = `select id, Name, explanation from Test where id = $1`;
    const result = await db.query(queryString, [ID]);
    const Data = result.rows[0]; // userData now contains only the relevant information we want, however
    // it still isn't matched properly
    const matched = new Test(); // We will pass userData into this
    /**
     * this for loop will go over each key of the matchedUser object
     * Then it grabs the value matching each key of the User object, to an equivalent index value from userData
     */
    for (let key of Object.keys(matched)) { // Object.keys(objectName) treats the passed object's keys as an array
        matched[key] = Data[key.toLowerCase()]; // toLowerCase just in case there are differences in field names
    }
    return matched; // return the completed User object to be read
}

// export async function getUserByUName(usn): Promise<User> {
//     const queryString = `select * from users where username = $1`;
//     const result = await db.query(queryString, [usn]);
//     const userData = result.rows[0]; // userData now contains only the relevant information we want, however
//     // it still isn't matched properly
//     const matchedUser = new User(); // We will pass userData into this
//     for (let key of Object.keys(matchedUser)) { // Object.keys(objectName) treats the passed object's keys as an array
//         matchedUser[key] = userData[key.toLowerCase()]; // toLowerCase just in case there are differences in field names
//     }
//     return matchedUser; // return the completed User object to be read
// }

/**
 * The following function simply returns a list of all users from the database
 * @async asynchronous function, whenever you see this, it is the code sending a function to an outside
 * source (usually the database) and the code continues to run, then waits for a response by this function
 * sometimes when you call to an outside source, there can be a significant time delay. We want our code
 * to know this may be the case.
 * @await the code will not continue until the function after await comes back with a response
 */
export async function getAll() {
    const queryString = `select id, Name, explanation from Test`; // SQL code to be sent to the database
    const Results = await db.query(queryString); // send the code.
    const Data = Results.rows; // making a copy of the desired structure from the database
    // the DB will give more information than we actually need, what we want is in .rows
    const tests = []; // an empty array, it'll be cleaner than trying to actually prune the results
    for (let test of Data) { // user is just an iterator, ideally every block of data belongs to a user
        tests.push(new Test()); // If there is a user block in the database, make one in our copy
        let current = tests[tests.length - 1]; // Set a counter equal to the number of fields in the object
        for (let key of Object.keys(current)) { current[key] = test[key.toLowerCase()]; }
        // the above for loop will fill in the values of each field to the related user
    } // the code now repeats until there are no more users left

    return tests;
}

// The following is for the upd8 function to work properly, as it needs the password field
export async function getUserPassId(id: number): Promise<Test> {
    const queryString = `select * from Test where id = $1`;
    const result = await db.query(queryString, [id]);
    const Data = result.rows[0]; // userData now contains only the relevant information we want, however
    // it still isn't matched properly
    const matched = new Test(); // We will pass userData into this
    /**
     * this for loop will go over each key of the matchedUser object
     * Then it grabs the value matching each key of the User object, to an equivalent index value from userData
     */
    for (let key of Object.keys(matched)) { // Object.keys(objectName) treats the passed object's keys as an array
        matched[key] = Data[key.toLowerCase()]; // toLowerCase just in case there are differences in field names
    }
    return matched; // return the completed User object to be read
}

/**
 * The following function is meant to pass in user-like data into the database, so that it can update
 * a user's information to reflect the new data, but not change ANYTHING else.
 * @param patch is passed in information, meant to have the data structure of a User
 */
export async function updateTest(patch: Test) {
    const currentState = await getUserPassId(patch.id); // The passed in data will have the ID of the desired user
    // it also calls the previously defined getUserId function, which returns a full user.
    /**
     * The next object will create a new object with BOTH the original user, and our updates.
     * @currentState - old user information
     * @patch - new user information, will override old versions of the information.
     */
    const newState = {
        ...currentState, ...patch,
    };

    const result = await db.query(`UPDATE Test SET Name = $1, explanation = $2 WHERE id = $4 RETURNING id, Name, explanation;`,
        [newState.Name, newState.explanation, newState.id]);
    // The above, MASSIVE query, basically tries to update everything that is reasonable to update using 
    // the newState object
    return result.rows[0];
}