function contar() {
    let ini = document.getElementById('ii')
    let fim = document.getElementById('if')
    let passo = document.getElementById('ip')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] - Faltam valores')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        for(let c = i; c <= f; c += p) {
        res.innerHTML += `${c}  \u{1f449}`
    } 
    for(let c = i; c >= f; c -= p) {
        res.innerHTML += `${c}  \u{1f449}`
    } 

    res.innerHTML += `\u{1f3c1}`

    }

   
} 