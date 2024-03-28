#! /usr/bin/env node
import inquirer from "inquirer";
const range = await inquirer.prompt([
  {
    name: "min",
    type: "number",
    message:
      "Please enter min-range for computer to randomly select number from ?",
  },
  {
    name: "max",
    type: "number",
    message:
      "Please enter max-range for computer to randomly select number to ?",
  },
]);
const randomNumber =
  Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
const userGuessedNumber = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message:
      "Please guess a number between " + range.min + " to " + range.max + "\n",
  },
]);
if (
  userGuessedNumber.userGuessedNumber < range.min ||
  userGuessedNumber.userGuessedNumber > range.max
) {
  console.log("Your guess is outside the range you defined. Please try again.");
} else if (userGuessedNumber.userGuessedNumber === randomNumber) {
  console.log("Congratulation! you guessed the right number");
} else if (
  userGuessedNumber.userGuessedNumber + 1 === randomNumber ||
  userGuessedNumber.userGuessedNumber - 1 === randomNumber
) {
  console.log(
    "ohhh! you were so close....\nComputer randomly selected " + randomNumber
  );
} else {
  console.log(
    "Sorry! you guessed wrong number......\nComputer randomly selected " + randomNumber
  );
}
