import "./WeatherApp.css";
import { useState, useEffect } from "react";

const WeatherApp = () => {
    const [city, setCity] = useState("Dombivali");
    const [weatherData, setWeatherData] = useState({});
    const [icon, setIcon] = useState("");

    const fetchWeather = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`);
            const data = await response.json();
            console.log(data); // Check if data is received correctly
            setWeatherData(data);
            if (data.weather && data.weather.length > 0) {
                setIcon(`http://openweathermap.org/img/w/${data.weather[data.weather.length - 1].icon}.png`);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchWeather();
    }, []);

    return (
        <>
            <div className="search-box">
                <h1>Weather App</h1>
                <div className="search-feild">
                    <input type="text" placeholder="Enter City" value={city} onChange={(e) => setCity(e.target.value)} />
                    <button onClick={fetchWeather}>Get Weather</button>
                </div>
            </div>

            <div className="weather-box">
                {
                    weatherData.name ? (
                        <div className="weather-card">
                            <h1>{weatherData.name}</h1>
                            <h2>{weatherData.main.temp}°C</h2>
                            {icon && <img src={icon} alt="weather icon" />}
                            <h3>{weatherData.weather[0].description}</h3>
                        </div>
                    ) : (
                        <h1>No Data Found</h1>
                    )
                }
            </div>
        </>
    );
}

export default WeatherApp;
