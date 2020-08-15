import express from 'express';
import Test from '../models/test';
import * as AdminService from '../services/AdminService';
import * as UserDataService from '../services/UserDataService';
import * as Civilization from '../models/Civilization';
import * as Tables from '../models/Tables';
import { json } from 'body-parser';

const AdminRouter = express.Router();

/**
 *get a single test object based on its ID
 */
AdminRouter.get('/test/:id/:target', async (req: any, res) => { //when accessing the /:id path, create an async call
    //YOU MUST USE /:{parameter}, anything else is just a query (strings)
    try {
        const id = parseInt(req.params.id, 10); //pull the id parameter from the received message
        //const Test = await QTService.getAll();
        const Test: Test = await AdminService.getid(id, req.params.target); //call the testService getid function, using the id
        res.json(Test); //give a response to the caller of the Test object
        return;
    } catch (error) { //if an error happens (IE a bad id which doesn't exist, or a non-number)
        res.status(400).send(error); //respond back with a 400
        return;
    }
});

AdminRouter.get('/test/:target', async (req: any, res) => {
    try {
        const tests = await AdminService.getAll(req.params.target);
        res.json(tests);
        return;
    } catch (error) {
        res.status(400).send(error);
        return;
    }
});

AdminRouter.patch('/test/:target', async (req: any, res) => {
    try {
        const patch: Test = req.body;
        const patchedInv: Test = await AdminService.updateTest(patch, req.params.target);
        res.json(patchedInv);
        return;
    } catch(error) {
        res.status(400).send(error);
    }
});

AdminRouter.post('/rebuild/:target',async (req: any, res)=>{
    try{
        await AdminService.rebuildTest(req.params.target);
        res.json('Success!');
        return;
    } catch (error) {
        res.status(400).send(error);
        return;
    }
});

AdminRouter.post('/resetTest/:target', async (req, res) =>{
    try{
        await AdminService.resetTest(req.params.target);
        res.json('Success!');
        return;
    } catch (error) {
        res.status(400).send(error);
        return;
    }
});

AdminRouter.post('/insertTest/:target', async (req, res) =>{
    try{
        await AdminService.insertTest(req.params.target);
        res.json('Success!');
        return;
    } catch (error) {
        res.status(400).send(error);
        return;
    }
});

AdminRouter.get('/rebuildMainDatabase/', async(req, res) =>{
    try{
        await AdminService.rebuildMainDatabase();
        res.json('Success!');
        return;
    } catch (error) {
        res.status(400).send(error);
        return;
    }

    
});

AdminRouter.get('/rebuildAdminDatabase/', async(req, res) =>{
    try{
        await AdminService.rebuildAdminDatabase();
        res.json("Success!");
        return;
    }catch (error){
        res.status(400).send(error);
        return;
    }
});

AdminRouter.post('/putData/:table', async (req: any, res) =>{
    try{
        var table:string = req.params.table;
        await UserDataService.addData(table, req.body);
        res.json("Success");
        return;
    } catch(error){
        res.status(400).send(error);
        return;
    }
});

AdminRouter.post('/addToMain/:table', async (req: any, res) =>{
    try{
        var table:string = req.params.table;
        await AdminService.addToMainDB(table, req.body);
        res.json("Success");
        return;
    } catch(error){
        res.status(400).send(error);
        return;
    }
});

AdminRouter.post('/denyInput/:table', async(req: any, res) =>{
    try{
        var table:string = req.params.table;
        await AdminService.denyEntry(table, req.body);
        res.json("Success");
        return;
    } catch(error){
        res.status(400).send(error);
        return;
    }
});

AdminRouter.get('/getTable/:table/:pageMin/:pageMax', async (req: any, res) => { //when accessing the /:id path, create an async call
    //YOU MUST USE /:{parameter}, anything else is just a query (strings)
    
    try {
        var pageMin:number = parseInt(req.params.pageMin, 10); //parse in the assumed number from the query string,
        var pageMax:number = parseInt(req.params.pageMax, 10);
        const tableResult = await UserDataService.getTable(req.params.table, pageMin, pageMax);
        res.json(tableResult); //give a response to the caller of the Test object
        return;
    } catch (error) { //if an error happens (IE a bad id which doesn't exist, or a non-number)
        res.status(400).send(error); //respond back with a 400
        return;
    }
});

export default AdminRouter;