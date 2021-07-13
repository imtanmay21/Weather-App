import './WeatherShowcase.css';

import { useState } from "react";

import HTTP from "../APICustom/CustomFETCH";
import WeatherSearch from "./WeatherSearch";
import WeatherDisplay from "./WeatherDisplay";

const WeatherShowcase = () => {

    const [weatherData, setWeatherData] = useState([])
    const [cityName, setCityName] = useState('');

    const onGetCity = city => {
        const http = new HTTP(city);
        setCityName(city);
        http.get()
            .then(data => {
                setWeatherData(data.list)
            })
            .catch(err => {
                console.log(err);
                setWeatherData([]);
            });
    }

    return (
        <div className="weather-showcase">
            <WeatherSearch getCity={onGetCity} />
            <WeatherDisplay data={weatherData} city={cityName} />
        </div>
    )

}

export default WeatherShowcase;