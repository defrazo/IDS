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

	var fac = $('#fac').val();
	if (fac != '') localStorage.setItem('facinp', fac);

	var u1 = $("#u1").val();
	if (u1 != null) localStorage.setItem("u1inp", u1);
	
	var u2 = $("#u2").val();
	if (u2 != null) localStorage.setItem("u2inp", u2);
	
	var u3 = $("#u3").val();
	if (u3 != null) localStorage.setItem("u3inp", u3);
	
	var u4 = $("#u4").val();
	if (u4 != null) localStorage.setItem("u4inp", u4);
	
	var u5 = $("#u5").val();
	if (u5 != null) localStorage.setItem("u5inp", u5);
	
	var u6 = $("#u6").val();
	if (u6 != null) localStorage.setItem("u6inp", u6);

	var u7 = $("#u7").val();
	if (u7 != null) localStorage.setItem("u7inp", u7);

	var u8 = $("#u8").val();
	if (u8 != null) localStorage.setItem("u8inp", u8);

	var u9 = $("#u9").val();
	if (u9 != null) localStorage.setItem("u9inp", u9);

	var u10 = $("#u10").val();
	if (u10 != null) localStorage.setItem("u10inp", u10);

	var u11 = $("#u11").val();
	if (u11 != null) localStorage.setItem("u11inp", u11);

	var u12 = $("#u12").val();
	if (u12 != null) localStorage.setItem("u12inp", u12);

	var u13 = $("#u13").val();
	if (u13 != null) localStorage.setItem("u13inp", u13);

	var u14 = $("#u14").val();
	if (u14 != null) localStorage.setItem("u14inp", u14);

	var u15 = $("#u15").val();
	if (u15 != null) localStorage.setItem("u15inp", u15);

	var u16 = $("#u16").val();
	if (u16 != null) localStorage.setItem("u16inp", u16);
};