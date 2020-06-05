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
        const Person:Person = await getPerson(req.params.criminal); //call the testService getid function, using the id
        res.json(Person); //give a response to the caller of the Test object
        return;
    } catch (error) { //if an error happens (IE a bad id which doesn't exist, or a non-number)
        res.status(400).send(error); //respond back with a 400
        return;
    }
});

export default PersonRouter;