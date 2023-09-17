function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(10,5));

function multiplica(num1 = 1, num2 = 1){
    return num1 * num2;
}

console.log(multiplica(soma(10,10)));

console.log(0 >= 1 ? "sim" : "nao");


const somaNum = function(nu1, nu2) {return nu1 + nu2}

console.log(somaNum(2,2));

const subtracao = (nu1, nu2) => {
    return nu1 - nu2;
};

console.log(subtracao(10,5));