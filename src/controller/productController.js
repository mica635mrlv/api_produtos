const productModel = require('../model/productModel');

const getAllProducts = (req, res) => {
    const products = productModel.findAll();

    if (products) {
        res.status(200).json(products);
    } else {
        res.status(404).json({ mensagem: 'Erro: Nenhum produto encontrado no banco de dados!' });
    }
}

const getProductById = (req, res) => {
    const id = parseInt(req.params.id);

    const product = productModel.findById(id);

    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json({ mensagem: 'Erro: Produto não encontrado no banco de dados!' });
    }
}

const getProductByName = (req, res) => {
    const name = req.params.name;

    const product = productModel.findByName(name);
    res.status(200).json(product);

}

const createProduct = (req, res) => {
    const { name, descricao, preco, categoria, estoque, ativo } = req.body;

    if (!name || !descricao || !preco || !categoria || !estoque || ativo === undefined) {
        return res.status(400).json({ mensagem: 'Erro: Verifique se todos os campos foram preenchidos corretamente!' });
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
        res.status(404).json({ mensagem: 'Erro: Produto não encontrado no banco de dados!' });
    }
}

const removedProduct = (req, res) => {

    const id = parseInt(req.params.id);
    const removedProduct = productModel.remove(id);

    if (removedProduct) {
        res.status(200).json(removedProduct);
    } else {
        res.status(404).json({ mensagem: 'Erro: Produto não encontrado no banco de dados!' });
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