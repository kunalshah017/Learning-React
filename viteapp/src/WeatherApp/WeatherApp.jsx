import "./WeatherApp.css";
import { useState, useEffect } from "react";

const WeatherApp = () => {

    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState([]);

    const FetchWeather = async () => {
        fetch(`http://api.weatherapi.com/v1/current.json?key=279729a4c3a84f27891221229241904&q=${city}&aqi=no`)
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                setWeatherData(data)
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <div className="search-box">
                <h1>Weather App</h1>
                <div className="search-feild">
                    <input type="text" placeholder="Enter City" value={city} onChange={(e) => setCity(e.target.value)} />
                    <button onClick={FetchWeather}>Get Weather</button>
                </div>
            </div>

            <div className="weather-box">
                {
                    weatherData.location ? (
                        <>
                            <div className="weather-card">
                                <h1>{weatherData.location.name}</h1>
                                <h2>{weatherData.current.temp_c}°C</h2>
                                <img src={weatherData.current.condition.icon} alt="weather icon" />
                                <h3>{weatherData.current.condition.text}</h3>
                            </div>
                        </>
                    ) : <>
                        <h1>No Data Found</h1>
                    </>
                }
            </div>

        </>
    );
}


export default WeatherApp;