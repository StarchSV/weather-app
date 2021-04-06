import './style.scss'

type Props = {
  min: number;
  max: number;
}

const MinMaxTemperature = ({ min, max }: Props): JSX.Element => (
  <div className="min-max-temperature-container">
      <div className="min-max-temperature-container__item">{Math.floor(max)}°C&nbsp;
        <span>&#8593;</span>
      </div>
      <div className="min-max-temperature-container__item">{Math.floor(min)}°C&nbsp;
        <span>&#8595;</span>
      </div>
  </div>
)

export default MinMaxTemperature