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

const ingredientsList = document.getElementById('ingredients');

const elemnt = ingredients.map(ingredient => {
	const ingredientsItem = document.createElement('li');
	ingredientsItem.classList.add('item');
	ingredientsItem.textContent = ingredient;

	return ingredientsItem;
});
console.log(elemnt);
ingredientsList.append(...elemnt);