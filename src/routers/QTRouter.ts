/**
 * When a users comes in through the users path, they will have access to some functions
 * given certain HTTP commands.
 */
import express from 'express';
import {MagicItem, Quest} from '../models/Etc';
import * as QTService from '../services/QTService';
import {Event} from '../models/Events';

const QTRouter = express.Router();

QTRouter.get('/magicItem/:powers/:curse/:curselevel', async (req: any, res) => { //when accessing the /:id path, create an async call
    //YOU MUST USE /:{parameter}, anything else is just a query (strings)
    //yes you can have multiple variable paths with :var1/:var2/etc
    try {
        var powers:number = parseInt(req.params.powers, 10); //parse in the assumed number from the query string,
        var curselevel:number = parseInt(req.params.powers, 10); 
        var curse:string = req.params.curse; //assign string directly (no boolean parser)
        const MagicItem:MagicItem = await QTService.getMagicItem(powers, curse, curselevel);
        res.json(MagicItem);
        return;
    } catch (error) { //if an error happens (IE a bad id which doesn't exist, or a non-number)
        res.status(400).send(error); //respond back with a 400
        return;
    }
});

QTRouter.get('/room', async (req: any, res) => {
    try {
        const Room:String = await QTService.getRoom();
        res.json(Room);
        return;
    } catch (error){
        res.status(400).send(error);
        return;
    }
});

QTRouter.get('/building', async (req: any, res) => {
    try {
        const Building:String = await QTService.getBuilding();
        res.json(Building);
        return;
    } catch (error){
        res.status(400).send(error);
        return;
    }
});

QTRouter.get('/event/:type', async (req: any, res) => {
    try {
        const ReturnEvent:Event = await QTService.getEvent(req.params.type);
        res.json(ReturnEvent);
        return;
    } catch (error){
        res.status(400).send(error);
        return;
    }
});

QTRouter.get('/quest/:tags', async (req: any, res) =>{
    try {
        const quests:Quest = await QTService.getQuest(req.params.tags);
        res.json(quests);
        return;
    } catch (error){
        res.status(400).send(error);
        return;
    }
});

export default QTRouter;