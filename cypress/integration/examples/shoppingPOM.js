/// <reference types="Cypress" />


import HomePage from '../../support/pageObject/homePage'
import ProductPage from '../../support/pageObject/productPage'

const homePage = new HomePage()
const productPage = new ProductPage()

describe('Framework Test', function() {
    beforeEach(() => {
        // runs before each test in the block
        cy.fixture('example').then(function(data) {
            this.data = data
        })
    })
    it('should fill the form and assert them', function() {
        cy.visit(Cypress.env('url'))
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        homePage.getEditBox().should('have.attr', 'minlength', 2)
        homePage.getEntrepeneurButton().should('be.disabled')
    })

    it('should click on the shop menu and select the items ', function() {
        Cypress.config("defaultCommandTimeout", 8000)
        homePage.clickShopButton().click()
        this.data.productName.forEach(function(element) {
            cy.selectProduct(element)
        })
        productPage.clickCheckoutButton().click()
        let sum = 0
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            cy.log($el.text())
            let numberText = $el.text().split(" ")
            numberText = numberText[1].trim()
            sum = Number(sum) + Number(numberText)
        }).then(function() {
            cy.log('The sum is ', sum)
        })
        cy.get('h3 strong').then(function(element) {
            let total = element.text()
            let totalInt = total.split(" ")
            totalInt = totalInt[1].trim()

            cy.log('new total is', totalInt[1])
            expect(sum).to.equal(Number(totalInt))
        })


        cy.contains('Checkout').click()
        cy.get('#country').type('India')
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').click({ force: true })
        cy.get('input[type="submit"]').click()
            // cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
        cy.get('.alert').should('include.text', 'Success! Thank you! Your order will be delivered') // can also use contain.text

    })
})