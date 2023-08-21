// Declarando variáveis do tipo "number"
const inteiro = 42;          // Número inteiro
const decimal = 3.14;        // Número de ponto flutuante
const notacaoCientifica = 5e3; // Notação científica (5 * 10^3)

// Realizando operações matemáticas
const soma = inteiro + decimal;
const multiplicacao = inteiro * decimal;
const divisao = decimal / 2;

// Utilizando métodos e propriedades do tipo "number"
const valorAbsoluto = Math.abs(-7);       // Valor absoluto: 7
const arredondamento = Math.round(5.67);  // Arredondado para o mais próximo: 6
const maximo = Math.max(10, 20, 5);       // Maior valor: 20
const minimo = Math.min(10, -5, 3);       // Menor valor: -5
const casasDecimais = decimal.toFixed(1); // Limitar casas decimais: "3.1"

// Verificando se um valor é um número
const ehNumero1 = Number.isNaN("foo");    // Falso, "foo" não é um número
const ehNumero2 = Number.isNaN(42);       // Falso, 42 é um número

// Exibindo os resultados
console.log("Número inteiro:", inteiro);
console.log("Número decimal:", decimal);
console.log("Notação científica:", notacaoCientifica);
console.log("Soma:", soma);
console.log("Multiplicação:", multiplicacao);
console.log("Divisão:", divisao);
console.log("Valor absoluto:", valorAbsoluto);
console.log("Arredondamento:", arredondamento);
console.log("Máximo:", maximo);
console.log("Mínimo:", minimo);
console.log("Casas decimais:", casasDecimais);
console.log("É número (foo)?", ehNumero1);
console.log("É número (42)?", ehNumero2);
