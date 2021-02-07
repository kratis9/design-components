const [open] = document.getElementsByClassName('open')
const [close] = document.getElementsByClassName('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))
close.addEventListener('click', () => container.classList.remove('show-nav'))
