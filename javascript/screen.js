class Screen {
  /*
    Overview: This class was created to return the DOM elements 
    related to the screen, and provide method(s) to update the 
    screen value that is shown to the user.
  */

  get screen() {
    return document.getElementById("screen");
  }

  get screenValue() {
    return document.getElementById("screen").firstChild;
  }

  get screenValueLength() {
    return 9;
  }

  updateScreenValue(value) {
    document.getElementById("screen").firstChild.textContent = value;
  }

}

export default Screen;