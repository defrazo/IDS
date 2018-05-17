$(document).ready(function() {
	sname = localStorage.getItem('snameinp');
	fname = localStorage.getItem('fnameinp');
	mname = localStorage.getItem('mnameinp');
	date = localStorage.getItem('dateinp');
	sist = parseFloat(localStorage.getItem('sistinp'));
	dia = parseFloat(localStorage.getItem('diainp'));
	age = parseFloat(localStorage.getItem('ageinp'));
	weight = parseFloat(localStorage.getItem('weightinp'));
	height = parseFloat(localStorage.getItem('heightinp'));
	pulse = parseFloat(localStorage.getItem('pulseinp'));
	pulsel = parseFloat(localStorage.getItem('pulselinp'));
	exerc = parseFloat(localStorage.getItem('exercinp'));
	cigaret = parseFloat(localStorage.getItem('cigaretinp'));
	alco = parseFloat(localStorage.getItem('alcoinp'));
	gender = localStorage.getItem('genderinp');
	fac = localStorage.getItem('facinp');
	
	points = 0;

	switch (true) {
		case (gender == 'Женский') : var mass = (height - 110) * 1.15; break;
		case (gender == 'Мужской') : var mass = (height - 100) * 1.15; break;
	}

	if (mass > weight) var massp = (mass - weight).toFixed();

	ad = sist + dia;

	if (ad > 200) var adp = ad - 200;

	if (pulse < 90) var pulsep = 90 - pulse;

	if (pulsel > pulse) var pulselp = 10; else pulselp = 0;

	switch (true) {
		case (exerc == 1) : var exercp = 5; break;
		case (exerc == 2) : var exercp = 10; break;
		case (exerc == 3) : var exercp = 10; break;
		case (exerc >= 4) : var exercp = 25; break;
	}

	switch (true) {
		case (cigaret == 0) : var cigaretp = 30; break;
		case (cigaret > 0) : var cigaretp = -cigaret; break;
	}

	switch (true) {
		case (alco == 0) : var alcop = 30; break;
		case (alco > 0) : var alcop = -(alco / 100)*2; break;
	}

	var sum = parseFloat(points) + parseFloat(age) + parseFloat(massp) + parseFloat(adp) + parseFloat(pulsep) + parseFloat(pulselp) + parseFloat(exerc) + parseFloat(cigaretp) + parseFloat(alcop);
	
	console.log(points);
	console.log(age);
	console.log(massp);
	console.log(adp);
	console.log(pulsep);
	console.log(pulselp);
	console.log(exercp);
	console.log(points);
	console.log(cigaretp);
	console.log(alcop);

	console.log(sum);
	switch (true) {
		case (sum <= 90) : var status = "Низкое"; break;
		case ((sum >= 91) && (sum <= 120)) : var status = "Ниже среднего"; break;
		case ((sum >= 121) && (sum <= 170)) : var status = "Среднее"; break;
		case ((sum >= 171) && (sum <= 200)) : var status = "Высше среднего"; break;
		case (sum >= 200) : var status = "Высокое"; break;
	}

	console.log(status);

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#gender').append(gender);
	$('#age').append(age).append(' лет');
	$('#status').append(status);
	$('#fac').append(fac);
});
