$(document).ready(function() {
	date = localStorage.getItem('dateinp');
	gender = localStorage.getItem('genderinp');
	sname = localStorage.getItem('snameinp');
	fname = localStorage.getItem('fnameinp');
	mname = localStorage.getItem('mnameinp');
	q1 = localStorage.getItem('tmr1inp');
	q2 = localStorage.getItem('tmr2inp');
	q3 = localStorage.getItem('tmr3inp');
	q4 = localStorage.getItem('tmr4inp');
	fac = localStorage.getItem('facinp');
	
	console.log(q1);
	console.log(q2);
	console.log(q3);
	console.log(q4);

	console.log(parseInt(q1));
	console.log(parseInt(q2));
	console.log(parseInt(q3));
	console.log(parseInt(q4));
	if  (q1.length > 5) {
		q1min = q1.slice(0, -6);
		q1sec = q1.slice(3, -3);
		console.log(q1min);
		console.log(q1sec);
		res1 = parseInt(q1min) * 60 + parseInt(q1sec);
		console.log(res1);
	} else {
		q1sec = q1.slice(0, -3);
		console.log(q1sec);
		res1 = parseInt(q1sec);
		console.log(res1);
	}

	if  (q2.length > 5) {
		q2min = q2.slice(0, -6);
		q2sec = q2.slice(3, -3);
		console.log(q2min);
		console.log(q2sec);
		res2 = parseInt(q2min) * 60 + parseInt(q2sec);
		console.log(res2);
	} else {
		q2sec = q2.slice(0, -3);
		console.log(q2sec);
		res2 = parseInt(q2sec);
		console.log(res2);
	}

	if  (q3.length > 5) {
		q3min = q3.slice(0, -6);
		q3sec = q3.slice(3, -3);
		console.log(q3min);
		console.log(q3sec);
		res3 = parseInt(q3min) * 60 + parseInt(q3sec);
		console.log(res3);
	} else {
		q3sec = q3.slice(0, -3);
		console.log(q3sec);
		res3 = parseInt(q3sec);
		console.log(res3);
	}

	if  (q4.length > 5) {
		q4min = q4.slice(0, -6);
		q4sec = q4.slice(3, -3);
		console.log(q4min);
		console.log(q4sec);
		res4 = parseInt(q4min) * 60 + parseInt(q4sec);
		console.log(res4);
	} else {
		q4sec = q4.slice(0, -3);
		console.log(q4sec);
		res4 = parseInt(q4sec);
		console.log(res4);
	}

	sum = res1 + res2 + res3 + res4;
	console.log(sum);

	switch (true) {
		case (sum >= 293) : status = 'Очень низкий'; break;
		case ((sum >= 283) && (sum <= 292)) : status = 'Низкий'; break;
		case ((sum >= 203) && (sum <= 282)) : status = 'Ниже среднего'; break;
		case ((sum >= 163) && (sum <= 202)) : status = 'Средний'; break;
		case ((sum >= 123) && (sum <= 162)) : status = 'Выше среднего'; break;
		case ((sum >= 113) && (sum <= 122)) : status = 'Высокий'; break;
		case (sum <= 112) : status = 'Очень высокий'; break;
	}

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#gender').append(gender);
	$('#status').append(status);
	$('#fac').append(fac);
});