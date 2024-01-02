import React from 'react'
import PercentageBar from './PercentageBar';
import { getWindDirection } from '../utils/GetWindDirection';
import styled from 'styled-components';

export default function Hightlight({ data, desc, deg, percentage }) {
    const labelMap = {
        wind: { label: "Wind Status", unit: "mph" },
        humidity: { label: "Humidity", unit: "%" },
        visibility: { label: "Visibility", unit: "miles" },
        pressure: { label: "Air Pressure", unit: "mb" }
    };

    const { label, unit } = labelMap[desc] || {};

    return (
        <>
            <HightlightCard className={`hightlight flex ${deg || percentage ? "" : "small-card"}`}>
                <p>{label}</p>
                <h1 className='hightlight-title'>{data} {unit}</h1>
                { desc === "humidity" ? 
                        <PercentageBar percentage={percentage} />
                    : desc === "wind" ? 
                        <p className='direction flex'>
                            <i className="bi bi-compass-fill"></i>
                            { getWindDirection(deg) }
                        </p>
                    : ""
                }
            </HightlightCard>
        </>
    )
}


const HightlightCard = styled.article`
    padding: 1rem;
    flex-direction: column;
    justify-content: center;
    background-color: var(--light-bg-color);
    height: 150px;
    width: 400px;

    &.small-card {
        height: 100px;
    }

    & .hightlight-title {
        font-size: 2.5rem;
        margin: 0;
    }

    & p {
        font-size: 1rem;
    }

    & .direction {
        gap: .5rem;

        & i {
            font-size: 1rem;
        }
    }

    @media screen and (max-width: 1023px) {
        width: 325px;
    }
`;