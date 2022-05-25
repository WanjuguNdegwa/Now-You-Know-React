import WeatherWidget from "./WeatherWidget"

const Header = ({weather, location}) => {
  return (
    <header className="d-flex justify-content-center align-items-end">
        <h1>
            Now You Know
        </h1>
        <WeatherWidget />
    </header>
  )
}

export default Header