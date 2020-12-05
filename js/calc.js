$(document).ready(function(){

	// Отключаем отправку формы при нажатии Enter
	$('form#calcForm').submit(function(){
		return false;
	});

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
				['Нежность','https://via.placeholder.com/350x200?text=Нежность'],
				['Баунти','images/filling/filling_2.jpg'],
				['Апельсин в шоколаде','images/filling/filling_3.jpg'],
				['Банан - арахис - карамель','https://via.placeholder.com/350x200?text=Банан-арахис-карамель'],
				['Ванильно - маковый торт с цитрусовым курдом','https://via.placeholder.com/350x200?text=Ванильно-маковый торт с цитрусовым конфитюром'],
				['Медовик со сметанным кремом','images/filling/filling_6.jpg'],
				['Шоколадный медовик с кремом "Пломбир"','images/filling/filling_7.jpg'],
				['Классический наполеон со сливочным кремом','https://via.placeholder.com/350x200?text=Классический наполеон со сливочным кремом'],
			]);

			// Получаем значние и имя выбранной начинки (1 ярус)
			let fillingValue = parseInt($('select[name=fillingOne]' ,'form#calcForm').val());

			let fillingText = $('select[name=fillingOne] option:selected' ,'form#calcForm').text();

			$('span.showFilling').html(fillingText);

			if(fillingText){
				// Выводим описание для 1 яруса
				$('.infoOneFilling > p').html(fillingDescription.get(fillingText));
				// Выводим изображение для 1 яруса
				$('#_imageOneFilling').attr('src', fillingSrc.get(fillingText));
			}

			// Получаем значние и имя выбранной начинки (2 ярус)
			let fillingTwoValue = parseInt($('select[name=fillingTwo]' ,'form#calcForm').val());

			let fillingTwoText = $('select[name=fillingTwo] option:selected' ,'form#calcForm').text();

			$('span.showFillingTwo').html(fillingTwoText);

			if(fillingTwoText){

				$('.infoTwoFilling > p').html(fillingDescription.get(fillingTwoText));

				$('#_imageTwoFilling').attr('src', fillingSrc.get(fillingTwoText));
			}

		// Блок: Оформление

			// Описание дизайна
			let designDescription = new Map([
				['Мастика',' Это специальная пластичная паста, которую используют в качестве обтяжки тортов и лепки фигур.'],
				['Крем чиз','Крем на основе сливочного сыра и сливок.'],
				['Масляный крем','Крем на основе сливочного масла и сгущённого молока.'],
				['Творожный ганаш','Крем на основе творога, сливочного масла и шоколада.'],
				['Шоколадный ганаш','Крем на основе сливок и шоколада.'],
				['Naked cake','Голый торт, который не покрывается ни кремом, ни мастикой.'],
				['Крошка от коржей','Классический вариант оформления тортов, измельчённый бисквит или коржи.'],
			]);

			// Изображение дизайна
			let designSrc = new Map([
				['Мастика','https://via.placeholder.com/350x200?text=Мастика'],
				['Крем чиз','https://via.placeholder.com/350x200?text=Крем чиз'],
				['Масляный крем','https://via.placeholder.com/350x200?text=Масляный крем'],
				['Творожный ганаш','images/design/design_4.jpg'],
				['Шоколадный ганаш','images/design/design_5.jpg'],
				['Naked cake','https://via.placeholder.com/350x200?text=Naked cake'],
				['Крошка от коржей','images/design/design_7.jpg'],
			]);

			let designValue = parseInt($('select[name=design]' ,'form#calcForm').val());

			let designText = $('select[name=design] option:selected' ,'form#calcForm').text();

			$('span.showDesign').html(designText);

			if(designText){

				$('.infoDesign > p').html(designDescription.get(designText));

				$('#_imageDesign').attr('src', designSrc.get(designText));
			}

		// Блок: Дополнительные ингредиенты

			let ingredientsValue = 0;
			let ingredientsText = '';

			// Суммируем стоимость всех дополнительных ингредиентов
			$('input[name=ingredients]:checkbox:checked').each(function(){

				ingredientsValue += parseInt($(this).val());

				ingredientsText = $('input[name=ingredients]:checked + label' ,'form#calcForm').text();

				$('span.showIngredients').html(ingredientsText);
				// $('span.showIngredients').html(ingredientsText.replace(/\)/g,')<br>') );

			});

			// Показываем блок в правой колонке, если сумма всех ингредиентов больше 0
			if(ingredientsValue > 0) {

				$('.resultIngredients').css('display','block')

			}else if(ingredientsValue == 0) {

				$('.resultIngredients').css('display','none')

			}

			// Он отменит событие, так что он не связан над предыдущим событием.
			// Это позволяет событию запускать только в исходное событие клика.
			$("img.accordeonIngredientsCake").unbind('click');

			// При клике на иконку (plus) будет показано содержимое всего блока
			$("img.accordeonIngredientsCake").click(function(){

				// Производим замену иконки при нажатии и выводим/скрываем блок с доп.ингредиентами
				let accordeonIngredients = $('img.accordeonIngredientsCake');

				if(accordeonIngredients.attr('src') == 'images/icons/plus.svg'){

					accordeonIngredients.attr('src', 'images/icons/minus.svg');

					$('.addIngredientsCake').css('display','flex');

				}else if(accordeonIngredients.attr('src') == 'images/icons/minus.svg'){

					accordeonIngredients.attr('src', 'images/icons/plus.svg');

					$('.addIngredientsCake').css('display','none');

				}

				return false;

			});

		// Блок: Дополнительный декор

			let decorValue = 0;
			let decorText = '';

			// Суммируем стоимость всего дополнительного декора
			$('input[name=decor]:checkbox:checked').each(function(){

				decorValue += parseInt($(this).val());

				decorText = $('input[name=decor]:checked + label' ,'form#calcForm').text();

				$('span.showDecor').html(decorText);

			});

			// Показываем блок в правой колонке, если сумма дополнительных ингредиентов больше 0
			if(decorValue > 0) {

				$('.resultDecor').css('display','block')

			}else if(decorValue == 0) {

				$('.resultDecor').css('display','none')

			}

			// Он отменит событие, так что он не связан над предыдущим событием.
			// Это позволяет событию запускать только в исходное событие клика.
			$("img.accordeonDecorCake").unbind('click');

			// При клике на иконку (plus) будет показано содержимое всего блока
			$("img.accordeonDecorCake").click(function(){
			// $(document).on('click','img.accordeonDecorCake', function(){

				// Производим замену иконки при нажатии и отображаем блок с дополнительным декором
				let accordeonDecor = $('img.accordeonDecorCake');

				if(accordeonDecor.attr('src') == 'images/icons/plus.svg'){

					accordeonDecor.attr('src', 'images/icons/minus.svg');

					$('.decorCake').css('display','block');

				}else if(accordeonDecor.attr('src') == 'images/icons/minus.svg'){

					accordeonDecor.attr('src', 'images/icons/plus.svg');

					$('.decorCake').css('display','none');

				}

				return false;

			});

		// Расчёт стоимости

			// Переменные для расчёта стоимости,
			// если выбран 1 ярус

			let costOneWeight = 1500 * valueOneWeight; // 1500 руб * кг (вес торта)

			// Переменные для расчёта стоимости,
			// если выбрано 2 яруса

			let costTwoWeight = 1750 * valueTwoWeight; // 1750 руб * кг (вес торта)

			let costShape = shapeValue + shapeTwoValue; // Форма торта (1 + 2 ярус)

			let costFilling = fillingValue + fillingTwoValue; // Начинка (1 + 2 ярус)

			// Выполняем проверку, какое количество ярусов выбрано
			if(levelText == '1 ярус'){

				let costCake = levelValue + shapeValue + costOneWeight + fillingValue + designValue + ingredientsValue + decorValue;

				$('span.showCost').html(costCake);

			}else if(levelText == '2 яруса'){

				let costCake = levelValue + costShape + costTwoWeight + costFilling + designValue + ingredientsValue + decorValue;

				$('span.showCost').html(costCake);

			}

	}

	getValue();


	// Выполняем пересчёт стоиомости, если внесли изменения в конфигурацию
	$('form#calcForm').on('change', function(){
		getValue();
	});

});