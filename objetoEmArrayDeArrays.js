/* Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
exemplos abaixo para um melhor entendimento:

Exemplos:
objetoParaArray({
nome: "Maria",
profissao: "Desenvolvedora de software"
}) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]
objetoParaArray({
codigo: 11111,
preco: 12000
}) // irá retornar [["codigo", 11111], ["preco", 12000]]

*/


//Object.keys(obj)[0] - para pegar o nome do atributo
//Object.keys(obj).length - descobre a quantidade de atributos de um objeto
//Object.entries - retorna os atributos em pares id + conteudo

let arrayPessoa = 

function objetoParaArray(obj){
    arrayPessoa = Object.entries(obj)
    return arrayPessoa
}

let pessoa = {
    Nome: 'Marina',
    Idade: 29,
    Cidade: 'Petrópolis',
    Peso: 95
}

console.log(pessoa)
objetoParaArray(pessoa)
console.log(arrayPessoa)