function get_data() { //Вносит заполненные данные из полей формы в localStorage
	
	var date = $('#date').val();
	if (date != 0) localStorage.setItem('dateinp', date);

	var gender = $('input[name="gender"]:checked').val();
	if (gender != 0) localStorage.setItem('genderinp', gender);

	var sname = $('#sname').val();
	if (sname != '') localStorage.setItem('snameinp', sname);
	
	var fname = $('#fname').val();
	if (fname != 0) localStorage.setItem('fnameinp', fname);

	var mname = $('#mname').val();
	if (mname != 0) localStorage.setItem('mnameinp', mname);

	var age = $('#age').val();
	if (age != 0) localStorage.setItem('ageinp', age);

	var weight = $('#weight').val();
	if (weight != 0) localStorage.setItem('weightinp', weight);

	var height = $('#height').val();
	if (height != 0) localStorage.setItem('heightinp', height);

	var pulse = $('#pulse').val();
	if (pulse != 0) localStorage.setItem('pulseinp', pulse);

	var sist = $('#sist').val();
	if (sist != 0) localStorage.setItem('sistinp', sist);

	var dia = $('#dia').val();
	if (dia != 0) localStorage.setItem('diainp', dia);
};