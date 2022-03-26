/*
Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.

Exemplos:
simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++"
*/

function simboloMais(n){
    let string = ''
    for(i = 0; i < n; i++){
        string += '+'
    }
    return string
}

console.log(simboloMais(10))