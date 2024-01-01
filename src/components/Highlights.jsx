import React from 'react'
import Hightlight from './Hightlight'
import { MsToMPH, MetersToMiles } from '../utils/MsToMi'
import styled from 'styled-components'

export default function Hightlights({ currentData }) {
    return (
        <>
            <h1 className='flex'>Today&apos;s  Hightlights</h1>
            { currentData && (
                <HightlightsContainer>
                    <Hightlight
                        desc={"wind"} 
                        data={MsToMPH(currentData.wind.speed)}
                        deg={currentData.wind.deg} />
                    <Hightlight 
                        desc={"humidity"} 
                        data={currentData.main.humidity}
                        percentage={currentData.main.humidity} />
                    <Hightlight 
                        desc={"visibility"} 
                        data={MetersToMiles(currentData.visibility)} />
                    <Hightlight 
                        desc={"pressure"} 
                        data={currentData.main.pressure} />
                </HightlightsContainer>
            ) }
        </>
    )
}

const HightlightsContainer = styled.section`
    margin: 1rem auto;
    width: 60%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    gap: 1rem;

    @media screen and (max-width: 1023px) {
        margin: 1rem auto;
        width: 100%;
        grid-template-columns: 1fr;
    }
`;