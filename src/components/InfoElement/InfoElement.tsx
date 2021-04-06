import './style.scss'

type Props = {
  picture: string,
  parameter: string,
  description?: string;
  minTemp?: number;
  maxTemp?: number;
  isSliderElement?: boolean;
}

const InfoElement = ({ picture, parameter, description, isSliderElement, minTemp, maxTemp }: Props): JSX.Element => {
  return (
    <div className={`info-element-container ${isSliderElement ? 'info-element-container--slider' : ''}`}>
      <img className="info-element-container__picture" src={picture} alt=""/>
      <div className="info-element-container__parameter">{parameter}</div>
      <div className="info-element-container__description">
        {minTemp || maxTemp ? (
          <>
            <span>{maxTemp}°C&#8593;</span>&nbsp;
            <span>{minTemp}°C&#8595;</span>
          </>
        ) : description}
      </div>
    </div>
  )
}

export default InfoElement