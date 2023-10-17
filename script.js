let startNum = 10;
let countdownCallback = () => {
    // Display the number on the screen.
    document.getElementById("countdown").innerHTML = startNum;
  
    // If the number is 0, display "Happy Independence Day!" and stop the countdown.
    if (startNum === 0) {
      document.getElementById("countdown").innerHTML = "Happy Independence Day!";
      return;
    }
  document.getElementById("countdown").innerHTML = startNum;
    startNum--;
    setTimeout(countdownCallback,1000);
  }
