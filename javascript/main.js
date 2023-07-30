import Calculator from "./calculator.js";
import Calculation from "./calculation.js";
import Screen from "./screen.js";
import Button from "./button.js";

//////////////////////////////////////////////////////////

/*

  Todo:
  * Make the modulus operator work
  * Make the +/- operator work
  * Make it so that if you press enter prior to entering two numbers or an oeprator it won't work
  * Make it so that the numbers on the screen is limited to 9 characters
  * Make it so that if you hit the enter button after doing a calculaiton, it'll keep doing a calculaiton with the previous oeprator and 2nd number
  * Round results with long decimals 
  * Add a snarky message if the user tries to divide by 0-- in this case "Error" since that's what the calculator app on iPhone says

*/

//Note: Need to make it so that after entering num1, selecting an operator, entering num2, then selecting al operator, it'll act like the equals button and do the calculation

//////////////////////////////////////////////////////////

const screen = new Screen();
const buttons = new Button();
const math = new Calculation();

let operatorSelected = null;
let numberOneSelected = null;
let numberTwoSelected = null;
let wasDotOperatorSelected = false;

//////////////////////////////////////////////////////////

/*
  Adds an event listner to each of the number buttons on the calculator
  which allows us to get the user input for the number button pressed
*/
for (let i = 0; i < buttons.btnNumbersNodeList.length; i++) {
  buttons.btnNumbersNodeList[i].addEventListener("click", () => {

    if(numberOneSelected === null) {
      numberOneSelected = buttons.getBtnNumberText(i);
      screen.updateScreenValue(numberOneSelected);

    } else if (operatorSelected === null) {
      numberOneSelected += buttons.getBtnNumberText(i);
      screen.updateScreenValue(numberOneSelected);

    } else if (numberTwoSelected === null){
      numberTwoSelected = buttons.getBtnNumberText(i);
      screen.updateScreenValue(numberTwoSelected);
      
    } else {
      numberTwoSelected += buttons.getBtnNumberText(i);
      screen.updateScreenValue(numberTwoSelected);
    }

  });
}

buttons.additionBtn.addEventListener("click", () => {
  operatorSelected = buttons.getBtnText(buttons.additionBtn);
  wasDotOperatorSelected = false;
});

buttons.subtractionBtn.addEventListener("click", () => {
  operatorSelected = buttons.getBtnText(buttons.subtractionBtn);
  wasDotOperatorSelected = false;
});

buttons.divisionBtn.addEventListener("click", () => {
  operatorSelected = buttons.getBtnText(buttons.divisionBtn);
  wasDotOperatorSelected = false;
});

buttons.multiplicationBtn.addEventListener("click", () => {
  operatorSelected = buttons.getBtnText(buttons.multiplicationBtn);
  wasDotOperatorSelected = false;
});

buttons.equalsBtn.addEventListener("click",() => {
  const result = math.operate(operatorSelected, numberOneSelected, numberTwoSelected);

  screen.updateScreenValue(result);
  console.log(`${numberOneSelected} ${operatorSelected} ${numberTwoSelected} = ${result}`);

  /*
    numberOneSelected is set to the result and numberTwoSelected is set to null
    so that if the user tries to keep doing a calculation, it'll be reflected
    on the previous calculation results
  */
  numberOneSelected = result;
  numberTwoSelected = null;
  wasDotOperatorSelected = false;
});

//I figured reloading the page would be an easy way to reset the calculator
buttons.clearBtn.addEventListener("click", () => {
  location.reload();
});

buttons.dotOperatorBtn.addEventListener("click", () => {

  /* 
    This check is used to only allow the dot operator to be used once 
    for num1 and num2 selected
  */
  if(wasDotOperatorSelected) {
    return;
  }

  //Adds a zero to the then append the dot operator to the end if no number selected
  if(numberOneSelected === null) {
    numberOneSelected = 0;
    numberOneSelected += buttons.getBtnText(buttons.dotOperatorBtn);
    screen.updateScreenValue(numberOneSelected);

  //Adds a zero to the then append the dot operator to the end if no number selected
  } else if(numberTwoSelected === null && numberOneSelected != null && operatorSelected != null) {
    numberTwoSelected = 0;
    numberTwoSelected += buttons.getBtnText(buttons.dotOperatorBtn);
    screen.updateScreenValue(numberTwoSelected);
    
  } else if(numberOneSelected != null && numberTwoSelected === null && operatorSelected === null) {
    numberOneSelected += buttons.getBtnText(buttons.dotOperatorBtn);
    screen.updateScreenValue(numberOneSelected);

  } else {
    numberTwoSelected += buttons.getBtnText(buttons.dotOperatorBtn);
    screen.updateScreenValue(numberTwoSelected);
  }

  wasDotOperatorSelected = true;
});





