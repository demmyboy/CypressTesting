class ProductPage {

    clickCheckoutButton() {
        return cy.contains('Checkout')
    }
}

export default ProductPage;