/*
Criar uma função que receba um array de números e retorne o menor número desse array.

Exemplos:
menorNumero([10, 5, 35, 65]) // retornará 5
menorNumero([5, -15, 50, 3]) // retornará -15
*/

let valorMinimo = 0

function descobrirMinimoLista(lista){
    valorMinimo = Math.min.apply(Math, lista)
    return valorMinimo
}

console.log(descobrirMinimoLista([10, 5, 35, 65]))