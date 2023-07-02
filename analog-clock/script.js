let clock, hourHand, minuteHand, secondHand, center;
clock = document.getElementById('clock');
hourHand = clock.appendChild(document.createElement('div'));
minuteHand = clock.appendChild(document.createElement('div'));
secondHand = clock.appendChild(document.createElement('div'));
center = clock.appendChild(document.createElement('div'));

hourHand.id = 'hand-hours';
minuteHand.id = 'hand-minutes';
secondHand.id = 'hand-seconds';
center.id = 'center';

let style = document.documentElement.style;

function setTime() {
  let now, hours, minutes, seconds;
  now = new Date();
  hours = now.getHours();
  minutes = now.getMinutes();
  seconds = now.getSeconds();
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
