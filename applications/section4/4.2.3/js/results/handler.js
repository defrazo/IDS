$(document).ready(function() {
	var date = localStorage.getItem('dateinp'),
		gender = localStorage.getItem('genderinp'),
		sname = localStorage.getItem('snameinp'),
		fname = localStorage.getItem('fnameinp'),
		mname = localStorage.getItem('mnameinp'),
		q1 = localStorage.getItem('l1inp'),
		q2 = localStorage.getItem('l2inp'),
		q3 = localStorage.getItem('l3inp'),
		q4 = localStorage.getItem('l4inp'),
		q5 = localStorage.getItem('l5inp'),
		q6 = localStorage.getItem('l6inp'),
		q7 = localStorage.getItem('l7inp'),
		q8 = localStorage.getItem('l8inp'),
		q9 = localStorage.getItem('l9inp'),
		q10 = localStorage.getItem('l10inp'),
		q11 = localStorage.getItem('l11inp'),
		q12 = localStorage.getItem('l12inp'),
		q13 = localStorage.getItem('l13inp'),
		q14 = localStorage.getItem('l14inp'),
		q15 = localStorage.getItem('l15inp'),
		fac = localStorage.getItem('facinp');
	
	value = parseInt(q1) + parseInt(q2) + parseInt(q3) + parseInt(q4) + parseInt(q5) + parseInt(q6) + parseInt(q7) + parseInt(q8) + parseInt(q9) + parseInt(q10) + parseInt(q11) + parseInt(q12) + parseInt(q13) + parseInt(q14) + parseInt(q15);

	switch (true) {
		case ((value >= 1) && (value <= 12)) : var status = 'C силой воли дела обстоят у вас неважно. Вы просто делаете то, что легче и интереснее, даже если это может повредить вам. К обязанностям нередко относитесь спустя рукава, что бывает причиной неприятностей. Ваша позиция выражается примерно так: «Что мне, больше всех нужно?». Любую просьбу, любую обязанность вы воспринимаете чуть ли не как физическую боль. Дело тут не только в слабой воле, но и в эгоизме. Постарайтесь взглянуть на себя с учетом этой оценки, может быть, она поможет вам изменить свое отношение к окружающим и кое-что переделать в своем характере. Если удастся, от этого вы только выиграете.'; break;
		case ((value >= 13) && (value <= 21)) : var status = 'Сила воли у вас средняя. Если столкнетесь с препятствием, то начнете действовать, чтобы преодолеть его. Но если увидите обходной путь, тут же воспользуетесь им. Не переусердствуете, но данное вами слово сдержите. Неприятную работу постараетесь выполнить, хотя и поворчите. По доброй воле лишние обязанности на себя не возьмете. Иногда это отрицательно сказывается на отношении к вам руководителей, не с лучшей стороны характеризует и в глазах окружающих. Если хотите достичь в жизни большего, тренируйте волю.'; break;
		case ((value >= 22) && (value <= 30)) : var status = 'С силой воли у вас все в порядке. На вас можно положиться - вы не подведете. Вас не страшат ни новые поручения, ни дальние поездки, ни те дела, которые иных пугают. Но иногда ваша твердая и непримиримая позиция по непринципиальным вопросам досаждает окружающим. Сила воли - это хорошо, но необходимо обладать еще и такими качествами, как гибкость, снисходительность, доброта.'; break;
	}

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#gender').append(gender);
	$('#status').append(status);
	$('#fac').append(fac);
});