import './WeatherDisplay.css';
import WeatherIcon from './WeatherIcon';

const WeatherDisplay = props => {

    const weatherData = props.data;
    console.log(weatherData);
    if (weatherData.length === 0) {

        return (
            <div className="weather-display">
                <h3>Nothing to show :(</h3>
            </div>
        )

    } else {
        const weather = {
            temp: Number.parseFloat(weatherData[0].main.temp - 273).toFixed(1),
            feelsLike: Number.parseFloat(weatherData[0].main.feels_like - 273).toFixed(1),
            tempMin: Number.parseFloat(weatherData[0].main.temp_min - 273).toFixed(1),
            tempMax: Number.parseFloat(weatherData[0].main.temp_max - 273).toFixed(1),
            humidity: weatherData[0].main.humidity,
            desc: weatherData[0].weather[0].main
        }

        console.log(weather);

        return (
            <div className="weather-display">
                <div className="weather-display__main">

                    <WeatherIcon desc={weather.desc} />

                    <div className="weather-display__city">
                    <i class="fas fa-map-marker-alt"></i>
                        <p className="weather-display__city">{props.city}</p>
                    </div>

                    <h1>{weather.temp} °C</h1>
                    <p>Feels Like {weather.feelsLike} °C</p>
                </div>

                <div className="weather-display__details">
                    <h3>More Details</h3>

                    <ul className="weather-display__list">
                        <li>Max Temperature - {weather.tempMax} °C</li>
                        <li>Min Temperature - {weather.tempMin} °C</li>
                        <li>Humidity - {weather.humidity} %</li>
                    </ul>

                </div>
            </div>
        );

    }
}

export default WeatherDisplay;