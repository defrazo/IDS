$(document).ready(function() {
	date = localStorage.getItem('dateinp');
	gender = localStorage.getItem('genderinp');
	sname = localStorage.getItem('snameinp');
	fname = localStorage.getItem('fnameinp');
	mname = localStorage.getItem('mnameinp');
	g1 = localStorage.getItem('g1');
	g2 = localStorage.getItem('g2');
	g3 = localStorage.getItem('g3');
	g4 = localStorage.getItem('g4');
	g5 = localStorage.getItem('g5');
	g6 = localStorage.getItem('g6');
	g7 = localStorage.getItem('g7');
	g8 = localStorage.getItem('g8');
	g9 = localStorage.getItem('g9');
	g10 = localStorage.getItem('g10');
	g11 = localStorage.getItem('g11');
	g12 = localStorage.getItem('g12');
	g13 = localStorage.getItem('g13');
	g14 = localStorage.getItem('g14');
	g15 = localStorage.getItem('g15');
	g16 = localStorage.getItem('g16');
	g17 = localStorage.getItem('g17');
	g18 = localStorage.getItem('g18');
	g19 = localStorage.getItem('g19');
	g20 = localStorage.getItem('g20');
	fac = localStorage.getItem('facinp');
	
	var sum = parseInt(g1) + parseInt(g2) + parseInt(g3) + parseInt(g4) + parseInt(g5)
	 + parseInt(g6)  + parseInt(g7)  + parseInt(g8) + parseInt(g9) + parseInt(g10)
	 + parseInt(g11) + parseInt(g12) + parseInt(g13) + parseInt(g14) + parseInt(g15)
	 + parseInt(g16) + parseInt(g17) + parseInt(g18) + parseInt(g19) + parseInt(g20);

	console.log(sum);

	var alt = 100 / 20 * sum;
	console.log(alt);
	ego = 100 - alt;


	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#gender').append(gender);
	$('#alt').append(alt + '%');
	$('#ego').append(ego + '%');
	$('#fac').append(fac);
});