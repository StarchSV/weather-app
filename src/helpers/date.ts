const getShortDayName = (day: number): string => {
  const days = ['Вс', 'Пон', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
  return days[day]
}

const getFullDayName = (day: number): string => {
  const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
  return days[day]
}

const getMonthName = (month: number): string => {
  const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
  return months[month]
}

export {
  getShortDayName,
  getFullDayName,
  getMonthName,
}