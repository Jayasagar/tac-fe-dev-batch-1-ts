export class Model {
    name: string;
    rentPerHour: number;
    constructor(name: string, rentPerHour: number) {
        this.name = name;
        this.rentPerHour = rentPerHour;
    }
    print() {
        console.log("Model Name:", this.name, ", Rent Per Hours:", this.rentPerHour);
    }
}
const gearCycle = new Model("gearCycle", 5);
//gearCycle.print();
const weightLess = new Model("weightLess", 6);
//weighLess.print();
const tubeLess = new Model("tubeLess", 3);
tubeLess.print();