/*describe('My first test', () =>{
  it('Finds the content "type"',()=>{
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')
    cy.get('.action-email').type('fake@email.com')
    cy.get('.action-email').should('have.value', 'fake@email.com')
  })
})*/
describe('Google test', () =>{
  it('Pesquisar',()=>{
    cy.visit("https://www.google.com")
    cy.url().should('include','google.com')

    cy.get("#APjFqb").type("Noticiassss{backspace}{backspace}{backspace}",{delay:100})
    cy.get("#APjFqb").should('have.value','Noticias')
    cy.get("#APjFqb").type("{enter}")
    cy.url().should('include','Noticias')
    
  })
})