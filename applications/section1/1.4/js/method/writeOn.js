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

	var height = $('#height').val();
	if (height != '') localStorage.setItem('heightinp', height);

	var weight = $('#weight').val();
	if (weight != '') localStorage.setItem('weightinp', weight);

	var b1 = $("input[name='b1']:checked").val();
	if (b1) localStorage.setItem("b1inp", b1);
	
	var b2 = $("input[name='b2']:checked").val();
	if (b2) localStorage.setItem("b2inp", b2);
	
	var b3 = $("input[name='b3']:checked").val();
	if (b3) localStorage.setItem("b3inp", b3);
	
	var b4 = $("input[name='b4']:checked").val();
	if (b4) localStorage.setItem("b4inp", b4);
	
	var b5 = $("input[name='b5']:checked").val();
	if (b5) localStorage.setItem("b5inp", b5);
	
	var b6 = $("input[name='b6']:checked").val();
	if (b6) localStorage.setItem("b6inp", b6);

	var fac = $('#fac').val();
	if (fac != '') localStorage.setItem('facinp', fac);
};