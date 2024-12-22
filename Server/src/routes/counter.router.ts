import { Request, Response, Router } from 'express';
import { dbConnection } from '~~/src';

const counterRouter = Router();

//region methods

// Getting the current counter value.
counterRouter.get(
    '/',
    (_req: Request, res: Response) => {
        try {
            // TODO
            // const result = dbConnection.query(`SELECT count FROM Counter`);
            // console.log(result);
            res.status(200).send('Ok');
        } catch (e) {
            res.status(500).send({ error: e?.toString() });
        }
    }
);

counterRouter.put(
    '/',
    (_req: Request, res: Response) => {
        try {
            /*
            TODO
            - Request cooldown before updating in the database
            - New counter value >= 0
            - New counter value <= 10^15
             */
            res.status(200).send('Ok');
        } catch (e) {
            res.status(500).send({ error: e?.toString() });
        }
    }
);

//endregion

export default counterRouter;