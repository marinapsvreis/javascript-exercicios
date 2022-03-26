/*
Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array:

Exemplos:
receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará [7, "olá"]
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16]
*/


//array.lenght saber tamanho do array

function primeiroUltimo(vetor){
    let tamanho = vetor.length - 1
    console.log(vetor)

    let novoVetor = [vetor[0], vetor[tamanho]]

    return novoVetor
}

console.log(primeiroUltimo([1, 2, 3, 4, 5, 6]))

