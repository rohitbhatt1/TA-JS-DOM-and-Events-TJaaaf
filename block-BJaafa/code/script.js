const secondHand = document.querySelector(".second");
const minuteHand = document.querySelector(".minute");
const hourHand = document.querySelector(".hour");

function clock() {
  let now = new Date();

  let milliSeconds = now.getMilliseconds();
  let seconds = now.getSeconds();
  let minutes = now.getMinutes();
  let hours = now.getHours();

  if (hours > 12) {
    hours -= 12;
  }

  let secondsDeg = seconds * 6 + milliSeconds * 0.006;
  let minutesDeg = minutes * 6 + seconds * 0.1;
  let hoursDeg = hours * 30 + minutes * 0.5 + seconds * (0.5 / 60);

  secondHand.style.transform = `rotate(${secondsDeg}deg)`;
  minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}

setInterval(clock, 10);