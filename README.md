# Project Trybesmith

Este repositório contém o projeto Trybesmith desenvolvido por [Raquel G. C Würzler](https://www.linkedin.com/in/raquel-c-wurzler/) enquanto estudava na [Trybe](https://www.betrybe.com/) no módulo de BackEnd :rocket:

_"A Trybe é uma escola do futuro para qualquer pessoa que queira melhorar de vida e construir uma carreira de sucesso em tecnologia, onde a pessoa paga quando conseguir um bom trabalho."_

#### Projeto de conclusão da seção 8, no módulo de Back-end

### Principal objetivo:
* Criar uma API e um banco de dados de uma loja de itens medievais. Essa aplicação deve ser em Node.js e usando Typescript.

### Detalhes desse projeto:
* Todos os srquivos estão em Typescript;
* Utilização de um servidor Noje.js;
* Utilização do framework Express para criar uma rota de um endpoint de API, acessível pelo navegador;
* Para melhorar a organização utilizei o express.Router() pra separar os endpoints em outros arquivos;
* Os endpoints foram feitos em arquivos separados pelas rotas: "/products", "/users", "/orders" e "/login" e estão na pasta routes;
* Os middlewares foram salvos em uma pasta separada;
* Pastas separadas para cada camada do MSC (Model, Service, Controller);
* Utilização de JWT (JSON Web Token) para gerar tokens, autenticar e autorizar o acesso a rotas do Express;

##### Arquivos disponibilizados pela Trybe:
* .eslintignore;
* .eslintrc.json;
* .gitignore;
* Trybesmith.sql;
* docker-compose.yml;
* package-lock.json;
* package.json;
* tsconfig.json;

## Stack utilizada

**Back-end:** Node, Express, Typescript, MySql

## Instalação e uso

```bash
# Abra um terminal e copie este repositório com o comando
git clone git@github.com:Raquel-Wurzler/project_trybesmith.git

# Entre na pasta doprojeto 
cd project_trybesmith

# Instale as dependências
yarn install
ou 
npm install

# Rode o servidor
npm run dev
ou
npm start

# Rode a aplicação
usando extensão Live Server no vs-code na porta 3000

```
