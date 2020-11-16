$(document).ready(function(){

	// Получаем параметры с формы
	function getValue() {

		// Блок: Количество уровней

			let levelValue = parseInt($('input[name=level]:checked' ,'form#calcForm').val());
			let levelText = $('input[name=level]:checked + label' ,'form#calcForm').text();
			$('.resultCake > p span.showLevel').html(levelText);

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
			let fillingValue = parseInt($('select[name=filling]' ,'form#calcForm').val());
			let fillingText = $('select[name=filling] option:selected' ,'form#calcForm').text();
			$('.resultCake > p span.showFilling').html(fillingText);

			if(fillingText){
				$('.fillingCake > .infoFilling > p').html(fillingDescription.get(fillingText));

				$('#_imageFilling').attr('src', fillingSrc.get(fillingText));
			}

		// Блок: Дополнительные ингредиенты

			let ingredientsValue = 0;
			let ingredientsText = '';

			$('input[name=ingredients]:checkbox:checked').each(function(){
				ingredientsValue += parseInt($(this).val());
				ingredientsText = $('input[name=ingredients]:checked + label' ,'form#calcForm').text();
				$('.resultCake > .showIngredients').html('<span class="itemIngredients">+ ' + ingredientsText + '</span>');
			});

		// Блок: Оформление

			let coverValue = parseInt($('select[name=cover]' ,'form#calcForm').val());
			let coverText = $('select[name=cover] option:selected' ,'form#calcForm').text();
			$('.resultCake > p span.showCover').html(coverText);

		// Блок: Декор

			let designValue = parseInt($('select[name=design]' ,'form#calcForm').val());
			let designText = $('select[name=design] option:selected' ,'form#calcForm').text();
			$('.resultCake > p span.showDesign').text(designText);


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