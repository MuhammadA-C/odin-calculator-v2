class Calculation {
  /*
    Overview: This class was created to hold the logic
    to perform the math calculations.
  */

 operate(operator, num1, num2) {
  switch(operator) {
    case "+":
      return this.addition(num1, num2);
    case "-":
      return this.subtractaction(num1, num2);
    case "/":
      return this.division(num1, num2);
    case "*":
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