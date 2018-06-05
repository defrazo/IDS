function get_data() {
	
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

	var result1 = $('#result1').val();
	if (result1 != '') localStorage.setItem('result1inp', result1);

	var result2 = $('#result2').val();
	if (result2 != '') localStorage.setItem('result2inp', result2);

	var result3 = $('#result3').val();
	if (result3 != '') localStorage.setItem('result3inp', result3);

	var fac = $('#fac').val();
	if (fac != '') localStorage.setItem('facinp', fac);
};