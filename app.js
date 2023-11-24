// app.js

// Importando as bibliotecas necessárias
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const machineRoutes = require('./routes/machineRoutes');
const monitoringRoutes = require('./routes/monitoringRoutes');
const authMiddleware = require('./middleware/authMiddleware');

// Inicializando o aplicativo Express
const app = express();

// Middleware para analisar o corpo das requisições
app.use(bodyParser.json());

// Rota para funcionalidades de autenticação
app.use('/auth', authRoutes);

// Middleware para controlar o acesso às rotas privadas baseado na autenticação
app.use(authMiddleware);

// Rota para gerenciamento de máquinas
app.use('/machines', machineRoutes);

// Rota para gerenciamento de pontos de monitoramento e sensores
app.use('/monitoring', monitoringRoutes);

// Iniciar o servidor na porta 3000 (ou na porta definida pelo ambiente)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
