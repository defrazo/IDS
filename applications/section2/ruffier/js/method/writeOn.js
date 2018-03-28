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

	var result1 = $('#result1').val();
	if (result1 != 0) localStorage.setItem('result1inp', result1);

	var result2 = $('#result2').val();
	if (result2 != 0) localStorage.setItem('result2inp', result2);

	var result3 = $('#result3').val();
	if (result3 != 0) localStorage.setItem('result3inp', result3);
};