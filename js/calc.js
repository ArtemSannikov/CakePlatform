$(document).ready(function(){

	// Получаем параметры с формы
	function getValue() {

		// Блок: Количество уровней

			let levelValue = parseInt($('input[name=level]:checked' ,'form#calcForm').val());

			let levelText = $('input[name=level]:checked + label' ,'form#calcForm').text();

			$('span.showLevel').html(levelText);

			// Выводим блоки с формой торта в зависимости от того, сколько ярусов выбрал пользователь
			if(levelText == '1 ярус'){
				// Форма для второго яруса
				$('.shape.shapeLevelTwo').css('display','none');
				// Начинка 2 ярус
				$('.fillingTwoCake').css('display','none');
				$('.titleBlockFillingTwoCake').css('display','none');
				// Вес двухярусного торта
				$('.weightOneLevelCake').css('display','block');
				$('.weightTwoLevelCake').css('display','none');
				// Пункты в чеке (правая колонка)
				$('.resultTwoLevel').css('display','none');

			}else if(levelText == '2 яруса'){
				// Форма для второго яруса
				$('.shape.shapeLevelTwo').css('display','block');
				// Начинка 2 ярус
				$('.fillingTwoCake').css('display','flex');
				$('.titleBlockFillingTwoCake').css('display','block');
				// Вес двухярусного торта
				$('.weightOneLevelCake').css('display','none');
				$('.weightTwoLevelCake').css('display','block');
				// Пункты в чеке (правая колонка)
				$('.resultTwoLevel').css('display','block');
			}


		// Блок: Форма торта

			let cycle = 'Круг';
			let heart = 'Сердце';
			let rectangle = 'Прямоугольник';
			let square = 'Квадрат';

			// Получаем данные с select для 1 яруса
			let shapeValue = parseInt($('select[name=shape_one] option:selected', 'form#calcForm').val());

			let shapeText = $('select[name=shape_one] option:selected', 'form#calcForm').text();

			let shapeOneImage = $('img#_imageOneShape');

			$('span.showShapeOne').html(shapeText);

			if(shapeText == cycle) shapeOneImage.attr('src', 'images/shape/cycle.jpg');
			else if(shapeText == heart) shapeOneImage.attr('src', 'images/shape/heart.jpg');
			else if(shapeText == rectangle) shapeOneImage.attr('src', 'images/shape/rectangle.jpg');
			else if(shapeText == square) shapeOneImage.attr('src', 'images/shape/square.jpg');

			// Получаем данные с select для 2 яруса
			let shapeTwoValue = parseInt($('select[name=shape_two] option:selected', 'form#calcForm').val());

			let shapeTwoText = $('select[name=shape_two] option:selected', 'form#calcForm').text();

			let shapeTwoImage = $('img#_imageTwoShape');

			$('span.showShapeTwo').html(shapeTwoText);

			if(shapeTwoText == cycle) shapeTwoImage.attr('src', 'images/shape/cycle.jpg');
			else if(shapeTwoText == heart) shapeTwoImage.attr('src', 'images/shape/heart.jpg');
			else if(shapeTwoText == rectangle) shapeTwoImage.attr('src', 'images/shape/rectangle.jpg');
			else if(shapeTwoText == square) shapeTwoImage.attr('src', 'images/shape/square.jpg');

		// Блок: Вес торта
			
			let valueOneWeight = $('input[name=weight_cake_one]', 'form#calcForm').val();

			let valueTwoWeight = $('input[name=weight_cake_two]', 'form#calcForm').val();
			
			if(levelText == '1 ярус') $('span.showWeight').html(valueOneWeight + ' кг');
			else if(levelText == '2 яруса') $('span.showWeight').html(valueTwoWeight + ' кг');


		// Блок: Начинка
		// Получаем значение с select, а затем ищем имя option в двух массивах, чтобы вывести описание и изображение начинки

			// Описание начинки
			let fillingDescription = new Map([
				['Не выбрано','Пожалуйста, произведите выбор начинки для вашего будущего торта :)'],
				['Нежность','Нежный, пористый ванильный бисквит, пропитанный молочным сиропом, с лёгкими оттенками мороженого. Сочетание лёгкого и воздушного сливочного крема с ягодой прослойкой (малина / клубника).'],
				['Баунти','Насыщенные шоколадные коржи с нежным кремом, на основе сливок и творожного сыра, в сочетании с кокосовой прослойкой, которая напоминает знаменитые батончики "Baunti".'],
				['Апельсин в шоколаде','Очень ароматные, насыщенные шоколадным вкусом коржи, которые пропитаны апельсиновым соком. Идеально сочетаются с кремом на основе тёмного шоколада и апельсиновым конфитюром.'],
				['Банан - арахис - карамель','Ароматные ванильные коржи со сливочным кремом, с прослойкой из карамелизированных бананов и сливочной карамели с арахисом.'],
				['Ванильно - маковый торт с цитрусовым курдом','Сочетание маковых и ванильных коржей с пропиткой из цитрусового сиропа (апельсин / лимон), с нежным сливочным кремом, который оттеняет кислинку. А нежная, в меру сладкая прослойка из цитрусового курда (апельсин / лимон) завершает всю вкусовую гамму торта.'],
				['Медовик со сметанным кремом','Тонкие, нежные и медовые коржи со сметанным кремом идеально сочетаются между собой. Торт получается настолько нежный, что просто тает во рту.'],
				['Шоколадный медовик с кремом "Пломбир"','Яркие, ароматные медово - шоколадные коржи с кремом "Пломбир", по вкусу напоминающее мороженое, как раньше - в детстве.'],
				['Классический наполеон со сливочным кремом','Слоёные, сливочные коржи со сливочным кремом. Вкус этого торта получается очень сбалансированным, в меру сладким, очень ароматный и до безумия нежный.'],
			]);

			// Изображение начинки
			let fillingSrc = new Map([
				['Не выбрано','images/filling/filling_no.jpg'],
				['Нежность','https://via.placeholder.com/350x200?text=Нежность'],
				['Баунти','https://via.placeholder.com/350x200?text=Баунти'],
				['Апельсин в шоколаде','https://via.placeholder.com/350x200?text=Апельсин в шоколаде'],
				['Банан - арахис - карамель','https://via.placeholder.com/350x200?text=Банан-арахис-карамель'],
				['Ванильно - маковый торт с цитрусовым курдом','https://via.placeholder.com/350x200?text=Ванильно-маковый торт с цитрусовым конфитюром'],
				['Медовик со сметанным кремом','https://via.placeholder.com/350x200?text=Медовик со сметанным кремом'],
				['Шоколадный медовик с кремом "Пломбир"','https://via.placeholder.com/350x200?text=Шоколадный медовик с кремом "Пломбир"'],
				['Классический наполеон со сливочным кремом','https://via.placeholder.com/350x200?text=Классический наполеон со сливочным кремом'],
			]);

			// Получаем значние и имя выбранной начинки
			let fillingValue = parseInt($('select[name=fillingOne]' ,'form#calcForm').val());

			let fillingText = $('select[name=fillingOne] option:selected' ,'form#calcForm').text();

			$('span.showFilling').html(fillingText);

			if(fillingText){
				$('.infoOneFilling > p').html(fillingDescription.get(fillingText));

				$('#_imageOneFilling').attr('src', fillingSrc.get(fillingText));
			}

		// Блок: Оформление

			let coverValue = parseInt($('select[name=cover]' ,'form#calcForm').val());
			let coverText = $('select[name=cover] option:selected' ,'form#calcForm').text();
			$('.resultCake > p span.showCover').html(coverText);

			let coverDescription = new Map([
				['Не выбрано',''],
				['Мастика',' Это специальная пластичная паста, которую используют в качестве обтяжки тортов и лепки фигур.'],
				['Крем чиз','Крем на основе сливочного сыра и сливок.'],
				['Масляный крем','Крем на основе сливочного масла и сгущённого молока.'],
				['Творожный ганаш','Это крем на основе творога, сливочного масла и шоколада.'],
				['Шоколадный ганаш','Это крем на основе сливок и шоколада.'],
				['Naced cake','Голый торт, который не покрывается ни кремом, ни мастикой.'],
				['Крошка от коржей','Классический вариант оформления тортов, измельчённый бисквит или коржи.'],
			]);

		// Блок: Дополнительные ингредиенты

			let ingredientsValue = 0;
			let ingredientsText = '';

			if(ingredientsValue == 0) $('span.showIngredients').html('Не выбрано');

			$('input[name=ingredients]:checkbox:checked').each(function(){
				ingredientsValue += parseInt($(this).val());
				ingredientsText = $('input[name=ingredients]:checked + label' ,'form#calcForm').text();
				$('span.showIngredients').html(ingredientsText);
			});

			// При клике на иконку (plus) будет показано содержимое всего блока
			$("form#calcForm label.titleBlock > img.accordeonIngredientsCake").click(function(){

				// Отображаем блок с дополнительным декором
				$("form#calcForm .addIngredientsCake").slideToggle("fast");

				// Производим замену иконки при нажатии
				let designIconAccordeon = $('form#calcForm label.titleBlock > img.accordeonIngredientsCake');

				if(designIconAccordeon.attr('src') == 'images/icons/plus.svg'){

					designIconAccordeon.attr('src', 'images/icons/minus.svg');

				}else if(designIconAccordeon.attr('src') == 'images/icons/minus.svg'){

					designIconAccordeon.attr('src', 'images/icons/plus.svg');

				}

				return false;

			});

		// Блок: Дополнительный декор

			let designValue = parseInt($('select[name=design]' ,'form#calcForm').val());
			let designText = $('select[name=design] option:selected' ,'form#calcForm').text();
			$('.resultCake > p span.showDesign').text(designText);


			// При клике на иконку (plus) будет показано содержимое всего блока
			$("form#calcForm label.titleBlock > img.accordeonDecorCake").click(function(){

				// Отображаем блок с дополнительным декором
				$("form#calcForm .decorCake").slideToggle("fast");

				// Производим замену иконки при нажатии
				let designIconAccordeon = $('form#calcForm label.titleBlock > img.accordeonDecorCake');

				if(designIconAccordeon.attr('src') == 'images/icons/plus.svg'){

					designIconAccordeon.attr('src', 'images/icons/minus.svg');

				}else if(designIconAccordeon.attr('src') == 'images/icons/minus.svg'){

					designIconAccordeon.attr('src', 'images/icons/plus.svg');

				}

				return false;

			});

		// Расчёт стоимости
		// Проверяем заполнено ли поле со скидкой. Если заполнено, производим расчёт с условием скидки

			let sale = $('input[name=sale]', 'form#calcForm').val();
			let saleCount = 0.15;

			if(sale != '') {

				let costCake = levelValue + fillingValue + ingredientsValue + coverValue + designValue;
				let saleCake = costCake * saleCount; 
				let finalCostCake = costCake - saleCake;

				$('.resultCake > p span.showCost').html(finalCostCake);
				
			}else{
				let costCake = levelValue + fillingValue + ingredientsValue + coverValue + designValue;
				$('.resultCake > p span.showCost').html(costCake);
			}

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