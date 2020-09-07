import {form} from './helper'


export function firstStep(){
    const value = [
        inputAC('text','name', 'Имя', 'required'),
        inputAC('text','surname', 'Фамилия') 
    ]
    return form(value)
}

export function secondStep(){

    const value = [
        inputAC('email','email', 'Email'),
        inputAC('phone','phone', 'Телефон'),
        inputAC('text','location', 'Адресс'),
        inputAC('date','date', 'Дата'),
    ]
    return form(value)
}

export function thirdStep(){
    
    const value = [
        inputAC('checkbox','personalData'),
        inputAC('checkbox','isTrouble'),
    ]
    return form(value, 'Отправить')
}


const inputAC = (type,name,placeholder = '', isRequired = '', func = '', value='') => ({type,name,placeholder,isRequired,func, value})