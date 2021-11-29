var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Cycle = /** @class */ (function () {
    function Cycle() {
    }
    Cycle.prototype.setData = function (crentPhour, cmodels) {
        this.rentPhour = crentPhour;
        this.models = cmodels;
    };
    Cycle.prototype.print = function () {
        console.log("Rent Per Hour:", this.rentPhour);
        this.models.forEach(function (model) {
            model.print();
        });
    };
    Cycle.prototype.addModel = function (model) {
        this.models.push(model);
    };
    return Cycle;
}());
var Model = /** @class */ (function () {
    function Model(name, rentPhour) {
        this.name = name;
        this.rentPhour = rentPhour;
    }
    Model.prototype.print = function () {
        console.log("Model Name:", this.name, "Rent Per Hour:", this.rentPhour);
    };
    return Model;
}());
var date1 = new Date("11/24/2021");
var date2 = new Date();
function calculateHours(date2, date1) {
    var hoursCount = 0;
    var rent = 0;
    hoursCount = Math.round(date2.getTime - date1);
    return hoursCount / (1000 * 60 * 60);
    if (this.getModels == gearCycle) {
        var rent_1 = hoursCount * gear.rentPhour;
    }
    else if (this.getModels == weightLess) {
        rent = hoursCount * weightLess.rentPhour;
    }
    else {
        rent = hoursCount * tubeLess.rentPhour;
    }
    console.log("Total Rent:", rent);
}
var gearCycle = new Model("gearCycle", 5);
gearCycle.print();
var weightLess = new Model("weightLess", 6);
weightLess.print();
var tubeLess = new Model("tubeLess", 3);
tubeLess.print();
var gear = new Cycle();
gear.setData(5, [gearCycle]);
gear.print();
var Cycle1 = /** @class */ (function () {
    function Cycle1(name, cost, spe) {
        this.name = name;
        this.cost = cost;
        this.spe = spe;
    }
    Cycle1.prototype.print = function () {
        console.log("Name of cycle:", this.name);
        console.log("Sub price per month  of the cycle:", this.cost);
        console.log("Specifications of cycle:", this.spe);
    };
    return Cycle1;
}());
var Subcription = /** @class */ (function (_super) {
    __extends(Subcription, _super);
    function Subcription(term, cost) {
        var _this = _super.call(this, "abc", 200, "lightingColor") || this;
        _this.term = term;
        _this.cost = cost;
        return _this;
    }
    Subcription.prototype.add = function (value) {
        this.term *= value.term;
        this.cost *= value.cost;
    };
    Subcription.prototype.displayData = function () {
        console.log("No of months:", this.term);
        console.log("Price per month:", this.cost);
    };
    return Subcription;
}(Cycle1));
var model1 = new Cycle1("Hero Pro Cycle,", 299, "Weight less");
model1.print();
console.log("YOUR SUBCRIPTION IS FOR:");
// 2 months term and price for 1 month
var sub = new Subcription(2, 299);
sub.displayData();
//plan1
var plan = new Subcription(1, 299);
console.log("term: " + plan.term + " | price: " + plan.cost);
//Plan 2
var plan2 = new Subcription(2, 2);
plan.add(plan2);
console.log("term: " + plan.term + " | price: " + plan.cost);
