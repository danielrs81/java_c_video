// let idade = 42
// console.log(idade)
// console.log(typeof)

// Objetos: 

/*
let nome = 'Daniel'
let idade = 25
let sobrenome = 'Silva'
let estaAprovado = true
let cidade = undefined

let pessoa = {
    nome: 'Daniel',
    idade: 25,
    sobrenome: 'Silva',
    estaAprovado: true,
    cidade: undefined,
};

console.log(pessoa)
*/

// Arrays

/*
let familia = [true,45,'Daniel',17]

console.log(familia)
*/

// Funções sem parametros
/*
let corSite = 'Azul'

function resetaCor() {
    corSite = ''
};

console.log(corSite)
resetaCor();
console.log(corSite)
*/
/*

// Funções com parametros

let corSite = 'Azul'

function resetaCor(cor, tonalidade) {
    corSite = cor + ' ' + tonalidade
};

console.log(corSite)
resetaCor('Vermelho', 'Claro');
console.log(corSite)

// Tipos de Funções

// Função com retorno

function multiplicarPorDois(valor) {
    return valor *2
}

console.log(multiplicarPorDois(3))

let resultado = multiplicarPorDois(10)
console.log(resultado)

*/

// Operadores ternarios:

// Tem um cliente, 100 pontos premium, abaixo é comum

// let pontos = 99
// let tipo = pontos >= 100 ? 'premium' : 'comum';
// console.log(tipo)


// Operadores lógicos e (&&)
// Retorna TRUE se od dois operadores forem true

// console.log(true && true)

// Operador Lógico ou ( || )
// Vai retornar true se 'um' dos operadores forem true

// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

//  Operadore NOT ( ! )

// let candidatoRecusado = !podeAplicar;

// console.log(candidatoRecusado)

// let a = 'vermelho';
// let b = 'azul';

// let c = a;
// a = b;
// b = c;

// console.log(a);
// console.log(b);


// If ... Else

// Se a hora estiver entre 06:00 até 12:00: Bom dia!
// se estiver entre 12:00 até 18:00: Boa tarde!
// Caso contráeio: Boa noite!

// let hora = 12

// if(hora > 6 &&  hora < 12) {
//     console.log('Bom dia')
// } else if(hora > 12 && hora < 18){
//     console.log('Boa tarde')
// } else{
//     console.log('Boa noite')
// }

/*
// Switch  / Case

let permissao; // comum, gerente, diretor
permissao = 'diretor';

switch (permissao) {
    case 'comum':
    console.log('usuario comum')
    break

    case 'gerente':
    console.log('usuario gerente')
    break

    case 'diretor':
    console.log('usuario diretor')
    break

    default:
    console.log('Usuário não reconhecido!')
}

*/
// Loops

// 1º For
// 2º while
// 3º Do..while 
// 4ª For..In
// 5º For..of

// 1º For

//Para o indice 0, rode enquanto i for menor que 5, e acrescente 1 ao i<
// for(let i = 0; i < 5; i++) {
//     console.log('Estou aprendendo', i)
// }

// for(let i = 0; i <= 5; i++) {
//     if (i % 2 !== 0 )
//     console.log(i)
// }

// for(let i = 5; i >= 1; i--) {
//     if (i % 2 !== 0 ){
//         console.log(i);
//     }
    
// }


// 2º while

// let i = 5;

// while (i >= 1) {
//     if (i % 2 !== 0 ){
//         console.log(i);
//     }
//     i--;
// }

// 3º Do..while 
// let i = 0

// do {
//     console.log('digitando!', i)
//     i++
// } while (i < 10)

// 4ª For..In

// let pessoa = {
//     nome: 'Daniel',
//     idade: 41 
// }

// key - value

// for(let chave in pessoa) {
//     console.log(chave, pessoa['nome'])
// }

// let cores = ['Preto', 'Azul', 'Vermelho']
// for (let indice in cores) {
//     console.log(indice, cores[indice])
// }



// 5º For..of

let cores = ['Preto', 'Azul', 'Vermelho']

for(let cor of cores) {
    console.log(cor)
}
