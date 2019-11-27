// import './utils';
// import substract, { square, add } from './utils';
// import isSenior, { canDrink, isAdult } from './person';

// console.log('app.js is running');

// console.log(canDrink(18));
// console.log(isAdult(18));
// console.log(isSenior(65));

// console.log(square(18));
// console.log(add(18, 2));
// console.log(substract(18, 2));

// ====== instaliing NPM modules ======
// install => import => use

// import validator from 'validator';

// console.log(validator.isEmail('test@gmail.com'));

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// Grab the add function from the add.js file in the utils folder
// Grab React from the react npm module
// add(2, 4)

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// class OldSyntax {
//   constructor() {
//     this.name = 'Mike';
//     this.getGreeting = this.getGreeting.bind(this);
//   }
//   getGreeting() {
//     return `Hi, My name is ${this.name}`;
//   }
// }

// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());

// class NewSyntax {
//   name = 'Jen';
//   getGreeting = () => {
//     return `Hi, My name is ${this.name}`;
//   };
// }

// const newSyntax = new NewSyntax();
// const newGreeting = newSyntax.getGreeting;
// console.log(newGreeting());
