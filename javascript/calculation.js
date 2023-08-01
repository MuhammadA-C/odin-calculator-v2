/**
 * Calculation class; used to store all the methods related to the 
 * mathmatical logic that the calculator performs.
 * @class
 */
class Calculation {

 operate(operator, num1, num2) {
  switch(operator) {
    case "+":
      console.log("Add");
      return this.addition(num1, num2);
    case "--":
      console.log("Subtract");
      return this.subtractaction(num1, num2);
    case "/":
      console.log("Divide");
      return this.division(num1, num2);
    case "X":
      console.log("Multiply");
      return this.multiplication(num1, num2);
  }
 }

  addition(num1, num2) {
    return Number(num1) + Number(num2);
  }

  subtractaction(num1, num2) {
    return num1 - num2;
  }

  multiplication(num1, num2) {
    return num1 * num2;
  }

  division(num1, num2) {
    return num1 / num2;
  }
}

export default Calculation;