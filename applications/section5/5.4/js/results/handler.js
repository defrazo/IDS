$(document).ready(function() {

	var	date = localStorage.getItem('dateinp'),
		gender = localStorage.getItem('genderinp'),
		sname = localStorage.getItem('snameinp'),
		fname = localStorage.getItem('fnameinp'),
		mname = localStorage.getItem('mnameinp'),
		q1 = localStorage.getItem('ab1inp'),
		q2 = localStorage.getItem('ab2inp'),
		q3 = localStorage.getItem('ab3inp'),
		q4 = localStorage.getItem('ab4inp'),
		q5 = localStorage.getItem('ab5inp'),
		q6 = localStorage.getItem('ab6inp'),
		q7 = localStorage.getItem('ab7inp'),
		q8 = localStorage.getItem('ab8inp'),
		q9 = localStorage.getItem('ab9inp'),
		q10 = localStorage.getItem('ab10inp'),
		q11 = localStorage.getItem('ab11inp'),
		q12 = localStorage.getItem('ab12inp'),
		q13 = localStorage.getItem('ab13inp'),
		q14 = localStorage.getItem('ab14inp'),
		q15 = localStorage.getItem('ab15inp'),
		q16 = localStorage.getItem('ab16inp'),
		q17 = localStorage.getItem('ab17inp'),
		q18 = localStorage.getItem('ab18inp'),
		q19 = localStorage.getItem('ab19inp'),
		q20 = localStorage.getItem('ab20inp'),
		q21 = localStorage.getItem('ab21inp'),
		q22 = localStorage.getItem('ab22inp'),
		q23 = localStorage.getItem('ab23inp'),
		q24 = localStorage.getItem('ab24inp'),
		q25 = localStorage.getItem('ab25inp'),
		q26 = localStorage.getItem('ab26inp'),
		q27 = localStorage.getItem('ab27inp'),
		q28 = localStorage.getItem('ab28inp'),
		q29 = localStorage.getItem('ab29inp'),
		q30 = localStorage.getItem('ab30inp'),
		q31 = localStorage.getItem('ab31inp'),
		q32 = localStorage.getItem('ab32inp'),
		q33 = localStorage.getItem('ab33inp'),
		q34 = localStorage.getItem('ab34inp'),
		q35 = localStorage.getItem('ab35inp'),
		q36 = localStorage.getItem('ab36inp'),
		q37 = localStorage.getItem('ab37inp'),
		q38 = localStorage.getItem('ab38inp'),
		q39 = localStorage.getItem('ab39inp'),
		q40 = localStorage.getItem('ab40inp'),
		fac = localStorage.getItem('facinp');
	
	var value1 = parseInt(q1) + parseInt(q3) + parseInt(q5) + parseInt(q7) + parseInt(q9) + parseInt(q11) + parseInt(q13) + parseInt(q15) + parseInt(q17) + parseInt(q19) + parseInt(q21) + parseInt(q23) + parseInt(q25) + parseInt(q27) + parseInt(q29) + parseInt(q31) + parseInt(q33) + parseInt(q35) + parseInt(q37) + parseInt(q39);
	var value2 = parseInt(q2) + parseInt(q4) + parseInt(q6) + parseInt(q8) + parseInt(q10) + parseInt(q12) + parseInt(q14) + parseInt(q16) + parseInt(q18) + parseInt(q20) + parseInt(q22) + parseInt(q24) + parseInt(q26) + parseInt(q28) + parseInt(q30) + parseInt(q32) + parseInt(q34) + parseInt(q36) + parseInt(q38) + parseInt(q40);
	var kvalue1 = (0.05 * value1).toFixed(2);
	var kvalue2 = (0.05 * value2).toFixed(2);

	switch (true) {
		case ((kvalue1 >= 0.10) && (kvalue1 <= 0.45)) : var status1 = 'Низкий уровень'; break;
		case ((kvalue1 >= 0.46) && (kvalue1 <= 0.55)) : var status1 = 'Уровень ниже среднего'; break;
		case ((kvalue1 >= 0.56) && (kvalue1 <= 0.65)) : var status1 = 'Средний уровень'; break;
		case ((kvalue1 >= 0.66) && (kvalue1 <= 0.75)) : var status1 = 'Высокий уровень'; break;
		case (kvalue1 >= 0.76) : var status1 = 'Очень высокий уровень'; break;
	}

	switch (true) {
		case ((kvalue2 >= 0.20) && (kvalue2 <= 0.55)) : var status2 = 'Низкий уровень'; break;
		case ((kvalue2 >= 0.56) && (kvalue2 <= 0.65)) : var status2 = 'Уровень ниже среднего'; break;
		case ((kvalue2 >= 0.66) && (kvalue2 <= 0.70)) : var status2 = 'Средний уровень'; break;
		case ((kvalue2 >= 0.71) && (kvalue2 <= 0.80)) : var status2 = 'Высокий уровень'; break;
		case (kvalue2 >= 0.81) : var status2 = 'Очень высокий уровень'; break;
	}


	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#gender').append(gender);
	$('#status1').append(status1);
	$('#status2').append(status2);
	$('#fac').append(fac);
});