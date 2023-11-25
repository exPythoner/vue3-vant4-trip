import dayjs from 'dayjs'

export const formatMonthDay = (date,formatDate='MM月DD日') => {
    return dayjs(date).format(formatDate)
}

export const getDiffDays = (startDate,endDate) => {
    return dayjs(endDate).diff(startDate,'day')
}

