$(document).ready(function() {

	var date = localStorage.getItem('dateinp'),
		gender = localStorage.getItem('genderinp'),
		sname = localStorage.getItem('snameinp'),
		fname = localStorage.getItem('fnameinp'),
		mname = localStorage.getItem('mnameinp'),
		q1 = localStorage.getItem('tbl21inp'),
		q2 = localStorage.getItem('tbl22inp'),
		q3 = localStorage.getItem('tbl23inp'),
		q4 = localStorage.getItem('tbl24inp'),
		q5 = localStorage.getItem('tbl31inp'),
		q6 = localStorage.getItem('tbl32inp'),
		q7 = localStorage.getItem('tbl33inp'),
		q8 = localStorage.getItem('tbl34inp'),
		q9 = localStorage.getItem('tbl41inp'),
		q10 = localStorage.getItem('tbl42inp'),
		q11 = localStorage.getItem('tbl43inp'),
		q12 = localStorage.getItem('tbl44inp'),
		q13 = localStorage.getItem('tbl51inp'),
		q14 = localStorage.getItem('tbl52inp'),
		q15 = localStorage.getItem('tbl53inp'),
		q16 = localStorage.getItem('tbl54inp'),
		q17 = localStorage.getItem('tbl61inp'),
		q18 = localStorage.getItem('tbl62inp'),
		q19 = localStorage.getItem('tbl63inp'),
		q20 = localStorage.getItem('tbl64inp'),
		q21 = localStorage.getItem('tbl71inp'),
		q22 = localStorage.getItem('tbl72inp'),
		q23 = localStorage.getItem('tbl73inp'),
		q24 = localStorage.getItem('tbl74inp'),
		q25 = localStorage.getItem('tbl81inp'),
		q26 = localStorage.getItem('tbl82inp'),
		q27 = localStorage.getItem('tbl83inp'),
		q28 = localStorage.getItem('tbl84inp'),
		q29 = localStorage.getItem('tbl91inp'),
		q30 = localStorage.getItem('tbl92inp'),
		q31 = localStorage.getItem('tbl93inp'),
		q32 = localStorage.getItem('tbl94inp'),
		q33 = localStorage.getItem('tbl101inp'),
		q34 = localStorage.getItem('tbl102inp'),
		q35 = localStorage.getItem('tbl103inp'),
		q36 = localStorage.getItem('tbl104inp'),
		q37 = localStorage.getItem('tbl111inp'),
		q38 = localStorage.getItem('tbl112inp'),
		q39 = localStorage.getItem('tbl113inp'),
		q40 = localStorage.getItem('tbl114inp'),
		fac = localStorage.getItem('facinp');

	var points = 0;

	if (q1 == 7) points++;
	if (q2 == 9) points++;
	if (q3 == 8) points++;
	if (q4 == 5) points++;

	if (q5 == 8) points++;
	if (q6 == 9) points++;
	if (q7 == 6) points++;
	if (q8 == 7) points++;

	if (q9 == 8) points++;
	if (q10 == 5) points++;
	if (q11 == 7) points++;
	if (q12 == 5) points++;

	if (q13 == 8) points++;
	if (q14 == 8) points++;
	if (q15 == 7) points++;
	if (q16 == 8) points++;

	if (q17 == 7) points++;
	if (q18 == 9) points++;
	if (q19 == 7) points++;
	if (q20 == 8) points++;

	if (q21 == 6) points++;
	if (q22 == 5) points++;
	if (q23 == 4) points++;
	if (q24 == 6) points++;

	if (q25 == 4) points++;
	if (q26 == 6) points++;
	if (q27 == 7) points++;
	if (q28 == 8) points++;

	if (q29 == 5) points++;
	if (q30 == 9) points++;
	if (q31 == 7) points++;
	if (q32 == 5) points++;

	if (q33 == 7) points++;
	if (q34 == 8) points++;
	if (q35 == 9) points++;
	if (q36 == 5) points++;

	if (q37 == 4) points++;
	if (q38 == 6) points++;
	if (q39 == 7) points++;
	if (q40 == 9) points++;

	switch (true) {
		case (points <= 13) : status = 'Очень низкий'; break;
		case (points >= 14 && points <= 17) : status = 'Низкий'; break;
		case (points >= 18 && points <= 25) : status = 'Ниже среднего'; break;
		case (points >= 26 && points <= 30) : status = 'Средний'; break;
		case (points >= 31 && points <= 34) : status = 'Выше среднего'; break;
		case (points >= 35 && points <= 37) : status = 'Высокий'; break;
		case (points >= 38) : status = 'Очень высокий'; break;
	}

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#gender').append(gender);
	$('#status').append(status);
	$('#points').append(points);
	$('#fac').append(fac);
});