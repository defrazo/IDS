$(document).ready(function() {
	date = localStorage.getItem('dateinp');
	gender = localStorage.getItem('genderinp');
	sname = localStorage.getItem('snameinp');
	fname = localStorage.getItem('fnameinp');
	mname = localStorage.getItem('mnameinp');
	q1 = localStorage.getItem('timer1');
	q2 = localStorage.getItem('timer2');
	q3 = localStorage.getItem('timer3');
	q4 = localStorage.getItem('error1');
	q5 = localStorage.getItem('error2');
	q6 = localStorage.getItem('error3');
	fac = localStorage.getItem('facinp');
	
	console.log(q1);
	console.log(q2);
	console.log(q3);

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


	sum = res1 + res2 + res3;
	error = parseInt(q4) + parseInt(q5) + parseInt(q6);
	console.log(sum);

	switch (true) {
		case (sum >= 420) : status = 'Очень низкий'; break;
		case ((sum >= 352) && (sum <= 419)) : status = 'Низкий'; break;
		case ((sum >= 162) && (sum <= 351)) : status = 'Средний'; break;
		case ((sum >= 156) && (sum <= 161)) : status = 'Высокий'; break;
		case (sum <= 155) : status = 'Очень высокий'; break;
	}

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#gender').append(gender);
	$('#status').append(status);
	$('#time').append(sum+' сек');
	$('#error').append(error);
	$('#fac').append(fac);
});