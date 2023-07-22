notches1 = clock.appendChild(document.createElement('ul'));
notches2 = clock.appendChild(document.createElement('ul'));
notches3 = clock.appendChild(document.createElement('ul'));

notches1.classList.add('notches');
notches2.classList.add('notches');
notches3.classList.add('notches');

const makeNotch = () => {
  notches1.appendChild(document.createElement('li'));
  notches2.appendChild(document.createElement('li'));
  notches3.appendChild(document.createElement('li'));
}
const times = 4;

Array.from({length: times}, () => makeNotch());
