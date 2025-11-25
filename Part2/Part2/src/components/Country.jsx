import {useState, useEffect} from "react"
import axios from 'axios'
const Country = ({country}) => {
    const api_key = import.meta.env.VITE_WEATHER_KEY
    const capital = country.capital?.[0] || country.capital
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        axios
        .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}&units=metric`
        )
        .then((response) =>{
            setWeather(response.data)
        })
    }, [capital, api_key])
    return (
        <div>
            <h1>{country.name.common}</h1><br/>
            <p>Capital: {capital}</p>
            <p>Area: {country.area}</p><br/>
            <h1>Languages</h1>
            <ul>
                {Object.values(country.languages || {}).map(lang =>(
                    <li key={lang}>{lang}</li>
                ))}
            </ul>

            <img src={country.flags.png} width="150"/>

            <h1>Weather in {capital}</h1>
            {weather ? (
                <>
                <p>Temperature: {weather.main.temp} °C</p>
                <img
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                />
                <p>Wind: {weather.wind.speed} m/s</p>
                </>
            ) : (
                <p>Loading weather...</p>
            )}
        </div>
    )
}

export default Country