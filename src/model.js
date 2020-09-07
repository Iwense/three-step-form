import {Person} from './classes/person'

export const model = [
    new Person ({value: {
        name: 'Alexander',
        surname: 'Grishin',
        email: 'grishin057@gmail.com',
        phone: '+79200832824',
        location: {city: 'Moscow', street: 'Bratislavskaya 31'},
        time: {date:'03.10.20', hour: '02:20 PM'},
        isPersonalDate: false,
        isTroubleInThatLocation: false,
    }})
]