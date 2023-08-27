Este repositório tem como objetivo registrar meus estudos na área de testes de software, que estou iniciando agora nesse semestre, a princípio utilizando a ferramenta do Cypress.io. E o próprio Readme contém algumas anotações das coisas que estou aprendendo.

Iniciando:
Para iniciar um novo projeto com o cypress é necessário o node.js em sua máquina. Então você naturalmente faz um `npm init` na pasta onde se deseja, depois pode digitar `npm install cypress --save-dev`.
Após a instalação, digita `npx cypress open`, e então abrirá uma interface, onde selecionamos o navegador desejado e se queremos E2E testing ou component testing, meu caso é o E2E por enquanto. E aí criamos nosso primeiro arquivo de testes, cujo código pode ser visto na pasta `cypress/e2e/` aqui do repositório.