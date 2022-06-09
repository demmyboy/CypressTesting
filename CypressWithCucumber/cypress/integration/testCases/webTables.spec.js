/// <reference types="cypress" />

describe('Verify web tables', () => {
    it('Verify the table information', () => {

        // $$('table.dataTable > tbody > tr') to get the number of tr from the console 
        cy.visit('https://money.rediff.com/indices/bse/sensex?src=moneyhome_bseIndices')
            // $$('table.dataTable > tbody > tr') to get the number of tr from the console

        // total rows 
        cy.get('table.dataTable > tbody > tr').should('have.length', '30')

        // total columns 
        cy.get('table.dataTable >tbody>tr:first-child td').should('have.length', 6)

        // verify the first row data
        cy.get('table.dataTable > tbody > tr').eq(0).within(() => {
            cy.get('td').then((ele) => {
                cy.log(ele.text().toLowerCase())
            })
            cy.get('td').eq(0).should('contain.text', 'Asian')
        })

        // validate data in the table 
        cy.get('table.dataTable').contains('IndusInd Bank Ltd.').parent().parent().within(() => {
                cy.get('td').eq(2).then((ele) => {
                    cy.log("Current Price is:" + ele.text())
                })
            })
            // get the entire table data

        cy.get('table.dataTable > tbody > tr').each((rows) => {
            cy.wrap(rows).within(() => {
                cy.get('td').each((data) => {
                    cy.log(data.text())
                })
            })
        })

    })


})