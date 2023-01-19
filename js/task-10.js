// Завдання 10
// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

/* <div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>
<div id="boxes"></div> */

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

//1. Розміри найпершого <div> - 30px на 30px.
//2. Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
//3. Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

// const refs = {
//   amountEl: document.querySelector('#controls input'),
//   createEl: document.querySelector('button[data-create]'),
//   destroyEl: document.querySelector('button[data-destroy]'),
//   boxesEl: document.querySelector('#boxes')
// }

// function createBoxes(amount) {
//   for(let i = 0; i < amount; i++) {
//     const elem = document.createElement('div');
    
//     elem.style.width = 30 + (10 * i)+'px';
//     elem.style.height = 30 + (10 * i)+'px';
//     elem.style.backgroundColor = getRandomHexColor();
    
//     refs.boxesEl.append(elem);
//   }
// }

// refs.createEl.addEventListener('click', function() {
//   const amount = refs.amountEl.value;
//   if(amount > 0) {
//     createBoxes(amount);
//   }
// });

// refs.destroyEl.addEventListener('click', function() {
//   refs.boxesEl.innerHTML = '';
// });


// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

const refs = {
	inputRef: document.querySelector('input[type="number"]'),
	renderBtnRef: document.querySelector("[data-create]"),
	destroyBtnRef: document.querySelector('[data-destroy]'),
	boxesRef: document.querySelector("#boxes"),
	counter: 0
}

const createBoxes = (amount) => {
	const widthEl = 30;
	const heightEl = 30;
	const stepEl = 10;
	const arrayEl = new Array(amount).fill('');

	return arrayEl
		.map((elem, index) => {
		return `<div style="width:${widthEl + stepEl * (refs.counter + index + 1)}px; height :${heightEl + stepEl * (refs.counter + index + 1)}px; background-color: ${getRandomHexColor()}" ></div>`;
	})
	.join('');
}

const onClickCreateBtnHandler = () => {
	const amount = Number (refs.inputRef.value);
	refs.boxesRef.innerHTML += createBoxes(amount);
	refs.counter += amount;
}

const onClickDestroyBtnHandler = () => {
	refs.boxesRef.innerHTML = '';
	refs.inputRef.value = 0;
	refs.counter = 0;
}

refs.renderBtnRef.addEventListener('click', onClickCreateBtnHandler);
refs.destroyBtnRef.addEventListener('click', onClickDestroyBtnHandler);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}