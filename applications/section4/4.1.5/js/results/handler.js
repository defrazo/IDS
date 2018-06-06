$(document).ready(function() {

	var date = localStorage.getItem('dateinp'),
		gender = localStorage.getItem('genderinp'),
		sname = localStorage.getItem('snameinp'),
		fname = localStorage.getItem('fnameinp'),
		mname = localStorage.getItem('mnameinp'),
		q1 = localStorage.getItem('i11inp'),
		q2 = localStorage.getItem('i12inp'),
		q3 = localStorage.getItem('i21inp'),
		q4 = localStorage.getItem('i22inp'),
		q5 = localStorage.getItem('i31inp'),
		q6 = localStorage.getItem('i32inp'),
		q7 = localStorage.getItem('i41inp'),
		q8 = localStorage.getItem('i42inp'),
		q9 = localStorage.getItem('i51inp'),
		q10 = localStorage.getItem('i52inp'),
		q11 = localStorage.getItem('i61inp'),
		q12 = localStorage.getItem('i62inp'),
		q13 = localStorage.getItem('i71inp'),
		q14 = localStorage.getItem('i72inp'),
		q15 = localStorage.getItem('i81inp'),
		q16 = localStorage.getItem('i82inp'),
		q17 = localStorage.getItem('i91inp'),
		q18 = localStorage.getItem('i92inp'),
		q19 = localStorage.getItem('i101inp'),
		q20 = localStorage.getItem('i102inp'),
		q21 = localStorage.getItem('i111inp'),
		q22 = localStorage.getItem('i112inp'),
		q23 = localStorage.getItem('i121inp'),
		q24 = localStorage.getItem('i122inp'),
		fac = localStorage.getItem('facinp');

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#fac').append(fac);
	$('#i11').append(q1);
	$('#i12').append(q2 + '%');
	$('#i21').append(q3);
	$('#i22').append(q4 + '%');
	$('#i31').append(q5);
	$('#i32').append(q6 + '%');
	$('#i41').append(q7);
	$('#i42').append(q8 + '%');
	$('#i51').append(q9);
	$('#i52').append(q10 + '%');
	$('#i61').append(q11);
	$('#i62').append(q12 + '%');
	$('#i71').append(q13);
	$('#i72').append(q14 + '%');
	$('#i81').append(q15);
	$('#i82').append(q16 + '%');
	$('#i91').append(q17);
	$('#i92').append(q18 + '%');
	$('#i101').append(q19);
	$('#i102').append(q20 + '%');
	$('#i111').append(q21);
	$('#i112').append(q22 + '%');
	$('#i121').append(q23);
	$('#i122').append(q24 + '%');
});