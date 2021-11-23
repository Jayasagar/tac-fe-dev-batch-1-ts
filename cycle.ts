interface Bicycle {
    Bicycle_model: string;
    Bicycle_SubPMonth: number;
    Bicycle_Color: string;
    Bicycle_Gear: number;
}
let Bicycle1: Bicycle = {
    Bicycle_model: "Hero Pro",
    Bicycle_SubPMonth: 199,
    Bicycle_Color: "Yellow",
    Bicycle_Gear: 4
}
let Bicycle2: Bicycle = {
    Bicycle_model: "Hero Max",
    Bicycle_SubPMonth: 349,
    Bicycle_Color: "Combo Of Red & Black",
    Bicycle_Gear: 7
}
let Bicycle3: Bicycle = {
    Bicycle_model: "Hero RX",
    Bicycle_SubPMonth: 299,
    Bicycle_Color: "Gray",
    Bicycle_Gear: 6
}
let Bicycle: Bicycle[] = [];
Bicycle.push(Bicycle1);
Bicycle.push(Bicycle2);
Bicycle.push(Bicycle3);
console.log("Avilable Bicycles at our store are:");
console.log('Here are the Bicycle details', Bicycle);
interface CustomArray {
    [index: number]: string
}

  var CustomArray = ['Bicycle1', 'Bicycle2', 'Bicycle3']
console.log('customer choosen', CustomArray[0])
console.log(Bicycle1);
//CAlculation of subcription for no of months
class subscription1 {
    public Sub(SubPM: number, NoofM: number): number {
        return SubPM * NoofM;
    }
}
interface SAddition {
    Sub(SubPM: number, NoofM: number): number;
}
function BicycleSub(Bycle: subscription1) {
    return "Subcription per month is: 199 & No of Months: 3 - Total is: " + Bycle.Sub(199, 3);
}
var objSub = new subscription1();
console.log(BicycleSub(objSub));
//Subcripton Start & Ending At
console.log("------START------");
var d = new Date("NOV 25, 2021");
console.log(d.toLocaleDateString());
console.log("------END------");
d.setMonth(d.getMonth() + 3);
console.log(d.toLocaleDateString());
