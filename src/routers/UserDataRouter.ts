import express from 'express';
import * as UserDataService from '../services/UserDataService';

const UserDataRouter = express.Router();

/**
 *get a single test object based on its ID
 */
UserDataRouter.get('/getTable/:table/:pageMin/:pageMax', async (req: any, res) => { //when accessing the /:id path, create an async call
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

UserDataRouter.post('/putData/:table', async (req: any, res) =>{
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

export default UserDataRouter;