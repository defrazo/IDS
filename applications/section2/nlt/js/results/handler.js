$(document).ready(function() {
	sname = parseFloat(localStorage.getItem('snameinp'));
	fname = parseFloat(localStorage.getItem('fnameinp'));
	mname = parseFloat(localStorage.getItem('mnameinp'));
	date = parseFloat(localStorage.getItem('dateinp'));
	age = parseFloat(localStorage.getItem('ageinp'));
	weight = parseFloat(localStorage.getItem('weightinp'));
	height = parseFloat(localStorage.getItem('heightinp'));
	pulse = parseFloat(localStorage.getItem('pulseinp'));
	sist = parseFloat(localStorage.getItem('sistinp'));
	dia = parseFloat(localStorage.getItem('diainp'));
	gender = parseFloat(localStorage.getItem('genderinp'));
	fac = parseFloat(localStorage.getItem('facinp'));
	
	adsrp = ((parseFloat(sist) - parseFloat(dia)) / 3) + parseFloat(dia);

	ufc = (700 - 3 * parseFloat(pulse) - 2.5 * parseFloat(adsrp) - 2.7 * parseFloat(age) + 0.28 * parseFloat(weight)) / (350 - (2.6 * parseFloat(age)) + (0.21 * parseFloat(height)));

	switch (true) {
		case (ufc < 0.375) : status = 'Низкий'; break;
		case (ufc >= 0.376) && (ufc <= 0.525) : status = 'Ниже среднего'; break;
		case (ufc >= 0.526) && (ufc <= 0.675) : status = 'Средний'; break;
		case (ufc >= 0.676) && (ufc <= 0.825) : status = 'Выше срднего'; break;
		case (ufc > 0.826) : status = 'Высокий'; break;
	}

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#points').append((ufc).toFixed(3));
	$('#gender').append(gender);
	$('#fac').append(fac);
	$('#age').append(age).append(' лет');
	$('#status').append(status);
});