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

	var q1 = $("input[name='q1']:checked").val();
	if (q1) localStorage.setItem("q1", q1);
	
	var q2 = $("input[name='q2']:checked").val();
	if (q2) localStorage.setItem("q2", q2);
	
	var q3 = $("input[name='q3']:checked").val();
	if (q3) localStorage.setItem("q3", q3);
	
	var q4 = $("input[name='q4']:checked").val();
	if (q4) localStorage.setItem("q4", q4);
	
	var q5 = $("input[name='q5']:checked").val();
	if (q5) localStorage.setItem("q5", q5);
	
	var q6 = $("input[name='q6']:checked").val();
	if (q6) localStorage.setItem("q6", q6);
};