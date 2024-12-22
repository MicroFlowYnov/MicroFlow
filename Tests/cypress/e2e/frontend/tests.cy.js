/** The URL to use to assert tests on the application frontend. */
export const FRONTEND_URL = 'http://localhost:4200';

// Running frontend tests
describe('▶ Running tests on the application frontend:', () => {

    beforeEach(() => {
        cy.visit(FRONTEND_URL);
    })

    // TODO: write tests

});