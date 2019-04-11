$(document).ready(function() {

	var date = localStorage.getItem('dateinp'),
		gender = localStorage.getItem('genderinp'),
		sname = localStorage.getItem('snameinp'),
		fname = localStorage.getItem('fnameinp'),
		mname = localStorage.getItem('mnameinp'),
		q1 = localStorage.getItem('e1inp'),
		q2 = localStorage.getItem('e2inp'),
		q3 = localStorage.getItem('e3inp'),
		q4 = localStorage.getItem('e4inp'),
		q5 = localStorage.getItem('e5inp'),
		q6 = localStorage.getItem('e6inp'),
		q7 = localStorage.getItem('e7inp'),
		q8 = localStorage.getItem('e8inp'),
		q9 = localStorage.getItem('e9inp'),
		q10 = localStorage.getItem('e10inp'),
		q11 = localStorage.getItem('e11inp'),
		q12 = localStorage.getItem('e12inp'),
		q13 = localStorage.getItem('e13inp'),
		q14 = localStorage.getItem('e14inp'),
		q15 = localStorage.getItem('e15inp'),
		q16 = localStorage.getItem('e16inp'),
		fac = localStorage.getItem('facinp');

	var sum = parseInt(q1) + parseInt(q2) + parseInt(q3) + parseInt(q4) + parseInt(q5) 
		+ parseInt(q6) + parseInt(q7)  + parseInt(q8) + parseInt(q9) + parseInt(q10) 
		+ parseInt(q11) + parseInt(q12) + parseInt(q13) + parseInt(q14) + parseInt(q15) + parseInt(q16);

	
	var motive = parseInt(q1) + parseInt(q2) + parseInt(q3) + parseInt(q4) + parseInt(q5) + parseInt(q6);
	var obr = parseInt(q7)  + parseInt(q8) + parseInt(q9);
	var emo = parseInt(q10) + parseInt(q11) + parseInt(q12) + parseInt(q13);
	var prac = parseInt(q14) + parseInt(q15) + parseInt(q16);

	switch (true) {
		case (sum >= 60) : var status = 'Деятельно-творческий (высокий)'; break;
		case (sum >= 48 && sum <= 59) : var status = 'Деятельный (средний)'; break;
		case (sum >= 32 && sum <= 47) : var status = 'Слабо заинтересованный (низкий)'; break;
		case (sum <= 31) : var status = 'Индифферентный (крайне низкий)'; break;
	}

	switch (true) {
		case (motive >= 23) : var mstatus = 'Деятельно-творческий (высокий)'; break;
		case (motive >= 18 && motive <= 22) : var mstatus = 'Деятельный (средний)'; break;
		case (motive >= 12 && motive <= 17) : var mstatus = 'Слабо заинтересованный (низкий)'; break;
		case (motive <= 11) : var mstatus = 'Индифферентный (крайне низкий)'; break;
	}

	switch (true) {
		case (obr >= 11) : var ostatus = 'Деятельно-творческий (высокий)'; break;
		case (obr >= 9 && obr <= 10) : var ostatus = 'Деятельный (средний)'; break;
		case (obr >= 6 && obr <= 8) : var ostatus = 'Слабо заинтересованный (низкий)'; break;
		case (obr <= 5) : var ostatus = 'Индифферентный (крайне низкий)'; break;
	}

	switch (true) {
		case (emo >= 15) : var estatus = 'Деятельно-творческий (высокий)'; break;
		case (emo >= 12 && emo <= 14) : var estatus = 'Деятельный (средний)'; break;
		case (emo >= 8 && emo <= 11) : var estatus = 'Слабо заинтересованный (низкий)'; break;
		case (emo <= 7) : var estatus = 'Индифферентный (крайне низкий)'; break;
	}

	switch (true) {
		case (prac >= 11) : var pstatus = 'Деятельно-творческий (высокий)'; break;
		case (prac >= 9 && prac <= 10) : var pstatus = 'Деятельный (средний)'; break;
		case (prac >= 6 && prac <= 8) : var pstatus = 'Слабо заинтересованный (низкий)'; break;
		case (prac <= 5) : var pstatus = 'Индифферентный (крайне низкий)'; break;
	}

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#gender').append(gender);
	$('#motive').append(motive + ' балл(ов) <br>' + mstatus);
	$('#obr').append(obr + ' балл(ов) <br>' + ostatus);
	$('#emo').append(emo + ' балл(ов) <br>' + estatus);
	$('#prac').append(prac + ' балл(ов) <br>' + pstatus);
	$('#sum').append(sum + ' балл(ов) <br>' + status);
	$('#fac').append(fac);
});