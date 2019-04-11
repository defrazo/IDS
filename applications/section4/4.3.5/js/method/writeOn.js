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

	var u1 = $("input[name='img1']:checked").val();
	localStorage.setItem("u1inp", u1);
	
	var u2 = $("input[name='img2']:checked").val();
	localStorage.setItem("u2inp", u2);
	
	var u3 = $("input[name='img3']:checked").val();
	localStorage.setItem("u3inp", u3);
	
	var u4 = $("input[name='img4']:checked").val();
	localStorage.setItem("u4inp", u4);
	
	var u5 = $("input[name='img5']:checked").val();
	localStorage.setItem("u5inp", u5);
	
	var u6 = $("input[name='img6']:checked").val();
	localStorage.setItem("u6inp", u6);

	var u7 = $("input[name='img7']:checked").val();
	localStorage.setItem("u7inp", u7);

	var u8 = $("input[name='img8']:checked").val();
	localStorage.setItem("u8inp", u8);

	var u9 = $("input[name='img9']:checked").val();
	localStorage.setItem("u9inp", u9);

	var u10 = $("input[name='img10']:checked").val();
	localStorage.setItem("u10inp", u10);

	var u11 = $("input[name='img11']:checked").val();
	localStorage.setItem("u11inp", u11);

	var u12 = $("input[name='img12']:checked").val();
	localStorage.setItem("u12inp", u12);

	var u13 = $("input[name='img13']:checked").val();
	localStorage.setItem("u13inp", u13);

	var u14 = $("input[name='img14']:checked").val();
	localStorage.setItem("u14inp", u14);

	var u15 = $("input[name='img15']:checked").val();
	localStorage.setItem("u15inp", u15);

	var u16 = $("input[name='img16']:checked").val();
	localStorage.setItem("u16inp", u16);
};