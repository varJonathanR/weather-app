import React from 'react'
import { getWeatherIcon } from '../utils/GetWeatherIcon'

export default function WeatherIcon({ src, alt }) {
    return (
        <>
            <img 
                className='weather-icon'
                src={getWeatherIcon(src, alt)} 
                alt={alt} />
        </>
    )
}
