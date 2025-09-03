const clientModel = require('../model/clientModel');

// Método do controlador para listar todos os usuários
const getAllClients = (req, res) => { // vai ter uma rota na API - antiga: (http://localhost:8000/); nova: (http://localhost:8000/users) rota p/ as funcionalidade dos usuários
    const clients = clientModel.findAll();
    res.status(200).json(clients);
}

// Método do controlador para listar todos os usuários
const getClientById = (req, res) => {
    // Pegando o id que foi enviado na requisição
    const id = parseInt(req.params.id);
    // Chamado o método findById do userModel
    const client = clientModel.findById(id);

    if (client) {
        res.status(200).json(client);
    } else {
        res.status(404).json({ mensagem: 'Usuário não encontrado no banco de dados!' });
    }
}

// Método do controlador para listar todos os usuários
const getClientByName = (req, res) => {

    const name = req.params.name;

    // Chamado o método findById do userModel
    const client = clientModel.findByName(name);

    if (client) {
        res.status(200).json(client);
    } else {
        res.status(404).json({ mensagem: 'Usuário não encontrado no banco de dados!' });
    }
}

// Método do controlador para criar outro usuário
const createClient = (req, res) => {

// Pegando os dados que foram enviados pelo body ou corpo da req
const { name, email, telefone, endereco, dataCadastro, ativo} = req.body; // Deestruturação Javascript

// Validar se os dados estão vazios
if (!name || !email || !telefone || !endereco || !dataCadastro || !ativo) {
         return res.status(400).json({ mensagem: 'Todos os dados são obrigatórios!' });
     } else {
         const newUser = userModel.create({name, email, telefone, endereco, dataCadastro, ativo});
         res.status(201).json(newClient);
     }
}

module.exports = {
    getAllClients,
    getClientById,
    getClientByName,
    createClient
}