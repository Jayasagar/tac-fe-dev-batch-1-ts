export class Model {
    model: String;
    constructor (model: String) {
        this.model = model;
    }
    print() {
        console.log("model name:", this.model);
    }
}
const gearCycle = new Model('gearCycle');
gearCycle.print();