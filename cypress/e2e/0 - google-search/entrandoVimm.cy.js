describe("Testes de Pesquisa por um site",() =>{

    beforeEach(()=>{
        cy.visit('https://www.google.com');
        cy.get('#APjFqb').as('barraDeBusca');
    })
    
    it("Pesquisando o site",()=>{
        cy.get('@barraDeBusca').type("Vimm's Lair{enter}");
        cy.contains('https://vimm.net').click();
    });

    it('Pesquisando o site estou com sorte',()=>{
        cy.get('@barraDeBusca').type("Vimm's Lair");
        cy.get('input[name="btnI"]').eq(0).click();
        cy.origin("https://vimm.net",()=>{
            cy.get('body').contains("Vimm's Lair");
        })
    })
});