const btn_menu = document.querySelector('button.btn-menu')
const navegacao_menu = document.querySelector('ul.navegacao-menu')

btn_menu.addEventListener('click', show_menu)

function show_menu() {
    navegacao_menu.classList.toggle('show-menu')

    document.querySelector('nav.navegacao > div').classList.toggle('show-btn')

    btn_menu.classList.toggle('clicando')
}