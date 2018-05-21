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

	var chest = $('#chest').val();
	if (chest != '') localStorage.setItem('chestinp', chest);

	var chestmax = $('#chestmax').val();
	if (chestmax != '') localStorage.setItem('chestmaxinp', chestmax);

	var chestmin = $('#chestmin').val();
	if (chestmin != '') localStorage.setItem('chestmininp', chestmin);

	var lung = $('#lung').val();
	if (lung != '') localStorage.setItem('lunginp', lung);

	var pulse = $('#pulse').val();
	if (pulse != '') localStorage.setItem('pulseinp', pulse);

	var hold = $('#hold').val();
	if (hold != '') localStorage.setItem('holdinp', hold);

	var fac = $('#fac').val();
	if (fac != '') localStorage.setItem('facinp', fac);
};