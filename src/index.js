import * as css from './css/style.css'
import {Form} from './classes/forms'


let stepNumber = 1
const site = document.querySelector('#app')

const form = new Form('#app', stepNumber)
form.formRender()