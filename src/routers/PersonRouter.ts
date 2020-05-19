import express from 'express';
import {Person} from '../models/Person';
import {getPerson} from '../services/PersonService';

const PersonRouter = express.Router();

/**
 *get a single test object based on its ID
 */
PersonRouter.get('/newPerson/:criminal', async (req: any, res) => { //when accessing the /:id path, create an async call
    //YOU MUST USE /:{parameter}, anything else is just a query (strings)
    try {
        var criminal:boolean; 
        if (parseInt(req.params.criminal, 10) > 1){ //2 means it's possible that NPC is criminal
            criminal = true;
        } else{ //1 means they can't be a criminal, for censorship purposes
            criminal = false;
        }
        const Person:Person = await getPerson(criminal); //call the testService getid function, using the id
        res.json(Person); //give a response to the caller of the Test object
        return;
    } catch (error) { //if an error happens (IE a bad id which doesn't exist, or a non-number)
        res.status(400).send(error); //respond back with a 400
        return;
    }
});

export default PersonRouter;