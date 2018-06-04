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

	var w1 = $("input[name='w1']:checked").val();
	if (w1) localStorage.setItem("w1inp", w1);
	
	var w2 = $("input[name='w2']:checked").val();
	if (w2) localStorage.setItem("w2inp", w2);
	
	var w3 = $("input[name='w3']:checked").val();
	if (w3) localStorage.setItem("w3inp", w3);
	
	var w4 = $("input[name='w4']:checked").val();
	if (w4) localStorage.setItem("w4inp", w4);
	
	var w5 = $("input[name='w5']:checked").val();
	if (w5) localStorage.setItem("w5inp", w5);
	
	var w6 = $("input[name='w6']:checked").val();
	if (w6) localStorage.setItem("w6inp", w6);

	var w7 = $("input[name='w7']:checked").val();
	if (w7) localStorage.setItem("w7inp", w7);

	var w8 = $("input[name='w8']:checked").val();
	if (w8) localStorage.setItem("w8inp", w8);

	var w9 = $("input[name='w9']:checked").val();
	if (w9) localStorage.setItem("w9inp", w9);

	var w10 = $("input[name='w10']:checked").val();
	if (w10) localStorage.setItem("w10inp", w10);

	var w11 = $("input[name='w11']:checked").val();
	if (w11) localStorage.setItem("w11inp", w11);

	var w12 = $("input[name='w12']:checked").val();
	if (w12) localStorage.setItem("w12inp", w12);

	var w13 = $("input[name='w13']:checked").val();
	if (w13) localStorage.setItem("w13inp", w13);

	var w14 = $("input[name='w14']:checked").val();
	if (w14) localStorage.setItem("w14inp", w14);

	var w15 = $("input[name='w15']:checked").val();
	if (w15) localStorage.setItem("w15inp", w15);

	var w16 = $("input[name='w16']:checked").val();
	if (w16) localStorage.setItem("w16inp", w16);

	var w17 = $("input[name='w17']:checked").val();
	if (w17) localStorage.setItem("w17inp", w17);

	var w18 = $("input[name='w18']:checked").val();
	if (w18) localStorage.setItem("w18inp", w18);
};