
let num = window.document.getElementById('fnum')
let lista = window.document.getElementById('flista')
let res = window.document.getElementById('res')
let valores = []


function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

// assistir aula 15 para entender o abaixo
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        //window.alert('Tudo Ok')
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adcionado.`
        lista.appendChild(item)
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ""
    num.focus()
}


function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        res.innerHTML = ""
        res.innerHTML += `<p>Ao todo, temos ${tot} número cadastrados.</p>`
    }
    
}