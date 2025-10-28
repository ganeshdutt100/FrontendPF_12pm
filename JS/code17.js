// setTimeout(() => {
//   console.log("Hello World");
// }, 3000);
function orderPizza() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Pizza Ordered");
      resolve("Pizza");
    }, 1000);
  });
}
function deliverPizza(pizza) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Pizza Delivered");
      resolve(pizza + "Delivered");
    }, 1000);
  });
}
function makePayment(order) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Payment Done");
      resolve(order + "Paid");
    }, 1000);
  });
}
orderPizza()
  .then((pizza) => deliverPizza(pizza))
  .then((order) => makePayment(order))
  .then((finalResult) => console.log("Completed"))
  .catch((err) => console.log(err));
