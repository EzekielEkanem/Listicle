const renderCars = async () => {
    const response = await fetch('/cars')
    const data = await response.json()

    const mainContent = document.getElementById('main-content')
    if (data) {
        data.map(car => {
            const carCard = document.createElement('article')
            carCard.classList.add('card')
            carCard.style.backgroundImage = `url(${car.image})`

            const cardContainer = document.createElement('div')
            cardContainer.classList.add('car-card-overlay')

            const cardBrief = document.createElement('div')
            cardBrief.classList.add('car-brief')
            cardBrief.classList.add('car-card-name')
            
            const cardName = document.createElement('h3')
            cardName.textContent = car.name
            cardBrief.appendChild(cardName)

            const demarcation = document.createElement('hr')
            cardBrief.appendChild(demarcation)

            const cardInfo = document.createElement('div')
            cardInfo.classList.add('car-brief')
            cardInfo.classList.add('car-card-price')

            const cardRetailPrice = document.createElement('p')
            cardRetailPrice.textContent = car.retailPrice
            cardInfo.appendChild(cardRetailPrice)

            const cardDetails = document.createElement('div')
            cardDetails.classList.add('car-brief')
            cardDetails.classList.add('car-card-link')

            const link = document.createElement('a')
            link.textContent = 'Read More'
            link.href = `/cars/${car.id}`
            link.setAttribute('role', 'button')
            cardDetails.appendChild(link)

            cardInfo.appendChild(cardDetails)
            cardBrief.appendChild(cardInfo)
            cardContainer.appendChild(cardBrief)
            carCard.appendChild(cardContainer)

            mainContent.appendChild(carCard)
        })
    }
    else {
        const message = document.createElement('h2')
        message.textContent = "No Cars Available 😔"
        mainContent.appendChild(message)
    }
}

const requestedUrl = window.location.href.split('/').pop()
if (requestedUrl) {
    window.location.href = '../404.html'
}
else {
    renderCars()
}
