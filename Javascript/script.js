const API_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = 'fd48bdf8a8b87b3c140f17625f4e2d57'; 
const flagCountry = document.getElementById('CountryId'); //<img src="" id="CountryId">
const iconTemp = document.getElementById('tempIcon'); // <img src="" alt="" id="tempIcon">

byId = (id, value) =>{
    document.getElementById(id).innerHTML = value
}


const state = {
    temp:null,
    city:null,
    country:null,
    icon:null
};

const setState = (data) =>{
    state.temp = data.main.temp;
    state.city = data.name;
    state.country = data.sys.country
    state.icon = data.weather[0].icon
}

const renderData = () =>{
    byId('city',state.city);
    byId('country',state.country);
    byId('temp',`${Math.round(state.temp)} &#176C`);
    flagCountry.src = `https://www.countryflags.io/${state.country}/flat/64.png`
    iconTemp.src = `http://openweathermap.org/img/w/${state.icon}.png`



}


const gettingWeather = () => {
    const inputValue = document.getElementById('input').value; //we take input value
    if(inputValue) {
        document.getElementById('errorMessage').innerText = '';
        fetch(`${API_URL}weather?q=${inputValue}&appid=${API_KEY}&units=metric`)
        .then(response =>{
            return response.json();
        })
        .then(weather =>{
            setState(weather)
            renderData()
        } )
       
    }else {
        document.getElementById('errorMessage').innerText = 'Please enter the city name'
    }
};

const enterAction = (event) =>{
    if(event.key ==='Enter'){
        gettingWeather()
    }
}
(function () {
    window.navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        fetch( `${API_URL}weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
        .then(response =>{
           return response.json()
        })
        .then(weather =>{
            setState(weather)
            renderData()
        })
    })
})()
function foo(data) {

}

const weather = {name: 'Yerevan'};

foo(weather)