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
    addModel() {
        this.models.push(model); 
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
var heroCycle = new Cycle();
heroCycle.setData("Hero", 5, [gearCycle]);
heroCycle.addModel(gearCycle);
heroCycle.print();
var atlasCycle = new Cycle();
atlasCycle.setData("Atlas", 6, [weightLess]);
atlasCycle.addModel(weightLess);
atlasCycle.print();
var herculesCycle = new Cycle();
herculesCycle.setData("Hercules", 3, [tubeLess]);
herculesCycle.addModel([tubeLess]);
herculesCycle.print();