import dayjs from 'dayjs'

export const formatMonthDay = (date) => {
    return dayjs(date).format('MM月DD日')
}

export const getDiffDays = (startDate,endDate) => {
    return dayjs(endDate).diff(startDate,'day')
}

