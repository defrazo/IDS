$(document).ready(function() {

	var sname = localStorage.getItem('snameinp'),
		fname = localStorage.getItem('fnameinp'),
		mname = localStorage.getItem('mnameinp'),
		date = localStorage.getItem('dateinp'),
		age = parseInt(localStorage.getItem('ageinp')),
		weight = parseInt(localStorage.getItem('weightinp')),
		height = parseInt(localStorage.getItem('heightinp')),
		pulse = parseInt(localStorage.getItem('pulseinp')),
		sist = parseInt(localStorage.getItem('sistinp')),
		dia = parseInt(localStorage.getItem('diainp')),
		gender = localStorage.getItem('genderinp'),
		fac = localStorage.getItem('facinp');
	
	var adsrp = (sist - dia) / 3 + dia;

	var ufc = (700 - 3 * pulse - 2.5 * parseFloat(adsrp) - 2.7 * age + 0.28 * weight) / (350 - (2.6 * age) + (0.21 * height));

	switch (true) {
		case (ufc <= 0.375) : var status = 'Низкий'; break;
		case (ufc >= 0.376 && ufc <= 0.525) : var status = 'Ниже среднего'; break;
		case (ufc >= 0.526 && ufc <= 0.675) : var status = 'Средний'; break;
		case (ufc >= 0.676 && ufc <= 0.825) : var status = 'Выше среднего'; break;
		case (ufc >= 0.826) : var status = 'Высокий'; break;
	}

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#points').append((ufc).toFixed(3));
	$('#gender').append(gender);
	$('#fac').append(fac);
	$('#status').append(status);
});