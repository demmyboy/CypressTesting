/// <reference types="cypress" />

let userInfo
before(()=>{
    cy.fixture('example').then((data)=>{
        userInfo = data
    })
})

describe('Verify the links on a page ', () => {
    it('Verify the page title', () => {
        cy.visit('https://www.wikipedia.org/')
        cy.get('a').contains('Commons').click()
        cy.get('.mainpage-welcome-sitename').should('contain.text', 'Commons')
        cy.get('a').its(length).then((elementLength)=>{
            cy.log(elementLength)
        })
        // cy.fixture('example').then((data)=>{
        //     cy.log(data.name)
        // })
        cy.log(userInfo.name)
        cy.log(userInfo.email)


    })

})