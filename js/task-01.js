// Напиши скрипт, який:
// 1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
//2. Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const categorieList = document.querySelectorAll('#categories > li');
console.log(`Number of categories ${categorieList.length}`);

categorieList.forEach((element) => {

	console.log(`Category: ${element.querySelector("h2").textContent}`);
	console.log(`Elements: ${element.querySelectorAll("h2 + ul > li").length}`);
});