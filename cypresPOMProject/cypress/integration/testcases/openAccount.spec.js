/// <reference types="cypress" />
import homePageActions from '../../pageobjects/pageactions/homePageActions'
import openAccountsPageActions from '../../pageobjects/pageactions/openAccountsPageActions'


describe('Add and verify a new customer', () => {

    const homePage = new homePageActions
    const openAccount = new openAccountsPageActions

    // reading the test data from fixture file instead of hardcoding
    beforeEach(() => {
        cy.fixture('testdata').then((data) => {
            globalThis.data = data
        })
    })

    beforeEach(() => {
        homePage.navigateToUrl()
    })

    it('User validate the title', () => {
        homePage.validateTitle().should('eq', 'Protractor practice website - Banking App')

    })

    it('it should open new Account for Customers', () => {
        homePage.loginAsCustomer()
        openAccount.openAccount("Neville Longbottom", "Dollar")
        openAccount.validateAlertMessage("Account created successfully with account Number")
    })

})