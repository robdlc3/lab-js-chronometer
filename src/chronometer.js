//-----Iteration 1-----//

class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    // ... your code goes here
  }

  //-----Iteration 2-----//

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback) {
        printTimeCallback(this.currentTime);
      }
    }, 1000);
  }

  //-----Iteration 3-----//

  getMinutes() {
    if (this.currentTime === 0) {
      return 0;
    }
    const minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  //-----Iteration 4-----//

  getSeconds() {
    if (this.currentTime === 0) {
      return 0;
    }
    const seconds = Math.floor(this.currentTime % 60);
    return seconds;
  }

  //-----Iteration 5-----//

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  //-----Iteration 6-----//

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  //-----Iteration 7-----//

  reset() {
    clearInterval(this.intervalId);
    this.currentTime = 0;
  }

  //-----BONUS Iteration 8-----//

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
  // ... your code goes here
}


