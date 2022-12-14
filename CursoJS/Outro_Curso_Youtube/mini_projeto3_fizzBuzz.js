// Divisivel por 3 => Fizz
// Divisivel por 5 => Buzz
// Divisivel por 3 e 5 => FizzBuzz
// Não divisivel por 3 ou 5 => entrada digitada
// Não é um número => 'Não é um número'

let resultado = fizzBuzz(15)
console.log(resultado)

function fizzBuzz(numero) {
    if(typeof numero !== 'number' )
    return 'Não é um número'
    if(numero % 3 == 0 && numero % 5 === 0)
    return 'FizzBuzz'
    if(numero % 3 === 0)
    return 'Fizz'
    if(numero % 5 === 0)
    return 'Buzz'
    return numero
    
}