/* eslint-disable import/prefer-default-export */
import moment from 'moment'

export const generateTimeSlots = (start: string, end: string, date: string) => {
  const today = moment().format('YYYY-MM-DD')
  const isSameToday = moment(date).isSame(today)
  const currentHour = moment().hour()
  let startHour = parseInt(start.split(':')[0], 10)
  let endHour = parseInt(end.split(':')[0], 10)
  if (isSameToday) {
    if (currentHour >= startHour && currentHour + 1 < endHour) {
      startHour = currentHour + 1
    }
    if (currentHour >= startHour && currentHour + 1 >= endHour) {
      startHour = 0
      endHour = 0
    }
  }

  return Array.from(
    { length: endHour - startHour },
    (_, i) => `${startHour + i}:00`
  )
}
