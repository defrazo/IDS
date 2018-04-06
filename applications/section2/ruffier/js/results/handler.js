$(document).ready(function() {
	sname = localStorage.getItem('snameinp');
	fname = localStorage.getItem('fnameinp');
	mname = localStorage.getItem('mnameinp');
	date = localStorage.getItem('dateinp');
	index = localStorage.getItem('indexinp');
	arate = localStorage.getItem('arateinp');
	group = localStorage.getItem('groupinp');
	category = localStorage.getItem('categoryinp');
	grade = localStorage.getItem('gradeinp');
	gender = localStorage.getItem('genderinp');
	fac = localStorage.getItem('facinp');
	
	var
	result1 = localStorage.getItem('result1inp'),
	result2 = localStorage.getItem('result2inp'),
	result3 = localStorage.getItem('result3inp');

	index = (4 * (parseFloat(result1) + parseFloat(result2) + parseFloat(result3)) - 200) / 10;

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


	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#gender').append(gender);
	$('#faclass').append(category);
	$('#arate').append(arate);
	$('#grade').append(grade);
	$('#group').append(group);
	$('#index').append(index);
	$('#fac').append(fac);
});