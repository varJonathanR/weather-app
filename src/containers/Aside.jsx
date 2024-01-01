import React, { useState } from "react";
import Search from "../components/Search"
import { KelvinToCelcius, KelvinToFahrenheit } from "../utils/KelvinConverter";
import { EpochToDate } from "../utils/EpochToDate";
import WeatherIcon from "../components/WeatherIcon";
import styled from "styled-components";

export default function Aside({ currentData, setCurrentData, setForecastData, tempScale }) {
    const [search, setSearch] = useState(false);

    return (
        <AsideSection>
            <section className="search-nav-prev flex">
                <button onClick={() => setSearch(true)}>Search for places</button>
                <i className="bi bi-crosshair"></i>
            </section>
            <section className="icon-container">
                <img
                    className="background"
                    src="../../src/assets/Cloud-background.png"
                    alt="Background"
                />
                { currentData && (
                    <WeatherIcon 
                        src={currentData.weather[0].main}
                        alt={currentData.weather[0].description} />
                ) }
            </section>
            <section className="current-weather">
                { currentData && (
                    <>
                        <h1>
                            { tempScale ? KelvinToCelcius(currentData.main.temp)
                                : KelvinToFahrenheit(currentData.main.temp) }
                            { tempScale ? <span className="temp-sign">°C</span>
                                : <span className="temp-sign">°F</span> }
                        </h1>
                        <h2>{currentData.weather[0].main}</h2>
                        <p>{EpochToDate(currentData.dt)}</p>
                        <p className="current-location flex">
                            <i className="bi bi-geo-alt-fill"></i> 
                            {currentData.name}, {currentData.sys.country}
                        </p>
                    </>
                ) }
            </section>
            <Search 
                search={search} 
                setSearch={setSearch}
                setCurrentData={setCurrentData}
                setForecastData={setForecastData} />
        </AsideSection>
    );
}

const AsideSection = styled.aside`
    float: left;
    width: 25%;
    height: 100%;
    background-color: var(--light-bg-color);
    text-align: center;
    overflow: hidden;
    position: relative;

    .search-nav-prev {
        justify-content: space-between;
    }

    & .icon-container {
        height: 45%;
        width: 100%;
        position: relative;

        & .background, & .weather-icon {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }

        & .background{
            width: calc(100% + 2rem);
            height: 100%;
            object-fit: cover;
            opacity: 0.1;
            left: -1rem;
        }

        & .weather-icon {
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }

    & .current-weather {
        & * {
            color: var(--gray);
            font-size: 17px;
        }

        & h1 {
            font-size: 5rem;
            color: var(--font-color);
            margin: 1rem 0;

            & .temp-sign {
                font-size: .5em;
            }
        }

        & h2 {
            font-size: 2.4rem;
            margin: 2rem 0;
        }

        & .current-location {
            gap: 1rem;
            justify-content: center;
            margin-top: 1rem;
        }
    }

    & .search-nav {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: -400px;
        transition: .5s ease all;
    }

    & .search-nav.active {
        left: 0;
    }

    @media screen and (max-width: 1023px) {
        width: 100%;
        padding-bottom: 5rem;

        & .search-nav {
            left: -1000px;
        }

        & .search-nav.active {
            left: 0;
        }
    }
`;