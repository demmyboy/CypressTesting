/// <reference types="cypress" />

import openAccountPageElements from "../pageelements/openAccountPageElements"

export default class openAccountsPageActions {

    constructor() {

        // globalThis could also be used.. then you dont need to call this. anymore 
        globalThis.openAccElement = new openAccountPageElements

    }

    openAccount(customer, currency) {
        openAccElement.openAccountClick().click()
        openAccElement.customerDropDownBtn().select(customer)
        openAccElement.currencyDropDown().select(currency)
        openAccElement.processBtn().click()
    }
    validateAlertMessage(alertMsg) {
        cy.on('window:alert', (alertText) => {
            expect(alertText).contains(alertMsg)
        })
    }


}