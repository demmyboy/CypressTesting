/// <reference types="cypress" />

import addCustomerPageElements from "../pageelements/addCustomerPageElements"
export default class addCustomerActions {

    constructor() {

        // globalThis could also be used.. then you dont need to call this. anymore 
        globalThis.element = new addCustomerPageElements
    }

    addCustomerdetails(firstName, lastname, postCode) {
        element.addCustomerBtn().click()
        element.firstNameField().type(firstName)
        element.lastNameField().type(lastname)
        element.postCodeField().type(postCode)
        element.addCustomerSubmitBtn().click()
    }
    validateAlertMessage(alertMsg) {
        cy.on('window:alert', (alertText) => {
            expect(alertText).contains(alertMsg)
        })
    }

}