let carousel = document.getElementById('carousel');
let dots = document.getElementById('dots');
const params = {behavior:'smooth'};

let i = 0;
let current = 0;
for (img of carousel.children) {
  carousel.children.item(i).id = i;
  dots[i] = dots.appendChild(document.createElement('li'));
  dots[i].id = `dot-${i}`
  i++;
}
function first() {
  current = 0;
  scroll(0);
}
function prev() {
  if (current > 0) {
    --current;
    scroll(current);
  }
}
function next() {
  if (current < i - 1) {
    current++;
    scroll(current);
  }
}
function last() {
  current = i - 1;
  scroll(i - 1);
}
function scroll(d) {
  document.getElementById(d).scrollIntoView(params);
  for (dot of dots.children) {
    dot.classList.remove('current');
  };
  let curDot = document.getElementById(`dot-${d}`);
  curDot.classList.add('current')
}
scroll(0);