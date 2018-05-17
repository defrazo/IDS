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

	var exerc = $('#exerc').val();
	if (exerc != '') localStorage.setItem('exercinp', exerc);

	var pulse = $('#pulse').val();
	if (pulse != '') localStorage.setItem('pulseinp', pulse);

	var pulsel = $('#pulsel').val();
	if (pulsel != '') localStorage.setItem('pulselinp', pulsel);

	var cigaret = $('#cigaret').val();
	if (cigaret != '') localStorage.setItem('cigaretinp', cigaret);

	var alco = $('#alco').val();
	if (alco != '') localStorage.setItem('alcoinp', alco);

	var fac = $('#fac').val();
	if (fac != '') localStorage.setItem('facinp', fac);
};