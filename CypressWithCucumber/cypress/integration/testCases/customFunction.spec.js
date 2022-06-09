/// <reference types="cypress" />

describe('Create custome functions', () => {
    it('Verify customer function is created ', () => {
        cy.visit('https://www.way2automation.com/angularjs-protractor/banking/#/login')
        cy.addCustomer('Demmy', 'Sasore', '2860')
    })


})