describe("wgt test", () => {
    it("goes to second step", () => {
        cy.visit('https://kgri.github.io/')
        // First step
        .get('button').click()

        // Second step
        .get('input').type('WomenGoTech')        
        .get('form').submit()

        // Third step
        .get('input').type('Bad value')
        .get('form').submit()
        .get('[data-test=errorMessage]').should('be.visible')
        .get('input').clear().type('Good value')
        .get('form').submit()
  });