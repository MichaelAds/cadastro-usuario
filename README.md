# Cadastro de Usuário
> Sistema em vanilla js para criar um novo usuário, usando LocalStorage para base de dados

### Projeto feito em:
 <ul>
  <li>HTML</li>
  <li>SCSS</li>
  <li>JS</li>
  <li>Cypress</li>
  <li>Jest</li>
</ul>

## Installing / Getting started

O projeto tem algumas dependências para a realização de test, então é necessário rodar o comando a baixo:
```shell
npm install
```
Próximo passo é a instalação do SASS, que é possível encontrar <a href="https://sass-lang.com/install">aqui</a>

> Comando para manter o SASS assistindo o progresso do desenvolvimento
```shell
sass --watch scss/styles.scss css/styles.css
```
> Será necessario executar o projeto atráves de um servidor local, pois o google restringe requisição local.
Recomendo o uso do editor de texto <a href="https://code.visualstudio.com/">Visual Studio Code</a>, rodar um servidor local através de suas extensões.
Extensão  'Live Server' permite rodar um servidor local em sua maquina.
<img width="1674" alt="Screen Shot 2021-03-07 at 23 27 02" src="https://user-images.githubusercontent.com/30833118/110266476-a08aaa80-7f9c-11eb-9f28-9124f4642870.png">

Após seguir os passos anteriores é so clicar em 'Go Live' no canto inferior direito do Visual Studio Code (o botão vai aparecer apenas se a extensão ja foi instalada).

## Test

O test E2E foi feito em <a href="https://www.cypress.io/">Cypress</a>, estando dentro da pasta do projeto rode o comando abaixo:
```shell
node_modules/.bin/cypress open
```
> Basta clicar no arquivo que o teste vai ser iniciado.
<img width="798" alt="Screen Shot 2021-03-07 at 23 35 46" src="https://user-images.githubusercontent.com/30833118/110267192-0c214780-7f9e-11eb-8a60-854e99abb8da.png">

O test unitário foi feito em Jest, abaixo está o comando para executar o test:
```shell
npm test
```
## Database

Para armazenamento de dados utilizei o LocalStorage do próprio browser.

###### by Michael 
