import React from 'react'
import styled from 'styled-components';

export default function PercentageBar({ percentage }) {
    const percentageBar = {
        width: `${percentage}%`
    };

    return (
        <Percentage>
            <div className="percentage-values flex">
                <span>0</span>
                <span>50</span>
                <span>100</span>
            </div>
            <div className='percentage-container'>
                <div style={percentageBar} className='percentage'></div>
            </div>
            <p>%</p>
        </Percentage>
    )
}

const Percentage = styled.section`
    width: 80%;

    & .percentage-container {
        height: 10px;
        width: 100%;
        border-radius: 40px;
        background-color: whitesmoke;

        & .percentage {
            background-color: var(--yellow);
            height: 100%;
            border-radius: 40px;
            text-align: right;
        }
    }

    & .percentage-values {
        justify-content: space-between;
        width: 100%;
    }

    & p {
        text-align: right;
    }
`;
