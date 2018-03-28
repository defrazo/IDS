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

	var sist = $('#sist').val();
	if (sist != 0) localStorage.setItem('sistinp', sist);

	var dia = $('#dia').val();
	if (dia != 0) localStorage.setItem('diainp', dia);

	var inha = $('#inha').val();
	if (inha != 0) localStorage.setItem('inhainp', inha);

	var static = $('#static').val();
	if (static != 0) localStorage.setItem('staticinp', static);
};