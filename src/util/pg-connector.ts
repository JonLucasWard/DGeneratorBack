/**
 * This file establishes a connection between our client-user and the database
 */
import { Pool } from 'pg'; // import the "Pool" code from 'pg'

/**
 * A Pool is a collection of client connections to the database, holding a connection open for the user
 * so that they don't have to constantly re-enter information.
 * Anything not defined will be given a default value.
 */
const db = new Pool({ //we use environment variables for security reasons, such variables are tied to their physical computer, and not hardcoded here
    database: process.env.DATABASE, // The database we want to access
    host: process.env.HOST, // The server hosting said databse
    password: process.env.DB_PASSWORD, // The password needed to access that database
    port: Number(process.env.BACKEND_PORT), // The port that this connection should exist on (determined by database)
    user: process.env.DB_USER, // The user information we are logging into the database with
});

export default db; // export all informati6on here for other files to use