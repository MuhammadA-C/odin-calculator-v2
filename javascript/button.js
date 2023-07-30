/**
 * Button class; used to store all the methods related to the calculators 
 * buttons.
 * @class
 */
class Button {

    /**
     * Getter method to return the DOM Element for the Dot Operator Button 
     * @method
     * @returns {string} - DOM Element
     */
  get dotOperatorBtn() {
    return document.querySelector(".dot-operator");
  }

    /**
     * Getter method to return the DOM Element for the Clear Button 
     * @method
     * @returns {string} - DOM Element
     */
  get clearBtn() {
    return document.querySelector("button:nth-child(2)");
  }

    /**
     * Getter method to return the DOM Element for the Equals Button 
     * @method
     * @returns {string} - DOM Element
     */
  get equalsBtn() {
    return document.querySelector("button:nth-child(20)");
  }

    /**
     * Getter method to return a DOM NodeList for the button numbers
     * @method
     * @returns {NodeList} - DOM NodeList
     */
  get btnNumbersNodeList() {
    return document.querySelectorAll(".numbers");
  }

    /**
     * Getter method to return the DOM Element for the Multiplication Button
     * @method
     * @returns {string} - DOM Element
     */
  get multiplicationBtn() {
    return document.querySelector("button:nth-child(9)");
  }

    /**
     * Getter method to return the DOM Element for the Division Button 
     * @method
     * @returns {string} - DOM Element
     */
  get divisionBtn() {
    return document.querySelector("button:nth-child(5)");
  }

    /**
     * Getter method to return the DOM Element for the Addition Button 
     * @method
     * @returns {string} - DOM Element
     */
  get additionBtn() {
    return document.querySelector("button:nth-child(17)");
  }

    /**
     * Getter method to return the DOM Element for the Subtraction Button 
     * @method
     * @returns {string} - DOM Element
     */
  get subtractionBtn() {
    return document.querySelector("button:nth-child(13)");
  }

    /**
     * Method to get the text inside of a DOM button element
     * @method
     * @param btnElement - is the button DOM element you want to retrieve the text from.
     * *Note: You'll need to use the result from a selector as the parameter*
     * @type {(index : string)}
     * @returns {string} - The text for the button
     */
  getBtnText(btnElement) {
    return btnElement.textContent;
  }

    /**
     * Method to get the text inside of the button numbers.
     * @method
     * @param index - is for selecting the specific element/button from the NodeList
     * @type {(index : number)}
     * @returns {string} - The text for the button; in this case a number
     */
  getBtnNumberText(index) {
    return this.btnNumbersNodeList[index].textContent;
  }

}

export default Button;