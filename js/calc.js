$(document).ready(function(){

	// Получаем параметры с формы
	function getValue() {

		// Количество уровней

		let levelValue = parseInt($('input[name=level]:checked' ,'form#calcForm').val());
		let levelText = $('input[name=level]:checked + label' ,'form#calcForm').text();
		$('.resultCake > p span.showLevel').html(levelText);

		// Начинка

		let fillingValue = parseInt($('select[name=filling]' ,'form#calcForm').val());
		let fillingText = $('select[name=filling] option:selected' ,'form#calcForm').text();
		$('.resultCake > p span.showFilling').html(fillingText);

		// Дополнительные ингредиенты

		// let ingredientsValue = parseInt($('input[name=ingredients]:checked' ,'form#calcForm').val());
		// let ingredientsText = $('input[name=ingredients]:checked + label' ,'form#calcForm').text();
		// $('.resultCake > p span.showIngredients').html(ingredientsText);

		let ingredientsValue = 0;

		$('input[name=ingredients]:checkbox:checked').each(function(){
			// alert($(this).val());
			ingredientsValue += parseInt($(this).val());
			let ingredientsText = $('input[name=ingredients]:checked + label' ,'form#calcForm').text();
			console.log(ingredientsValue);
			$('.resultCake > p span.showIngredients').html(ingredientsValue);

		});

		// Покрытие

		let coverValue = parseInt($('select[name=cover]' ,'form#calcForm').val());
		let coverText = $('select[name=cover] option:selected' ,'form#calcForm').text();
		$('.resultCake > p span.showCover').html(coverText);

		// Дизайн

		let designValue = parseInt($('select[name=design]' ,'form#calcForm').val());
		let designText = $('select[name=design] option:selected' ,'form#calcForm').text();
		$('.resultCake > p span.showDesign').text(designText);


		// Расчёт стоимости
		let costCake = levelValue + fillingValue + ingredientsValue + coverValue + designValue;
		console.log(costCake);
		$('.resultCake > p span.showCost').html(costCake);

	}

	getValue();


	// Функция для подсчёта стоимости
	// function calculateCake() {

	// }

	// calculateCake();


	// Выполняем пересчёт стоиомости, если внесли изменения в конфигурацию
	$('form#calcForm').on('change', function(){
		getValue();
		// calculateCake();
	})
});