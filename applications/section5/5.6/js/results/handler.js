$(document).ready(function() {

	var	date = localStorage.getItem('dateinp'),
		gender = localStorage.getItem('genderinp'),
		sname = localStorage.getItem('snameinp'),
		fname = localStorage.getItem('fnameinp'),
		mname = localStorage.getItem('mnameinp'),
		q1 = localStorage.getItem('ad1inp'),
		q2 = localStorage.getItem('ad2inp'),
		q3 = localStorage.getItem('ad3inp'),
		q4 = localStorage.getItem('ad4inp'),
		q5 = localStorage.getItem('ad5inp'),
		q6 = localStorage.getItem('ad6inp'),
		q7 = localStorage.getItem('ad7inp'),
		q8 = localStorage.getItem('ad8inp'),
		q9 = localStorage.getItem('ad9inp'),
		q10 = localStorage.getItem('ad10inp'),
		q11 = localStorage.getItem('ad11inp'),
		q12 = localStorage.getItem('ad12inp'),
		q13 = localStorage.getItem('ad13inp'),
		q14 = localStorage.getItem('ad14inp'),
		q15 = localStorage.getItem('ad15inp'),
		q16 = localStorage.getItem('ad16inp'),
		q17 = localStorage.getItem('ad17inp'),
		q18 = localStorage.getItem('ad18inp'),
		q19 = localStorage.getItem('ad19inp'),
		q20 = localStorage.getItem('ad20inp'),
		q21 = localStorage.getItem('ad21inp'),
		q22 = localStorage.getItem('ad22inp'),
		q23 = localStorage.getItem('ad23inp'),
		q24 = localStorage.getItem('ad24inp'),
		q25 = localStorage.getItem('ad25inp'),
		q26 = localStorage.getItem('ad26inp'),
		q27 = localStorage.getItem('ad27inp'),
		q28 = localStorage.getItem('ad28inp'),
		q29 = localStorage.getItem('ad29inp'),
		q30 = localStorage.getItem('ad30inp'),
		fac = localStorage.getItem('facinp');
	
	var value1 = 0;

	switch (true) {
		case (q3 == 1) : value1 = value1 + 1; break;
		case (q3 == 1.1) : value1 = value1 + 0; break;
	}

	switch (true) {
		case (q6 == 1) : value1 = value1 + 0; break;
		case (q6 == 1.1) : value1 = value1 + 1; break;
	}

	switch (true) {
		case (q8 == 1) : value1 = value1 + 1; break;
		case (q8 == 1.1) : value1 = value1 + 0; break;
	}

	switch (true) {
		case (q9 == 1) : value1 = value1 + 0; break;
		case (q9 == 1.1) : value1 = value1 + 1; break;
	}

	switch (true) {
		case (q10 == 1) : value1 = value1 + 1; break;
		case (q10 == 1.1) : value1 = value1 + 0; break;
	}

	switch (true) {
		case (q13 == 1) : value1 = value1 + 0; break;
		case (q13 == 1.1) : value1 = value1 + 1; break;
	}

	switch (true) {
		case (q14 == 1) : value1 = value1 + 0; break;
		case (q14 == 1.1) : value1 = value1 + 1; break;
	}

	switch (true) {
		case (q16 == 1) : value1 = value1 + 0; break;
		case (q16 == 1.1) : value1 = value1 + 1; break;
	}

	switch (true) {
		case (q17 == 1) : value1 = value1 + 1; break;
		case (q17 == 1.1) : value1 = value1 + 0; break;
	}

	switch (true) {
		case (q22 == 1) : value1 = value1 + 0; break;
		case (q22 == 1.1) : value1 = value1 + 1; break;
	}

	switch (true) {
		case (q25 == 1) : value1 = value1 + 1; break;
		case (q25 == 1.1) : value1 = value1 + 0; break;
	}

	switch (true) {
		case (q28 == 1) : value1 = value1 + 1; break;
		case (q28 == 1.1) : value1 = value1 + 0; break;
	}

	var value2 = 0;
	switch (true) {
		case (q2 == 1) : value2 = value2 + 0; break;
		case (q2 == 1.1) : value2 = value2 + 1; break;
	}

	switch (true) {
		case (q5 == 1) : value2 = value2 + 1; break;
		case (q5 == 1.1) : value2 = value2 + 0; break;
	}

	switch (true) {
		case (q8 == 1) : value2 = value2 + 0; break;
		case (q8 == 1.1) : value2 = value2 + 1; break;
	}

	switch (true) {
		case (q11 == 1) : value2 = value2 + 1; break;
		case (q11 == 1.1) : value2 = value2 + 0; break;
	}

	switch (true) {
		case (q14 == 1) : value2 = value2 + 1; break;
		case (q14 == 1.1) : value2 = value2 + 0; break;
	}

	switch (true) {
		case (q19 == 1) : value2 = value2 + 1; break;
		case (q19 == 1.1) : value2 = value2 + 0; break;
	}

	switch (true) {
		case (q20 == 1) : value2 = value2 + 1; break;
		case (q20 == 1.1) : value2 = value2 + 0; break;
	}

	switch (true) {
		case (q21 == 1) : value2 = value2 + 0; break;
		case (q21 == 1.1) : value2 = value2 + 1; break;
	}

	switch (true) {
		case (q23 == 1) : value2 = value2 + 1; break;
		case (q23 == 1.1) : value2 = value2 + 0; break;
	}

	switch (true) {
		case (q26 == 1) : value2 = value2 + 0; break;
		case (q26 == 1.1) : value2 = value2 + 1; break;
	}

	switch (true) {
		case (q28 == 1) : value2 = value2 + 0; break;
		case (q28 == 1.1) : value2 = value2 + 1; break;
	}

	switch (true) {
		case (q28 == 1) : value2 = value2 + 0; break;
		case (q28 == 1.1) : value2 = value2 + 1; break;
	}

	var value3 = 0;
	switch (true) {
		case (q2 == 1) : value3 = value3 + 1; break;
		case (q2 == 1.1) : value3 = value3 + 0; break;
	}

	switch (true) {
		case (q4 == 1) : value3 = value3 + 1; break;
		case (q4 == 1.1) : value3 = value3 + 0; break;
	}

	switch (true) {
		case (q7 == 1) : value3 = value3 + 0; break;
		case (q7 == 1.1) : value3 = value3 + 1; break;
	}

	switch (true) {
		case (q10 == 1) : value3 = value3 + 0; break;
		case (q10 == 1.1) : value3 = value3 + 1; break;
	}

	switch (true) {
		case (q12 == 1) : value3 = value3 + 0; break;
		case (q12 == 1.1) : value3 = value3 + 1; break;
	}

	switch (true) {
		case (q13 == 1) : value3 = value3 + 1; break;
		case (q13 == 1.1) : value3 = value3 + 0; break;
	}

	switch (true) {
		case (q18 == 1) : value3 = value3 + 0; break;
		case (q18 == 1.1) : value3 = value3 + 1; break;
	}

	switch (true) {
		case (q20 == 1) : value3 = value3 + 0; break;
		case (q20 == 1.1) : value3 = value3 + 1; break;
	}

	switch (true) {
		case (q22 == 1) : value3 = value3 + 1; break;
		case (q22 == 1.1) : value3 = value3 + 0; break;
	}

	switch (true) {
		case (q24 == 1) : value3 = value3 + 0; break;
		case (q24 == 1.1) : value3 = value3 + 1; break;
	}

	switch (true) {
		case (q26 == 1) : value3 = value3 + 1; break;
		case (q26 == 1.1) : value3 = value3 + 0; break;
	}

	switch (true) {
		case (q29 == 1) : value3 = value3 + 1; break;
		case (q29 == 1.1) : value3 = value3 + 0; break;
	}

	var value4 = 0;
	switch (true) {
		case (q1 == 1) : value4 = value4 + 1; break;
		case (q1 == 1.1) : value4 = value4 + 0; break;
	}

	switch (true) {
		case (q5 == 1) : value4 = value4 + 0; break;
		case (q5 == 1.1) : value4 = value4 + 1; break;
	}

	switch (true) {
		case (q6 == 1) : value4 = value4 + 1; break;
		case (q6 == 1.1) : value4 = value4 + 0; break;
	}

	switch (true) {
		case (q7 == 1) : value4 = value4 + 1; break;
		case (q7 == 1.1) : value4 = value4 + 0; break;
	}

	switch (true) {
		case (q9 == 1) : value4 = value4 + 1; break;
		case (q9 == 1.1) : value4 = value4 + 0; break;
	}

	switch (true) {
		case (q12 == 1) : value4 = value4 + 1; break;
		case (q12 == 1.1) : value4 = value4 + 0; break;
	}

	switch (true) {
		case (q15 == 1) : value4 = value4 + 0; break;
		case (q15 == 1.1) : value4 = value4 + 1; break;
	}

	switch (true) {
		case (q17 == 1) : value4 = value4 + 0; break;
		case (q17 == 1.1) : value4 = value4 + 1; break;
	}

	switch (true) {
		case (q21 == 1) : value4 = value4 + 1; break;
		case (q21 == 1.1) : value4 = value4 + 0; break;
	}

	switch (true) {
		case (q23 == 1) : value4 = value4 + 0; break;
		case (q23 == 1.1) : value4 = value4 + 1; break;
	}

	switch (true) {
		case (q27 == 1) : value4 = value4 + 1; break;
		case (q27 == 1.1) : value4 = value4 + 0; break;
	}

	switch (true) {
		case (q29 == 1) : value4 = value4 + 0; break;
		case (q29 == 1.1) : value4 = value4 + 1; break;
	}

	var value5 = 0;
	switch (true) {
		case (q1 == 1) : value5 = value5 + 0; break;
		case (q1 == 1.1) : value5 = value5 + 1; break;
	}

	switch (true) {
		case (q3 == 1) : value5 = value5 + 0; break;
		case (q3 == 1.1) : value5 = value5 + 1; break;
	}

	switch (true) {
		case (q4 == 1) : value5 = value5 + 0; break;
		case (q4 == 1.1) : value5 = value5 + 1; break;
	}

	switch (true) {
		case (q11 == 1) : value5 = value5 + 0; break;
		case (q11 == 1.1) : value5 = value5 + 1; break;
	}

	switch (true) {
		case (q15 == 1) : value5 = value5 + 1; break;
		case (q15 == 1.1) : value5 = value5 + 0; break;
	}

	switch (true) {
		case (q16 == 1) : value5 = value5 + 1; break;
		case (q16 == 1.1) : value5 = value5 + 0; break;
	}

	switch (true) {
		case (q18 == 1) : value5 = value5 + 1; break;
		case (q18 == 1.1) : value5 = value5 + 0; break;
	}

	switch (true) {
		case (q24 == 1) : value5 = value5 + 1; break;
		case (q24 == 1.1) : value5 = value5 + 0; break;
	}

	switch (true) {
		case (q25 == 1) : value5 = value5 + 0; break;
		case (q25 == 1.1) : value5 = value5 + 1; break;
	}

	switch (true) {
		case (q27 == 1) : value5 = value5 + 0; break;
		case (q27 == 1.1) : value5 = value5 + 1; break;
	}

	switch (true) {
		case (q30 == 1) : value5 = value5 + 1; break;
		case (q30 == 1.1) : value5 = value5 + 0; break;
	}

	var valper1 = (8.33 * value1).toFixed();
	var valper2 = (8.33 * value2).toFixed();
	var valper3 = (8.33 * value3).toFixed();
	var valper4 = (7.69 * value4).toFixed();
	var valper5 = (9.09 * value5).toFixed();

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#gender').append(gender);
	$('#val1').append(valper1 + '%');
	$('#val2').append(valper2 + '%');
	$('#val3').append(valper3 + '%');
	$('#val4').append(valper4 + '%');
	$('#val5').append(valper5 + '%');
	$('#fac').append(fac);
});