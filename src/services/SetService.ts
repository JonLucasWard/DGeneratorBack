import db from '../util/pg-connector'; // To allow access to the database at all
import * as P from '../models/Civilization';
import * as R from '../models/Religion';
import * as E from '../models/Etc';
import {Civilization} from '../models/Civilization';
import {Religion} from '../models/Religion';
import {Town, EndOfTheWorld} from '../models/Etc';

function ranDom(size:number) { //edit how big we want the value to be
    var num = Math.floor( (Math.random() * size) + 1); //round up a random number with a maximum size of "size" + 1 (1 is minimum and allows size to be maximum)
    return num;
}

export async function getCiv(power:number): Promise<Civilization> { //accept the power number (how many civs are in this setting) and promise to return a civilization object back
    var ReturnCiv = new Civilization(); //be sure to construct a basic object first

    var queryString = `select name, explanation from govttype where id = $1`; //generic query string, we will need to manually change the table name every time
    var Result = await db.query(queryString, [ranDom(P.GovtTypeNames.length)] ); //Result object which stores data retrieved object, queries using the string we gave and a random number is generated from table length, put into $1 spot in the string template
    var Data = Result.rows[0]; //database object is a bit weird, what we want will be in row[0], assign it to a var
    ReturnCiv.GovtType.push(Data.name); ReturnCiv.GovtTypeExplanation.push(Data.explanation); // GovtType is an array, so we PUSH into it
    Result = await db.query(queryString, [ranDom(P.GovtTypeNames.length)]); //repeated twice for this particular value
    Data = Result.rows[0];
    ReturnCiv.GovtType.push(Data.name); ReturnCiv.GovtTypeExplanation.push(Data.explanation);
    
    queryString = `select id, name, explanation from populationdistribution where id = $1`; 
    Result = await db.query(queryString, [ranDom(P.PopulationDistributionNames.length)] ); 
    Data = Result.rows[0];
    ReturnCiv.Biome.PopulationDistribution = Data.name;
    if(Data.id == 1 || Data.id == 3){ //PIDs 1 and 3, we know they DONT cause a number of biomes to be generated
        queryString = `select id, name, explanation from biomes where id = $1`; 
        Result = await db.query(queryString, [ranDom(P.BiomeNames.length)] );
        Data = Result.rows[0];
        ReturnCiv.Biome.Biomes.push(Data.name); ReturnCiv.Biome.BiomesExplanations.push(Data.explanation);
    } else{ //2 or 4, we need to make many biomes/calls
        var i:number = 100; //number to represent total %
        var val:number = 0; //whatever current value a biome has
        while( i>0){ //for as long as the "current percent" is greater than 0
             var v = ranDom(100); //create a random number between 1 and 100
             if(v > i){ //if the random is greater than what's left, end the loop on this cycle
                 val = i; //we assign the remainding percentage as the random number
                 i = 0; //remaining percentage is now 0, loop will end after this
             }
             else{ //if random number is less than total %
                 val = v; //value is assigned random #
                 i -= v; // we subtract value from remaining %
             }
             queryString = `select id, name, explanation from biomes where id = $1`; 
             Result = await db.query(queryString, [ranDom(P.BiomeNames.length)] );
             Data = Result.rows[0];
             ReturnCiv.Biome.Biomes.push(`${Data.name} ${val}% `); //we assign the biome name AND the % fo land area that composes this value
             ReturnCiv.Biome.BiomesExplanations.push(Data.explanation);
        }
    }

    queryString = `select name, explanation from AreaControlled where id = $1`; 
    Result = await db.query(queryString, [ranDom(P.AreaControlNames.length)] ); 
    Data = Result.rows[0];
    ReturnCiv.AreaControl = Data.name; ReturnCiv.AreaControlExplanation = Data.explanation;
    
    queryString = `select name, explanation from populationtrait where id = $1`;
    Result = await db.query(queryString, [ranDom(P.PopulationTraitNames.length)] );
    Data = Result.rows[0];
    ReturnCiv.PopulationTrait = Data.name;

    queryString = `select id, name, explanation from MajoritiesAndMinorities where id = $1`;
    Result = await db.query(queryString, [ranDom(P.MajoritiesandMinoritiesNames.length)] );
    Data = Result.rows[0];
    ReturnCiv.MajoritiesAndMinorities = Data.name;
    if(Data.id == 4){ //if PID is 4, we know it creates a number of groups and powers
        var i:number = 100; //%
        var count:number = 0; //count for number of groups made, we don't know what end user is naming them, but we don't need to
        var val:number = 0; //current % of a given group
        while(i > 0){ //same idea as the biome loop, keep making random and subtract from total % until you can't anymore
            var v = ranDom(100);
            if (v > i){
                val = i;
                i = 0;
            } else {val = v; i -= v;}
            count++;
            ReturnCiv.MnMList.push(`Group ${count} has ${val}% control of power`);
        }
    }

    queryString = `select name, explanation from transportationinfrastructure where id = $1`;
    Result = await db.query(queryString, [ranDom(P.TransportationInfrastructureNames.length)] );
    Data = Result.rows[0];
    ReturnCiv.TransportationInfrastructure = Data.name;

    queryString = `select name, explanation from energyinfrastructure where id = $1`;
    Result = await db.query(queryString, [ranDom(P.EnergyInfrastructureNames.length)] );
    Data = Result.rows[0];
    ReturnCiv.EnergyInfrastructure = Data.name; ReturnCiv.EnergyInfrastructureExplanation = Data.explanation;

    queryString = `select name, explanation from governmentreligiousrelations where id = $1`;
    Result = await db.query(queryString, [ranDom(P.GovtReligiousRelationsNames.length)] );
    Data = Result.rows[0];
    ReturnCiv.GovtReligiousRelations = Data.name; ReturnCiv.GovtReligiousRelationsExplanation = Data.explanation;

    queryString = `select name, explanation from economicfocus where id = $1`;
    Result = await db.query(queryString, [ranDom(P.EconomicFocusExplanations.length)] );
    Data = Result.rows[0];
    ReturnCiv.EconomicFocus = Data.name; ReturnCiv.EconomicFocusExplanation = Data.explanation;

    queryString = `select name, explanation from genderrelations where id = $1`;
    Result = await db.query(queryString, [ranDom(P.GenderRelationsNames.length)] );
    Data = Result.rows[0];
    ReturnCiv.GenderRelations = Data.name; ReturnCiv.GenderRelationsExplanation = Data.explanation;

    queryString = `select name, explanation from MagicOrTechRelations where id = $1`;
    Result = await db.query(queryString, [ranDom(P.MagicOrTechRelationsNames.length)] );
    Data = Result.rows[0];
    ReturnCiv.MagicOrTechRelations = Data.name; ReturnCiv.MagicOrTechRelationsExplanation = Data.explanation;

    queryString = `select name, explanation from foreignrelations where id = $1`;
    Result = await db.query(queryString, [ranDom(P.ForeignRelationsNames.length)] );
    Data = Result.rows[0];
    ReturnCiv.ForeignRelations = Data.name; ReturnCiv.ForeignRelationsExplanation = Data.explanation;

    queryString = `select name, explanation from MilitarySpecialty where id = $1`;
    Result = await db.query(queryString,[ranDom(P.MilitarySpecialtyNames.length)]);
    Data = Result.rows[0];
    ReturnCiv.MilitarySpecialty = Data.name; ReturnCiv.MilitarySpecialtyExplanation = Data.explanation;

    queryString = `select name, explanation from frequentissue where id = $1`;
    Result = await db.query(queryString, [ranDom(P.FrequentIssueNames.length)] );
    Data = Result.rows[0];
    ReturnCiv.FrequentIssue = Data.name; ReturnCiv.FrequentIssueExplanation = Data.explanation;

    queryString = `select name, explanation from PopularIssue where id = $1`;
    Result = await db.query(queryString, [ranDom(P.PopularIssueNames.length)] );
    Data = Result.rows[0];
    ReturnCiv.PopularIssue = Data.name; 

    queryString = `select name, explanation from CulturalValue where id = $1`;
    Result = await db.query(queryString, [ranDom(P.MajorCulturalValueNames.length)] );
    Data = Result.rows[0];
    ReturnCiv.MajorCulturalValue = Data.name;

    queryString = `select name, explanation from CulturalTaboo where id = $1`;
    Result = await db.query(queryString, [ranDom(P.MajorTabooNames.length)] );
    Data = Result.rows[0];
    ReturnCiv.MajorCulturalTaboo = Data.name;

    queryString = `select name, explanation from socialproblem where id = $1`;
    Result = await db.query(queryString, [ranDom(P.MajorSocialProblemNames.length)] );
    Data = Result.rows[0];
    ReturnCiv.MajorCulturalIssue = Data.name;

    ReturnCiv.PowerScale = ranDom(power); //randomly assign the "power ranking" of this civ compared to others in its setting, purely relatative

    return ReturnCiv; // return the completed User object to be read

}

