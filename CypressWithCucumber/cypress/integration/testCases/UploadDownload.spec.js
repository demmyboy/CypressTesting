/// <reference types="cypress" />
beforeEach(() => {
    cy.visit('https://www.w3schools.com/howto/howto_html_file_upload_button.asp')
})
describe('Uploading and Downloading', () => {
    it('Verify that a file can be uploaded ', () => {

        // mk sure the upload file is in the fixtures file 
        const yourFixturePath = 'sheaMoisture.jpg';
        cy.get('[type="file"]').attachFile(yourFixturePath);
    })
    it('Verify that file can be downloaded', () => {
        cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg', 'mydownloads', 'examples.jpg')
        cy.readFile('./mydownloads/example.jpg').should('exist')

    })
})