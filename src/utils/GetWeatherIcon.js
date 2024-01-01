import { iconData } from "../data/iconData";

export function getWeatherIcon(main, desc) {
    const iconMap = {
        Clear: iconData.clear,
        Clouds: getCloudsIcon(desc),
        Rain: getRainIcon(desc),
        Snow: getSnowIcon(desc),
        Thunderstorm: iconData.thunderstorm
    }

    return iconMap[main] || "";
}

function getCloudsIcon(desc) {
    return desc === "few clouds" || desc === "scattered clouds" 
        ? iconData.lightCloud 
        : iconData.heavyCloud;
}

function getRainIcon(desc) {
    const heavyRain = ["heavy", "extreme", "ragged"];

    return desc.includes("shower")
            ? iconData.shower 
        : desc.includes("light") 
            ? iconData.lightRain
        : heavyRain.some(key => desc.includes(key)) 
            ? iconData.heavyRain
        : iconData.lightRain;
}

function getSnowIcon(desc) {
    const freezeRain = ["sleet", "rain", "shower"];

    return freezeRain.some(k => desc.includes(k))
            ? iconData.sleet
        : desc.includes("heavy") 
            ? iconData.hail
        : iconData.snow;
}