export async function getReli(): Promise<Religion> { //accept the power number (how many civs are in this setting) and promise to return a civilization object back
    var ReturnReli = new Religion();

    var queryString = `select name, explanation from govttype where id = $1`; //generic query string, we will need to manually change the table name every time
    var Result = await db.query(queryString, [ranDom(P.GovtTypeNames.length)] ); //Result object which stores data retrieved object, queries using the string we gave and a random number is generated from table length, put into $1 spot in the string template
    var Data = Result.rows[0]; //database object is a bit weird, what we want will be in row[0], assign it to a var
    ReturnReli.GovtType.push(Data.name); ReturnReli.GovtTypeExplanation.push(Data.explanation); // GovtType is an array, so we PUSH into it
    Result = await db.query(queryString, [ranDom(P.GovtTypeNames.length)]); //repeated twice for this particular value
    Data = Result.rows[0];
    ReturnReli.GovtType.push(Data.name); ReturnReli.GovtTypeExplanation.push(Data.explanation);

    queryString = `select name, explanation from belief where id = $1`;
    Result = await db.query(queryString, [ranDom(R.BeliefNames.length)] );
    Data = Result.rows[0];
    ReturnReli.Belief = Data.name; ReturnReli.BeliefExplanation = Data.explanation;

    queryString = `select name, explanation from divineis where id = $1`;
    Result = await db.query(queryString, [ranDom(R.DivineIsNames.length)] );
    Data = Result.rows[0];
    ReturnReli.DivineIs = Data.name; ReturnReli.DivineIsExplanation = Data.explanation;

    queryString = `select name, explanation from relationswithotherreligions where id = $1`;
    Result = await db.query(queryString, [ranDom(R.RelationsWithOtherReligionsNames.length)] );
    Data = Result.rows[0];
    ReturnReli.RelationshipWithOtherReligions = Data.name; ReturnReli.RelationshipWithOtherReligionsExplanation = Data.explanation;

    queryString = `select name, explanation from studyofdivineis where id = $1`;
    Result = await db.query(queryString, [ranDom(R.StudyOfDivineNames.length)] );
    Data = Result.rows[0];
    ReturnReli.StudyOfDivine = Data.name; ReturnReli.StudyOfDivineExplanation = Data.explanation;

    queryString = `select name, explanation from cosmology where id = $1`;
    Result = await db.query(queryString, [ranDom(R.CosmologyNames.length)] );
    Data = Result.rows[0];
    ReturnReli.Cosmology = Data.name; ReturnReli.CosmologyExplanation = Data.explanation;

    queryString = `select name, explanation from existenceis where id = $1`;
    Result = await db.query(queryString, [ranDom(R.ExistenceIsNames.length)] );
    Data = Result.rows[0];
    ReturnReli.ExistenceIs = Data.name; ReturnReli.ExistenceIsExplanation = Data.explanation;
    
    queryString = `select name, explanation from peopleare where id = $1`;
    Result = await db.query(queryString, [ranDom(R.PeopleAreNames.length)] );
    Data = Result.rows[0];
    ReturnReli.PeopleAre = Data.name; ReturnReli.PeopleAreExplanation = Data.explanation;

    queryString = `select name, explanation from theafterlifeis where id = $1`;
    Result = await db.query(queryString, [ranDom(R.TheAfterlifeIsExplanations.length)] );
    Data = Result.rows[0];
    ReturnReli.TheAfterlifeIs = Data.name; ReturnReli.TheAfterLifeIsExplanation = Data.explanation;

    queryString = `select name, explanation from tobesavedyou where id = $1`;
    Result = await db.query(queryString, [ranDom(R.ToBeSavedYouNames.length)] );
    Data = Result.rows[0];
    ReturnReli.ToBeSavedYou = Data.name; ReturnReli.ToBeSavedYouExplanation = Data.explanation;

    queryString = `select name, explanation from evilis where id = $1`;
    Result = await db.query(queryString, [ranDom(R.EvilIsName.length)] );
    Data = Result.rows[0];
    ReturnReli.EvilIs = Data.name; ReturnReli.EvilIsExplanation = Data.explanation;

    queryString = `select name, explanation from NatureIs where id = $1`;
    Result = await db.query(queryString, [ranDom(R.NatureIsNames.length)] );
    Data = Result.rows[0];
    ReturnReli.NatureIs = Data.name; ReturnReli.NatureIsExplanation = Data.explanation;

    queryString = `select name, explanation from OrganizedReligionIs where id = $1`;
    Result = await db.query(queryString, [ranDom(R.OrganizedReligionIsNames.length)] );
    Data = Result.rows[0];
    ReturnReli.OrganizedReligionIs = Data.name; ReturnReli.OrganizedReligionIsExplanation = Data.explanation;

    queryString = `select name, explanation from clergyquirk where id = $1`;
    Result = await db.query(queryString, [ranDom(R.ClergyQuirkNames.length)] );
    Data = Result.rows[0];
    ReturnReli.ClergyQuirk = Data.name; ReturnReli.ClergyQuirkExplanation = Data.explanation;

    queryString = `select name, explanation from PoliticalRelations where id = $1`;
    Result = await db.query(queryString, [ranDom(R.PoliticalRelationsNames.length)] );
    Data = Result.rows[0];
    ReturnReli.PoliticalRelations = Data.name;

    queryString = `select name, explanation from demographic where id = $1`;
    Result = await db.query(queryString, [ranDom(R.DemographicNames.length)] );
    Data = Result.rows[0];
    ReturnReli.Demographics = Data.name;

    for(var i = 0; i<9; i++){ //vice virtues and themes, very random, 3 of each
        queryString = `select name, explanation from vicethemevirtue where id = $1`;
        Result = await db.query(queryString, [ranDom(R.ViceThemeVirtueNames.length)] );
        Data = Result.rows[0]; //the same 3 lines will be called for each, all the same table
        if(i<3){
        ReturnReli.vices.push(Data.name); //if first 3, push to vice
        }
        else if(i<6 && i>2){ //2nd set of 3, go to virtue
        ReturnReli.virtues.push(Data.name);
        }
        else{ //last 3 are in themes
        ReturnReli.themes.push(Data.name);
        }
    }

    return ReturnReli;
}

