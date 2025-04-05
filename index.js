const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function setDate() {
  const now = new Date();  
  const getSecond = now.getSeconds();
  const getMinute = now.getMinutes();
  const getHour = now.getHours();

  // Calculate degrees for each hand
  const secondDegree = (getSecond / 60) * 360;
  const minuteDegree = (getMinute / 60) * 360 + (getSecond / 60) * 6; // minute hand also moves as seconds pass
  const hourDegree = (getHour % 12 / 12) * 360 + (getMinute / 60) * 30; // hour hand moves as minutes pass

  // Apply transformations
  second.style.transform = `rotate(${secondDegree}deg)`;
  minute.style.transform = `rotate(${minuteDegree}deg)`;
  hour.style.transform = `rotate(${hourDegree}deg)`;
}

// Update the time every second
setInterval(setDate, 1000);

// Initialize the clock immediately
setDate();