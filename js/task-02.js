// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elemUl = document.getElementById('ingredients');
console.log(elemUl);

for(const ingredient of ingredients) {
	const elemLi = document.createElement('li');
	elemLi.classList.add('item');
	elemLi.textContent = ingredient;
	elemUl.appendChild(elemLi);
}