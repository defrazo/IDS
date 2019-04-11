$(document).ready(function() {

	var date = localStorage.getItem('dateinp');
		gender = localStorage.getItem('genderinp');
		sname = localStorage.getItem('snameinp');
		fname = localStorage.getItem('fnameinp');
		mname = localStorage.getItem('mnameinp');
		q1 = localStorage.getItem('f11inp');
		q2 = localStorage.getItem('f12inp');
		q3 = localStorage.getItem('f21inp');
		q4 = localStorage.getItem('f22inp');
		q5 = localStorage.getItem('f31inp');
		q6 = localStorage.getItem('f32inp');
		q7 = localStorage.getItem('f41inp');
		q8 = localStorage.getItem('f42inp');
		q9 = localStorage.getItem('f51inp');
		q10 = localStorage.getItem('f52inp');
		q11 = localStorage.getItem('f61inp');
		q11a = localStorage.getItem('f61ainp');
		q12 = localStorage.getItem('f62inp');
		q12a = localStorage.getItem('f62ainp');
		q13 = localStorage.getItem('f71inp');
		q14 = localStorage.getItem('f72inp');
		q15 = localStorage.getItem('f81inp');
		q16 = localStorage.getItem('f82inp');
		q17 = localStorage.getItem('f91inp');
		q18 = localStorage.getItem('f92inp');
		q19 = localStorage.getItem('f101inp');
		q20 = localStorage.getItem('f102inp');
		q21 = localStorage.getItem('f111inp');
		q22 = localStorage.getItem('f112inp');
		q23 = localStorage.getItem('f121inp');
		q24 = localStorage.getItem('f122inp');
		q25 = localStorage.getItem('f131inp');
		q26 = localStorage.getItem('f132inp');
		q27 = localStorage.getItem('f141inp');
		q28 = localStorage.getItem('f142inp');
		q29 = localStorage.getItem('f151inp');
		q30 = localStorage.getItem('f152inp');
		q31 = localStorage.getItem('f161inp');
		q32 = localStorage.getItem('f162inp');
		fac = localStorage.getItem('facinp');

	work1 = parseInt(q3) + parseInt(q19);

	work2 = parseInt(q4) + parseInt(q20);

	home1 = parseInt(q5) + parseInt(q7) + parseInt(q9) + parseInt(q11) + parseInt(q11a) + parseInt(q13);

	home2 = parseInt(q6) + parseInt(q8) + parseInt(q10) + parseInt(q12) + parseInt(q12a) + parseInt(q14);

	social1 = parseInt(q15) + parseInt(q17) + parseInt(q21) + parseInt(q23) + parseInt(q25);

	social2 = parseInt(q16) + parseInt(q18) + parseInt(q22) + parseInt(q24) + parseInt(q26);

	activity1 = parseInt(q27) + parseInt(q29) + parseInt(q31);

	activity2 = parseInt(q28) + parseInt(q30) + parseInt(q32);

	sleep1 = parseInt(q1);

	sleep2 = parseInt(q2);

	relax1 = parseInt(q31);

	relax2 = parseInt(q32);

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#work').append(work1 + ' / ' + work2 + ' часов');
	$('#home').append(home1 + ' / ' + home2 + ' часов');
	$('#social').append(social1 + ' / ' + social2 + ' часов');
	$('#activity').append(activity1 + ' / ' + activity2 + ' часов');
	$('#relax').append(relax1 + ' / ' + relax2 + ' часов');
	$('#sleep').append(sleep1 + ' / ' + sleep2 + ' часов');
	$('#fac').append(fac);
});