import Calculation from "./calculation.js";
import Screen from "./screen.js";
import Button from "./button.js";

//////////////////////////////////////////////////////////

/*

  Todo:
  * Make the modulus operator work
  * Make the +/- operator work
  * Add a snarky message if the user tries to divide by 0-- in this case "Error" since that's what the calculator app on iPhone says

*/

//////////////////////////////////////////////////////////

const screen = new Screen();
const buttons = new Button();
const math = new Calculation();

let numberOneSelected = null;
let copyOfNumberOneSelected = null;
let numberTwoSelected = null;
let copyOfNumberTwoSelected = null;
let operatorSelected = null;
let wasDotOperatorSelected = false;

//////////////////////////////////////////////////////////

/*
  Adds an event listner to each of the number buttons on the calculator
  which allows us to get the user input for the number button pressed
*/
for (let i = 0; i < buttons.btnNumbersNodeList.length; i++) {
  buttons.btnNumbersNodeList[i].addEventListener("click", () => {

    //Limits the numbers to be entered on the screen to 9; the dot counts as a numher too
    if(screen.isNumbersOnScreenGreaterOrEqualThanMaxScreenLength) {
      return;
    }

    if(numberOneSelected === null) {
      numberOneSelected = buttons.getBtnNumberText(i);
      copyOfNumberOneSelected = numberOneSelected;
      screen.updateScreenValue(numberOneSelected);

    } else if (operatorSelected === null) {
      numberOneSelected += buttons.getBtnNumberText(i);
      copyOfNumberOneSelected = numberOneSelected;
      screen.updateScreenValue(numberOneSelected);

    } else if (numberTwoSelected === null){
      numberTwoSelected = buttons.getBtnNumberText(i);
      copyOfNumberTwoSelected = numberTwoSelected;
      screen.updateScreenValue(numberTwoSelected);
      
    } else {
      numberTwoSelected += buttons.getBtnNumberText(i);
      copyOfNumberTwoSelected = numberTwoSelected;
      screen.updateScreenValue(numberTwoSelected);
    }

  });
}

buttons.additionBtn.addEventListener("click", () => {
  callOperateIfNumberOneAndNumberTwoWereSelected();
  operatorSelected = buttons.getBtnText(buttons.additionBtn);
  wasDotOperatorSelected = false;
});

buttons.subtractionBtn.addEventListener("click", () => {
  callOperateIfNumberOneAndNumberTwoWereSelected();
  operatorSelected = buttons.getBtnText(buttons.subtractionBtn);
  wasDotOperatorSelected = false;
});

buttons.divisionBtn.addEventListener("click", () => {
  callOperateIfNumberOneAndNumberTwoWereSelected();
  operatorSelected = buttons.getBtnText(buttons.divisionBtn);
  wasDotOperatorSelected = false;
});

buttons.multiplicationBtn.addEventListener("click", () => {
  callOperateIfNumberOneAndNumberTwoWereSelected();
  operatorSelected = buttons.getBtnText(buttons.multiplicationBtn);
  wasDotOperatorSelected = false;
});

buttons.equalsBtn.addEventListener("click",() => {

  /*
    The condition below is to check if the user pressed the equals key
    prior to selecting any nunbers, selecting only one number, 
    selecting one number and an operator, or the first number is 0
  */
  if(numberOneSelected === null) {
    return;
  } else if(numberOneSelected != null && operatorSelected === null) {
    screen.updateScreenValue(numberOneSelected);
    return;
  } else if((numberOneSelected != "0" || numberOneSelected != "0.") && numberOneSelected != null && operatorSelected != null && numberTwoSelected === null) {
    numberTwoSelected = copyOfNumberOneSelected;
  } else if((numberOneSelected == "0" || numberOneSelected == "0.") && operatorSelected != null && numberTwoSelected != null) {
    numberOneSelected = copyOfNumberTwoSelected;
    copyOfNumberOneSelected = copyOfNumberTwoSelected;
  } 

  let result = math.operate(operatorSelected, numberOneSelected, numberTwoSelected);

  roundDecimalNumberIfTooLong(result);
  limitNumberLengthIfGreaterThanScreenLength(result);

  screen.updateScreenValue(result);
  console.log(`${numberOneSelected} ${operatorSelected} ${numberTwoSelected} = ${result}`);
  numberOneSelected = result;
  resetValues();
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

  //Adds a zero then appends the dot to the end of it
  if(numberOneSelected === null) {
    numberOneSelected = 0;
    numberOneSelected += buttons.getBtnText(buttons.dotOperatorBtn);
    copyOfNumberOneSelected = numberOneSelected;
    screen.updateScreenValue(numberOneSelected);
  } else if(numberTwoSelected === null && numberOneSelected != null && operatorSelected != null) {
    numberTwoSelected = 0;
    numberTwoSelected += buttons.getBtnText(buttons.dotOperatorBtn);
    copyOfNumberTwoSelected = numberTwoSelected;
    screen.updateScreenValue(numberTwoSelected);    
  } else if(numberOneSelected != null && numberTwoSelected === null && operatorSelected === null) {
    numberOneSelected += buttons.getBtnText(buttons.dotOperatorBtn);
    copyOfNumberOneSelected = numberOneSelected;
    screen.updateScreenValue(numberOneSelected);
  } else {
    numberTwoSelected += buttons.getBtnText(buttons.dotOperatorBtn);
    copyOfNumberTwoSelected = numberTwoSelected;
    screen.updateScreenValue(numberTwoSelected);
  }

  wasDotOperatorSelected = true;
});

//////////////////////////////////////////////////////////

function callOperateIfNumberOneAndNumberTwoWereSelected() {
  if(numberOneSelected != null && numberTwoSelected != null && operatorSelected != null) {
    let result = math.operate(operatorSelected, numberOneSelected, numberTwoSelected);
    
    roundDecimalNumberIfTooLong(result);
    limitNumberLengthIfGreaterThanScreenLength(result);
    
    screen.updateScreenValue(result);
    numberOneSelected = result;
    numberTwoSelected = null;
    }
}

function resetValues() {
  numberTwoSelected = null;
  wasDotOperatorSelected = false;
}

function limitNumberLengthIfGreaterThanScreenLength(result) {
  if(String(result).length > screen.MAX_SCREEN_LENGTH) {
    result = String(result).slice(0, screen.MAX_SCREEN_LENGTH);
  }
}

function roundDecimalNumberIfTooLong(result) {
  if(String(result).length >= 5) {
    result = Math.floor(result);
  }
}



