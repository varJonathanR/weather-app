import React, { useState } from 'react'
import Hightlights from '../components/Highlights';
import styled from 'styled-components'
import Forecast from '../components/Forecast';
import Footer from '../components/Footer';

export default function Main({ currentData, forecastData, tempScale, setTempScale }) {

    return (
        <MainSection>
            <p className="temp-scales flex">
                <span 
                    className={`temp flex ${tempScale ? "active" : ""}`}
                    onClick={() => setTempScale(true)} >°C</span>
                <span 
                    className={`temp flex ${tempScale ? "" : "active"}`}
                    onClick={() => setTempScale(false)} >°F</span>
            </p>
            <Forecast forecastData={forecastData} tempScale={tempScale} />
            <Hightlights currentData={currentData} />
            <Footer />
        </MainSection>
    )
}

const MainSection = styled.main`
    padding: 1rem;

    & .temp-scales {
        justify-content: end;
        padding: 0 1rem;

        & .temp {
            margin-left: 10px;
            width: 30px;
            height: 30px;
            padding: 8px;
            border-radius: 50%;
            background-color: var(--gray);
            font-size: 18px;
            font-weight: 700;
            justify-content: center;
            transition: .5s ease all;
            cursor: pointer;
        }

        & .temp:hover, & .temp.active {
            background-color: var(--font-color);
            color: var(--bg-color);
        }
    }

    & h1 {
        font-size: 1.8rem;
        margin: 1rem 0;
        padding: 0 2rem;
    }

    @media screen and (max-width: 1023px) {
        & .temp-scales {
            margin-top: 42rem;
        }

        & h1 {
            margin: 2rem 0;
            padding: 0 1rem;
        }
    }
`;