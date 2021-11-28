import {Model} from './ModelClass'
class Subcription extends Model {
    plan: String;
    amountPerplan: Number;
    constructor (plan: String, amountPerplan: Number) {
        super(3);
        this.plan = plan;
        this.amountPerplan = amountPerplan;
    }
    print() {
        console.log("Subcsription for.", this.plan, "Rs.", this.amountPerplan);
    }
}

var plan1 = new Subcription('weekly', 50);
plan1.print();
var plan2 = new Subcription('monthly', 300);
plan2.print();
var plan3 = new Subcription('quaterly', 1000);
plan3.print();   
