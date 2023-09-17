// O operador ternário em JavaScript é uma forma concisa de escrever uma expressão condicional. 
// Ele permite que você execute um bloco de código ou retorne um valor com base em uma condição.
// Aqui está um exemplo simples de um operador ternário:


const idade = 18;
const status = idade >= 18 ? "Adulto" : "Menor de idade";

console.log(status); // "Adulto"


// Execução de Funções Condicionalmente:

const isPremiumUser = true;

const showMessage = isPremiumUser
  ? () => console.log("Bem-vindo, usuário premium!")
  : () => console.log("Bem-vindo, usuário regular!");

showMessage(); // "Bem-vindo, usuário premium!"

// Neste exemplo, uma função é selecionada com base na condição isPremiumUser. 
// Se for verdadeira, a função que cumprimenta o usuário premium é chamada; 
// caso contrário, a função que cumprimenta o usuário regular é chamada.




//Saída Condicional em HTML:

{/* <p>
  O usuário está logado:
  <%= isLoggedIn ? "Sim" : "Não" %>
</p> */}

// Este exemplo mostra como você pode usar o operador ternário em um modelo HTML para exibir "Sim" ou "Não" com base na variável isLoggedIn. Se isLoggedIn for verdadeira, "Sim" será exibido; caso contrário, será "Não".

// Definição de Estilos CSS Dinamicamente:

// const erro = true;
// const estilo = erro ? "erro" : "sucesso";

// const elemento = document.querySelector(".mensagem");
// elemento.classList.add(estilo);

// Aqui, a classe CSS é definida dinamicamente com base na condição erro. Se for verdadeira, a classe "erro" é adicionada ao elemento HTML; caso contrário, a classe "sucesso" é adicionada.