const randomNumber = Math.floor(Math.random() * 10) + 1;
// console.log(randomNumber);
let attempts = 0;
let maxAttempts = 5;

function GTN() {
  let userInput = 0;
  while (userInput !== randomNumber && attempts < maxAttempts) {
    userInput = Number(prompt("Enter a number between 1 and 10:"));
    // console.log(userInput);

    attempts++;
    // console.log(attempts);

    if (userInput === randomNumber) {
      alert("You guessed the number!" + randomNumber);
      return;
    } else if (userInput < randomNumber) {
      alert("Your guess is too low.");
    } else if (userInput > randomNumber) {
      alert("Your guess is too high.");
    }
  }
  if (userInput !== randomNumber) {
    alert("err");
  }
}

GTN();
