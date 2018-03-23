$(document).ready(function() {
	sname = localStorage.getItem('snameinp');
	fname = localStorage.getItem('fnameinp');
	mname = localStorage.getItem('mnameinp');
	date = localStorage.getItem('dateinp');
	age = localStorage.getItem('ageinp');
	weight = localStorage.getItem('weightinp');
	height = localStorage.getItem('heightinp');
	pulse = localStorage.getItem('pulseinp');
	sist = localStorage.getItem('sistinp');
	dia = localStorage.getItem('diainp');
	gender = localStorage.getItem('genderinp');
	
	ac = (0.011 * pulse + 0.014 * sist + 0.008 * dia + 0.014 * age + 0.009 * weight - (0.009 * height + 0.27)).toFixed(2);

	switch (true) {
		case (ac <= 2.1) : 
			status = 'Удовлетворительная адаптация'; 
			group = 'Первая'; 
			inspection = 'Углубленный врачебный осмотр только при наличии жалоб';
			recommend = 'Оздоровительные мероприятия';
		break;
		case (ac >= 2.11) && (ac <= 3.2) : status = 'Напряжение механизмов адаптации'; group = 'Вторая'; break;
		case (ac >= 3.21) && (ac <= 4.3) : status = 'Неудовлетворительная адаптация'; group = 'Третья'; break;
		case (ac >= 4.31) : status = 'Срыв механизмов адаптации'; group = 'Четвертая'; break;
	}

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#gender').append(gender);
	$('#age').append(age).append(' лет');
	$('#points').append(ac);
	$('#status').append(status);
	$('#group').append(group);
	$('#inspection').append(inspection);
	$('#recommend').append(recommend);
});