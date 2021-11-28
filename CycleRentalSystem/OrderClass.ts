class Order {
  //The method was not completed. I will add the remaining code later.
  gethoursCount() {
      let startDate = new Date(2021/11/28);
      let date1:Date = startDate.getHours() + ":" + startDate.getMinutes() + ":" + startDate.getSeconds(); //Here we get the time from startDate in the form of HH:MM:SS.
      let endDate = new Date(); //Date object without passing anyvalue means it will take the system date by default at the time of billing.
      let date2:Date = endDate.getHours() + ":" + endDate.getMinutes() + ":" + endDate.getSeconds(); //Here we get the time from endDate in the form of HH:MM:SS.
      let hoursCount = Math.abs(date2-date1);
      return hoursCount / (1000 * 60 * 60);
  }
}
var order = new Order();