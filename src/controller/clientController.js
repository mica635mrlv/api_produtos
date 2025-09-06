const clientModel = require('../model/clientModel');

const getAllClients = (req, res) => {
    const clients = clientModel.findAll();
    res.status(200).json(clients);
}

const getClientById = (req, res) => {
    const id = parseInt(req.params.id);

    const client = clientModel.findById(id);

    if (client) {
        res.status(200).json(client);
    } else {
        res.status(404).json({ mensagem: 'Erro: Cliente não encontrado no banco de dados!' });
    }
}

const getClientByName = (req, res) => {
    const name = req.params.name;

    const client = clientModel.findByName(name);

    if (client) {
        res.status(200).json(client);
    } else {
        res.status(404).json({ mensagem: 'Erro: Cliente não encontrado no banco de dados!' });
    }
}

const createClient = (req, res) => {
    const { name, email, telefone, endereco, dataCadastro, ativo } = req.body;

    if (!name || !email || !telefone || !endereco || !dataCadastro || ativo === undefined) {
        return res.status(400).json({ mensagem: 'Erro: Verifique se todos os campos foram preenchidos corretamente!' });
    } else {
        const newClient = clientModel.create({ name, email, telefone, endereco, dataCadastro, ativo });
        res.status(201).json(newClient);
    }
}

const updatedClient = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedData = req.body;

    const updatedClient = clientModel.update(id, updatedData);

    if (updatedClient) {
        res.status(200).json(updatedClient);
    } else {
        res.status(404).json({ mensagem: 'Erro: Cliente não encontrado no banco de dados!' });
    }
}

const removedClient = (req, res) => {
    const id = parseInt(req.params.id);

    const removedClient = clientModel.remove(id);

    if (removedClient) {
        res.status(200).json(removedClient);
    } else {
        res.status(404).json({ mensagem: 'Erro: Cliente não encontrado no banco de dados!' });
    }
}

module.exports = {
    getAllClients,
    getClientById,
    getClientByName,
    createClient,
    updatedClient,
    removedClient
}