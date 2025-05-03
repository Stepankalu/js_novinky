const bodyElement = document.querySelector ('body')
bodyElement.style.backgroundColor = '#e9e9e9'

const newsElement = document.querySelector ('.news')
newsElement.style.backgroundColor = 'white'
newsElement.style.maxWidth = '60rem'

const headerElement = document.querySelector ('h1')
headerElement.classList.add('news__title')
headerElement.textContent = 'Aktuální novinky'

const news1Element = document.getElementById ('zprava1')
news1Element.classList.add ('post--main')

const news2Element = document.querySelector('#zprava3 img')
news2Element.src = 'images/zprava3-novy.jpg'
