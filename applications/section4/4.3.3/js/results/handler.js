$(document).ready(function() {

	var date = localStorage.getItem('dateinp'),
		gender = localStorage.getItem('genderinp'),
		sname = localStorage.getItem('snameinp'),
		fname = localStorage.getItem('fnameinp'),
		mname = localStorage.getItem('mnameinp'),
		q1 = localStorage.getItem('timer1'),
		q2 = localStorage.getItem('timer2'),
		q3 = localStorage.getItem('timer3'),
		q4 = localStorage.getItem('error1'),
		q5 = localStorage.getItem('error2'),
		q6 = localStorage.getItem('error3'),
		fac = localStorage.getItem('facinp');
		
	if  (q1.length > 5) {
		q1min = q1.slice(0, -6);
		q1sec = q1.slice(3, -3);
		res1 = parseInt(q1min) * 60 + parseInt(q1sec);
	} else {
		q1sec = q1.slice(0, -3);
		res1 = parseInt(q1sec);
	}

	if  (q2.length > 5) {
		q2min = q2.slice(0, -6);
		q2sec = q2.slice(3, -3);
		res2 = parseInt(q2min) * 60 + parseInt(q2sec);
	} else {
		q2sec = q2.slice(0, -3);
		res2 = parseInt(q2sec);
	}

	if  (q3.length > 5) {
		q3min = q3.slice(0, -6);
		q3sec = q3.slice(3, -3);
		res3 = parseInt(q3min) * 60 + parseInt(q3sec);
	} else {
		q3sec = q3.slice(0, -3);
		res3 = parseInt(q3sec);
	}

	var sum = res1 + res2 + res3;
	var error = parseInt(q4) + parseInt(q5) + parseInt(q6);

	switch (true) {
		case (sum >= 420) : var status = 'Очень низкий'; break;
		case ((sum >= 352) && (sum <= 419)) : var status = 'Низкий'; break;
		case ((sum >= 162) && (sum <= 351)) : var status = 'Средний'; break;
		case ((sum >= 156) && (sum <= 161)) : var status = 'Высокий'; break;
		case (sum <= 155) : var status = 'Очень высокий'; break;
	}

	$('#del').click(function() {
		localStorage.removeItem('timer1');
		localStorage.removeItem('timer2');
		localStorage.removeItem('timer3');
		localStorage.removeItem('error1');
		localStorage.removeItem('error2');
		localStorage.removeItem('error3');
		localStorage.removeItem('series1');
		localStorage.removeItem('series2');
		localStorage.removeItem('series3');
	});

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#gender').append(gender);
	$('#status').append(status);
	$('#time').append(sum + ' сек');
	$('#error').append(error);
	$('#fac').append(fac);
});