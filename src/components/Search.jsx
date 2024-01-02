import React, { useState } from 'react'
import { CITIES_API_URL, CURRENT_WEATHER_API_URL, FORECAST_WEATHER_API_URL, options } from '../utils/API';
import { removeSpecialCharacters } from '../utils/RemSpeCha';
import styled from 'styled-components';
import Loader from './Loader';
import { FetchAPI } from '../utils/API';

export default function Search({ search, setSearch, setCurrentData, setForecastData }) {
    const [searchData, setSearchData] = useState(null);
    const [city, setCity] = useState("");
    const [isSearchingCity, setIsSearchingCity] = useState(false);

    const handleCityChange = (c) => {
        setCity(c.target.value);
    };

    console.log(searchData)

    const searchCity = () => {
        setIsSearchingCity(true);

        fetch(CITIES_API_URL + city, options)
            .then((response) => response.json())
            .then((data) => {
                const filteredData = data?.data.filter(cities => {
                    const cleanCityName = removeSpecialCharacters(cities.city);
                    const cleanSearch = removeSpecialCharacters(city);

                    return cleanCityName === cleanSearch;
                });

                setSearchData(filteredData)
            })
            .catch((error) => console.log(error))
            .finally(() => setIsSearchingCity(false));
    };

    const handleInsertSearch = (lon, lat) => {
        setSearch(false);
        FetchAPI(CURRENT_WEATHER_API_URL, lat, lon, setCurrentData);
        FetchAPI(FORECAST_WEATHER_API_URL, lat, lon, setForecastData);
    };

    return (
        <SearchNav className={`search-nav ${search ? "active" : ""}`}>
            <div className="flex">
                <label className='flex'>
                    <i className="bi bi-search"></i>
                    <input
                        type="text"
                        placeholder='Search location'
                        value={city}
                        onChange={handleCityChange}
                    />
                </label>
                <button onClick={searchCity}>Search</button>
            </div>
            <section className='results'>
                { isSearchingCity ? (
                    <Loader />
                ) : !isSearchingCity && !searchData ? (
                    <p>No results found!</p>
                ) : (
                    searchData.map(city => (
                        <p
                            key={city.id}
                            onClick={() => handleInsertSearch(city.longitude, city.latitude)}
                        >{`${city.name}, ${city.countryCode}`}<i className="bi bi-caret-right"></i></p>
                    ))
                )}
            </section>
        </SearchNav>
    );
}

const SearchNav = styled.section`
    padding: 1rem;

    & label {
        padding: 9px;
        width: 100%;
    }

    & .bi {
        color: var(--gray);
        transition: .5s ease all;
    }

    & input {
        outline: none;
        background-color: transparent;
        color: var(--font-color);
        border: none;
        width: 100%;
    }

    & button {
        background-color: var(--blue);
        color: var(--font-color);
    }

    & .flex {
        justify-content: space-between;
        gap: 1rem;
    }

    & .results {
        margin-top: 1rem;
    }

    & p {
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 10px;
        transition: all .5s ease;
        border: 1px solid transparent;
    }

    & label, & p:hover {
        border: 1px solid var(--gray);

        & i {
            color: var(--font-color);
        }
    }
`;