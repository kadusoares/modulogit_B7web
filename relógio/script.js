function updateDigitalClock() {
    var now = new Date();
    var digitalClock = document.getElementById('digitalClock');
    digitalClock.innerHTML = now.toLocaleTimeString();
    setTimeout(updateDigitalClock, 1000);
  }
  
  function updateAnalogClock() {
    var now = new Date();
    var hourHand = document.getElementById('hourHand');
    var minuteHand = document.getElementById('minuteHand');
    var secondHand = document.getElementById('secondHand');
  
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
    var hourRotation = (hours * 30) + (minutes / 2);
    var minuteRotation = (minutes * 6) + (seconds / 10);
    var secondRotation = seconds * 6;
  
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
  
    setTimeout(updateAnalogClock, 1000);
  }
  
  updateDigitalClock();
  updateAnalogClock();
  