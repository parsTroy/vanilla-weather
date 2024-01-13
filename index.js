// const API_KEY = process.end.API_KEY;

let cityName = "London";
let degree = "C"

// const url = `https://open-weather13.p.rapidapi.com/city/${cityName}`;
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '3823b95f6emsh90f8b2322f3c419p192335jsn77cbc374999c',
//         'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
//     }
// };

const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${cityName}&format=json&u=${degree}`;
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3823b95f6emsh90f8b2322f3c419p192335jsn77cbc374999c',
        'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
    }
};

const getWeather = async () => {
    try {
        const response = await fetch(url, options);
        const result = await response.text();

        const date = (JSON.stringify(result).split(",")[6]); // Date
        const temperature = (JSON.stringify(result).split(",")[15]); // Temperature
        const weatherCondition = (JSON.stringify(result).split(",")[22]); // Weather type ("Mostly Cloudy")
        const windSpeed = (JSON.stringify(result).split(",")[9]); // Wind Speed
        const windChill = (JSON.stringify(result).split(",")[7]); // Wind Chill
        const humidity = (JSON.stringify(result).split(",")[10]); // Humidity

        // console.log(JSON.stringify(result).split(","));

        // const dateElement = document.getElementById("date");
        // dateElement.innerText = date
        // const temperatureElement = document.getElementById("temperature");
        // temperatureElement.innerText = temperature
        // const weatherConditionElement = document.getElementById("weatherCondition");
        // weatherConditionElement.innerText = weatherCondition
        // const windSpeedElement = document.getElementById("windSpeed");
        // windSpeedElement.innerText = windSpeed
        // const windChillElement = document.getElementById("windChill");
        // windChillElement.innerText = windChill
        // const humidityElement = document.getElementById("humidity");
        // humidityElement.innerText = humidity


        const weatherIcon = document.getElementById("weather--icon");
        weatherIcon.innerText = returnWeatherIcon();

        const returnWeatherIcon = () => {
            
        }


    } catch (error) {
        console.error(error);
    }
}

getWeather();

const cityElement = document.getElementById("cityName");
cityElement.innerText = cityName

const body = document.getElementById("body");
// body.style(`background-image: url('https://source.unsplash.com/1920x1080?${weather}') cover`);
body.style.backgroundImage = "url('https://source.unsplash.com/1920x1080?cloud')";