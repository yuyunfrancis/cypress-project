describe('Environmental Variables Demo', () => {
    it('Demo', () => {
        cy.log(`Printing Environmental Variable: ${Cypress.env("demoVar")}`)
    });
});