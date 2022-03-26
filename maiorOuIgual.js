/*
Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
Exemplos:
maiorOuIgual(0, 0) // retornará true
maiorOuIgual(0, "0") // retornará false
maiorOuIgual(5, 1) // retornará false

*/

function maiorOuIgual(n1, n2){
    if(n1>n2){
        console.log('O numero ' + n1 + ' é maior que ' + n2) //o enunciado pede para retornar true ou false, mas incrementei
    } else if (n1 === n2){
        console.log('O numero ' + n2 + ' é igual ao ' + n2)
    } else {
        console.log('O ' + n1 + ' não é maior nem igual ao ' + n2)
    }
}

maiorOuIgual(3, "3")
