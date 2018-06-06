$(document).ready(function() {

	var date = localStorage.getItem('dateinp');
		gender = localStorage.getItem('genderinp');
		sname = localStorage.getItem('snameinp');
		fname = localStorage.getItem('fnameinp');
		mname = localStorage.getItem('mnameinp');
		q1 = localStorage.getItem('n1inp');
		q2 = localStorage.getItem('n2inp');
		q3 = localStorage.getItem('n3inp');
		q4 = localStorage.getItem('n4inp');
		q5 = localStorage.getItem('n5inp');
		q6 = localStorage.getItem('n6inp');
		q7 = localStorage.getItem('n7inp');
		q8 = localStorage.getItem('n8inp');
		q9 = localStorage.getItem('n9inp');
		q10 = localStorage.getItem('n10inp');
		q11 = localStorage.getItem('n11inp');
		q12 = localStorage.getItem('n12inp');
		q13 = localStorage.getItem('n13inp');
		q14 = localStorage.getItem('n14inp');
		q15 = localStorage.getItem('n15inp');
		q16 = localStorage.getItem('n16inp');
		fac = localStorage.getItem('facinp');


	if ((q1 == 1) && (q3 == 1) && (q7 == 1)) var status1 = 'Осторожность.'; else var status1 ='';
	if ((q5 == 1) && (q11 == 1)) var status2 = 'Нерешительность.'; else var status2 ='';
	if (q9 == 1) var status3 = 'Зависимость при принятии решений от обстоятельств.'; else var status3 ='';
	if (q14 == 1) var status4 = 'Прагматичность.'; else var status4 ='';
	if (q16 == 1) var status5 = 'Настойчивость в осуществлении принятого решения.'; else var status5 ='';
	if ((q2 == 1) && (q8 == 1)) var status6 = 'Импульсивность.'; else var status6 ='';
	if ((q6 == 1) && (q12 == 1)) var status7 = 'Решительность.'; else var status7 ='';
	if ((q4 == 1) && (q10 == 1)) var status8 = 'Самостоятельность.'; else var status8 ='';
	if (q13 == 1) var status9 = 'Мечтательность.'; else var status9 ='';
	if (q15 == 1) var status10 = 'Неустойчивость намерений.'; else var status10 ='';

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#gender').append(gender);
	$('#status').append(status1 + ' ' + status2 + ' ' + status3 + ' ' + status4 + ' ' + status5 + ' ' + status6 + ' ' + status7 + ' ' + status8 + ' ' + status9 + ' ' + status10 + ' ');
	$('#fac').append(fac);
});