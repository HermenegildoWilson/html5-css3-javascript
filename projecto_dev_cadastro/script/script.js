function outrasTecnologias() {
    document.querySelector('input#tecnoOut').style.display = 'block'
}

var dev = {}
function fazerCadastro() {
    let nome = document.querySelector('input#nomeCompleto').value
    let nBi = document.querySelector('input#nBilhete').value
    let dNasc = document.querySelector('input#dataNasc').value
    let prov = document.getElementById('prov').value
    
    let sexo = document.getElementsByName('sexo')
    for(let i = 0; i < 2; i++){
        if (sexo[0].checked) {
            sexo = 'Masculino'
        }else if (sexo[i].checked) {
            sexo = 'Feminino'
        }
    }

    let tipoDev = document.getElementsByName('tipoDev')
    for(let i = 0; i < 2; i++){
        if(tipoDev[i].checked){
            tipoDev = 'Front-Hand'
        }else if(tipoDev[i].checked){
            tipoDev = 'Back-Hand'
        }else if(tipoDev[i].checked){
            tipoDev = 'Full-Stack'
        }
    }

    var senior = document.getElementById('sen').value

    let tecno = document.getElementsByClassName('tecno')
    let tecnologias = []
    for (let i = 0; i < tecno.length; i++) {
        if (tecno[i].checked) {
            tecnologias.push(tecno[i].value)
        }
    }

    if (nome.length != 0 && nBi.length != 0 && dNasc.length != 0 && prov.value != 'Província...' && senior.value != 'Selecione...') {
        dev['nome'] = nome
        dev['nBI'] = nBi
        dev['dNasc'] = dNasc
        dev['prov'] = prov
        dev['sexo'] = sexo
        dev['tipoDev'] = tipoDev
        dev['senioridade'] = senior
        dev['tecnologias'] = tecnologias
        window.alert('Cadastro feito com sucesso!')
        preencherFicha()
    }else{
        window.alert('Preencha a porra dos campos!')
    }
}

function preencherFicha() {
    let main = document.querySelector('main#conteudo')
    let titulo = document.querySelector('header>h1')
    let ficha = document.querySelector('section#fichaDeCadastro')

    main.style.display = 'none'
    titulo.innerHTML = 'Ficha de Cadastro'
    ficha.style.display = 'block'

    let txtNome = document.getElementById('caixaNome')
    let txtBI = document.getElementById('caixaBI')
    let txtProv = document.getElementById('caixaProv')
    let txtNasc = document.getElementById('caixaNasc')
    let txtSexo = document.getElementById('caixaSexo')

    let txtTDev = document.getElementById('caixaTDev')
    let txtTUt = document.getElementById('caixaTUt')
    let txtSen = document.getElementById('caixaSen')

    txtNome.innerHTML = dev.nome
    txtBI.innerHTML = dev.nBI
    txtProv.innerHTML = dev.prov
    txtNasc.innerHTML = dev.dNasc
    txtSexo.innerHTML = dev.sexo

    txtTDev.innerHTML = dev.tipoDev
    txtTUt.innerHTML = dev.tecnologias
    txtSen.innerHTML = dev.senioridade
    
}