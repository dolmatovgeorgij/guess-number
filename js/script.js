let btn = document.querySelector("#btn-guess");
let resault = document.querySelector("#resault-count-out");
let help = document.querySelector("#help-string");

console.log(btn);
console.log(help);
console.log(resault);

let userNum = 5;
let randomNum = Math.floor(Math.random() * 100);

function guess(num) {
  if (userNum > num) {
    console.log("многовато будет... ");
  } if (userNum < num) {
    console.log("маловато будет... ");
  } else {
    console.log("вы угадали салам алейкум");
  }

};

guess(10);