const myTesla = {
	maxSpeed: 250,
	batteryLife: 300,
	weight: 123
};

Object.isFrozen(myTesla); // false
Object.freeze(myTesla);
Object.isFrozen(myTesla); // true
/*Accepts an object as argument, and returns true if the object is frozen, false otherwise.*/

myTesla.color = 'blue';
console.log(myTesla.color); // undefined

delete myTesla.batteryLife;
console.log(myTesla.batteryLife); // 300

Object.defineProperty(myTesla, 'batteryLife'); // TypeError: Cannot redefine property: batteryLife

myTesla.batteryLife = 400;
console.log(myTesla.batteryLife); // 300