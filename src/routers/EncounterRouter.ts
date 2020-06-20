import express from 'express';
import {Dungeon} from '../models/Dungeon';
import {getDungeon, get5eEncounter} from '../services/EncounterService';

const EncounterRouter = express.Router();

/**
 *get a single test object based on its ID
 */
EncounterRouter.get('/newDungeon', async (req: any, res) => {
    try {
        const Dungeon:Dungeon = await getDungeon(); //call the testService getid function, using the id
        res.json(Dungeon); //give a response to the caller of the Test object
        return;
    } catch (error) { //if an error happens (IE a bad id which doesn't exist, or a non-number)
        res.status(400).send(error); //respond back with a 400
        return;
    }
});

EncounterRouter.get('/newFifthDnDEncounter/:name/:maxMonsters/:crMax/:crMin/:size/:type/:alignment/:environment/:source/:XPTotal', async(req:any, res) =>{
    try {
        let name, size, type, alignment, environment, source;
        if(req.params.name === "||ANY||"){name = "";} else {name = "name ILIKE '%"+req.params.name+"%'";} //||ANY|| is my default, nothing should be in the database as ||ANY||
        if(req.params.size === "||ANY||"){size = "";} else {size = "size ILIKE '%"+req.params.size+"%'";} //if default, switch it to a blank string
        if(req.params.type === "||ANY||"){type = "";} else {type = "type ILIKE '%"+req.params.type+"%'";} //otherwise, use ILIKE (ignores case) and add %s at the ends for matching
        if(req.params.alignment === "||ANY||"){alignment = "";}else{alignment = "alignment ILIKE '%"+req.params.alignment+"%'";}
        if(req.params.environment === "||ANY||"){environment = ""}else{environment = "environment ILIKE '%"+req.params.environment+"%'";}
        if(req.params.source === "||ANY||"){source = "";}else{source = "source ILIKE '%"+req.params.source+"%'";}
        const monsters = await get5eEncounter(name, req.params.maxMonsters, req.params.crMax, req.params.crMin, size, type, alignment, environment, source, req.params.XPTotal);
        res.json(monsters);
        return;
    }catch (error) {
        res.status(400).send(error);
        return;
    }

});

export default EncounterRouter;