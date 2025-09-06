const express = require('express');

const router = express.Router();

const productController = require('../controller/productController');

// Rotas da API

// 1º Rota para obter todos os produtos
router.get('/', productController.getAllProducts);

// 2º Rota para obter dados de um produto pelo ID
router.get('/:id', productController.getProductById);

// 3º Rota para obter dados de um produto pelo nome
router.get('/name/:name', productController.getProductByName);

// 4º Rota para criar um novo produto
router.post('/', productController.createProduct);

// 5º Rota para atualizar dados do produto pelo ID
router.put('/:id', productController.updatedProduct);

// 6º Rota para deletar produtos pelo ID
router.delete('/:id', productController.removedProduct);

module.exports = router;