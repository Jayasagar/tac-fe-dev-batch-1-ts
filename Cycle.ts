class Cycle{
    name: string;
    rentPhour: number;
    models: Model[];
    setData(cname:string, crentPhour: number, cmodels: Model[]):void{
        this.name = cname;
        this.rentPhour = crentPhour;
        this.models = cmodels;
    }
    print() {
        console.log("Cycle Name:", this.name);
        console.log("Rent Per Hour:", this.rentPhour);
        this.models.forEach(model => {
            model.print();
        });
    }
    addModel(model: Model) {
        this.models.push(model);
    }
}
class Model{
    name1: string;
    rentPhour1: number;
    constructor(name1: string, rentPhour1: number){
        this.name1 = name1;
        this.rentPhour1 = rentPhour1;
    }
    print() {
        console.log("Model Name:", this.name1, "Rent Per Hour:", this.rentPhour1);
    }
}
const gearCycle = new Model("gearCycle", 5);
gearCycle.print();
const weightLess = new Model("weightLess", 6);
weightLess.print();
const tubeLess = new Model("tubeLess", 3);
tubeLess.print();
const gear = new Cycle();
gear.setData("Hero", 5, [gearCycle]);
gear.print();
