import {firstStep, secondStep, thirdStep} from '../utilits/steps'
import { Person } from './person'


export class Form {
    constructor(selector,stepNumber){
        this.$site = document.querySelector(selector)
        this.stepNumber = stepNumber
    }

    formRender(){



        const html = 
        this.stepNumber === 1 ? firstStep() :
        this.stepNumber === 2 ? secondStep() :
        this.stepNumber === 3 ? thirdStep() : `<p class="form">Данные успешно отправлены</p>`

        this.render(html)
    }

    render(html){
        this.$site.innerHTML = ''
        this.$site.insertAdjacentHTML('beforeend', html)
        this.$form = document.querySelector('.form')
        this.$form.addEventListener('submit', this.saveAndSlide.bind(this))
    }

    saveAndSlide(event){
        event.preventDefault()

        const type = event.target.name
        //let person = new Person()
        switch(this.stepNumber){
            case 1:{
                
                break
            } 
            case 2:{
                
                break
            } 
            case 3:{
                
                break
            }
            default:{break}
        }
        let value = event.target.name.value



        this.formRender(++this.stepNumber)
    }

}
