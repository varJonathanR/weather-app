function KelvinToCelcius(K) {
    const CELSIUS = K - 273.15;
    return Math.round(CELSIUS);
}

function KelvinToFahrenheit(K) {
    const FAHRENHEIT = (K - 273.15) * 9/5 + 32;
    return Math.round(FAHRENHEIT);
}

export { KelvinToCelcius, KelvinToFahrenheit }