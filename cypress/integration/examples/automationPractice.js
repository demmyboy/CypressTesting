/// <reference types="Cypress" />
describe("Automation Practises", () => {
    it('should click the checkbox and validate the values', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    })

    it('should select multiple checkboxes', () => {
        cy.get("input[type='checkbox']").check(['option2', 'option3'])
        cy.get("input[type='checkbox']").uncheck(['option2', 'option3'])
    })

    it('should select from the static dropdown', () => {
        cy.get('select').select('option2').should('have.value', 'option2')
    })
    it('should select from the dynamic dropdown', () => {
        cy.get('#autocomplete').type('Nig')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if ($el.text() === "Nigeria") {
                $el.click()
            }
        })
        cy.get('#autocomplete').should('have.value', 'Nigeria')

    })
    it('should confirm what happens when the hidde or show buttonn is clicked', () => {
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
    })

    it('should select radio´buttons', () => {
        cy.get("[value='radio3']").check().should('be.checked')
    })

    it('should click pop ups alert or confirm ', () => {
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        /*
        To cancel an event 
        it('Handling JS Confirm - Click Cancel', () => {
            cy.visit('http://the-internet.herokuapp.com/javascript_alerts') 
            cy.contains('Click for JS Confirm').click() 
            cy.on('window:confirm', () => false); 
            cy.get('#result').contains('You clicked: Cancel')

            ****************************************************
            cy.('$el').click();  //assuming button shows Confirmation message.
            cy.on('window:confirm',function(){
            return false;       //User can return 'false'
        }) */
    })
    it('Confirm that a new tab is opened when u click', () => {
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'rahulshettyacademy')
        cy.get('.text-left h2 span').contains('An Academy')
        cy.go('back')
    })

    it('how to handle tables', () => {
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
                const text = $el.text()
                if (text.includes('Python')) {
                    //cy.get('tr td:nth-child(2)').eq(index).next().contains('26')
                    cy.get('tr td:nth-child(2)').eq(index).next().then(function(price) {
                        const priceText = price.text()
                        expect(priceText).to.equal('25')
                    })
                }
            })
            // the code below also works for the above example 
            /*    cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/#/")
    cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
        const text = $el.text();
        if (text.includes('Python')) {
            const sibling = $el.next().text();
            expect(sibling).to.be.equal('25')
        }
    })
})*/

    })

    it('should supprot mouse hover', () => {
        cy.get('div.mouse-hover-content').invoke('show')
            // cy.pause()
        cy.contains('Top').click()
        cy.url().should('include', 'top')

    })
    it('should grabe the href attribute', () => {
        cy.get('#opentab').then(function(el) {
            const url = el.prop('href')
            cy.visit(url)
        })
    })



})