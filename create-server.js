const http = require('http');

// Criando o servidor
const server = http.createServer(function(req, res) {
  // Configurando o cabeçalho de resposta
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Enviando a resposta
  res.end('Olá, Mundo!\n');
});

// Definindo a porta em que o servidor irá ouvir
const port = 3000;

// Iniciando o servidor e ouvindo na porta especificada
server.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}/`);
});