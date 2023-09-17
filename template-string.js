// Template strings (ou template literals) são uma forma de criar strings em JavaScript que permitem incorporar expressões JavaScript dentro delas. 
// Eles são definidos usando a sintaxe de acento grave (`...`) em vez de aspas simples ou duplas. Aqui estão alguns exemplos de como usar template strings:

// Concatenação de Variáveis:

const nome = "Alice";
const idade = 30;

const msg = `Olá, meu nome é ${nome} e tenho ${idade} anos.`;

console.log(msg); // Saída: "Olá, meu nome é Alice e tenho 30 anos."
// Neste exemplo, ${nome} e ${idade} são expressões JavaScript que são avaliadas e substituídas pelos valores das variáveis correspondentes quando a string é criada.

// Expressões Aritméticas:

const a = 5;
const b = 3;

const resultado = `A soma de ${a} e ${b} é igual a ${a + b}.`;

console.log(resultado); // Saída: "A soma de 5 e 3 é igual a 8."
// Aqui, a expressão ${a + b} é avaliada e o resultado é incorporado à string.

// Multi-linhas:

const paragrafo = `
  Este é um exemplo de
  uma string de várias linhas
  usando template strings.
`;

console.log(paragrafo);
// Você pode criar strings com várias linhas de forma mais legível usando template strings.

// Interpolação de Expressões Booleanas:

const temperatura = 25;
const estáQuente = temperatura > 30;

const mensagem = `Está quente lá fora? ${estáQuente ? 'Sim' : 'Não'}.`;

console.log(mensagem); // Saída: "Está quente lá fora? Não."
// Você pode usar a interpolação de expressões booleanas para criar strings com base em condições.

// Chamada de Funções:

function saudacao(nome) {
  return `Olá, ${nome}!`;
}

const nomeVisitante = "Carlos";
const mensagemSaudacao = saudacao(nomeVisitante);

console.log(mensagemSaudacao); // Saída: "Olá, Carlos!"
// Template strings também podem incorporar o resultado de chamadas de função.

// As template strings tornam mais fácil criar strings complexas e legíveis em JavaScript, especialmente quando você precisa incorporar valores de variáveis ou resultados de expressões no meio das strings.