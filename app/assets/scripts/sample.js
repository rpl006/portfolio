function Person(fullName, favColor){
	this.name = fullName;
	this.color = favColor;
	this.greet = function(){
		console.log("Hello !, this is "+ this.name +" and my fav. color is "+ this.color);
	}
}

var john = new Person("Ram Lamichhane", "blue");
john.greet();

var ram = new Person("John Hari","green");
ram.greet();


//Seperate file example

var $ =require('jquery');
//var Person = require('./modules/Person');
import Person from './modules/Person';

class Adult extends Person{
	payTaxes(){
		console.log(this.name +" owes "+ "$40.00 in taxes.");
	}
}
alert("webpack done!");


var john = new Person("Ram Lamichhane", "blue");
john.greet();

var ram = new Adult("John Hari","Red");
ram.greet();
ram.payTaxes();

//Seperate file example
class Person{
	
	constructor(fullName, favColor){
		this.name = fullName;
		this.color = favColor;
	}
	
	greet(){
		console.log("Hello yo !, this is "+ this.name +" and my fav. color is "+ this.color);
	}
}

//module.exports = Person;

export default Person;