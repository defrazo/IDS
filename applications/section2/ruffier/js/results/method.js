function method() { //Обработчик четвертой методики

	var
	result1 = parseInt(localStorage.getItem('result1inp')),
	result2 = parseInt(localStorage.getItem('result2inp')),
	result3 = parseInt(localStorage.getItem('result3inp'));

	index = (4 * (result1 + result2 + result3) - 200) / 10;

	switch (true) {
		case (index <= 3.9) : var category = 1, group = 'Основная', arate = 'Высокий уровень', grade = 'Отлично'; break;
		case (index >= 4) && (index <= 6.9) : var category = 2, group = 'Основная', arate = 'Выше среднего', grade = 'Хорошо'; break;
		case (index >= 7) && (index <= 10.9) : var category = 3, group = 'Подготовительная', arate = 'Средний', grade = 'Удовлетворительно'; break;
		case (index >= 11) && (index <= 15) : var category = 4, group = 'Специальная', arate = 'Ниже среднего', grade = 'Неудовлетворительно'; break;
		case (index >=15) : var category = 5, group = 'Специальная', arate = 'Низкий', grade = 'Плохо'; break;
	}

	localStorage.setItem('indexinp', index);
	localStorage.setItem('categoryinp', category);
	localStorage.setItem('groupinp', group);	
	localStorage.setItem('arateinp', arate);
	localStorage.setItem('gradeinp', grade);	
};