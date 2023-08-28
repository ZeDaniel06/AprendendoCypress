Este repositório tem como objetivo registrar meus estudos na área de testes de software, que estou iniciando agora nesse semestre, a princípio utilizando a ferramenta do Cypress.io. E o próprio Readme contém algumas anotações das coisas que estou aprendendo.

Iniciando:
Para iniciar um novo projeto com o cypress é necessário o node.js em sua máquina. Então você naturalmente faz um `npm init` na pasta onde se deseja, depois pode digitar `npm install cypress --save-dev`.
Após a instalação, digita `npx cypress open`, e então abrirá uma interface, onde selecionamos o navegador desejado e se queremos E2E testing ou component testing, meu caso é o E2E por enquanto. E aí criamos nosso primeiro arquivo de testes, cujo código pode ser visto na pasta `cypress/e2e/` aqui do repositório.

Conceitos:

- Código síncrono + assíncrono:
    É possível misturar código síncrono (Cypress.$) com o assíncrono do Cypress. A diferença é que o assíncrono aguarda antes de executar, já o síncrono executa imediatamente. Por exemplo, se eu mando um `cy.visit('url')` e embaixo um `cy.get('seletor')`, o código  será funcional, pois o cy vai aguardar a execução anterior antes de selecionar. Mas ao invés de um `cy.get()` pode-se utilizar `let var = Cypress.$('seletor')` , este será executado imediatamente, e portanto podendo dar falha, já que vai tentar selecionar um elemento antes do cy.visit() ser concluído. Por isso utilizamos o then(), colocando ele após o cy.visit() forçamos o Cypress.$ aguardar a finalização dele para poder selecionar o elemento.