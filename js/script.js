let btn = document.querySelector("#btn-guess");
let resault = document.querySelector("#resault-count-out");
let help = document.querySelector("#resault-help-out");
let input = document.querySelector("#field-text")




let userNum = 0;
let randomNum = 1 + Math.floor(Math.random() * 100);

btn.onclick = function guess(evt) {
  userNum = input.value;

  console.log(userNum);

  if (userNum > randomNum) {
    help.textContent = "многовато будет... ";
  } else if (userNum < randomNum) {
    help.textContent = "маловато будет... ";
  } else {
    help.textContent = "угадали, вы большой молодeц", alert("ура вы угадали!");
  }

};

