class Button {

  get clearBtn() {
    return document.querySelector("button:nth-child(2)");
  }

  get equalsBtn() {
    return document.querySelector("button:nth-child(20)");
  }

  get btnNumbers() {
    return document.querySelectorAll(".numbers");
  }

  get multiplicationBtn() {
    return document.querySelector("button:nth-child(9)");
  }

  get divisionBtn() {
    return document.querySelector("button:nth-child(5)");
  }

  get additionBtn() {
    return document.querySelector("button:nth-child(17)");
  }

  get subtractionBtn() {
    return document.querySelector("button:nth-child(13)");
  }

}

export default Button;