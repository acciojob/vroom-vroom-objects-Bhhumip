// Complete the js code
//function Car(make, model) {}
class Car{
	constructor(make,model){
		this.make = make;
		this.model = model;
	}
	getMakeModel(){
		return `${this.make} ${this.model}`
	}
}
class SportsCar extends Car{
	constructor(make,model,topSpeed){
		this.make = make;
		this.model = model;
		this.topSpeed = topSpeed;
	}
   getTopSpeed(){
	   return `${this.topSpeed}`;
   }
}

//function SportsCar(make, model, topSpeed) {}

const car = new Car('Hyundai','Hyd-101');
console.log(car.getMakeModel());

const sportsCar = new SportsCar('Ferrari','ferr-100',500);
cconsole.log(SportsCar.getMakeModel());
console.log(SportsCar.getTopSeed());

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
