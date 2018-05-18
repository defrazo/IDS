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

	var fac = $('#fac').val();
	if (fac != '') localStorage.setItem('facinp', fac);

	var twelvewalk = $('#twelvewalk').val();
	localStorage.setItem('twelvewalkinp', twelvewalk);

	var twelveswim = $('#twelveswim').val();
	localStorage.setItem('twelveswiminp', twelveswim);

	var twelveride = $('#twelveride').val();
	localStorage.setItem('twelverideinp', twelveride);

	var run1 = $('#run1').val();
	localStorage.setItem('run1inp', run1);

	var run2 = $('#run2').val();
	localStorage.setItem('run2inp', run2);

	var walk1 = $('#walk1').val();
	localStorage.setItem('walk1inp', walk1);

	var walk2 = $('#walk2').val();
	localStorage.setItem('walk2inp', walk2);
};