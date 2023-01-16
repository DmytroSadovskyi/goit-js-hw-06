const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');
const minBoxesAmount = Number(input.min);
const maxBoxesAmount = Number(input.max);

input.addEventListener('input', function () {
  createBtn.addEventListener('click', createBoxes);
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  const boxesArray = [];
  amount = input.value;

  for (let i = 0; i < amount; i += 1) {
    if (amount <= maxBoxesAmount && amount >= minBoxesAmount) {
      const boxEl = document.createElement('div');

      boxEl.style.width = `${30 + i * 10}px`;
      boxEl.style.height = `${30 + i * 10}px`;
      boxEl.style.backgroundColor = getRandomHexColor();
      boxEl.style.marginBottom = '5px';
      boxEl.style.borderRadius = '5px';

      boxesArray.push(boxEl);
    }
  }

  boxesContainer.append(...boxesArray);
}

function destroyBoxes() {
  input.value = '';
  boxesContainer.innerHTML = '';
}

destroyBtn.addEventListener('click', destroyBoxes);
