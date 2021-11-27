class Cycle {
    rentPerHour: number;
    models: Model[];
    print() {
        console.log("Rent Per Hours:", this.rentPerHour);
        this.models.forEach(model => {
            model.print();
        });
    }
}
class Model {
    rentPerHour: number;
    constructor(rentPerHour: number) {
        this.rentPerHour = rentPerHour;
    }
    print() {
        console.log("Rent Per Hours:", this.rentPerHour);
    }

}
class Order {
    
}
const gearCycle = new Model(5);
//gearCycle.print();
const weightLess = new Model(3);
//weighLess.print(); 
var gear = new Cycle();


