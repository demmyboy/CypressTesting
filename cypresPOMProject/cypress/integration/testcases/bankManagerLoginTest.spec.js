/// <reference types="cypress" />
import homePageActions from '../../pageobjects/pageactions/homePageActions'



describe('login as a Bank manager or accountant', () => {

    const homePage = new homePageActions

    beforeEach(() => {
        homePage.navigateToUrl()
    })

    it('User validate the title', () => {
        homePage.validateTitle().should('eq', 'Protractor practice website - Banking App')
    })
    it('User should login as bank manager', () => {

        homePage.loginAsManager()
    })

})