this.state = {
    Open: true,
    bill: [
      {
        id: 1,
        date: "16/01/2022",
        description: "Some Book",
        amount: "50"
      },
      {
        id: 2,
        date: "10/10/2022",
        description: "Electricity Bill",
        amount: "75"
      },
      {
        id: 3,
        date: "08/05/2022",
        description: "New Bike",
        amount: "100"
      }]}

len = this.state.bill.length + 1
console.log(len)