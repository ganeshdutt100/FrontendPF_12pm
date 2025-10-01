// for (let i = 0; i <= 12; i++) {
//   console.log(i);
// }

// let i = 12;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// let i = 12;

// do {
//   console.log(i);
//   i++;
// } while (i <= 10);
// let

// let a = [12, 3, 45, 6, 7, 89];
// console.log(a);
// of loop
// for (let x of a) {
//   console.log(x * 2);
// }

// let person = {
//   name: "Ganesh dutt",
//   age: 24,
//   city: "Mathura",
// };
// console.log(person);
// in loop
// for (let x in person) {
//   console.log(x, ":   ", person[x]);
// }

// let count = 0;
// while (true) {
//   console.log(count);
//   count++;
//   if (count === 4) {
//     break;
//   }
// }

// range = 0 to 1
// random Number
// let choices = ["rock", "paper", "scissor"];

// let randomValue = choices[Math.floor(Math.random() * 3)];
// console.log(randomValue);

let choices = ["rock", "paper", "scissor"];
// console.log(choices);
let play = true;
while (play) {
  let userChoice = prompt(
    "Enter  rock , paper , scissor (or type `exit` to quit)"
  );
  if (userChoice === "exit") {
    alert("Thanks for playing RPS");
    play = false;
    break;
  }

  let computerChoice = choices[Math.floor(Math.random() * 3)];

  if (userChoice === computerChoice) {
    alert("It's a draw!");
  } else if (
    (userChoice === "rock" && computerChoice === "scissor") ||
    (userChoice === "scissor" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    alert(
      "You win! " +
        "userChoice :  " +
        userChoice +
        " and computerChoice :  " +
        computerChoice
    );
  } else {
    alert(
      "Computer win! " +
        "computerChoice :  " +
        computerChoice +
        " and userChoice :  " +
        userChoice
    );
  }
}
