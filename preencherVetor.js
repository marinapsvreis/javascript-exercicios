/* 
Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.

Exemplos:
repetir("código", 2) // retornará ["código", "código"]
repetir(7, 3) // retornará [7, 7, 7]
*/

function preencherVetor(valor, qtd){
    let vetor = []

    for(i = 0; i < qtd; i++){
        vetor[i] = valor
    }

console.log(vetor)
}


preencherVetor(7, 10)


