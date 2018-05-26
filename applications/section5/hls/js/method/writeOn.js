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

	var y1 = $("input[name='y1']:checked").val();
	if (y1) localStorage.setItem("y1inp", y1);
	
	var y2 = $("input[name='y2']:checked").val();
	if (y2) localStorage.setItem("y2inp", y2);
	
	var y3 = $("input[name='y3']:checked").val();
	if (y3) localStorage.setItem("y3inp", y3);
	
	var y4 = $("input[name='y4']:checked").val();
	if (y4) localStorage.setItem("y4inp", y4);
	
	var y5 = $("input[name='y5']:checked").val();
	if (y5) localStorage.setItem("y5inp", y5);
	
	var y6 = $("input[name='y6']:checked").val();
	if (y6) localStorage.setItem("y6inp", y6);

	var y7 = $("input[name='y7']:checked").val();
	if (y7) localStorage.setItem("y7inp", y7);

	var y8 = $("input[name='y8']:checked").val();
	if (y8) localStorage.setItem("y8inp", y8);

	var y9 = $("input[name='y9']:checked").val();
	if (y9) localStorage.setItem("y9inp", y9);

	var y10 = $("input[name='y10']:checked").val();
	if (y10) localStorage.setItem("y10inp", y10);

	var y11 = $("input[name='y11']:checked").val();
	if (y11) localStorage.setItem("y11inp", y11);

	var y12 = $("input[name='y12']:checked").val();
	if (y12) localStorage.setItem("y12inp", y12);

	var y13 = $("input[name='y13']:checked").val();
	if (y13) localStorage.setItem("y13inp", y13);

	var y14 = $("input[name='y14']:checked").val();
	if (y14) localStorage.setItem("y14inp", y14);

	var y15 = $("input[name='y15']:checked").val();
	if (y15) localStorage.setItem("y15inp", y15);

	var y16 = $("input[name='y16']:checked").val();
	if (y16) localStorage.setItem("y16inp", y16);
};