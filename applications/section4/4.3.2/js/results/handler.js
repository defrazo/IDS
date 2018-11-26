$(document).ready(function() {

	var date = localStorage.getItem('dateinp'),
		gender = localStorage.getItem('genderinp'),
		sname = localStorage.getItem('snameinp'),
		fname = localStorage.getItem('fnameinp'),
		mname = localStorage.getItem('mnameinp'),
		q1 = localStorage.getItem('tbl1c'),
		q2 = localStorage.getItem('tbl2c'),
		q3 = localStorage.getItem('tbl3c'),
		q4 = localStorage.getItem('tbl4c'),
		q5 = localStorage.getItem('tbl5c'),
		q6 = localStorage.getItem('tbl6c'),
		q7 = localStorage.getItem('tbl7c'),
		q8 = localStorage.getItem('tbl8c'),
		fac = localStorage.getItem('facinp');

	var res = Math.max(parseInt(q1), parseInt(q2), parseInt(q3), parseInt(q4), parseInt(q5), parseInt(q6), parseInt(q7), parseInt(q8));

	switch (true) {
		case (res <= 2) : var status = 'Очень низкий'; break;
		case (res >= 3 && res <= 4) : var status = 'Низкий'; break;
		case (res >= 5 && res <= 6) : var status = 'Средний'; break;
		case (res >= 6 && res <= 7) : var status = 'Высокий'; break;
		case (res >= 8) : var status = 'Очень высокий'; break;
	}

	$('#del').click(function() {
		localStorage.removeItem('tbl1c');
		localStorage.removeItem('tbl2c');
		localStorage.removeItem('tbl3c');
		localStorage.removeItem('tbl4c');
		localStorage.removeItem('tbl5c');
		localStorage.removeItem('tbl6c');
		localStorage.removeItem('tbl7c');
		localStorage.removeItem('tbl8c');
	});

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#gender').append(gender);
	$('#sum').append(res);
	$('#status').append(status);
	$('#fac').append(fac);
});