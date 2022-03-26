/* 
Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.

Exemplo:
multiplicar(5, 5) // retornará 25
multiplicar(0, 7) // retornará 0
*/

function multiplicar(n1, n2){
    n1 = Math.abs(n1)
    n2 = Math.abs(n2)
    let resultado = 0

    for(cont = 1; n2 >= cont; cont++){
        resultado+= n1
        //console.log('Passou pelo for!')
        //console.log(n1)
    }

    console.log(resultado)
}

multiplicar(10, 0)