class Model {
    rentPerHour: number;
    constructor(rentPerHour: number) {
        this.rentPerHour = rentPerHour;
    }
    print() {
        console.log("Rent Per Hours:", this.rentPerHour);
    }

}
const gearCycle = new Model(5);
//gearCycle.print();
const weightLess = new Model(3);
//weighLess.print(); 
const tubeLess = new Model(3);