"use strict";
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
exports.__esModule = true;
var ModelClass_1 = require("./ModelClass");
var Subscription = /** @class */ (function (_super) {
    __extends(Subscription, _super);
    function Subscription(plan, amountPerplan) {
        var _this = _super.call(this, '') || this;
        _this.plan = plan;
        _this.amountPerplan = amountPerplan;
        return _this;
    }
    Subscription.prototype.print = function () {
        console.log("Subcsription for:", this.plan, "Rs.", this.amountPerplan);
    };
    return Subscription;
}(ModelClass_1.Model));
var LECycle = new ModelClass_1.Model('Light weight Cycle');
LECycle.print();
var plan1 = new Subscription('weekly', 50);
plan1.print();
var plan2 = new Subscription('monthly', 300);
plan2.print();
var plan3 = new Subscription('quaterly', 1000);
plan3.print();
var h = new ModelClass_1.Model('Hero Gear Cycle');
h.print();
var plan4 = new Subscription('Half Yearly', 2000);
plan4.print();
var plan5 = new Subscription('Annually', 2499);
plan5.print();
