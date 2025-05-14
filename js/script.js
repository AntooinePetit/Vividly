const burgermenu = document.querySelector('#burgermenu')
const nav = document.querySelector('nav')

burgermenu.addEventListener('click', () => {
  nav.classList.toggle('active')
  burgermenu.classList.toggle('fa-bars')
  burgermenu.classList.toggle('fa-xmark')
})

window.addEventListener('scroll', () => {
  nav.classList.remove('active')
  burgermenu.classList.remove('fa-xmark')
  burgermenu.classList.add('fa-bars')
})