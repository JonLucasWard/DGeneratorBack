/**
 * When a users comes in through the users path, they will have access to some functions
 * given certain HTTP commands.
 */
import express, { Request, Response } from 'express';
import Test from '../../models/test';
import * as QTService from '../../models/services/QTService';

const QTRouter = express.Router();

/**
 *get a single test object based on its ID
 */
QTRouter.get('/test1', async (req: any, res) => { //when accessing the /test1 path, create an async call
    try {
        const id = parseInt(req.params.id, 10); //pull the id parameter from the received message
        const Test: Test = await QTService.getid(id); //call the testService getid function, using the id
        res.json(Test); //give a response to the caller of the Test object
        return;
    } catch (error) { //if an error happens (IE a bad id which doesn't exist, or a non-number)
        res.status(400).send('Bad inputs'); //respond back with a 400
        return;
    }
});

/**
 * Change a user's information in the database and return it. Should only be possible to admins (role 1)
 */
QTRouter.patch('', async (req: any, res) => {
    try {
        const patch: Test = req.body;
        const patchedInv: Test = await QTService.updateTest(patch);
        res.json(patchedInv);
        return;
    } catch {
        res.status(400).send('Bad inputs');
    }
});
/**
 * Get a list of all users, should only be done by finance managers
 */

QTRouter.get('/test3', async (req: any, res) => {
    try {
        const tests = await QTService.getAll();
        res.send(tests);
        return;
    } catch (error) {
        res.status(400).send('Bad inputs');
        return;
    }
});

export default QTRouter;