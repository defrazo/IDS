$(document).ready(function() {
	var date = localStorage.getItem('dateinp'),
		fac = localStorage.getItem('facinp'),
		gender = localStorage.getItem('genderinp'),
		sname = localStorage.getItem('snameinp'),
		fname = localStorage.getItem('fnameinp'),
		mname = localStorage.getItem('mnameinp'),
		age = localStorage.getItem('ageinp'),
		weight = localStorage.getItem('weightinp'),
		dia = localStorage.getItem('diainp'),
		sist = localStorage.getItem('sistinp'),
		inha = localStorage.getItem('inhainp'),
		static = localStorage.getItem('staticinp'),
		q1 = localStorage.getItem('a1inp'),
		q2 = localStorage.getItem('a2inp'),
		q3 = localStorage.getItem('a3inp'),
		q4 = localStorage.getItem('a4inp'),
		q5 = localStorage.getItem('a5inp'),
		q6 = localStorage.getItem('a6inp'),
		q7 = localStorage.getItem('a7inp'),
		q8 = localStorage.getItem('a8inp'),
		q9 = localStorage.getItem('a9inp'),
		q10 = localStorage.getItem('a10inp'),
		q11 = localStorage.getItem('a11inp'),
		q12 = localStorage.getItem('a12inp'),
		q13 = localStorage.getItem('a13inp'),
		q14 = localStorage.getItem('a14inp'),
		q15 = localStorage.getItem('a15inp'),
		q16 = localStorage.getItem('a16inp'),
		q17 = localStorage.getItem('a17inp'),
		q18 = localStorage.getItem('a18inp'),
		q19 = localStorage.getItem('a19inp'),
		q20 = localStorage.getItem('a20inp'),
		category = 0;

	var num = parseInt(q1) + parseInt(q2) + parseInt(q3) + parseInt(q4) + parseInt(q5) + parseInt(q6) + parseInt(q7) + parseInt(q8) + parseInt(q9) + parseInt(q10) + parseInt(q11) + parseInt(q12) + parseInt(q13) + parseInt(q14) + parseInt(q15) + parseInt(q16) + parseInt(q17) + parseInt(q18) + parseInt(q19) + parseInt(q20);

	if (gender == 'Мужской') {
		var dbage = Math.round(0.629 * parseFloat(age) + 18.56),
			bage = Math.round(26.985 + 0.215 * parseFloat(sist) - 0.149 * parseFloat(inha) + 0.723 * parseFloat(num) - 0.151 * parseFloat(static)),
			lag = bage - dbage,
			index = Math.round(0.05 * parseFloat(age) + 0.093 * parseFloat(num) - 1.327);
	} else {
		var pulse = sist - dia,
			dbage = Math.round(0.581 * parseFloat(age) + 17.24),
			bage = Math.round(-1.463 + 0.415 * parseFloat(pulse) + 0.248 * parseFloat(weight) + 0.694 * parseFloat(num) - 0.14 * parseFloat(static)),
			lag = bage - dbage,
			index = Math.round(0.011 * parseFloat(age) + 0.057 * parseFloat(num) - 0.103);
	}

	switch (true) {
		case (lag <= -9.0) : var category = 1, status = 'Очень хорошее', arate = 'Резко замедленный'; break;
		case (lag >= -8.9 && lag <= -3.0) : var category = 2, status = 'Хорошее', arate = 'Замедленный'; break;
		case (lag >= -2.9 && lag <= 2.9) : var category = 3, status = 'Среднее', arate = 'Нормальный'; break;
		case (lag >= 3.0 && lag <= 8.9) : var category = 4, status = 'Плохое', arate = 'Ускоренный'; break;
		case (lag >= 9.0) : var category = 5, status = 'Очень плохое', arate = 'Резко ускоренный'; break;
	}

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#fac').append(fac);
	$('#date').append(date);
	$('#gender').append(gender);
	$('#age').append(age+' лет');
	$('#ibage').append(bage+' лет');
	$('#pbage').append(dbage+' лет');
	$('#faclass').append(category);
	$('#arate').append(arate);
	$('#outrun').append(lag+' лет');
	$('#status').append(status);
	$('#index').append(index);
});