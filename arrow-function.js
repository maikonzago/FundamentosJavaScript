//   Exemplo 2: Função de seta (arrow function)

const multiplicacao = (a, b) => {
    return a * b;
  };
  
  const produto = multiplicacao(5, 6);
  console.log('Produto da multiplicação:', produto); // Saída: Produto da multiplicação: 30
  
//   Exemplo 3: Função de seta simplificada (quando há apenas uma expressão)

const quadrado = (x) => x * x;

const resultadoQuadrado = quadrado(4);
console.log('Quadrado de 4:', resultadoQuadrado); // Saída: Quadrado de 4: 16

// Exemplo 4: Função de seta com um único parâmetro (ainda mais simplificado)

const dobrar = x => x * 2;

const resultadoDobro = dobrar(7);
console.log('O dobro de 7 é:', resultadoDobro); // Saída: O dobro de 7 é: 14

// verifica idade
const verificaIdade = dataNasc => {
    if ((new Date().getFullYear() - dataNasc) >= 18) {
        return "Maior de Idade";
    }
    else {
        return "Menor Idade";
    }
};

console.log(verificaIdade(1991));
