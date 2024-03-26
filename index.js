#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 8 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-8:",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! hurahhhh your guessed number is right.");
}
else {
    console.log("Ohhhhhhhh! you guessed the wrong number don't be sad try again.");
}
