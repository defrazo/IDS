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

	var age = $('#age').val();
	if (age != '') localStorage.setItem('ageinp', age);

	var weight = $('#weight').val();
	if (weight != '') localStorage.setItem('weightinp', weight);

	var sist = $('#sist').val();
	if (sist != '') localStorage.setItem('sistinp', sist);

	var dia = $('#dia').val();
	if (dia != '') localStorage.setItem('diainp', dia);

	var inha = $('#inha').val();
	if (inha != '') localStorage.setItem('inhainp', inha);

	var static = $('#static').val();
	if (static != '') localStorage.setItem('staticinp', static);

	var fac = $('#fac').val();
	if (fac != '') localStorage.setItem('facinp', fac);
};