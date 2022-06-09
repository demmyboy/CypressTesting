/// <reference types="cypress" />

describe('Check the Navigation', () => {
    it('Verify Attribute and Element Visibility', () => {
            cy.visit('http://qa.way2automation.com')
            cy.url().should('include', 'index.php')
            cy.get('#load_box > #load_form > :nth-child(5) > input').should('be.visible').type('Demmy')
            cy.get('#load_box > #load_form > :nth-child(5) > input').should('be.visible').invoke('attr', 'name').should('contain', 'name')



        })
        // to find the length of element in a form 
    it.only('Verify Element Visibility', () => {
            cy.visit('http://qa.way2automation.com')
            cy.url().should('include', 'index.php')
            cy.get('#load_box').find('input').invoke('attr', 'type').should('not.have', 'hidden').its('length').then((elementLength) => {
                cy.log(elementLength)
            })

            // find within the form 
            cy.get('#load_box> form> fieldset').within((section) => {
                cy.get('input').its('length').should('eq', 6)
                cy.get('input', { timeout: 4000 }).first().type('Demmy Abdulai')
                cy.get('input').eq(1).type('08033321090')
                cy.wait(5000)
                cy.get("input[name='city']").type('Lagos')
            })


        })
        // npx cypress run --spec .\cypress\intergration\textcases\*.js


})