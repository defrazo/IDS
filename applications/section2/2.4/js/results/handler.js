$(document).ready(function() {

	var sname = localStorage.getItem('snameinp'),
		fname = localStorage.getItem('fnameinp'),
		mname = localStorage.getItem('mnameinp'),
		date = localStorage.getItem('dateinp'),
		sist = parseInt(localStorage.getItem('sistinp')),
		dia = parseInt(localStorage.getItem('diainp')),
		age = parseInt(localStorage.getItem('ageinp')),
		weight = parseInt(localStorage.getItem('weightinp')),
		height = parseInt(localStorage.getItem('heightinp')),
		pulse = parseInt(localStorage.getItem('pulseinp')),
		pulsel = parseInt(localStorage.getItem('pulselinp')),
		exerc = parseInt(localStorage.getItem('exercinp')),
		cigaret = parseInt(localStorage.getItem('cigaretinp')),
		alco = parseInt(localStorage.getItem('alcoinp')),
		gender = localStorage.getItem('genderinp'),
		fac = localStorage.getItem('facinp');
	
	var points = 0;

	switch (true) {
		case (gender == 'Женский') : var mass = (height - 110) * 1.15; break;
		case (gender == 'Мужской') : var mass = (height - 100) * 1.15; break;
	}

	if (mass > weight) var massp = (mass - weight).toFixed(); else var massp = 0;

	var ad = sist + dia;

	if (ad > 200) var adp = ad - 200; else var adp = 0;

	if (pulse < 90) var pulsep = 90 - pulse; else var pulsep = 0;

	if (pulsel > pulse) var pulselp = 10; else var pulselp = 0;

	switch (true) {
		case (exerc == 1) : var exercp = 5; break;
		case (exerc == 2) : var exercp = 10; break;
		case (exerc == 3) : var exercp = 10; break;
		case (exerc >= 4) : var exercp = 25; break;
	}

	switch (true) {
		case (cigaret == 0) : var cigaretp = 30; break;
		case (cigaret > 0) : var cigaretp = - cigaret; break;
	}

	switch (true) {
		case (alco == 0) : var alcop = 30; break;
		case (alco > 0) : var alcop = - (alco / 100) * 2; break;
	}

	var sum = points + age + parseFloat(massp) + parseFloat(adp) + pulsep + pulselp + exerc + cigaretp + alcop;

	switch (true) {
		case (sum <= 90) : var status = "Низкий"; break;
		case (sum >= 91 && sum <= 120) : var status = "Ниже среднего"; break;
		case (sum >= 121 && sum <= 170) : var status = "Средний"; break;
		case (sum >= 171 && sum <= 199) : var status = "Выше среднего"; break;
		case (sum >= 200) : var status = "Высокий"; break;
	}

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#gender').append(gender);
	$('#points').append(sum + ' балл(ов)');
	$('#status').append(status);
	$('#fac').append(fac);
});
