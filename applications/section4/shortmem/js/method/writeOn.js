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

	var fac = $('#fac').val();
	if (fac != '') localStorage.setItem('facinp', fac);

	var t1 = $("#t1").val();
	if (t1) localStorage.setItem("t1inp", t1);
	
	var t2 = $("#t2").val();
	if (t2) localStorage.setItem("t2inp", t2);
	
	var t3 = $("#t3").val();
	if (t3) localStorage.setItem("t3inp", t3);
	
	var t4 = $("#t4").val();
	if (t4) localStorage.setItem("t4inp", t4);
	
	var t5 = $("#t5").val();
	if (t5) localStorage.setItem("t5inp", t5);
	
	var t6 = $("#t6").val();
	if (t6) localStorage.setItem("t6inp", t6);

	var t7 = $("#t7").val();
	if (t7) localStorage.setItem("t7inp", t7);

	var t8 = $("#t8").val();
	if (t8) localStorage.setItem("t8inp", t8);

	var t9 = $("#t9").val();
	if (t9) localStorage.setItem("t9inp", t9);

	var t10 = $("#t10").val();
	if (t10) localStorage.setItem("t10inp", t10);

	var t11 = $("#t11").val();
	if (t11) localStorage.setItem("t11inp", t11);

	var t12 = $("#t12").val();
	if (t12) localStorage.setItem("t12inp", t12);
};