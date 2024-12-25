import express from "express";
import * as dotenv from 'dotenv';
import { createPool } from 'mysql2';
import routes from '~/routes';

//region .env config

const dotenvParsed = dotenv.config({path: '..\\.env'}).parsed ?? {};

const dotenvConfig = {
    db: {
        host: dotenvParsed['DB_HOST'],
        port: Number(dotenvParsed['DB_PORT']),
        database: dotenvParsed['DB_DATABASE'],
        user: dotenvParsed['DB_USER'],
        password: dotenvParsed['DB_PASS']
    },
    cl: {
        host: dotenvParsed['CL_HOST']
    }
};

//endregion

//region database connection

/** The database connection object that can be used to send queries. */
export const dbConnection = createPool({
    host: dotenvConfig.db.host,
    port: dotenvConfig.db.port,
    user: dotenvConfig.db.user,
    password: dotenvConfig.db.password,
    database: dotenvConfig.db.database
});

//endregion

//region api config

const app = express();

// Headers and requests configuration
app.use(express.json());
app.use((_req, res, next) => {
    res.header("Access-Control-Allow-Origin", dotenvConfig.cl.host);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

// API routes
app.use("/api", routes);

//endregion

//region api launch

// Launching API
const port = 8000;
app.listen(port, () => {
    console.log(`▶ Server running at http://localhost:${port}.`);
}).on('error', (error) => {
    throw new Error(error.message);
});

//endregion