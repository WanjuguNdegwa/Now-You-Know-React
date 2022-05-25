import { useState, useEffect } from 'react'

const WeatherWidget = () => {
  const [latitude, setLatitude] = useState(-1.3052905)
  const [longitude, setLongitude] = useState(36.7698649)
  const [weather, setWeather] = useState()
  const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
      });
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`
    fetch(url)
      .then((res) => res.json())
      .then((data) => setWeather(data))
  }, [latitude, longitude, WEATHER_API_KEY])

  return (
    <>
    {weather && <div>{`${parseInt(weather.main.temp_max) - 273}°C / ${parseInt(weather.main.temp_min) - 273}°C ${weather.name}`}</div>}
    </>
  )
}

export default WeatherWidget