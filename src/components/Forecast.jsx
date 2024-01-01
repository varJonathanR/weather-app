import React from 'react'
import ForecastCard from './ForecastCard';
import styled from 'styled-components'
import { DailyWeather } from '../utils/DailyWeather';

export default function Forecast({ forecastData, tempScale }) {
    const averageWeather = DailyWeather(forecastData);
    console.log(averageWeather);

    return (
        <ForecastContainer>
            { forecastData && averageWeather.map(forecast => (
                <ForecastCard key={forecast.dt} 
                    dt={forecast.dt} src={forecast.main} 
                    alt={forecast.desc} tempScale={tempScale} 
                    hight={forecast.temp_max} low={forecast.temp_min} />
            )) }
        </ForecastContainer>
    )
}

const ForecastContainer = styled.section.attrs(props => ({
    className: "flex"
}))`
    padding: 1rem 5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    place-items: center;
    gap: 1rem;

    @media screen and (max-width: 1023px) {
        padding: 1rem 1rem;
    }
`;