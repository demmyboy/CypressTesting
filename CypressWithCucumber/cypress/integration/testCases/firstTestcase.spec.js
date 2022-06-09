/// <reference types="cypress" />

describe('Check the Navigation', () => {
    it('Verify the page title', () => {
        cy.visit('http://qa.way2automation.com')
        cy.url().should('include', 'index.php')
        cy.get('#load_box > #load_form > :nth-child(5) > input').type('Demmy')
        cy.title().should('contain', 'Welcome')
        cy.get('#load_box > #load_form > :nth-child(5) > label').last().then((label) => {
            cy.log(label.text())
        })
        cy.get('#load_box > #load_form > :nth-child(5) > label').eq(0).should('contain.text', 'Name')



    })


})