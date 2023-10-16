function countdownCallback(number) {
    // Display the number on the screen.
    document.getElementById("countdown").innerHTML = number;
  
    // If the number is 1, display "Happy Independence Day!" and stop the countdown.
    if (number === 0) {
      document.getElementById("countdown").innerHTML = "Happy Independence Day!";
      return;
    }
  
    // Schedule the next callback function to be executed in 1 second.
    setTimeout(countdownCallback.bind(null, number - 1), 1000);
  }
