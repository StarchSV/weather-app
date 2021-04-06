import getIconUrl from '../../helpers/url'
import { WeatherObject } from '../../interfaces/CommonInterfaces'
import './style.scss'

const CurrentWeather = ({ description, icon }: WeatherObject): JSX.Element => {
  const capitalizedDescription = Array.from(description)
  capitalizedDescription[0] = capitalizedDescription[0].toUpperCase()
  const convertedDescription = capitalizedDescription.join('')

  return (
    <div className="current-weather-container">
      <img src={getIconUrl(icon)} alt=""/>
      <div className="current-weather-container__text">{convertedDescription}</div>
    </div>
  )
}

export default CurrentWeather