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
    addModel(model: Model) {
        this.models.push(model); 
    }
}
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
herculesCycle.addModel(tubeLess);
herculesCycle.print();