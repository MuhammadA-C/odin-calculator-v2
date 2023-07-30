/**
 * Screen class; used to store all the methods related to the calculators
 * screen.
 * @class
 */
class Screen {

    /**
     * Getter method to return the DOM Element for the calculators screen 
     * @method
     * @returns {string} - DOM Element
     */
  get screen() {
    return document.getElementById("screen");
  }

      /**
     * Getter method to return the DOM Element for the text element 
     * for the calculators screen
     * @method
     * @returns {string} - DOM Element
     */
  get screenValue() {
    return document.getElementById("screen").firstChild;
  }

     /**
     * Getter method to return the screen numbers length 
     * which is used to specify how many numbers can be displayed 
     * on the calculators screen
     * @method
     * @returns {number} - The screen numbers length  
     */
  get SCREEN_NUMBERS_LENGTH() {
    const SCREEN_NUMBERS_LENGTH = 9;
    return SCREEN_NUMBERS_LENGTH;
  }

    /**
     * Method to change the text displayed for the calculators screen
     * @method
     * @param value - is used to specify the value to change to
     * @type {(value : string)}
     */
  updateScreenValue(value) {
    this.screenValue.textContent = value;
  }

}

export default Screen;

