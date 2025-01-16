import {getRandomInt} from "../support/utilities";

/** The URL to use to assert tests on the application backend. */
const BACKEND_URL = 'http://localhost:8000/api/counter';

//region backend tests

describe(`▶ Running tests on the application backend:`, () => {

    it(`Is the application available?`, () => {
        cy.request('GET', BACKEND_URL).then(
            res => {
                expect(res.status).to.eq(200);
                expect(res.body.counter).to.exist;
            }
        );
    });

    it(`Can the counter be increased to 10^15 or bellow?`, () => {
        cy.request('GET', BACKEND_URL).then(
            res => {
                const initialCounterValue = res.body.counter;
                const randint = getRandomInt();
                cy.request('PUT', BACKEND_URL, {value: randint});
                cy.request('GET', BACKEND_URL).then(
                    res2 => expect(res2.body.counter).to.eq(Math.min(initialCounterValue + randint, Math.pow(10, 15)))
                );
            }
        );
    });

    it(`Can the counter be decreased to 0 or above?`, () => {
        cy.request('GET', BACKEND_URL).then(
            res => {
                const initialCounterValue = res.body.counter;
                const randint = getRandomInt();
                cy.request('PUT', BACKEND_URL, {value: -randint});
                cy.request('GET', BACKEND_URL).then(
                    res2 => expect(res2.body.counter).to.eq(Math.max(initialCounterValue - randint, 0))
                );
            }
        );
    });

});

//endregion