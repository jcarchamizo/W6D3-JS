// Student Scholarship

let age = parseInt(prompt("Enter your age:"));
let city = prompt("In which city do you reside??").toLowerCase();
let haveLargeFamily = prompt("Do you have a large family? (yes/no)").toLowerCase() === "yes";
let isProgrammingGenius = prompt("Are you a programming genius? (yes/no)").toLowerCase() === "yes";

let meetCondition1 = age >= 18 && city === "Barcelona";
let meetCondition2 = age > 30 && haveLargeFamily;
let meetCondition3 = age >= 12 && age <= 18 && isProgrammingGenius;

if (meetCondition1 || meetCondition2 || meetCondition3) {
  alert("Congratulations! You meet the requirements for the scholarship");
} else {
  alert("Sorry, you do not meet the requirements for the scholarship");
}