$(document).ready(function() {

	var date = localStorage.getItem('dateinp'),
		gender = localStorage.getItem('genderinp'),
		sname = localStorage.getItem('snameinp'),
		fname = localStorage.getItem('fnameinp'),
		mname = localStorage.getItem('mnameinp'),
		q1 = localStorage.getItem('tmr2inp'),
		q2 = localStorage.getItem('tmr3inp'),
		q3 = localStorage.getItem('tmr4inp'),
		q4 = localStorage.getItem('tmr5inp'),
		fac = localStorage.getItem('facinp');
	
	if (q1.length > 5) {
		var q1min = q1.slice(0, -6);
		var q1sec = q1.slice(3, -3);
		var res1 = parseInt(q1min) * 60 + parseInt(q1sec);
	} else {
		var q1sec = q1.slice(0, -3);
		var res1 = parseInt(q1sec);
	}

	if (q2.length > 5) {
		var q2min = q2.slice(0, -6);
		var q2sec = q2.slice(3, -3);
		var res2 = parseInt(q2min) * 60 + parseInt(q2sec);
	} else {
		q2sec = q2.slice(0, -3);
		res2 = parseInt(q2sec);
	}

	if (q3.length > 5) {
		var q3min = q3.slice(0, -6);
		var q3sec = q3.slice(3, -3);
		var res3 = parseInt(q3min) * 60 + parseInt(q3sec);
	} else {
		var q3sec = q3.slice(0, -3);
		var res3 = parseInt(q3sec);
	}

	if (q4.length > 5) {
		var q4min = q4.slice(0, -6);
		var q4sec = q4.slice(3, -3);
		var res4 = parseInt(q4min) * 60 + parseInt(q4sec);
	} else {
		var q4sec = q4.slice(0, -3);
		var res4 = parseInt(q4sec);
	}

	var sum = res1 + res2 + res3 + res4;

	switch (true) {
		case (sum >= 293) : var status = 'Очень низкий'; break;
		case (sum >= 283 && sum <= 292) : var status = 'Низкий'; break;
		case (sum >= 203 && sum <= 282) : var status = 'Ниже среднего'; break;
		case (sum >= 163 && sum <= 202) : var status = 'Средний'; break;
		case (sum >= 123 && sum <= 162) : var status = 'Выше среднего'; break;
		case (sum >= 113 && sum <= 122) : var status = 'Высокий'; break;
		case (sum <= 112) : var status = 'Очень высокий'; break;
	}

	$('#del').click(function() {
		localStorage.removeItem('tmr2inp');
		localStorage.removeItem('tmr3inp');
		localStorage.removeItem('tmr4inp');
		localStorage.removeItem('tmr5inp');
	});

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#gender').append(gender);
	$('#status').append(status);
	$('#sum').append(sum + ' сек');
	$('#fac').append(fac);
});