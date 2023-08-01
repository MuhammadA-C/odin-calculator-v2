/**
 * Calculation class; used to store all the methods related to the 
 * mathmatical logic that the calculator performs.
 * @class
 */
class Calculation {

    /**
     * Method that takes an operator and two numbers, matches which calculation to perform
     * based on the operator, then performs said calculation and returns the result
     * @method
     * @param operator - is the symbol for the operation to perform
     * @param num1 - is one of the numbers to perform the calculation on
     * @param num2 - is one of the numbers to perform the calculation on
     * @type {(operator : string , num1 : number, num2 : number)}
     * @returns {number} - The result from the calculation
     */
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
 
    /**
     * Method to perform addition on two numbers
     * @method
     * @param num1 - is one of the numbers to perform the calculation on
     * @param num2 - is one of the numbers to perform the calculation on
     * @type {(num1 : number, num2 : number)}
     * @returns {number} - The result from the calculation
     */
  addition(num1, num2) {
    return Number(num1) + Number(num2);
  }

    /**
     * Method to perform subtraction on two numbers
     * @method
     * @param num1 - is one of the numbers to perform the calculation on
     * @param num2 - is one of the numbers to perform the calculation on
     * @type {(num1 : number, num2 : number)}
     * @returns {number} - The result from the calculation
     */
  subtractaction(num1, num2) {
    return num1 - num2;
  }

    /**
     * Method to perform multiplication on two numbers
     * @method
     * @param num1 - is one of the numbers to perform the calculation on
     * @param num2 - is one of the numbers to perform the calculation on
     * @type {(num1 : number, num2 : number)}
     * @returns {number} - The result from the calculation
     */
  multiplication(num1, num2) {
    return num1 * num2;
  }

    /**
     * Method to perform division on two numbers
     * @method
     * @param num1 - is one of the numbers to perform the calculation on
     * @param num2 - is one of the numbers to perform the calculation on
     * @type {(num1 : number, num2 : number)}
     * @returns {number} - The result from the calculation
     */
  division(num1, num2) {
    return num1 / num2;
  }
}

export default Calculation;