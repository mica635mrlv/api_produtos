const express = require('express')

const clientRoutes = require('./src/routes/clientRoutes');
const productRoutes = require('./src/routes/productRoutes');

const app = express();

app.use(express.json());

const porta = 8000;

app.get('/', (req, res) => {
    res.send("API de Usuários está funcionando")
})

app.use('/api/clients', clientRoutes);
app.use('/api/products', productRoutes);

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
})