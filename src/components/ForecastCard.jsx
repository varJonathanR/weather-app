import React from 'react'
import WeatherIcon from './WeatherIcon'
import { KelvinToCelcius, KelvinToFahrenheit } from '../utils/KelvinConverter'
import { EpochToDate } from '../utils/EpochToDate'
import styled from 'styled-components'

export default function ForecastCard({ dt, src, alt, tempScale, hight, low }) {
    return (
        <ForecastCards>
            <h3>{EpochToDate(dt)}</h3>
            <div className="img-container">
                <WeatherIcon src={src} alt={alt} />
            </div>
            { tempScale ? (
                <p className='flex'>
                    <span className="forecast-temp hight">{KelvinToCelcius(hight)}°C</span>
                    <span className="forecast-temp">{KelvinToCelcius(low)}°C</span>
                </p>
            ) : (
                <p className='flex'>
                    <span className="forecast-temp hight">{KelvinToFahrenheit(hight)}°F</span>
                    <span className="forecast-temp">{KelvinToFahrenheit(low)}°F</span>
                </p>
            ) }
        </ForecastCards>
    )
}

const ForecastCards = styled.article.attrs(props => ({
    className: "forecast-card flex"
}))`
    background-color: var(--light-bg-color);
    flex-direction: column;
    height: 200px;
    width: 170px;
    padding: 1rem 2rem;
    gap: 1rem;
    position: relative;

    & .flex {
        width: 100%;
        justify-content: space-between;
        margin-bottom: 1rem;
        position: absolute;
        bottom: 0;
        padding: 0 2rem;

        & span {
            font-size: 18px;
            font-weight: 700;
            color: var(--gray);
        }

        & span.active, & .hight {
            color: var(--font-color);
        }
    }

    & .img-container {
        width: 80px;
        height: 80px;
        margin: 5px auto;

        & img {
            width: 100%;
            object-fit: contain;
        }
    }

    @media screen and (max-width: 1023px) {
        width: 210px;
    }
`;