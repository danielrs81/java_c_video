// Escreva uma função que usa 2 númers e retorna o maior entre eles.

let n1 = 40
let n2 = 20

function maiorNumero() {
    if(n1 > n2) {
        console.log('O número maior é: ', n1)
    } else{
        console.log('O número maior é: ', n2)
    }
}

maiorNumero()

// Outra forma
let valorMaior = max(100,10)
console.log(valorMaior)

function max (numero1, numero2) {
    if(numero1 > numero2)
    return numero1;
    else return numero2
}

// Forma simplificada

let valorM = maxi(10,1000)
console.log(valorM)

function maxi (numero3, numero4) {
    return numero3 > numero4 ? numero3: numero4
}
