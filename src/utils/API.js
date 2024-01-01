export const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
export const GEO_API_KEY = import.meta.env.VITE_GEO_API_KEY;
export const CITIES_API_URL = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=10&namePrefix=`;
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

export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': GEO_API_KEY,
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};