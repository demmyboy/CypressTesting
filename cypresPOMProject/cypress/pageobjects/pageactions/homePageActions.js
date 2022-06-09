/// <reference types="cypress" />

import homePageElements from "../pageelements/homePageElements"
export default class homePageActions {

    constructor() {

        // globalThis could also be used.. then you dont need to call this. anymore 
        this.element = new homePageElements
    }
    navigateToUrl() {
        cy.visit('/')
    }
    validateTitle() {
        return cy.title()

    }
    loginAsManager() {
        this.element.bankMangerLoginBtn().click()
    }
    loginAsCustomer() {
        this.element.customerLoginBtn().click()
    }

}