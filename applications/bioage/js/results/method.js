function method() { //Обработчик четвертой методики
	var gender = localStorage.getItem('genderinp'), category = 0;
	
	if (gender == "Мужской") {
		var 
		cage = localStorage.getItem('ageinp'),
		sist = localStorage.getItem('sistinp'),
		inha = localStorage.getItem('inhainp'),
		num = localStorage.getItem('num'),
		static = localStorage.getItem('staticinp'),
		dbage = Math.round(0.629 * cage + 18.56),
		bage = Math.round(26.985 + 0.215 * sist - 0.149*inha + num - 0.151 * static),
		lag = bage - dbage,
		index = Math.round(0.05 * cage + 0.093 * num - 1.327);
	} else {
		var 
		cage = localStorage.getItem('ageinp'),
		sist = localStorage.getItem('sistinp'),
		dia = localStorage.getItem('diainp'),
		weight = localStorage.getItem('weightinp'),
		num = localStorage.getItem('num'),
		static = localStorage.getItem('staticinp'),
		pulse = sist - dia,
		dbage = Math.round(0.581 * cage + 17.24),
		bage = Math.round(-1.463 + 0.415 * pulse + 0.248 * weight + 0.694* num - 0.14 * static),
		lag = bage - dbage,
		index = Math.round(0.011 * cage + 0.057 * num - 0.103);
	}

	switch (true) {
		case (lag <= -9.0) : var category = 1, status = 'Очень хорошее', arate = 'Резко замедленный'; break;
		case (lag >= -8.9) && (lag <= -3.0) : var category = 2, status = 'Хорошее', arate = 'Замедленный'; break;
		case (lag >= -2.9) && (lag <= 2.9) : var category = 3, status = 'Среднее', arate = 'Нормальный'; break;
		case (lag >= 3.0) && (lag <= 8.9) : var category = 4, status = 'Плохое', arate = 'Ускоренный'; break;
		case (lag >= 9.0) : var category = 5, status = 'Очень плохое', arate = 'Резко ускоренный'; break;
	}

	localStorage.setItem('bageinp', bage);
	localStorage.setItem('dbageinp', dbage);
	localStorage.setItem('laginp', lag);
	localStorage.setItem('indexinp', index);
	localStorage.setItem('categoryinp', category);
	localStorage.setItem('arateinp', arate);
	localStorage.setItem('statusinp', status);		
};