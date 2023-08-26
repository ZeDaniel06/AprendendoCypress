describe('Google test', () =>{

  beforeEach(()=>{
    cy.visit("https://www.google.com")
  });

 it('Testando pesquisa no Google',()=>{
  cy.get("#APjFqb").type("Noticiassss{backspace}{backspace}{backspace}",{delay:100})
  cy.get("#APjFqb").should('have.value','Noticias')
  cy.get("#APjFqb").type("{enter}")
  cy.url().should('include','Noticias')
  
})

it('Busca no Google por UEPB - estou com sorte', () => {
  cy.get("#APjFqb").type('UEPB');
  cy.get('input[name="btnI"]').eq(0).click();
  cy.origin('https://uepb.edu.br', () => { 
      cy.get('body').contains('UEPB');
  });
});

it('Busca no Google por UEPB - busca google', () => {
  cy.visit('https://www.google.com')
  cy.get('#APjFqb').type('UEPB');
  cy.get('input[name="btnK"]').eq(0).click();
  cy.get('body').contains('UEPB');
});

})