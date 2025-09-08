# Projeto API-Produtos

Este projeto consiste em uma API REST para gerenciamento de produtos e clientes de uma loja virtual, desenvolvido no curso Técnico em Desenvolvimento de Sistemas do SENAI. O objetivo é simular o desenvolvimento de um back-end real, aplicando conceitos de arquitetura MVC (Model, Controller, Routes) e boas práticas de desenvolvimento de APIs.

A API permite:

* Listar, buscar, criar, atualizar e remover clientes e produtos.
* Validar dados enviados nas requisições.
* Responder com mensagens de erro quando registros não são encontrados.

## Tecnologias

* Node.js
* Express.js
* JavaScript
* JSON
* Postman

## Arquitetura do projeto

O projeto segue o padrão MVC (Model-View-Controller):

**Model** (`/src/model`):

  * Responsável pelo gerenciamento dos dados (`clientModel.js`, `productModel.js`).
  * Contém funções de CRUD (create, read, update, delete).

**Controller** (`/src/controller`):

  * Processa as requisições da API e chama as funções do model.
  * Valida dados e retorna respostas HTTP adequadas (`clientController.js`, `productController.js`).

**Routes** (`/src/routes`):

  * Define os endpoints da API e conecta cada rota ao seu respectivo controller (`clientRoutes.js`, `productRoutes.js`).

O fluxo de uma requisição segue: request → route → controller → model → response.

## Funcionalidades implementadas

### Clientes

* `GET /api/clients` → Lista todos os clientes.
* `GET /api/clients/:id` → Busca cliente por ID.
* `GET /api/clients/name/:name` → Busca cliente por nome.
* `POST /api/clients` → Cria um novo cliente.
* `PUT /api/clients/:id` → Atualiza cliente existente.
* `DELETE /api/clients/:id` → Remove cliente.

### Produtos

* `GET /api/products` → Lista todos os produtos.
* `GET /api/products/:id` → Busca produto por ID.
* `GET /api/clients/name/:name` → Busca produto por nome.
* `POST /api/products` → Cria um novo produto.
* `PUT /api/products/:id` → Atualiza produto existente.
* `DELETE /api/products/:id` → Remove produto.

## Como rodar o projeto

1. Clonar o repositório:

        git clone https://github.com/mica635mrlv/api_produtos

2. Instalar dependências:

        npm install

3. Iniciar o servidor:

        node server.js

4. Acessar a API via Postman:

        http://localhost:8000/api/clients
        http://localhost:8000/api/products

## Ciclo de vida de um produto digital

1. Planejamento: definir funcionalidades da API (CRUD de clientes e produtos).
2. Desenvolvimento: implementar model, controller e routes.
3. Testes: testar cada endpoint usando Postman, garantindo validação e tratamento de erros.
4. Documentação: criar README com explicação da arquitetura, endpoints e prints do Postman.
5. Entrega: projeto finalizado e pronto para deploy ou versionamento no GitHub.

## Conhecimentos colocados em prática

* Arquitetura MVC.
* Criação de APIs REST com Node.js e Express.
* Manipulação de arrays e objetos em JavaScript.
* Validação de dados e tratamento de erros HTTP.
* Testes de endpoints com Postman.

## Resultado

https://github.com/user-attachments/assets/eb8682c3-d759-44b5-a012-fb76d51979ca

## Autor

[Milla Regina](https://www.linkedin.com/in/milla-regina-468020206/)