export async function getTown(): Promise<Town>{
    var ReturnTown:Town = new Town();

    var queryString = `select name, explanation from sizeoftown where id = $1`;
    var Result = await db.query(queryString, [ranDom(E.TownSizeNames.length)] );
    var Data = Result.rows[0];
    ReturnTown.TownSize = Data.name; ReturnTown.TownSizeExplanation = Data.explanation;

    queryString = `select name, explanation from townwealth where id = $1`;
    Result = await db.query(queryString, [ranDom(E.WealthOfTownNames.length)] );
    Data = Result.rows[0];
    ReturnTown.Wealth = Data.name;

    queryString = `select name, explanation from govttype where id = $1`;
    Result = await db.query(queryString, [ranDom(P.GovtTypeNames.length)] );
    Data = Result.rows[0];
    ReturnTown.GovtType = Data.name; ReturnTown.GovtTypeExplanation = Data.explanation;
    
    queryString = `select name, explanation from economicfocus where id = $1`;
    Result = await db.query(queryString, [ranDom(P.EconomicFocusNames.length)] );
    Data = Result.rows[0];
    ReturnTown.EconomicFocus = Data.name; ReturnTown.EconomicFocusExplanation = Data.explanation;

    queryString = `select name, explanation from biomes where id = $1`;
    Result = await db.query(queryString, [ranDom(P.BiomeNames.length)] );
    Data = Result.rows[0];
    ReturnTown.Biome = Data.name; ReturnTown.BiomeExplanation = Data.explanation;

    return ReturnTown;
}

export async function getEnd(): Promise<EndOfTheWorld>{
    try{
    var ReturnEnd:EndOfTheWorld = new EndOfTheWorld();

    var queryString = `select name, explanation from apocalypse where id = $1`;
    var Result = await db.query(queryString, [ranDom(E.ApocalypseNames.length)] );
    var Data = Result.rows[0];
    ReturnEnd.EndType = Data.name; ReturnEnd.EndTypeExplanation = Data.explanation;

    queryString = `select name, explanation from apocalypsetiming where id = $1`;
    Result = await db.query(queryString, [ranDom(E.TimingOfApocalypseExplanations.length)] );
    Data = Result.rows[0];
    ReturnEnd.Timing = Data.name; ReturnEnd.TimingExplanation = Data.explanation;

    return ReturnEnd; } catch (error) {console.log(error);}
}