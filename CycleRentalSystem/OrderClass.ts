class Order {
  items: Cycle[];
  constructor() {
    this.items = [];
  }
  addItem(item: Cycle) {
    this.items.push(item);
  }
  gethoursCount() {
    let startDate = new Date(2021/11/28);
    let date1:Date = startDate.getHours() + ":" + startDate.getMinutes() + ":" + startDate.getSeconds(); //Here we get the time from startDate in the form of HH:MM:SS.
    let endDate = new Date(); //Date object without passing anyvalue means it will take the system date by default at the time of billing.
    let date2:Date = endDate.getHours() + ":" + endDate.getMinutes() + ":" + endDate.getSeconds(); //Here we get the time from endDate in the form of HH:MM:SS.
    let hoursCount = Math.abs(date2-date1);
    return hoursCount / (1000 * 60 * 60);
}
  calculateTotalRent() {
    let rentPerHour = 0;
    this.items.forEach(item => {
      rentPerHour = rentPerHour.finalRent();
    })
    return rentPerHour; 
  }
  print() {
    console.log("Displaying Rent");
    this.items.forEach(cycle => {
      console.log("----------START----------");
      cycle.print();
      console.log("----------END----------");
    });
    console.log("Total Rent:", this.calculateTotalRent()); 
  }
}
var order = new Order();
order.addItem(heroCycle);
order.addItem(atlasCycle);
order.addItem(herculesCycle);
order.addItem(herculesCycle);

order.print();