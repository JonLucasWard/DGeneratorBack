/**
 * When a users comes in through the users path, they will have access to some functions
 * given certain HTTP commands.
 */
import express from 'express';
import {MagicItem} from '../models/Etc';
import * as QTService from '../services/QTService';

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

export default QTRouter;