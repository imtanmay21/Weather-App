import './WeatherIcon.css';

const WeatherIcon = props => {

    if (props.desc === "ThunderStorm") {
        return (
            <div className="weather-icon">
                <p>ThunderStorm</p>
                <img src="http://openweathermap.org/img/wn/11n@2x.png"></img>
            </div>
        )
    } else if (props.desc === "Drizzle") {
        return (
            <div className="weather-icon">
                <p>ThunderStorm</p>
                <img src="http://openweathermap.org/img/wn/09n@2x.png"></img>
            </div>
        )
    } else if (props.desc === "Rain") {
        return (
            <div className="weather-icon">
                <p>Rain</p>
                <img src="http://openweathermap.org/img/wn/10n@2x.png"></img>
            </div>
        )
    } else if (props.desc === "Snow") {
        return (
            <div className="weather-icon">
                <p>Snow</p>
                <img src="http://openweathermap.org/img/wn/13n@2x.png"></img>
            </div>
        )
    } else if (props.desc === "Mist" || props.desc === "Smoke" || props.desc === "Haze" || props.desc === "Dust" || props.desc === "Fog" || props.desc === "Sand" || props.desc === "Ash" || props.desc === "Squall" || props.desc === "Tornado") {
        return (
            <div className="weather-icon">
                <p>Dust</p>
                <img src="http://openweathermap.org/img/wn/50n@2x.png"></img>
            </div>
        )
    } else if (props.desc === "Clear") {
        return (
            <div className="weather-icon">
                <p>Clear</p>
                <img src="http://openweathermap.org/img/wn/01n@2x.png"></img>
            </div>
        )
    } else if (props.desc === "Clouds") {
        return (
            <div className="weather-icon">
                <p>Clouds</p>
                <img src="http://openweathermap.org/img/wn/02n@2x.png"></img>
            </div>
        )
    }

}

export default WeatherIcon;