// gerenciar as rotas de usuário (rotas que o usuário pode acessar) dentro da API

const express = require('express');

const router = express.Router();

const productController = require('../controller/productController');

// Criando as rotas da nossa API

// 1º Rota para obter todos os clientes
router.get('/', productController.getAllProducts); // passar o caminho + é oq vc quer q ele faça

// 2º Rota para obter dados de um cliente por ID
router.get('/:id', productController.getProductById);

// 3º Rota para obter dados de um cliente pelo nome
router.get('/name/:name', productController.getProductByName);

// 4º Rota para criar um novo cliente
router.post('/', productController.createProduct);

// 5º Rota para atualizar dados do cliente
router.put('/:id', productController.updatedProduct);

// 6º Rota para deletar dados ou clientes
router.delete('/:id', productController.removedProduct);

module.exports = router;