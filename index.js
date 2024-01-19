'use strict'

const api_Key = "3823b95f6emsh90f8b2322f3c419p192335jsn77cbc374999c"

let cityName = "Seoul";
let degree = "c"

// OTHER OTHER OTHER
// const url = `https://open-weather13.p.rapidapi.com/city/${cityName}`;
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '3823b95f6emsh90f8b2322f3c419p192335jsn77cbc374999c',
//         'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
//     }
// };


MAIN MAIN MAIN
const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${cityName}&format=json&u=${degree}`;
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': api_Key,
        'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
    }
};

const inputElement = document.getElementById("input");

const getWeather = async () => {
    try {
        const response = await fetch(url, options);
        const result = await response.json();

        const date = (Date(result.current_observation.pubdate)); // Date
        const formatDate = date.substring(0, date.length - 41); // Date Formated
        const temperature = (result.current_observation.condition.temperature); // Temperature
        const weatherCondition = (result.current_observation.condition.text); // Weather type ("Mostly Cloudy")
        const windSpeed = (result.current_observation.wind.speed); // Wind Speed
        const windChill = (result.current_observation.wind.chill); // Wind Chill
        const humidity = (result.current_observation.atmosphere.humidity); // Humidity

        const dateElement = document.getElementById("date");
        dateElement.innerText = formatDate
        const temperatureElement = document.getElementById("temperature");
        temperatureElement.innerText = temperature + `°`;
        const weatherConditionElement = document.getElementById("weatherCondition");
        weatherConditionElement.innerText = weatherCondition
        const windSpeedElement = document.getElementById("windSpeed");
        windSpeedElement.innerText = windSpeed
        const windChillElement = document.getElementById("windChill");
        windChillElement.innerText = windChill
        const humidityElement = document.getElementById("humidity");
        humidityElement.innerText = humidity

        const returnWeatherIcon = () => {
            if (weatherCondition === "Clear") {
                return "🌞"
            } else if (weatherCondition === "Fair") {
                return "🌤"
            } else if (weatherCondition === "Sunny") {
                return "🌞"
            } else if (weatherCondition === "Mostly Cloudy") {
                return "🌥"
            } else if (weatherCondition === "Mostly Sunny") {
                return "🌤"
            } else if (weatherCondition === "Cloudy") {
                return "☁️"
            } else if (weatherCondition === "Showers") {
                return "🌧"
            } else if (weatherCondition === "Snowing") {
                return "🌨"
            } else if (weatherCondition === "Thunder Storm") {
                return "🌩"
            } else return "🌊"
        }

        const weatherIcon = document.getElementById("weather--icon");
        weatherIcon.innerText = returnWeatherIcon();


        //     } catch (error) {
        //         console.error(error);
        //     }
        // }

        // getWeather();

        const cityElement = document.getElementById("cityName");
        cityElement.innerText = cityName

        // const body = document.getElementById("body");
        // body.style.backgroundImage = `url('https://source.unsplash.com/1920x1080?Seoul')`;

        if (weatherCondition === "Clear") {
            body.style.backgroundImage = `url('https://source.unsplash.com/1920x1080?${sunnyweather}')`;
        } else if (weatherCondition === "Fair") {
            body.style.backgroundImage = `url('https://source.unsplash.com/1920x1080?${clearweather}')`;
        }
        else {
            body.style.backgroundImage = `url('https://source.unsplash.com/1920x1080?${weatherCondition}')`;
        }