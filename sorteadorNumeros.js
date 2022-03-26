function sortear(numero){
    let numeroSorteado = Math.random()* (10 - 1) + 1
    if(numero == numeroSorteado){
        console.log('Parabéns, o numero sorteado foi' + numeroSorteado)
    } else {
        console.log('Que pena! O numero sorteado foi' + numeroSorteado)
    }
}

sortear(10)