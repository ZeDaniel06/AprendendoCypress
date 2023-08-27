describe("Testes de navegação no Youtube",()=>{
    it('Abrindo um vídeo no Youtube e testando se é um shorts',()=>{
        cy.visit('https://www.youtube.com');
        cy.get('#search-input > #search').type('Zelda sax{enter}');
        cy.contains('WHO PLAYS THE SAX?').click();
        cy.url().should('include','shorts');
    })
})