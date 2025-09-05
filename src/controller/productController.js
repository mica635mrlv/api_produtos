const productModel = require('../model/productModel');

const getAllProducts = (req, res) => { 
    const products = productModel.findAll();
    res.status(200).json(products);
}

const getProductById = (req, res) => {
    const id = parseInt(req.params.id);

    const product = productModel.findById(id);

    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json({ mensagem: 'Usuário não encontrado no banco de dados!' });
    }
}

const getProductByName = (req, res) => {
    const name = req.params.name;

    const product = productModel.findByName(name);

    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json({ mensagem: 'Usuário não encontrado no banco de dados!' });
    }
}

const createProduct = (req, res) => {
    const { name, descricao, preco, categoria, estoque, ativo } = req.body;

    if (!name || !descricao || !preco || !categoria || !estoque || !ativo) {
        return res.status(400).json({ mensagem: 'Todos os dados são obrigatórios!' });
    } else {
        const newProduct = productModel.create({ name, descricao, preco, categoria, estoque, ativo });
        res.status(201).json(newProduct);
    }
}

const updatedProduct = (req, res) => {

    const id = parseInt(req.params.id);
    const updatedData = req.body;

    const updatedProduct = productModel.update(id, updatedData);

    if (updatedProduct) {
        res.status(200).json(updatedProduct);
    } else {
        res.status(404).json({ mensagem: 'Produto não encontrado no banco de dados!' });
    }
}

const removedProduct = (req, res) => {

    const id = parseInt(req.params.id);
    const removedProduct = productModel.remove(id);

    if (removedProduct) {
        res.status(200).json(removedProduct);
    } else {
        res.status(404).json({ mensagem: 'Produto não encontrado no banco de dados!' });
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    getProductByName,
    createProduct,
    updatedProduct,
    removedProduct
}