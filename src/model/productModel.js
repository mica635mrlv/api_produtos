let products = [
    {
        id: 1,
        name: 'Notebook Dell Inspiron 15 3000',
        descricao: 'Notebook com processador Intel Core i5, 8GB de RAM e 256GB de SSD',
        preco: 3999.99,
        categoria: 'Informática',
        estoque: 100,
        ativo: 'true'
    },
    {
        id: 2,
        name: 'Monitor Samsung LED 23.8 polegadas',
        descricao: 'Monitor LED com resolução Full HD e tempo de resposta de 5ms',
        preco: 799.99,
        categoria: 'Informática',
        estoque: 50,
        ativo: 'true'
    },
    {
        id: 3,
        name: 'Caixa de Som JBL Flip 5',
        descricao: 'Caixa de som portátil com Bluetooth, resistente à água e bateria com duração de até 12 horas',
        preco: 499.99,
        categoria: 'Eletrônicos',
        estoque: 5,
        ativo: 'false'
    }
]

const findAll = () => {
    return products;
}

const findById = (id) => {
    return products.find(product => product.id === id);
}

const findByName = (name) => {
    return products.find(product => product.name.toLowerCase() === name.toLowerCase());
}

const create = (newProduct) => {
    const newId = products.length > 0 ? products[products.length - 1].id + 1 : 1;

    const productWithId = { id: newId, ...newProduct }
    products.push(productWithId);
    return productWithId;
}

const update = (id, updatedData) => {
    const index = products.findIndex(product => product.id === id);

    products[index] = { ...products[index], ...updatedData };
    return products[index];
}

const remove = (id) => {
    const index = products.findIndex(product => product.id === id);

    const removeProduct = products.splice(index, 1);
    return removeProduct[0];
}

module.exports = {
    findAll,
    findById,
    findByName,
    create,
    update,
    remove
}