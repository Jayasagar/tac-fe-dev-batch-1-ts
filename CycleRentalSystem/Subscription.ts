import {Model} from './ModelClass'
class Subscription {
    plan: String;
    amountPerplan: Number;
    constructor (plan: String, amountPerplan: Number) {
        super('');
        this.plan = plan;
        this.amountPerplan = amountPerplan;
    }
    print() {
        console.log("Subcsription for:", this.plan, "Rs.", this.amountPerplan);
    }
}
const LECycle = new Model('Light weight Cycle');
LECycle.print();

var plan1 = new Subscription('weekly', 50);
plan1.print();

var plan2 = new Subscription('monthly', 300);
plan2.print();

var plan3 = new Subscription('quaterly', 1000);
plan3.print();   

const h = new Model('Hero Gear Cycle');
h.print();
var plan4 = new Subscription('Half Yearly', 2000);
plan4.print();

var plan5 = new Subscription('Annually', 2499);
plan5.print();
