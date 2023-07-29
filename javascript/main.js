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

//////////////////////////////////////////////////////////


//Adds an event listner to each of the number buttons on the calculator
for (let i = 0; i < buttons.btnNumbersNodeList.length; i++) {
  buttons.btnNumbersNodeList[i].addEventListener("click", () => {
    console.log(buttons.getBtnNumberText(i));
  });
}




