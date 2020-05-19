import express from 'express';
import {Civilization} from '../models/Civilization';
import {getCiv, getReli, getEnd, getTown} from '../services/SetService';
import {Religion} from '../models/Religion';
import {EndOfTheWorld, Town} from '../models/Etc';

const SetRouter = express.Router();

/**
 *get a single test object based on its ID
 */
SetRouter.get('/newCiv/:power', async (req: any, res) => { //when accessing the /:id path, create an async call
    //YOU MUST USE /:{parameter}, anything else is just a query (strings)
    
    try {
        var power:number = parseInt(req.params.power, 10); //parse in the assumed number from the query string,
        const Civilization:Civilization = await getCiv(power);
        res.json(Civilization); //give a response to the caller of the Test object
        return;
    } catch (error) { //if an error happens (IE a bad id which doesn't exist, or a non-number)
        res.status(400).send(error); //respond back with a 400
        return;
    }
});

SetRouter.get('/newReli', async (req: any, res) => { //generic call, user does not add inputs for religion   
    try {
        const Religion:Religion = await getReli();
        res.json(Religion); //give a response to the caller of the Test object
        return;
    } catch (error) { //if an error happens (IE a bad id which doesn't exist, or a non-number)
        res.status(400).send(error); //respond back with a 400
        return;
    }
});

SetRouter.get('/newEnd', async (req: any, res) =>{
    try{
        const End:EndOfTheWorld = await getEnd();
        res.json(End);
        return;
    } catch (error) {
        res.status(400).send(error);
        return;
    }
});

SetRouter.get('/newTown', async(req:any, res) =>{
    try{
        const Town:Town = await getTown();
        res.json(Town);
        return;
    } catch(error) {
        res.status(400).send(error);
        return;
    }
})


export default SetRouter;