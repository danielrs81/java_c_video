let num =[5,8,2,9,3]
num[3] = 6
num.push(1)

num.sort()
 


console.log(num)
console.log(`O vetor tem esses ${num} elementos`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro vetor é ${num[0]}`)


/*
for(let pos=0; pos<num.length; pos++){
    console.log(num[pos])
}9
*/

let pos = num.indexOf(8)

if (pos == -1) {
    console.log(`O número não está na lista: ${num}`)
} else {
    console.log(`O valor  está na posição ${pos}`)
}

