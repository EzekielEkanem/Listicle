const renderCar = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())
    const response = await fetch('/cars')
    const data = await response.json()
    const carInfo = document.getElementById('car-info')

    let car
    if (data) {
        car = data.find(car => car.id === requestedID)
        if (car) {
            document.getElementById('car-image').src = car.image
            document.getElementById('name').textContent = car.name
            document.getElementById('retailPrice').textContent = "Retail Price:" + car.retailPrice
            document.getElementById('color').textContent = "Car color" + car.color
            document.getElementById('make').textContent = "Manufacturer" + car.make
            document.getElementById('bodyStyle').textContent = "Body style" + car.bodyStyle
            document.getElementById('engine').textContent = "Engine" + car.engine
            document.getElementById('about').textContent = car.about
            document.title = `Listicle - ${car.name}`
        }
        else {
            const message = document.createElement('h2')
            message.textContent = 'No Cars Available 😞'
            carInfo.appendChild(message)
        }
    }
}

renderCar()