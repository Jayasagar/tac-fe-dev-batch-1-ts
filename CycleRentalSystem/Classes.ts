class Cycle {
    rentPerHour: number;
    models: Model[];
    print() {
        console.log("Rent Per Hous:", this.rentPerHour);
        this.models.forEach(model => {
            model.print();
        });
    }
}
class Model {

}
class Order {
    
}
var gear = new Cycle();


