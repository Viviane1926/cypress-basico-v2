Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Viviane')
    cy.get('#lastName').type('Martins')
    cy.get('#email').type('viviany1926@gmail.com')
    cy.get('#open-text-area').type ('Teste')
    cy.get('button[type="submit"]').click()
})