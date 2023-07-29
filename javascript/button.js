class Button {
  /*
    Overview: This class was created to return the button DOM elements.
  */

    /**
     * Getter method to return the Clear Button DOM Element
     * @method
     * @returns {string} - DOM Element
     */
  get clearBtn() {
    return document.querySelector("button:nth-child(2)");
  }

    /**
     * Getter method to return the Equals Button DOM Element
     * @method
     * @returns {string} - DOM Element
     */
  get equalsBtn() {
    return document.querySelector("button:nth-child(20)");
  }

    /**
     * Getter method to return All the Number Buttons DOM Element
     * @method
     * @returns {NodeList} - DOM NodeList
     */
  get btnNumbers() {
    return document.querySelectorAll(".numbers");
  }

    /**
     * Getter method to return the Multiplication Button DOM Element
     * @method
     * @returns {string} - DOM Element
     */
  get multiplicationBtn() {
    return document.querySelector("button:nth-child(9)");
  }

    /**
     * Getter method to return the Dvision Button DOM Element
     * @method
     * @returns {string} - DOM Element
     */
  get divisionBtn() {
    return document.querySelector("button:nth-child(5)");
  }

    /**
     * Getter method to return the Addition Button DOM Element
     * @method
     * @returns {string} - DOM Element
     */
  get additionBtn() {
    return document.querySelector("button:nth-child(17)");
  }

    /**
     * Getter method to return the Subtraction Button DOM Element
     * @method
     * @returns {string} - DOM Element
     */
  get subtractionBtn() {
    return document.querySelector("button:nth-child(13)");
  }

}

export default Button;