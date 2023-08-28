describe('Codigo assíncrono + síncrono',()=>{

    //Este teste deve falhar pois o código Cypress.$ tenta
    //selecionar um elemento antes de entrar no youtube
    it('Código síncrono sem bloco then()',()=>{
        cy.visit('https://www.youtube.com');
        let el = Cypress.$('input[name="search_query"]');
        cy.get(el).type('Dribles Ronaldo');
        cy.get(el).should('have.value','Dribles Ronaldo');
    })
    
    //Este teste deve ser bem sucedido, já que o codigo sincrono veio
    //no bloco Then, e portanto só executou após o visit entrar no youtube
    it('Código síncrono com bloco then()',()=>{
        cy.visit('https://www.youtube.com')
        .then(()=>{
            let el = Cypress.$('input[name="search_query"]');
            cy.get(el).type('dribles Ronaldinho');
           cy.get('input[name="search_query"]').should('have.value','dribles Ronaldinho');
        });

    })
})