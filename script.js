let countdown = 10;
let countdownCallback = () => {
    // Display the number on the screen.
    document.getElementById("countdown").innerHTML = countdown;
  
    // If the number is 0, display "Happy Independence Day!" and stop the countdown.
    if (countdown === 0) {
      document.getElementById("countdown").innerHTML = "Happy Independence Day!";
      return;
    }
  let incre = document.getElementById("countdown");
    incre.innerHTML = countdown;
    countdown--;
    setTimeout(countdownCallback,1000);
  }
