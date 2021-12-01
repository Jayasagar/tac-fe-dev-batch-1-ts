"use strict";
exports.__esModule = true;
exports.Model = void 0;
var Model = /** @class */ (function () {
    function Model(name, rentPerHour) {
        this.name = name;
        this.rentPerHour ?  = rentPerHour : ;
    }
    Model.prototype.print = function () {
        console.log("Model Name:", this.name, ", Rent Per Hours:", this.rentPerHour);
    };
    return Model;
}());
exports.Model = Model;
var gearCycle = new Model("gearCycle", 5);
//gearCycle.print();
var weightLess = new Model("weightLess", 6);
//weighLess.print();
var tubeLess = new Model("tubeLess", 3);
tubeLess.print();
