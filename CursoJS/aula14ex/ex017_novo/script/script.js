function tabuada() {
    let num = document.getElementById('inum')
    let tab = document.getElementById('itab')

    if (num.value.length == 0) {
        window.alert('Digite um valor!')
    } else {
        let n = Number(num.value)
        
        tab .innerHTML = ''
        for(let c = 1;c <= 10;c++ ) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            
        }
    }

}    





