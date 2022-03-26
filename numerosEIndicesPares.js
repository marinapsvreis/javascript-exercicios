/*
Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.
💡 Lembre-se que um número é par porque é divisível por 2, ou seja, o resto da divisão da divisão dele
por 2 é zero.

Exemplos:
receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) // retornará []
receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]) // retornará [10, 22]
*/

function retornarPares(lista){
    let tamanho = lista.length
    let listaPares = []
    let iP = 0
    for(i = 0; i < tamanho; i++){
        if(lista[i]%2 == 0){
            listaPares[iP] = lista[i] 
            iP++
        } else {}
    }

    return listaPares

}

let resultado = retornarPares([1, 3, 5, 7, 9, 11])
console.log(resultado)