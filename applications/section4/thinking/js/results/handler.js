$(document).ready(function() {
	date = localStorage.getItem('dateinp');
	gender = localStorage.getItem('genderinp');
	sname = localStorage.getItem('snameinp');
	fname = localStorage.getItem('fnameinp');
	mname = localStorage.getItem('mnameinp');
	q1 = localStorage.getItem('m1inp');
	q2 = localStorage.getItem('m2inp');
	q3 = localStorage.getItem('m3inp');
	q4 = localStorage.getItem('m4inp');
	q5 = localStorage.getItem('m5inp');
	q6 = localStorage.getItem('m6inp');
	q7 = localStorage.getItem('m7inp');
	q8 = localStorage.getItem('m8inp');
	q9 = localStorage.getItem('m9inp');
	q10 = localStorage.getItem('m10inp');
	q11 = localStorage.getItem('m11inp');
	q12 = localStorage.getItem('m12inp');
	q13 = localStorage.getItem('m13inp');
	q14 = localStorage.getItem('m14inp');
	q15 = localStorage.getItem('m15inp');
	q16 = localStorage.getItem('m16inp');
	q17 = localStorage.getItem('m17inp');
	q18 = localStorage.getItem('m18inp');
	q19 = localStorage.getItem('m19inp');
	q20 = localStorage.getItem('m20inp');
	q21 = localStorage.getItem('m21inp');
	q22 = localStorage.getItem('m22inp');
	q23 = localStorage.getItem('m23inp');
	q24 = localStorage.getItem('m24inp');
	q25 = localStorage.getItem('m25inp');
	q26 = localStorage.getItem('m26inp');
	q27 = localStorage.getItem('m27inp');
	q28 = localStorage.getItem('m28inp');
	q29 = localStorage.getItem('m29inp');
	q30 = localStorage.getItem('m30inp');
	q31 = localStorage.getItem('m31inp');
	q32 = localStorage.getItem('m32inp');
	q33 = localStorage.getItem('m33inp');
	q34 = localStorage.getItem('m34inp');
	q35 = localStorage.getItem('m35inp');
	q36 = localStorage.getItem('m36inp');
	q37 = localStorage.getItem('m37inp');
	q38 = localStorage.getItem('m38inp');
	q39 = localStorage.getItem('m39inp');
	q40 = localStorage.getItem('m40inp');
	q41 = localStorage.getItem('m41inp');
	q42 = localStorage.getItem('m42inp');
	q43 = localStorage.getItem('m43inp');
	q44 = localStorage.getItem('m44inp');
	q45 = localStorage.getItem('m45inp');
	q46 = localStorage.getItem('m46inp');
	q47 = localStorage.getItem('m47inp');
	q48 = localStorage.getItem('m48inp');
	q49 = localStorage.getItem('m49inp');
	q50 = localStorage.getItem('m50inp');
	q51 = localStorage.getItem('m51inp');
	q52 = localStorage.getItem('m52inp');
	q53 = localStorage.getItem('m53inp');
	q54 = localStorage.getItem('m54inp');
	q55 = localStorage.getItem('m55inp');
	q56 = localStorage.getItem('m56inp');
	q57 = localStorage.getItem('m57inp');
	q58 = localStorage.getItem('m58inp');
	q59 = localStorage.getItem('m59inp');
	q60 = localStorage.getItem('m60inp');
	q61 = localStorage.getItem('m61inp');
	q62 = localStorage.getItem('m62inp');
	q63 = localStorage.getItem('m63inp');
	q64 = localStorage.getItem('m64inp');
	q65 = localStorage.getItem('m65inp');
	q66 = localStorage.getItem('m66inp');
	q67 = localStorage.getItem('m67inp');
	q68 = localStorage.getItem('m68inp');
	q69 = localStorage.getItem('m69inp');
	q70 = localStorage.getItem('m70inp');
	q71 = localStorage.getItem('m71inp');
	q72 = localStorage.getItem('m72inp');
	q73 = localStorage.getItem('m73inp');
	q74 = localStorage.getItem('m74inp');
	q75 = localStorage.getItem('m75inp');
	fac = localStorage.getItem('facinp');
	
	value1 = parseInt(q1) + parseInt(q6) + parseInt(q11) + parseInt(q16) + parseInt(q21) + parseInt(q26) + parseInt(q31) + parseInt(q36) + parseInt(q41) + parseInt(q46) + parseInt(q51) + parseInt(q56) + parseInt(q61) + parseInt(q66) + parseInt(q71);
	value2 = parseInt(q2) + parseInt(q7) + parseInt(q12) + parseInt(q17) + parseInt(q22) + parseInt(q27) + parseInt(q32) + parseInt(q37) + parseInt(q42) + parseInt(q47) + parseInt(q52) + parseInt(q57) + parseInt(q62) + parseInt(q67) + parseInt(q72);
	value3 = parseInt(q3) + parseInt(q8) + parseInt(q13) + parseInt(q18) + parseInt(q23) + parseInt(q28) + parseInt(q33) + parseInt(q38) + parseInt(q43) + parseInt(q48) + parseInt(q53) + parseInt(q58) + parseInt(q63) + parseInt(q68) + parseInt(q73);
	value4 = parseInt(q4) + parseInt(q9) + parseInt(q14) + parseInt(q19) + parseInt(q24) + parseInt(q29) + parseInt(q34) + parseInt(q39) + parseInt(q44) + parseInt(q49) + parseInt(q54) + parseInt(q59) + parseInt(q64) + parseInt(q69) + parseInt(q74);
	value5 = parseInt(q5) + parseInt(q10) + parseInt(q15) + parseInt(q20) + parseInt(q25) + parseInt(q30) + parseInt(q35) + parseInt(q40) + parseInt(q45) + parseInt(q50) + parseInt(q55) + parseInt(q60) + parseInt(q65) + parseInt(q70) + parseInt(q75);
	
	console.log(value1);
	switch (true) {
		case ((value1 >= 0) && (value1 <= 5)) : value1s = 'Низкий уровень'; break;
		case ((value1 >= 6) && (value1 <= 9)) : value1s = 'Средний уровень'; break;
		case ((value1 >= 10) && (value1 <= 15)) : value1s = 'Высокий уровень'; break;
	}

	switch (true) {
		case ((value2 >= 0) && (value2 <= 5)) : value2s = 'Низкий уровень'; break;
		case ((value2 >= 6) && (value2 <= 9)) : value2s = 'Средний уровень'; break;
		case ((value2 >= 10) && (value2 <= 15)) : value2s = 'Высокий уровень'; break;
	}

	switch (true) {
		case ((value3 >= 0) && (value3 <= 5)) : value3s = 'Низкий уровень'; break;
		case ((value3 >= 6) && (value3 <= 9)) : value3s = 'Средний уровень'; break;
		case ((value3 >= 10) && (value3 <= 15)) : value3s = 'Высокий уровень'; break;
	}

	switch (true) {
		case ((value4 >= 0) && (value4 <= 5)) : value4s = 'Низкий уровень'; break;
		case ((value4 >= 6) && (value4 <= 9)) : value4s = 'Средний уровень'; break;
		case ((value4 >= 10) && (value4 <= 15)) : value4s = 'Высокий уровень'; break;
	}

	switch (true) {
		case ((value5 >= 0) && (value5 <= 5)) : value5s = 'Низкий уровень'; break;
		case ((value5 >= 6) && (value5 <= 9)) : value5s = 'Средний уровень'; break;
		case ((value5 >= 10) && (value5 <= 15)) : value5s = 'Высокий уровень'; break;
	}

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#gender').append(gender);
	$('#value1').append(value1s);
	$('#value2').append(value2s);
	$('#value3').append(value3s);
	$('#value4').append(value4s);
	$('#value5').append(value5s);
	$('#fac').append(fac);
});