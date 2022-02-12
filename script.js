const url = 'https://api.openweathermap.org/data/2.5/'
const key = 'bf2cdedc36d1a36fb933bcf5a002f2ea'

const setQuery = (e) => {
    if(e.keyCode == '13')
        getResult(searchBar.value)
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=en`
    fetch(query)
    .then(weather=>{
        return weather.json()
    })
    .then(displayResult)    
}
const displayResult = (result) => {
    let city = document.querySelector('.city')
    city.innerText = `${result.name}, ${result.sys.country}`

    let temp = document.querySelector('.temp')
    temp.innerText = `${Math.round(result.main.temp)}°C`

    let minmax = document.querySelector('.minmax')
    minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`

}

const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress',setQuery)