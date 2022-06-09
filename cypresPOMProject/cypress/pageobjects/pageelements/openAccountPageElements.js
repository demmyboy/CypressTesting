/// <reference types="cypress" />

const jsonPageForElements = require("../../locators.json")
export default class openAccountpageElement {
    openAccountClick() {
        return cy.get(jsonPageForElements.openAccountsPage.openAccountsBtn)
    }
    customerDropDownBtn() {
        return cy.get(jsonPageForElements.openAccountsPage.customerDropDown)
    }

    currencyDropDown() {
        return cy.get(jsonPageForElements.openAccountsPage.currencyDropDown)
    }
    processBtn() {
        return cy.get(jsonPageForElements.openAccountsPage.processClickBtn)
    }







}