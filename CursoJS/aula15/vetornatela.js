let valores = [8,1,7,4,2,9]
valores.sort()
console.log(valores)
valores.indexOf(7)


/*
for(pos = 0; pos < valores.length; pos++) {
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}


*/
// para cada posição na variavel composta, mostre o num pos
//pos é o indice, após o in a variável

for(let pos in valores) { 
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}
console.log(`${valores.indexOf(7)}`)

let num = 8
num **= 2