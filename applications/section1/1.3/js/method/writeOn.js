function get_data() { //Вносит заполненные данные из полей формы в localStorage
	
	var date = $('#date').val();
	if (date != '') localStorage.setItem('dateinp', date);

	var gender = $('input[name="gender"]:checked').val();
	if (gender != '') localStorage.setItem('genderinp', gender);

	var sname = $('#sname').val();
	if (sname != '') localStorage.setItem('snameinp', sname);
	
	var fname = $('#fname').val();
	if (fname != '') localStorage.setItem('fnameinp', fname);

	var mname = $('#mname').val();
	if (mname != '') localStorage.setItem('mnameinp', mname);

	var weight = $('#weight').val();
	if (weight != '') localStorage.setItem('weightinp', weight);

	var height = $('#height').val();
	if (height != '') localStorage.setItem('heightinp', height);

	var pulse = $('#pulse').val();
	if (pulse != '') localStorage.setItem('pulseinp', pulse);

	var sist = $('#sist').val();
	if (sist != '') localStorage.setItem('sistinp', sist);

	var rec1 = $('#rec1').val();
	if (rec1 != '') localStorage.setItem('rec1inp', rec1);

	var rec2 = $('#rec2').val();
	if (rec2 != '') localStorage.setItem('rec2inp', rec2);

	var lung = $('#lung').val();
	if (lung != '') localStorage.setItem('lunginp', lung);

	var fac = $('#fac').val();
	if (fac != '') localStorage.setItem('facinp', fac);

	var dynam = $('#dynam').val();
	if (dynam != '') localStorage.setItem('dynaminp', dynam);
};