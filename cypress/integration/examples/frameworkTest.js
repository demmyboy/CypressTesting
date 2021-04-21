/// <reference types="Cypress" />
describe('Framework Test', function() {
    beforeEach(() => {
        // runs before each test in the block
        cy.fixture('example').then(function(data) {
            this.data = data
        })
    })
    it('should fill the form and assert them', function() {
        cy.visit('https://rahulshettyacademy.com/angularpractice')
        cy.get(".form-control[name='name']").type(this.data.name)
        cy.get('select').select(this.data.gender)
        cy.get('input[name="name"]:nth-child(1)').should('have.value', this.data.name)
        cy.get(".form-control[name='name']").should('have.attr', 'minlength', 2)
        cy.get("#inlineRadio3").should('be.disabled')
    })

    it('should click on the shop menu and select the items ', function() {
        cy.contains('Shop').click()
        this.data.productName.forEach(function(element) {
                cy.selectProduct(element)
            })
            //used if you create a function in command.js and call it here 
            //cy.selectProduct('Nokia Edge')            
            //cy.selectProduct('Blackberry')

    })
})