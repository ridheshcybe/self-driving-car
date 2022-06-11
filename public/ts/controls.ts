export class Controls {
  forward: boolean;
  left: boolean;
  right: boolean;
  reverse: boolean;
  constructor(type: string) {
    this.forward = false;
    this.left = false;
    this.right = false;
    this.reverse = false;

    switch (type) {
      case "KEYS":
        this.#addKeyboardListeners();
        break;
      case "DUMMY":
        this.forward = true;
        break;
    }
  }

  #addKeyboardListeners() {
    document.onkeydown = (event) => {
      console.log(`down: ${event.key}`);
      switch (event.key) {
        case "a":
          this.left = true;
          break;
        case "d":
          this.right = true;
          break;
        case "w":
          this.forward = true;
          break;
        case "s":
          this.reverse = true;
          break;
      }
    };
    document.onkeyup = (event) => {
      console.log(`up: ${event.key}`);
      switch (event.key) {
        case "a":
          this.left = false;
          break;
        case "d":
          this.right = false;
          break;
        case "w":
          this.forward = false;
          break;
        case "s":
          this.reverse = false;
          break;
      }
    };
  }
}

export default Controls;
