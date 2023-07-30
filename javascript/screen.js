/**
 * Screen class; used to store all the methods related to the calculators
 * screen.
 * @class
 */
class Screen {

    /**
     * Getter method to return the DOM Element for the calculator screen 
     * @method
     * @returns {string} - DOM Element
     */
  get screen() {
    return document.getElementById("screen");
  }

      /**
     * Getter method to return the DOM Element for the text element 
     * for the calculator screen
     * @method
     * @returns {string} - DOM Element
     */
  get screenValue() {
    return document.getElementById("screen").firstChild;
  }

     /**
     * Getter method to return the screen numbers lengt, 
     * which is used to specify how many numbers can be displayed 
     * on the calculator screen
     * @method
     * @returns {number} - The screen numbers length  
     */
  get SCREEN_LENGTH() {
    const SCREEN_LENGTH = 9;
    return SCREEN_LENGTH;
  }

    /**
     * Getter method to return the total numbers on the calculator screen,
     * which can be used to limit the amount on numbers shown on the screen
     * @method
     * @return {number} - The total numbers on the calculator screen
     */
  get numbersOnScreen() {
    return this.screenValue.textContent.length;
    }

    /**
     * Method to check if the numbers on the calculator screen is greater than
     * or equal to the max screen length
     * @method
     * @return {boolean} - True if the numbers on the screen is greater or equal 
     * to the max screen length, or False otherwise
     */
  get isNumbersOnScreenGreaterOrEqualThanMaxScreenLength() {
    if(this.numbersOnScreen >= this.SCREEN_LENGTH) {
      return true;
    }
    return false;
  }

    /**
     * Method to change the text displayed for the calculator screen
     * @method
     * @param value - is used to specify the value to change to
     * @type {(value : string)}
     */
  updateScreenValue(value) {
    this.screenValue.textContent = value;
  }


}

export default Screen;

