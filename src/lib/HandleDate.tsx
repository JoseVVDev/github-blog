import * as dayjs from "dayjs";

export function HandleDate(date: string) {
    let timeframe = '';

    if (dayjs().diff(date, 'years') > 1){
        timeframe = `Há ${dayjs().diff(date, 'years')} anos`
    } else 
    if (dayjs().diff(date, 'years') > 0){
        timeframe = `Há 1 ano`
    } else 
    if (dayjs().diff(date, 'months') > 1){
        timeframe = `Há ${dayjs().diff(date, 'months')} meses`
    } else 
    if (dayjs().diff(date, 'months') > 0){
        timeframe = `Há 1 mês`
    } else 
    if (dayjs().diff(date, 'weeks') > 1){
        timeframe = `Há ${dayjs().diff(date, 'weeks')} semanas`
    } else 
    if (dayjs().diff(date, 'weeks') > 0){
        timeframe = `Há 1 semana`
    } else 
    if (dayjs().diff(date, 'days') > 1) {
        timeframe = `Há ${dayjs().diff(date, 'days')} dias`
    } else 
    if (dayjs().diff(date, 'days') > 0) {
        timeframe = `Há 1 dia`
    } else {
        timeframe = `Publicado hoje`
    }

    return (timeframe)
}