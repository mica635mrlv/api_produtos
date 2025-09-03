const express = require('express')

// const userRoutes = require('./src/routes/userRoutes');

const app = express();

app.use(express.json());

const porta = 8000;

app.get('/', (req, res) => {
    res.send("API de Usuários está funcionando")
})

// app.use('/api/users', userRoutes);

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
})