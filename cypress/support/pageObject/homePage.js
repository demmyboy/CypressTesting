class HomePage {
    getEditBox() {
        return cy.get(".form-control[name='name']")
    }
    getTwoWayDataBinding() {
        return cy.get('input[name="name"]:nth-child(1)')
    }
    getGender() {
        return cy.get('select')
    }
    getEntrepeneurButton() {
        return cy.get("#inlineRadio3")
    }
    clickShopButton() {
        return cy.contains('Shop')
    }
}

export default HomePage;