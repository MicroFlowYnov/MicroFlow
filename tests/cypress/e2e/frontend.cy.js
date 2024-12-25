import {getRandomInt} from "../support/utilities";

/** The URL to use to assert tests on the application frontend. */
const FRONTEND_URL = 'http://localhost:4200';

//region frontend tests

describe(`▶ Running tests on the application frontend:`, () => {

    beforeEach(() => {
        cy.visit(FRONTEND_URL);
    })

    it(`Is the application available?`, () => {
        cy.request('/');
    });

    it(`Can the counter be increased to 10^15 or bellow?`, () => {
        cy.get('.counter-display').then(
            $el => {
                const initialCounterValue = Number($el.text())
                const randint = getRandomInt();
                for (let i = 0; i < randint; i++) {
                    cy.get('.counter-container > .counter-button:last-child').click(); // Increasing the counter by 1
                }
                cy.get('.counter-display').should(
                    'have.text',
                    Math.min(initialCounterValue + randint, Math.pow(10, 15))
                );
            }
        );
    });

    it(`Can the counter be decreased to 0 or above?`, () => {
        cy.get('.counter-display').then(
            $el => {
                const initialCounterValue = Number($el.text())
                const randint = getRandomInt();
                for (let i = 0; i < randint; i++) {
                    cy.get('.counter-container > .counter-button:first-child').click(); // Decreasing the counter by 1
                }
                cy.get('.counter-display').should(
                    'have.text',
                    Math.max(initialCounterValue - randint, 0)
                );
            }
        );
    });

});

//endregion