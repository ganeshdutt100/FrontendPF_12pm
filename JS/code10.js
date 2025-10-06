const randomNumber = Math.floor(Math.random() * 10) + 1;
// console.log(randomNumber);
let count = 0;

function GTN() {
  let userInput = Number(prompt("Enter a number between 1 and 10:"));
  count++;
  console.log(count);

  if (userInput === randomNumber) {
    alert("You guessed the number!");
  } else if (userInput < randomNumber) {
    alert("Your guess is too low.");
  } else if (userInput > randomNumber) {
    alert("Your guess is too high.");
  }
}

GTN();
