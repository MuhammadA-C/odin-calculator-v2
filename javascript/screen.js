class Screen {

  get screenValue() {
    return document.getElementById("screen").firstChild;
  }

  set screenValue(value) {
    document.getElementById("screen").firstChild = value;
  }

  get screenLength() {
    return 9;
  }

}

export default Screen;