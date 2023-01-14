//Function expression
const increment1 = function(n){
    return n + 1
}

/*Arrow function
Obs.: uma arrow function é sempre uma função anônima
*/
const increment2 = (n) => {
    return n + 1
}

//Em Arrow functions, quando se tem um único parâmetro pode-se omitir os parênteses
const increment3 = n => {
    return n + 1
} 

/*Em Arrow functions, pode-se escrever uma função de uma única linha, sem colocar o bloco 
de código entre chaves e obrigatoriamente, omitindo o return implícito*/
const increment4 = n => n + 1

//Em funções com mais de um parâmetro, deve-se colocar os mesmos dentro de parênteses normalmente
const sum = (a, b) => a + b

console.log(increment1(1))
console.log(increment2(5))
console.log(increment3(24))
console.log(increment3(199))
console.log(sum(3, 8))