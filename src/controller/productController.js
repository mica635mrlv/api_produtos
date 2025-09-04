const productModel = require('../model/productModel');

// Método do controlador para listar todos os usuários
const getAllProducts = (req, res) => { // vai ter uma rota na API - antiga: (http://localhost:8000/); nova: (http://localhost:8000/users) rota p/ as funcionalidade dos usuários
    const products = productModel.findAll();
    res.status(200).json(products);
}

// Método do controlador para listar todos os usuários
const getProductById = (req, res) => {
    // Pegando o id que foi enviado na requisição
    const id = parseInt(req.params.id);
    // Chamado o método findById do userModel
    const product = productModel.findById(id);

    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json({ mensagem: 'Usuário não encontrado no banco de dados!' });
    }
}

// Método do controlador para listar todos os usuários
const getProductByName = (req, res) => {

    const name = req.params.name;

    // Chamado o método findById do userModel
    const product = productModel.findByName(name);

    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json({ mensagem: 'Usuário não encontrado no banco de dados!' });
    }
}

// Método do controlador para criar outro usuário
const createProduct = (req, res) => {

    // Pegando os dados que foram enviados pelo body ou corpo da req
    const { name, email, telefone, endereco, dataCadastro, ativo } = req.body; // Deestruturação Javascript

    // Validar se os dados estão vazios
    if (!name || !email || !telefone || !endereco || !dataCadastro || !ativo) {
        return res.status(400).json({ mensagem: 'Todos os dados são obrigatórios!' });
    } else {
        const newProduct = productModel.create({ name, email, telefone, endereco, dataCadastro, ativo });
        res.status(201).json(newProduct);
    }
}

const updatedProduct = (req, res) => {

    const id = parseInt(req.params.id);  // pegar id do cliente
    const updatedData = req.body;  // pegar dados do body

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