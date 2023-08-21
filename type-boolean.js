// Declarando variáveis do tipo "boolean"
const temCafe = true;              // Exemplo de valor verdadeiro
const temCha = false;              // Exemplo de valor falso

// Realizando comparações que retornam booleanos
const idade = 18;
const maiorDeIdade = idade >= 18;  // Retorna verdadeiro se idade for maior ou igual a 18

// Utilizando operadores lógicos
const estaChovendo = true;
const estaFrio = false;
const sairComGuardaChuva = estaChovendo && !estaFrio; // Verdadeiro se estiver chovendo e não estiver frio

// Verificando igualdade
const corFavorita = "azul";
const corEscolhida = "vermelho";
const mesmaCor = corFavorita === corEscolhida; // Falso, as cores são diferentes

// Convertendo outros tipos para booleanos
const numero = 0;
const textoVazio = "";
const valorNulo = null;
const valorUndefined = undefined;

const numeroEhVerdadeiro = Boolean(numero);       // Falso, 0 é convertido para falso
const textoEhVerdadeiro = Boolean(textoVazio);    // Falso, uma string vazia é convertida para falso
const nuloEhVerdadeiro = Boolean(valorNulo);      // Falso, null é convertido para falso
const undefinedEhVerdadeiro = Boolean(valorUndefined); // Falso, undefined é convertido para falso

// Exibindo os resultados
console.log("Tem café?", temCafe);
console.log("Tem chá?", temCha);
console.log("Maior de idade?", maiorDeIdade);
console.log("Sair com guarda-chuva?", sairComGuardaChuva);
console.log("Mesma cor?", mesmaCor);
console.log("Número é verdadeiro?", numeroEhVerdadeiro);
console.log("Texto é verdadeiro?", textoEhVerdadeiro);
console.log("Nulo é verdadeiro?", nuloEhVerdadeiro);
console.log("Undefined é verdadeiro?", undefinedEhVerdadeiro);
