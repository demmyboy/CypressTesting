/// <reference types="cypress" />

const jsonPageForElements = require("../../locators.json")
export default class addCustomerPageElements {

    addCustomerBtn() {
        return cy.get(jsonPageForElements.addCustomerPage.addCustomerBtn)
    }
    firstNameField() {
        return cy.get(jsonPageForElements.addCustomerPage.firstName)
    }
    lastNameField() {
        return cy.get(jsonPageForElements.addCustomerPage.lastName)
    }

    postCodeField() {
        return cy.get(jsonPageForElements.addCustomerPage.postCode)

    }
    addCustomerSubmitBtn() {
        return cy.get(jsonPageForElements.addCustomerPage.addCustomerSubmit)
    }



}