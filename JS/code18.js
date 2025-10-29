// Promise.all([
//   new Promise((resolve) => setTimeout(() => resolve("First"), 3000)),
//   new Promise((reject) => setTimeout(() => reject("error"), 2000)),
//   new Promise((resolve) => setTimeout(() => resolve("Second"), 1000)),
// ]).then(alert);

// let p1 = Promise.resolve("Burger ready");
// let p2 = Promise.resolve("Pizza ready");
// let p3 = Promise.resolve("Coke ready");

// Promise.all([p1, p2, p3])
//   .then((result) => {
//     console.log("All order Done ", result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise.race([
//   new Promise((resolve) => setTimeout(() => resolve("First"), 3000)),
//   new Promise((resolve) => setTimeout(() => resolve("resolve Error"), 2000)),
//   new Promise((resolve) => setTimeout(() => resolve("Second"), 1000)),
// ]).then(alert);
// Promise.race([
//   new Promise((resolve) => setTimeout(() => resolve("First"), 3000)),
//   new Promise((reject) => setTimeout(() => reject("error"), 1000)),
//   new Promise((resolve) => setTimeout(() => resolve("resolve Error"), 2000)),
// ]).then(alert);

// let p1 = Promise.reject("reject Burger");

// let p2 = new Promise((resolve) =>
//   setTimeout(() => resolve("Pizza Ready"), 1000)
// );
// let p3 = new Promise((resolve) =>
//   setTimeout(() => resolve("Coke Ready"), 2000)
// );
// let p1 = new Promise((resolve) =>
//   setTimeout(() => resolve("Burger Ready"), 3000)
// );
// let p2 = new Promise((resolve) =>
//   setTimeout(() => resolve("Pizza Ready"), 1000)
// );
// let p3 = new Promise((resolve) =>
//   setTimeout(() => resolve("Coke Ready"), 2000)
// );

// Promise.race([p1, p2])
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
