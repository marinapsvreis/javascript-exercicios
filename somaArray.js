/*
Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.

Exemplos:
somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60
*/

let somaDaLista = 0;

function somaLista(lista){
    let tamanho = lista.length
    for(i = 0; i < tamanho; i++){
        somaDaLista += lista[i] 
    }
     return somaDaLista
}

let resultado = somaLista([1, 2, 3, 4])
console.log(resultado)