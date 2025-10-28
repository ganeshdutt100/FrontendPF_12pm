// const myPromise = new Promise((resolve, reject) => {});
// myPromise.then();
// const myPromise = new Promise((resolve, reject) => {
//   let a = 2;
//   if (a % 2 === 0) {
//     resolve("Even");
//   } else {
//     reject("Odd");
//   }
// });
// myPromise
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

let promiseValue = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
});

promiseValue
  .then((result) => {
    console.log(result); // 10
    return result + 1;
  })
  .then((result) => {
    console.log(result); // 11
    return result * 2;
  })
  .then((result) => {
    console.log(result); // 22
  });
