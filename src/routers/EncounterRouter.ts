import express from 'express';
import {Dungeon} from '../models/Dungeon';
import {getDungeon} from '../services/DungeonService';

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

export default EncounterRouter;