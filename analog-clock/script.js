const clock = document.getElementById('clock');
const hourHand = clock.appendChild(document.createElement('div'));
const minuteHand = clock.appendChild(document.createElement('div'));
const secondHand = clock.appendChild(document.createElement('div'));
const center = clock.appendChild(document.createElement('div'));
hourHand.id = 'hand-hours';
minuteHand.id = 'hand-minutes';
secondHand.id = 'hand-seconds';
center.id = 'center';
let degH, degM, degS;
let style = document.documentElement.style;

function setTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  secondHand.classList.remove('top')

  degH = hours * 30 + minutes / 2;
  style.setProperty('--hours', degH + 'deg');

  degM = minutes * 6 + seconds / 10;
  style.setProperty('--minutes', degM + 'deg');

  if (seconds !== 0) {
    degS = seconds * 6;
  } else {
    degS = 360;
    setTimeout(topMin, 200);
  }
  style.setProperty('--seconds', degS + 'deg');
}

function topMin() {
  secondHand.classList.add('top');
  style.setProperty('--seconds', 0 + 'deg');
}

setTime();
setInterval(setTime, 1000);
