// const myPromise = new Promise((resolve, reject) => {});
// myPromise.then();
const myPromise = new Promise((resolve, reject) => {
  let a = 2;
  if (a % 2 === 0) {
    resolve("Even");
  } else {
    reject("Odd");
  }
});
myPromise
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
