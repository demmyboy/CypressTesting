/// <reference types="cypress" />

const jsonPageForElements = require("../../locators.json")
export default class homePageElements {
    customerLoginBtn() {
        return cy.get(jsonPageForElements.homePage.customerLoginBtn)
    }

    bankMangerLoginBtn() {
        return cy.get(jsonPageForElements.homePage.bankMangerLoginBtn)
    }

}