/*
Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.

Exemplos:
filtrarNumeros(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20]
filtrarNumeros(["a", "c"]) // retornará []
*/

function returnNumber(lista){
    let tamanho = lista.length

    //console.log(tamanho) - vendo se o tamanho saiu correto

    let listaNumerica = []
    let iN = 0 //percorrer diferente de i, para não registrar espaços vazios
    for(i = 0; i < tamanho; i++){
        if(typeof(lista[i]) == 'number'){
            listaNumerica[iN] = lista[i]
            iN++            
            //console.log(lista[i]) // o teste se é numero está funcionando
            //console.log(listaNumerica) //teste se lista numerica está recebendo os vetores
        } else {}
    }
    return listaNumerica
}

let resultado = returnNumber(['olá', true])
console.log(resultado)