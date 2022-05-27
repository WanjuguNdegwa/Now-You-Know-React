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
    {weather && <div>{`Currently ${parseInt(weather.main.temp) - 273}°C in ${weather.name}, ${weather.weather[0].description}`}</div>}
    </>
  )
}

export default WeatherWidget