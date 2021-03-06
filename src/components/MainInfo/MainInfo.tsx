import { getFullDayName, getMonthName } from '../../helpers/date'
import './style.scss'

const MainInfo = (): JSX.Element => {
  const currentDate = new Date()
  const dayName = getFullDayName(currentDate.getDay())
  const dayOfMonth = currentDate.getDate()
  const monthName = getMonthName(currentDate.getMonth())
  const year = currentDate.getFullYear()
  const hours = currentDate.getHours()
  const minutes = currentDate.getMinutes()

  const date = `${dayName}, ${dayOfMonth} ${monthName} ${year} | ${hours}:${minutes}`

  return (
    <div className="main-info-container">
      <div className="main-info-container__date">{date}</div>
      <div className="main-info-container__location">
        Москва, Россия
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.93804 2.98668C9.89533 2.82659 9.80859 2.65601 9.74442 2.50667C8.97656 0.661332 7.29882 0 5.94413 0C4.13063 0 2.13327 1.21603 1.86661 3.72256V4.23465C1.86661 4.25603 1.87397 4.448 1.88444 4.54403C2.03392 5.73858 2.97651 7.00812 3.68047 8.20267C4.43783 9.48251 5.22371 10.7415 6.0023 12C6.4824 11.1787 6.96076 10.3467 7.42992 9.54668C7.55779 9.3119 7.70621 9.07727 7.83422 8.85318C7.91953 8.70397 8.08252 8.55476 8.15699 8.41594C8.91432 7.02936 10.1333 5.63206 10.1333 4.256V3.6907C10.1334 3.54152 9.94845 3.01885 9.93804 2.98668ZM5.97733 5.5574C5.44425 5.5574 4.86076 5.29085 4.57276 4.55472C4.52985 4.43754 4.53331 4.20271 4.53331 4.1812V3.85053C4.53331 2.9121 5.33012 2.48535 6.02331 2.48535C6.8767 2.48535 7.53672 3.16811 7.53672 4.0215C7.53672 4.87487 6.83072 5.5574 5.97733 5.5574Z" fill="#0D9FEA"/>
        </svg>
      </div>
    </div>
  )
}

export default MainInfo