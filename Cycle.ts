class Cycle{
    rentPhour: number;
    models: Model[];
    setData(crentPhour: number, cmodels: Model[]):void{
        this.rentPhour = crentPhour;
        this.models = cmodels;
    }
    print() {
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
    name: string;
    rentPhour: number;
    constructor(name: string, rentPhour: number){
        this.name = name;
        this.rentPhour = rentPhour;
    }
    print() {
        console.log("Model Name:", this.name, "Rent Per Hour:", this.rentPhour);
    }
}
var date1: Date = new Date("11/24/2021");
var date2: Date = new Date();
function calculateHours(date2, date1){
    let hoursCount: number = 0;
    let rent: number = 0;
    hoursCount = Math.round(date2.getTime - date1);
    return hoursCount / (1000 * 60 * 60);
    if(this.getModels == gearCycle) {
    let rent = hoursCount * gear.rentPhour;
    } else if (this.getModels == weightLess) {
        rent = hoursCount * weightLess.rentPhour;
    } else {
        rent = hoursCount * tubeLess.rentPhour;
    }
    console.log("Total Rent:", rent);
}
const gearCycle = new Model("gearCycle", 5);
gearCycle.print();
const weightLess = new Model("weightLess", 6);
weightLess.print();
const tubeLess = new Model("tubeLess", 3);
tubeLess.print();
const gear = new Cycle();
gear.setData(5, [gearCycle]);
gear.print();
