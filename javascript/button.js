/**
 * Button class; used to store all the methods related to the calculators 
 * buttons.
 * @class
 */
class Button {
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
     * Method to get the text inside of the multiplication button.
     * @method
     * @returns {string} - The text for the button; in this case a capital "X"
     */
  getMultiplicationBtnText() {
    return this.multiplicationBtn.textContent;
  }

    /**
     * Method to get the text inside of the division button.
     * @method
     * @returns {string} - The text for the button; in this case a forwardslash sign "/"
     */
  getDivisionBtnText() {
    return this.divisionBtn.textContent;
  }

    /**
     * Method to get the text inside of the addition button.
     * @method
     * @returns {string} - The text for the button; in this case a plus sign "+"
     */
  getAdditionBtnText() {
    return this.additionBtn.textContent;
  }

    /**
     * Method to get the text inside of the subtraction button.
     * @method
     * @returns {string} - The text for the button; in this case a minus sign "---"
     */
  getSubtractionBtnText() {
    return this.subtractionBtn.textContent;
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