/// <reference types="Cypress" />
import HomePage from '../examples/pageObject/homePage'
import ProductPage from '../examples/pageObject/productPage'

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
        cy.visit('https://rahulshettyacademy.com/angularpractice')
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
        cy.contains('Checkout').click()
        cy.get('#country').type('India')
        cy.get('.suggestions > ul > li > a').click()


    })
})