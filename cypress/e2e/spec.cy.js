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
    cy.get("#APjFqb").type("Noticias",{delay:100})
    
  })
})