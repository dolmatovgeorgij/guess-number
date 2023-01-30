let btn = document.querySelector("#btn-guess");
let resault = document.querySelector("#resault-count-out");
let help = document.querySelector("#resault-help-out");
let input = document.querySelector('#field-input')



let userNum = 0;
let randomNum = 1 + Math.floor(Math.random() * 100);

btn.onclick = function guess(num) {
  userNum = input.value;
  if (userNum > randomNum) {
    help.textContent = "многовато будет... ";
  } else if (userNum < num) {
    help.textContent = "маловато будет... ";
  } else {
    help.textContent = "вы угадали салам алейкум";
  }

};

