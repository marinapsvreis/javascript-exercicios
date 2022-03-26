/*
Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você
está desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas.

Exemplos:
despesasTotais([
{nome: "Jornal online", categoria: "Informação", preco: 89.99},
{nome: "Cinema", categoria: "Entretenimento", preco: 150}
]) // retornará 239.99
despesasTotais([
{nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
{nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
]) // retornará 34599.89
*/

let somaPreco = 0

function calcularDespesas(item){
    let tamanho = item.length
    for(i = 0; i < tamanho; i++){
        somaPreco += item[i].Preco
    }

    return somaPreco
}


let item = [{
    Nome: 'Celular',
    Categoria: 'Eletronico',
    Preco: 2000
}, {
    Nome: 'Computador',
    Categoria: 'Eletronico',
    Preco: 5000
}]

console.log(calcularDespesas(item))