import moment from "moment";

let currentDate = moment()

export  const addDay = () => {

    return currentDate.add(1, 'day').format('DD.MM.YYYY')
}

export const subtractDay = () => {

    return currentDate.subtract(1, 'day').format('DD.MM.YYYY')
}