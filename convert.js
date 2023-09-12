//Conversão Implícita:
//A conversão implícita ocorre quando o JavaScript automaticamente converte um tipo de dado em outro durante uma operação, 
//geralmente para permitir que a operação seja realizada. Isso acontece principalmente em operações envolvendo diferentes 
//tipos de dados, como números e strings.

const numero = 42; // número
const texto = "10"; // string

const resultado = numero + texto;

console.log(resultado); // "4210" (string)


//Conversão Explícita:
//A conversão explícita ocorre quando você explicitamente converte um tipo de dado em outro usando funções ou operadores específicos.
//Isso é feito de forma deliberada pelo programador para controlar como os tipos são manipulados.

const numeroTexto = "42"; // string

// Convertendo a string em número usando parseInt
const numero2 = parseInt(numeroTexto);

console.log(numero2); // 42 (número)


const booleano = true; // booleano

// Convertendo o booleano em número usando o operador Number
const numero3 = Number(booleano);

console.log(numero3); // 1 (número)
