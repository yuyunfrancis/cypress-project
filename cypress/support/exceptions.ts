Cypress.on("uncaught:exception", (err, runners) => {
    return false
});