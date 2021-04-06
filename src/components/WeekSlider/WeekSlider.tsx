import { Swiper, SwiperSlide } from 'swiper/react'
import { WeatherAtMoment, Temperature } from '../../interfaces/CommonInterfaces'
import InfoElement from "../InfoElement/InfoElement"
import { getShortDayName } from '../../helpers/date'
import getIconUrl from '../../helpers/url'
import './style.scss'
import 'swiper/swiper.scss'

const WeekSlider = ({ weeklyForecast }: { weeklyForecast: WeatherAtMoment<Temperature>[] }): JSX.Element => {
  return (
    <div className="week-slider-container">
      <Swiper
        slidesPerView={3}
      >
        {weeklyForecast.map((day) => {
          const { weather, dt, temp: { min, max } } = day
          const { icon } = weather[0]
          const iconUrl = getIconUrl(icon)
          const currentDate = new Date(dt * 1000)
          const shortDayName = getShortDayName(currentDate.getDay())
          const dayNumber = currentDate.getDate()
          return (
            <SwiperSlide key={dt}>
              <InfoElement
                picture={iconUrl}
                parameter={`${shortDayName}, ${dayNumber}`}
                minTemp={Math.floor(min)}
                maxTemp={Math.floor(max)}
                isSliderElement
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default WeekSlider