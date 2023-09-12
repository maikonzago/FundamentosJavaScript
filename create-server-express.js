//npm install express --save

// Importar o módulo Express
const express = require('express');

// Criar uma instância do aplicativo Express
const app = express();
const port = 3000; // Porta em que o servidor vai escutar

// Definir uma rota para a página inicial
app.get('/', function(req, res) {
  res.send('Bem-vindo ao meu servidor Express!');
});

// Iniciar o servidor
app.listen(port, function() {
  console.log(`Servidor rodando em http://localhost:${port}`);
});