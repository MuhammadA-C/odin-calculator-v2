import Calculator from "./calculator.js";
import Calculation from "./calculation.js";
import Screen from "./screen.js";
import Button from "./button.js";

//////////////////////////////////////////////////////////

/*


*/

//////////////////////////////////////////////////////////

const screen = new Screen();
const buttons = new Button();
const math = new Calculation();

let operatorSelected = null;
let numberOneSelected = null;
let numberTwoSelected = null;

//////////////////////////////////////////////////////////


//Adds an event listner to each of the number buttons on the calculator
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

    console.log(screen.numbersOnScreen);

  });
}


buttons.additionBtn.addEventListener("click", () => {
  operatorSelected = buttons.getBtnText(buttons.additionBtn);
});

buttons.subtractionBtn.addEventListener("click", () => {
  operatorSelected = buttons.getBtnText(buttons.subtractionBtn);
});

buttons.divisionBtn.addEventListener("click", () => {
  operatorSelected = buttons.getBtnText(buttons.divisionBtn);
});

buttons.multiplicationBtn.addEventListener("click", () => {
  operatorSelected = buttons.getBtnText(buttons.multiplicationBtn);
});

buttons.equalsBtn.addEventListener("click",() => {
  console.log(`Num1: ${numberOneSelected}, Num2: ${numberTwoSelected}, Operator: ${operatorSelected}`);
  console.log(math.operate(operatorSelected, numberOneSelected, numberTwoSelected));
});

//I figured reloading the page would be an easy way to reset the calculator
buttons.clearBtn.addEventListener("click", () => {
  location.reload();
});





