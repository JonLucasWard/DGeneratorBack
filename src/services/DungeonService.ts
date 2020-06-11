import db from '../util/pg-connector'; // To allow access to the database at all
import * as D from '../models/Dungeon';
import {Dungeon} from '../models/Dungeon';
import * as S from '../models/Civilization';
import * as E from '../models/Etc';

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