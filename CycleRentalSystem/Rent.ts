let rent = function (totalRent, hoursCount) {
    let rent = this.totalRent;
    this.order.forEach(item => {
      rent = rent * this.hoursCount;
      rent.print();
    })
}