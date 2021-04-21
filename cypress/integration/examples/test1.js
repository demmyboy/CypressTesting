/// <reference types="Cypress" />
describe('Demmy First Test', () => {
    it('Navigate to URL', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('input.search-keyword').type('ca')
        cy.wait(2000)
            //cy.get('product:visible').should('have.length', 4)
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length', 4)
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(() => {
                console.log('just write in the console after resolving the promise ')
            })
            // to ilerate through an array and click an element 
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const text = $el.find('h4.product-name').text()
            if (text.includes('Cashews')) {
                $el.find('button').click()
                cy.log(text)
            }

        })

        // assert the tesxt in logo 
        cy.get('.brand').should('have.text', 'GREENKART')

    })
})