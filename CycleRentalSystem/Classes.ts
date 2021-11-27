class Cycle {
    companyName: string;
    rentPerHour: number;
    models: Model[];
    setData(cName:string, rentPHour: number, []): void {
        this.companyName = cName;
        this.rentPerHour = rentPHour;
        this.models = [];
    }
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
const tubeLess = new Model(3);
var Hero = new Cycle();
Hero.setData("Hero", 5, [gearCycle]);
Hero.addModel(gearCycle);
Hero.print();
var Atlas = new Cycle();
Atlas.setData("Atlas", 6, [weightLess]);
Atlas.addModel(weightLess);
Atlas.print();
var Hercules = new Cycle();
Hercules.addModel([tubeLess]);
Hercules.print();