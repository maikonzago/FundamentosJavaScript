// Função que retorna a soma de dois números de forma síncrona.
function somar(a, b) {
    return a + b;
  }
  
  // Chame a função e imprima o resultado.
  const resultado = somar(5, 3);
  console.log(resultado); // Saída: 8
  

  // Função que retorna o maior elemento em um array de forma síncrona.
function encontrarMaiorElemento(array) {
    if (array.length === 0) {
      return undefined;
    }
  
    let maior = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > maior) {
        maior = array[i];
      }
    }
  
    return maior;
  }
  
  // Chame a função e imprima o resultado.
  const numeros = [12, 5, 8, 27, 3];
  const maiorNumero = encontrarMaiorElemento(numeros);
  console.log(maiorNumero); // Saída: 27

  
  // Função que valida um e-mail de forma síncrona.
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  // Chame a função e imprima o resultado.
  const emailValido = validarEmail("usuario@example.com");
  console.log(emailValido); // Saída: true
  