/*
TypeError: Cannot read property 'X' of undefined
Descrição: Este erro ocorre quando você tenta acessar uma propriedade de um objeto que é undefined.
Exemplo:
*/
let obj = {};
console.log(obj.propertyX); // Isso resultará em um TypeError.
//Solução: Certifique-se de que o objeto tenha a propriedade que você está tentando acessar ou verifique se o objeto não é undefined antes de acessar a propriedade.

/*
//ReferenceError: X is not defined
Descrição: Este erro ocorre quando você tenta usar uma variável ou função que não foi definida.
Exemplo:
*/
console.log(foo); // Isso resultará em um ReferenceError se 'foo' não estiver definido.
//Solução: Certifique-se de que a variável ou função esteja definida no escopo atual ou importe-a de um módulo, se necessário.

/*
SyntaxError: Unexpected token X
Descrição: Este erro ocorre quando o Node.js encontra um caractere inesperado no código fonte.
Exemplo:
*/
let x = 10;
console.log(x % ); // Isso resultará em um SyntaxError devido ao operador de módulo sem o segundo operando.
//Solução: Verifique seu código em busca de erros de sintaxe e certifique-se de que todos os operadores e tokens estejam corretos.

/*
Error: Cannot find module 'X'
Descrição: Este erro ocorre quando o Node.js não consegue encontrar o módulo especificado no sistema de arquivos.
Exemplo:
*/
const myModule = require('nonexistent-module');
//Solução: Verifique se o nome do módulo está correto e se ele foi instalado no projeto com npm ou yarn.

/*
//UnhandledPromiseRejectionWarning
Descrição: Este aviso ocorre quando uma promessa é rejeitada, mas não há um tratamento adequado para a rejeição.
Exemplo:
*/
async function fetchData() {
  throw new Error('Failed to fetch data');
}

fetchData(); // Isso resultará em um UnhandledPromiseRejectionWarning.
//Solução: Certifique-se de usar try/catch ou .catch() para lidar com as rejeições de promessas ou adicionar um tratamento global de erros de promessa.

/*
//RangeError: Maximum call stack size exceeded
Descrição: Este erro ocorre quando uma função chama a si mesma recursivamente muitas vezes, excedendo o limite de tamanho da pilha de chamadas.
Exemplo:
*/
function recursiveFunction() {
  recursiveFunction(); // Isso resultará em um RangeError.
}
//Solução: Certifique-se de que sua função recursiva tenha uma condição de parada adequada ou considere usar uma abordagem iterativa.

/*
//Error: listen EADDRINUSE
Descrição: Este erro ocorre quando você tenta iniciar um servidor na mesma porta em que outro servidor já está em execução.
Exemplo:
*/
const http = require('http');
const server = http.createServer();
server.listen(3000);
server.listen(3000); // Isso resultará em um Error: listen EADDRINUSE.
//Solução: Mude o número da porta ou encerre o servidor em execução na porta desejada antes de iniciar um novo servidor.


/*
//Error: ENOENT: no such file or directory
Descrição: Este erro ocorre quando você tenta acessar um arquivo ou diretório que não existe.
Exemplo:
*/
const fs = require('fs');
fs.readFileSync('nonexistent-file.txt'); // Isso resultará em um Error: ENOENT.
//Solução: Verifique se o caminho do arquivo ou diretório está correto e se ele existe.