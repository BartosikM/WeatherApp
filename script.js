const thatDate = document.querySelector('.thatDay');
const date = document.querySelector('.date');
const darkMode = document.querySelector('.dark');
const lightMode = document.querySelector('.light');
const input=document.querySelector('input');
const sendBtn = document.querySelector('.send');
const temperature  = document.querySelector('.temp');
const weather = document.querySelector('.weather-description');
const wrapper = document.querySelector('.wrapper');
const body = document.querySelector('body');

let root = document.documentElement;


const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY ='&appid=1ed8de8a838bc52dda12b85b0b22385d';
const API_UNITS= '&units=metric';

const getWeather =() =>{
    const city = input.value;
    const URL = API_LINK +city + API_KEY +API_UNITS;

    axios.get(URL).then (res =>{

    const temp = res.data.main.temp;
    const weatherInfo = res.data.weather[0];

    temperature.textContent = temp + '°C'
    weather.textContent = weatherInfo.main;

    input.value = ''

}).catch(() => input.placeholder = "You have to type something")
}

const enterKey = e=>{
    if (e.key === "Enter"){
        getWeather()
    }
}

const getDate = ()=>{
    const dayName = new Date();
    thatDate.textContent = dayName.toLocaleString('eng', {weekday: "long"} );

    date.textContent = dayName.toLocaleString('eng', {year:"numeric", month:"numeric",
     day:"numeric"});
}

const setDarkMode = ()=>{
    root.style.setProperty('--background', 'rgb(46, 47, 54)');
    root.style.setProperty('--day', 'white');
    root.style.setProperty('--date', 'white');
}


const setLightMode = ()=>{
    root.style.setProperty('--background', 'linear-gradient(146deg, rgba(161,176,146,1) 38%, rgba(170,126,114,1) 100%)');
    root.style.setProperty('--day', 'rgb(52, 51, 51)');
    root.style.setProperty('--date', 'rgb(92, 92, 92)');

}


window.addEventListener('load', getDate)
sendBtn.addEventListener('click', getWeather)
input.addEventListener('keyup', enterKey)
darkMode.addEventListener('click', setDarkMode)
lightMode.addEventListener('click', setLightMode)
