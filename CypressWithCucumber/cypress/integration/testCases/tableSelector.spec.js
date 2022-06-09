/// <reference types="cypress" />


beforeEach(() => {
    cy.visit('http://testautomationpractice.blogspot.com/')
    cy.url().should('include', 'blogspot.com')
})
describe("Verify Info on the table", () => {
    it("Select a value from the table and Verify it ", () => {
        cy.visit('http://testautomationpractice.blogspot.com/')
    })
    it("Should handle the drop down menu", () => {
        cy.get('#speed').select('Fast')
        cy.get('#files').select('PDF file').should('have.value', '2')
    })
    it("Should handle checkboxes", () => {
        cy.get('#frame-one1434677811').click({ force: true })
    })


})