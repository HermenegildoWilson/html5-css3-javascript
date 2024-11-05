function fazercadastro() {
    var dev = {
        nome:document.querySelector('input#nomeCompleto').value,
        nBi:document.querySelector('input#nBilhete').value,
        natural:document.querySelector('input#dataNasc').value
    }
    window.alert(dev.natural)
}

function outrastecnologias() {
    document.querySelector('input#outrastec').style.display = 'inline'
}