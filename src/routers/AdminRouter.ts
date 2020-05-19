import express from 'express';
import Test from '../models/test';
import * as AdminService from '../services/AdminService';
import * as Civilization from '../models/Civilization';
import * as Tables from '../models/Tables';

const AdminRouter = express.Router();

/**
 *get a single test object based on its ID
 */
AdminRouter.get('/test/:id', async (req: any, res) => { //when accessing the /:id path, create an async call
    //YOU MUST USE /:{parameter}, anything else is just a query (strings)
    try {
        const id = parseInt(req.params.id, 10); //pull the id parameter from the received message
        //const Test = await QTService.getAll();
        const Test: Test = await AdminService.getid(id); //call the testService getid function, using the id
        res.json(Test); //give a response to the caller of the Test object
        return;
    } catch (error) { //if an error happens (IE a bad id which doesn't exist, or a non-number)
        res.status(400).send(error); //respond back with a 400
        return;
    }
});

AdminRouter.get('/test', async (req: any, res) => {
    try {
        const tests = await AdminService.getAll();
        res.json(tests);
        return;
    } catch (error) {
        res.status(400).send(error);
        return;
    }
});

AdminRouter.patch('/test/', async (req: any, res) => {
    try {
        const patch: Test = req.body;
        const patchedInv: Test = await AdminService.updateTest(patch);
        res.json(patchedInv);
        return;
    } catch(error) {
        res.status(400).send(error);
    }
});

AdminRouter.post('/rebuild/',async (req: any, res)=>{
    try{
        await AdminService.rebuildTest();
        res.json('Success!');
        return;
    } catch (error) {
        res.status(400).send(error);
        return;
    }
});

AdminRouter.post('/resetTest/', async (req, res) =>{
    try{
        await AdminService.resetTest();
        res.json('Success!');
        return;
    } catch (error) {
        res.status(400).send(error);
        return;
    }
});

AdminRouter.post('/insertTest/', async (req, res) =>{
    try{
        await AdminService.insertTest();
        res.json('Success!');
        return;
    } catch (error) {
        res.status(400).send(error);
        return;
    }
});

AdminRouter.get('/rebuildDatabase/', async(req, res) =>{
    try{
        await AdminService.rebuildDatabase();
        res.json('Success!');
        return;
    } catch (error) {
        res.status(400).send(error);
        return;
    }

    
});

export default AdminRouter;