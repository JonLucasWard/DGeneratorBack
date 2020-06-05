/**
 * This app is meant to interface with a database to retrieve user and reimbursement data.
 * Users of the app MUST first go through the login path and input a valid login to access any data.
 * Some users will be restricted to what paths and options they can use.
 */
// boop
// need express for file dependencies
// brackets are to get types
/*{Request, Response} from <- use if something goes wrong*/
import bodyParser from "body-parser"; // sees if content of request is json, then turn it into object for JS
import express from "express"; // allows for communication with HTTP requests
import {pathToRegexp, match, parse, compile} from "path-to-regexp";
import QTRouter from "./routers/QTRouter"; // series of functions for the login URL
import AdminRouter from "./routers/AdminRouter"; // series of functions for administrator
import PersonRouter from './routers/PersonRouter'; //import Person functions
import SetRouter from './routers/SettingRouter';
import DungeonRouter from './routers/DungeonRouter';
import db from "./util/pg-connector"; // connector to the database
import cors from "cors";

const app = express(); // opens an instance of express to communicate with HTTP, this is the "app" in total
const port = 3222; // the local port we are communicating with to do this
const port_handler = app.listen(port, () =>
  console.log(`ERS app listening on port ${port}!`)
); // port_handler is what "listens" for actions done on the port, the console log is just to know that it's on

app.use(bodyParser.json()); // turning on bodyParser? Could be a useless call.
app.use(express.json()); // turning on express? Could be a useless call.
app.use(cors());

app.use((req, res, next) => {
  console.log("Request received for " + req.url);
  next();
}); // Every time a request is made through this application, this function will tell the developer
// What URL is being requested by the user, so at least you KNOW where something breaks, kinda'.

app.use("/QTools", QTRouter); // If the user wants to use the /login path, it sends them there
app.use("/AdminTools", AdminRouter); // For things the admin needs to manage the system
app.use("/Person", PersonRouter);
app.use("/Setting", SetRouter);
app.use("/Dungeon", DungeonRouter);

process.on("SIGINT", () => {
  db.end().then(() => console.log("pool has ended"));
  port_handler.close();
}); // When a user INTerrupts the SIGnal going to the app, turn off the database,
// close the database connection and tell us.