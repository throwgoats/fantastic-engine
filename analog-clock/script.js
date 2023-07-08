let clock = document.getElementById('clock');
let vars = ['hours', 'minutes', 'seconds', 'center'];
let hands = {};

vars.forEach(name => {
  hands[name] = clock.appendChild(document.createElement('div'));
  hands[name].id = `hand-${name}`;
});
hands.center.id = 'center';

let style = document.documentElement.style;
function setTime() {
  let now, hours, minutes, seconds;
  now = new Date();
  hours = now.getHours();
  minutes = now.getMinutes();
  seconds = now.getSeconds();
  hands.seconds.classList.remove('top')

  let degH, degM, degS;
  degH = hours * 30 + minutes / 2;
  style.setProperty('--degH', degH + 'deg');

  degM = minutes * 6 + seconds / 10;
  style.setProperty('--degM', degM + 'deg');

  if (seconds !== 0) {
    degS = seconds * 6;
  } else {
    degS = 360;
    setTimeout(topMin, 200);
  }
  style.setProperty('--degS', degS + 'deg');
}

function topMin() {
  hands.seconds.classList.add('top');
  style.setProperty('--degS', 0 + 'deg');
}

setTime();
setInterval(setTime, 1000);
