$(document).ready(function() {

	var sname = localStorage.getItem('snameinp'),
		fname = localStorage.getItem('fnameinp'),
		mname = localStorage.getItem('mnameinp'),
		date = localStorage.getItem('dateinp'),
		age = parseFloat(localStorage.getItem('ageinp')),
		weight = parseFloat(localStorage.getItem('weightinp')),
		height = parseFloat(localStorage.getItem('heightinp')),
		pulse = parseFloat(localStorage.getItem('pulseinp')),
		sist = parseFloat(localStorage.getItem('sistinp')),
		dia = parseFloat(localStorage.getItem('diainp')),
		gender = localStorage.getItem('genderinp'),
		fac = localStorage.getItem('facinp');
	
	var ac = (0.011 * parseFloat(pulse) + 0.014 * parseFloat(sist) + 0.008 * parseFloat(dia) + 0.014 * parseFloat(age) + 0.009 * parseFloat(weight) - (0.009 * parseFloat(height) + 0.27)).toFixed(2);

	switch (true) {
		case (ac <= 2.10) : status = 'Удовлетворительная адаптация'; group = 'Первая'; break;
		case (ac >= 2.11 && ac <= 3.20) : status = 'Напряжение механизмов адаптации'; group = 'Вторая'; break;
		case (ac >= 3.21 && ac <= 4.30) : status = 'Неудовлетворительная адаптация'; group = 'Третья'; break;
		case (ac >= 4.31) : status = 'Срыв механизмов адаптации'; group = 'Четвертая'; break;
	}

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#gender').append(gender);
	$('#fac').append(fac);
	$('#age').append(age + ' лет');
	$('#points').append(ac);
	$('#status').append(status);
	$('#group').append(group);
});