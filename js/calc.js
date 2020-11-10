$(function(){

	// Установка переменных

	let selectLevel; // Количество уровней
	let selectFilling; // Начинка
	let selectDesign; // Оформление
	let costCake; // Общая стоиомость

	levelCake = {
		"1 level": 1,
		"2 level": 2,
		"3 level": 3,
	}

	// Начинки
	listFilling = {
		"Тестовый пункт 1": 100,
		"Тестовый пункт 2": 200,
		"Тестовый пункт 3": 300,
		"Тестовый пункт 4": 400,
		"Тестовый пункт 5": 500,
		"Тестовый пункт 6": 600,
	};

	// Вставка данных в поле
	function insertFillingCake(){
		let html = '';
		for(let filling in listFilling) {
			console.log(filling);
		}
	}

	insertFillingCake();

});