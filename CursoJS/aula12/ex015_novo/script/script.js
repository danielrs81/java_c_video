function verificar() {
    let anoNascimento = Number(window.document.getElementById('iano').value)
    let res = window.document.getElementById('res')
    let data = new Date()
    let atual = data.getFullYear()
    //res.innerHTML = `${atual}`
    let idade = atual - anoNascimento
    //res.innerHTML = `${idade}`
    let formuSexo = window.document.getElementsByName('sexo')
    let genero = ''

    let img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (anoNascimento == 0 || anoNascimento > atual) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    if (formuSexo[0].checked) {
        genero = 'Masculino'
        if (idade >= 0 && idade < 4) {
            res.innerHTML = `Você é um bebê do sexo masculino com ${idade} anos de idade`
            img.setAttribute('src', './imagens/bebe_h.png')
        } else if (idade < 10) {
            res.innerHTML = `Você é uma criança do sexo masculino com ${idade} anos de idade`
            img.setAttribute('src', './imagens/crianca_h.png')
        } else if (idade < 18) {
            res.innerHTML = `Você é um jovem do sexo masculino com ${idade} anos de idade`
            img.setAttribute('src', './imagens/jovem_h.png')
        } else if (idade < 50) {
            res.innerHTML = `Você é um adulto do sexo masculino com ${idade} anos de idade`
            img.setAttribute('src', './imagens/adulto_h.png')
        } else {
            res.innerHTML = `Você é um idoso do sexo masculino com ${idade} anos de idade`
            img.setAttribute('src', './imagens/idoso_h.png')
        }
    }

    if (formuSexo[1].checked) {
        genero = 'Feminino'
        if (idade >= 0 && idade < 4) {
            res.innerHTML = `Você é um bebê do sexo feminino com ${idade} anos de idade`
            img.setAttribute('src', './imagens/bebe_m.png')
        } else if (idade < 10) {
            res.innerHTML = `Você é uma criança do sexo feminino com ${idade} anos de idade`
            img.setAttribute('src', './imagens/crianca_m.png')
        } else if (idade < 18) {
            res.innerHTML = `Você é um jovem do sexo feminino com ${idade} anos de idade`
            img.setAttribute('src', './imagens/jovem_m.png')
        } else if (idade < 50) {
            res.innerHTML = `Você é um adulto do sexo feminino com ${idade} anos de idade`
            img.setAttribute('src', './imagens/adulto_m.png')
        } else {
            res.innerHTML = `Você é um idoso do sexo feminino com ${idade} anos de idade`
            img.setAttribute('src', './imagens/idoso_m.png')
        }
    }

    res.style.textAlign = 'center'
    res.appendChild(img)
    //res.innerHTML += genero
   
    
}