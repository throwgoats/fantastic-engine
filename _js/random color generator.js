
// JS random color generator
// https://www.youtube.com/shorts/NcAQuWu-sWc

function getColor() {
  const hexArray = '0123456789abcdef'.split('');

  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += hexArray[Math.floor(Math.random() * 16)];
  }

  return color;
}

btnEl.addEventListener('click', () => {
  const color = getColor();

  cardEl.style.background = color;
  textEl.innerText = color;
});
