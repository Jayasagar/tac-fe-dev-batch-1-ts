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
    finalRent() {
        let rentPerHour = this.rentPerHour;
        this.models.forEach(model => {
            rentPerHour = rentPerHour + model.rentPerHour;
        })
        return rentPerHour;
    }
    addModel(model: Model) {
        this.models.push(model); 
    }
}

const heroCycle = new Cycle();
heroCycle.setData("Hero", 5, [gearCycle]);
heroCycle.addModel(gearCycle);
heroCycle.print();

const atlasCycle = new Cycle();
atlasCycle.setData("Atlas", 6, [weightLess]);
atlasCycle.addModel(weightLess);
atlasCycle.print();

const herculesCycle = new Cycle();
herculesCycle.setData("Hercules", 3, [tubeLess]);
herculesCycle.addModel(tubeLess);
herculesCycle.print();

