import { useState } from "react";

export const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
export const CITIES_API_URL = "http://api.geonames.org/searchJSON?username=varJonathanR&featureClass=P&style=short&q=";
export const CURRENT_WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather?";
export const FORECAST_WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/forecast?";

export function FetchAPI(apiURL, lat, lon, setData) {
    fetch(`${apiURL}lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
        .then(repsonse => repsonse.json())
        .then(data => {
            setData(data);
        })
        .catch(error => console.log(error));
}