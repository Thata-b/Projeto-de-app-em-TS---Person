// Import stylesheets
import './style.css';
import {Person} from './person';
// Write TypeScript code!

let person = new Person('Thata', 'B-', 'S-', '1842', '');

const appfullName: HTMLElement = document.getElementById('person.fullName');
appfullName.innerHTML = person.getFullName();

const appAge: HTMLElement = document.getElementById('person.age');
appAge.innerHTML = 'Idade: ' + person.getAge();