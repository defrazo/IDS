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

	var x1 = $("input[name='x1']:checked").val();
	if (x1) localStorage.setItem("x1inp", x1);
	
	var x2 = $("input[name='x2']:checked").val();
	if (x2) localStorage.setItem("x2inp", x2);
	
	var x3 = $("input[name='x3']:checked").val();
	if (x3) localStorage.setItem("x3inp", x3);
	
	var x4 = $("input[name='x4']:checked").val();
	if (x4) localStorage.setItem("x4inp", x4);
	
	var x5 = $("input[name='x5']:checked").val();
	if (x5) localStorage.setItem("x5inp", x5);
	
	var x6 = $("input[name='x6']:checked").val();
	if (x6) localStorage.setItem("x6inp", x6);

	var x7 = $("input[name='x7']:checked").val();
	if (x7) localStorage.setItem("x7inp", x7);

	var x8 = $("input[name='x8']:checked").val();
	if (x8) localStorage.setItem("x8inp", x8);

	var x9 = $("input[name='x9']:checked").val();
	if (x9) localStorage.setItem("x9inp", x9);

	var x10 = $("input[name='x10']:checked").val();
	if (x10) localStorage.setItem("x10inp", x10);

	var x11 = $("input[name='x11']:checked").val();
	if (x11) localStorage.setItem("x11inp", x11);

	var x12 = $("input[name='x12']:checked").val();
	if (x12) localStorage.setItem("x12inp", x12);

	var x13 = $("input[name='x13']:checked").val();
	if (x13) localStorage.setItem("x13inp", x13);

	var x14 = $("input[name='x14']:checked").val();
	if (x14) localStorage.setItem("x14inp", x14);

	var x15 = $("input[name='x15']:checked").val();
	if (x15) localStorage.setItem("x15inp", x15);

	var x16 = $("input[name='x16']:checked").val();
	if (x16) localStorage.setItem("x16inp", x16);

	var x17 = $("input[name='x17']:checked").val();
	if (x17) localStorage.setItem("x17inp", x17);
};