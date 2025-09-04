// gerenciar as rotas de usuário (rotas que o usuário pode acessar) dentro da API

const express = require('express');

const router = express.Router();

const clientController = require('../controller/clientController');

// Criando as rotas da nossa API

// 1º Rota para obter todos os clientes
router.get('/', clientController.getAllClients); // passar o caminho + é oq vc quer q ele faça

// 2º Rota para obter dados de um cliente por ID
router.get('/:id', clientController.getClientById);

// 3º Rota para obter dados de um cliente pelo nome
router.get('/name/:name', clientController.getClientByName);

// 4º Rota para criar um novo cliente
router.post('/', clientController.createClient);

// 5º Rota para atualizar dados do cliente
router.put('/:id', clientController.updatedClient);

// 6º Rota para deletar dados ou clientes
router.delete('/:id', clientController.removedClient);

module.exports = router;