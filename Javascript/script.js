const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = 'fd48bdf8a8b87b3c140f17625f4e2d57'; 
const flagCountry = document.getElementById('CountryId'); //<img src="" id="CountryId">
const iconTemp = document.getElementById('tempIcon'); // <img src="" alt="" id="tempIcon">
(function () {
    window.navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        console.log(latitude, 'latitude');
        console.log(longitude, 'longitude')
    })
})()
const gettingWeather = () => {
    const inputValue = document.getElementById('input').value; //we take input value
    if(inputValue) {
        document.getElementById('errorMessage').innerText = '';
        fetch(`${API_URL}${inputValue}&appid=${API_KEY}&units=metric`)
        console.log('ok');
    }else {
        document.getElementById('errorMessage').innerText = 'Please enter the city name'
    }
};