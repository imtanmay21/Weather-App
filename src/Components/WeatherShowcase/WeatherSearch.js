import './WeatherSearch.css'; 

import { useState } from "react";

const WeatherSearch = props => {

    const [cityName, setCityName] = useState('')
    const [inputValue, setInputValue] = useState('');

    const enteredCityHandler = event => {
        setCityName(event.target.value);
        setInputValue(event.target.value);
    }

    const searchHandler = () => {
        props.getCity(cityName);
        setInputValue('')
    }

    return (

        <div className="weather-search">
            <div className="weather-search__bar">
                <input className="weather-search__input" value={inputValue} onChange={enteredCityHandler} type="text" placeholder="Search for city" />
                <i onClick={searchHandler} className="fas fa-search weather-search__btn"></i>
            </div>
        </div>

    )

}

export default WeatherSearch;