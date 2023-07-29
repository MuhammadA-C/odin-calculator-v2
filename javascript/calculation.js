class Calculation {

 operate(operator, num1, num2) {
  switch(operator) {
    case "+":
      return this.add(num1, num2);
    case "-":
      return this.subtract(num1, num2);
    case "/":
      return this.divide(num1, num2);
    case "*":
      return this.multiply(num1, num2);
  }
 }

  add(num1, num2) {
    return Number(num1) + Number(num2);
  }

  subtract(num1, num2) {
    return num1 - num2;
  }

  multiply(num1, num2) {
    return num1 * num2;
  }

  divide(num1, num2) {
    return num1 / num2;
  }

}

export default Calculation;