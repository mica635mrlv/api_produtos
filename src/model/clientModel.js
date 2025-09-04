let clients = [
    {
        id: 1,
        name: 'Regina',
        email: 'reginalp@gmail.com.br',
        telefone: '11 96181-3456',
        endereco: 'Via Capricornio, 4, França, Jandira, SP, 02276-130',
        dataCadastro: '2025-08-27 08:54',
        ativo: 'true'
    },
    {
        id: 2,
        name: 'Marcelino',
        email: 'marcelinolv@gmail.com.br',
        telefone: '11 96383-8906',
        endereco: 'Rua Leão, 133, Lodres, Jandira, SP, 06343-160',
        dataCadastro: '2025-08-28 10:01',
        ativo: 'true'
    },
    {
        id: 3,
        name: 'Manuela',
        email: 'manuelaft@gmail.com.br',
        telefone: '11 99031-2476',
        endereco: 'Av. Bandeirantes, 78, California, Jandira, SP, 06345-120',
        dataCadastro: '2025-09-02 19:15',
        ativo: 'false'
    }
]

const findAll = () => {
    return clients;
}

const findById = (id) => {
    return clients.find(client => client.id === id);
}

const findByName = (name) => {
    return clients.find(client => client.name.toLowerCase() === name.toLowerCase());
}

const create = (newClient) => {
    const newId = clients.length > 0 ? clients[clients.length - 1].id + 1 : 1;

    const clientWithId = { id: newId, ...newClient }
    clients.push(clientWithId);
    return clientWithId;
}

const update = (id, updatedData) => {
    const index = clients.findIndex(client => client.id === id);

    clients[index] = { ...clients[index], ...updatedData };
    return clients[index];
}

const remove = (id) => {
    const index = clients.findIndex(client => client.id === id);

    const removeClient = clients.splice(index, 1);
    return removeClient[0];
}

module.exports = {
    findAll,
    findById,
    findByName,
    create,
    update,
    remove
}

