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

const elementUl = document.getElementById('ingredients');
console.log(elementUl);

for(const ingredient of ingredients) {
	const elementLi = document.createElement('li');
	elementLi.classList.add('item');
	elementLi.textContent = ingredient;
	elementUl.appendChild(elementLi);
}
