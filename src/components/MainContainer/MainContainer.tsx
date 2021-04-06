import CurrentTemperature from '../CurrentTemperature/CurrentTemperature'
import CurrentWeather from '../CurrentWeather/CurrentWeather'
import InfoElement from '../InfoElement/InfoElement'
import MainInfo from '../MainInfo/MainInfo'
import MinMaxTemperature from '../MinMaxTemperature/MinMaxTemperature'
import humidityIcon from '../../img/weather-icons/humidity.svg'
import barometer from '../../img/weather-icons/barometer.svg'
import wind from '../../img/weather-icons/wind.svg'
import sunriseIcon from '../../img/weather-icons/sunrise.svg'
import sunsetIcon from '../../img/weather-icons/sunset.svg'
import sandClock from '../../img/weather-icons/sand-clock.svg'
import './style.scss'
import WeekSlider from '../WeekSlider/WeekSlider'
import { WeatherData } from '../../interfaces/CommonInterfaces'

type Props = {
  weatherData: WeatherData;
}

const MainContainer = ({ weatherData }: Props): JSX.Element => {
  const { current, daily} = weatherData
  const { weather, temp, humidity, pressure, wind_speed, sunset, sunrise } = current
  const { description, icon } = weather[0]
  const { temp: minMaxTemperature } = daily[0]
  const { min, max} = minMaxTemperature
  const weeklyForecast = daily.slice(1)
  const convertedPressure = Math.floor(pressure * 0.750064)
  const sunriseDateObject = new Date(sunrise * 1000)
  const sunsetDateObject = new Date(sunset * 1000)
  const sunriseTime = `${sunriseDateObject.getHours()}:${sunriseDateObject.getMinutes()}`
  const sunsetTime = `${sunsetDateObject.getHours()}:${sunsetDateObject.getMinutes()}`
  const dayTimeInSeconds = (sunset - sunrise)
  const dayTimeInHours = Math.floor(dayTimeInSeconds / 3600)
  const dayTimeMinutes = Math.floor(dayTimeInSeconds % 3600 / 60)

  return (
    <main className="main-container">
    <MainInfo />
    <div className="info-column-container">
      <div className="info-column-container__column">
        <div className="info-column-container__column-item">
          <CurrentWeather description={description} icon={icon} />
        </div>
        <div className="info-column-container__column-item">
          <InfoElement picture={humidityIcon} parameter={`${humidity}%`} description="Влажность"/>
        </div>
        <div className="info-column-container__column-item">
          <InfoElement picture={sunriseIcon} parameter={sunriseTime} description="Рассвет"/>
        </div>
      </div>
      <div className="info-column-container__column">
        <div className="info-column-container__column-item">
          <CurrentTemperature temperature={temp} />
        </div>
        <div className="info-column-container__column-item">
          <InfoElement picture={barometer} parameter={`${convertedPressure} мм рт ст`} description="Давление"/>
        </div>
        <div className="info-column-container__column-item">
          <InfoElement picture={sunsetIcon} parameter={sunsetTime} description="Закат"/>
        </div>
      </div>
      <div className="info-column-container__column">
        <div className="info-column-container__column-item">
          <MinMaxTemperature min={min} max={max} />
        </div>
        <div className="info-column-container__column-item">
          <InfoElement picture={wind} parameter={`${wind_speed} м/с`} description="Ветер"/>
        </div>
        <div className="info-column-container__column-item">
          <InfoElement picture={sandClock} parameter={`${dayTimeInHours}:${dayTimeMinutes}`} description="Световой день"/>
        </div>
      </div>
    </div>
    <WeekSlider weeklyForecast={weeklyForecast} />
  </main>
  )
}
  
export default MainContainer