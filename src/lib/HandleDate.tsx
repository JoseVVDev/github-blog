import * as dayjs from "dayjs";

export function HandleDate(date: string) {
    if (dayjs().diff(date, 'years') > 1){
        return (`Há ${dayjs().diff(date, 'years')} anos`)
    }

    if (dayjs().diff(date, 'years') > 0){
       return (`Há 1 ano`)
    } 

    if (dayjs().diff(date, 'months') > 1){
        return (`Há ${dayjs().diff(date, 'months')} meses`)
    } 

    if (dayjs().diff(date, 'months') > 0){
        return (`Há 1 mês`)
    } 

    if (dayjs().diff(date, 'weeks') > 1){
        return (`Há ${dayjs().diff(date, 'weeks')} semanas`)
    } 

    if (dayjs().diff(date, 'weeks') > 0){
        return (`Há 1 semana`)
    } 

    if (dayjs().diff(date, 'days') > 1) {
        return (`Há ${dayjs().diff(date, 'days')} dias`)
    } 
    
    if (dayjs().diff(date, 'days') > 0) {
        return (`Há 1 dia`)
    } else {
        return (`Publicado hoje`)
    }
}