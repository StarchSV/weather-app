import './style.scss'

const CurrentTemperature = ({ temperature }: { temperature: number }): JSX.Element => (
  <div className="current-tepmerature-container">
    <span>{Math.floor(temperature)}</span>
    <span>°C</span>
  </div>
)

export default CurrentTemperature