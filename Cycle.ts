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
<<<<<<< HEAD

=======
class Order {
    items: Cycle[];
    constructor() {
        this.items = [];
    }
    addItem(item: Cycle) {
        this.items.push(item);
    }
    print() {
        console.log("Available Models");
        this.items.forEach(cycle => {
            console.log("---------------------Start-----------------------");
            cycle.print();
            console.log("-----------------------END------------------------");
        });
    }
}
var date1: Date = new Date("11/24/2021");
var date2: Date = new Date();
function calculateHours(date2, date1){
    let hoursCount: number = 0;
    let rent: number = 0;
    hoursCount = Math.round(date2.getTime - date1);
    return hoursCount / (1000 * 60 * 60);
    function calculateTotalRent() {
    let rent: number = 0;
    if(this.getModels == gearCycle) {
    let rent = hoursCount * gear.rentPhour;
    } else if (this.getModels == weightLess) {
        rent = hoursCount * weightLess.rentPhour;
    } else {
        rent = hoursCount * tubeLess.rentPhour;
    }
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

class Cycle1 {
    name: string;
    cost: number;
    spe: string;
 
    constructor(name: string, cost: number, spe: string) {
       this.name = name;
       this.cost = cost;
       this.spe = spe;
    }
    print() {
       console.log("Name of cycle:", this.name);
       console.log("Sub price per month  of the cycle:", this.cost);
       console.log("Specifications of cycle:", this.spe);
    }
 }
 
 class Subcription extends Cycle1 {
    term: number;
 
    constructor(term: number, cost: number) {
       super("abc", 200, "lightingColor");
       this.term = term;
       this.cost = cost;
    }
   
 
    add(value: Subcription): void {
       this.term *= value.term;
       this.cost *= value.cost;
   }
 
   displayData(): void {
      console.log("No of months:", this.term);
      console.log("Price per month:", this.cost);
 
   }
 }
 
 const model1 = new Cycle1("Hero Pro Cycle,", 299, "Weight less");
 model1.print();
 
 console.log("YOUR SUBCRIPTION IS FOR:");
 // 2 months term and price for 1 month
 var sub = new Subcription(2, 299);
 sub.displayData();
 
 //plan1
 const plan = new Subcription(1, 299);
 console.log("term: " + plan.term + " | price: " + plan.cost);
 
 //Plan 2
 const plan2 = new Subcription(2, 2);
 plan.add(plan2);
 console.log("term: " + plan.term + " | price: " + plan.cost);
 

const order = new Order();
order.addItem(gear);
