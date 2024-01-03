const nav = document.querySelector('nav')

const navContainer = document.createElement('div')
navContainer.className = 'nav-container'

const navTitle = document.createElement('h1')
navTitle.textContent = 'Cars Flex'

const navText = document.createElement('p')
navText.textContent = 'A platform to flex around with different cars without the aim of buying them. Mainly for car lovers!'

const navButton = document.createElement('button')
navButton.textContent = 'All Cars'

navButton.addEventListener('click', function handleClick(event) {
    window.location = '/'
})

navContainer.appendChild(navTitle)
navContainer.appendChild(navText)
navContainer.appendChild(navButton)

nav.appendChild(navContainer)