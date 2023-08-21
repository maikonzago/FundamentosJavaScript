// Declarando variáveis do tipo "string"
const mensagemSimples = "Olá, mundo!";       // Uma mensagem simples
const mensagemMultilinha = `
  Este é um exemplo
  de string multilinha.
`;                                          // String multilinha com template literals

// Concatenando strings
const saudacao = "Olá";
const nome = "João";
const saudacaoCompleta = saudacao + ", " + nome + "!"; // Concatenação de strings

// Utilizando métodos de string
const frase = "A vida é bela.";
const maiusculas = frase.toUpperCase();       // Transforma em maiúsculas
const minusculas = frase.toLowerCase();       // Transforma em minúsculas
const comprimento = frase.length;             // Comprimento da string

// Acessando caracteres individuais
const primeiraLetra = frase[0];              // Primeiro caractere: "A"
const segundaLetra = frase.charAt(2);         // Caractere na posição 2: "v"

// Encontrando substrings
const palavra = "vida";
const posicao = frase.indexOf(palavra);      // Posição da primeira ocorrência da palavra
const substring = frase.slice(2, 8);         // Extrai a substring da posição 2 à 8

// Substituindo partes da string
const novaFrase = frase.replace("bela", "maravilhosa"); // Substitui "bela" por "maravilhosa"

// Verificando se uma string inclui outra
const incluiPalavra = frase.includes("vida"); // Verdadeiro, a palavra está presente
const incluiTexto = frase.includes("sol");    // Falso, a palavra não está presente

// Exibindo os resultados
console.log("Mensagem simples:", mensagemSimples);
console.log("Mensagem multilinha:", mensagemMultilinha);
console.log("Saudação completa:", saudacaoCompleta);
console.log("Maiúsculas:", maiusculas);
console.log("Minúsculas:", minusculas);
console.log("Comprimento:", comprimento);
console.log("Primeira letra:", primeiraLetra);
console.log("Segunda letra:", segundaLetra);
console.log("Posição da palavra:", posicao);
console.log("Substring:", substring);
console.log("Nova frase:", novaFrase);
console.log("Inclui palavra 'vida'?", incluiPalavra);
console.log("Inclui texto 'sol'?", incluiTexto);
