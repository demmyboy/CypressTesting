/// <reference types="cypress" />
import homePageActions from '../../pageobjects/pageactions/homePageActions'
import addCustomerActions from '../../pageobjects/pageactions/addCustomerActions'


describe('Add and verify a new customer', () => {

    const homePage = new homePageActions
    const addCustomer = new addCustomerActions

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

    it('it should add a customer', () => {
        homePage.loginAsCustomer()
        addCustomer.addCustomerdetails(data.firstName, data.lastName, data.postCode)
        addCustomer.validateAlertMessage(data.alertMsg)

    })

})