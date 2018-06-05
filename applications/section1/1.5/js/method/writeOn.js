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

	var age = $('#age').val();
	if (age != '') localStorage.setItem('ageinp', age);

	var height = $('#height').val();
	if (height != '') localStorage.setItem('heightinp', height);

	var weight = $('#weight').val();
	if (weight != '') localStorage.setItem('weightinp', weight);

	var fac = $('#fac').val();
	if (fac != '') localStorage.setItem('facinp', fac);

	var c1 = $("input[name='c1']:checked").val();
	if (c1) localStorage.setItem("c1inp", c1);
	
	var c2 = $("input[name='c2']:checked").val();
	if (c2) localStorage.setItem("c2inp", c2);
	
	var c3 = $("input[name='c3']:checked").val();
	if (c3) localStorage.setItem("c3inp", c3);
	
	var c4 = $("input[name='c4']:checked").val();
	if (c4) localStorage.setItem("c4inp", c4);
	
	var c5 = $("input[name='c5']:checked").val();
	if (c5) localStorage.setItem("c5inp", c5);
	
	var c6 = $("input[name='c6']:checked").val();
	if (c6) localStorage.setItem("c6inp", c6);

	var c7 = $("input[name='c7']:checked").val();
	if (c7) localStorage.setItem("c7inp", c7);

	var c8 = $("input[name='c8']:checked").val();
	if (c8) localStorage.setItem("c8inp", c8);

	var c9 = $("input[name='c9']:checked").val();
	if (c9) localStorage.setItem("c9inp", c9);

	var c10 = $("input[name='c10']:checked").val();
	if (c10) localStorage.setItem("c10inp", c10);

	var c11 = $("input[name='c11']:checked").val();
	if (c11) localStorage.setItem("c11inp", c11);

	var c12 = $("input[name='c12']:checked").val();
	if (c12) localStorage.setItem("c12inp", c12);

	var c13 = $("input[name='c13']:checked").val();
	if (c13) localStorage.setItem("c13inp", c13);

	var c14 = $("input[name='c14']:checked").val();
	if (c14) localStorage.setItem("c14inp", c14);

	var c15 = $("input[name='c15']:checked").val();
	if (c15) localStorage.setItem("c15inp", c15);

	var c16 = $("input[name='c16']:checked").val();
	if (c16) localStorage.setItem("c16inp", c16);

	var c17 = $("input[name='c17']:checked").val();
	if (c17) localStorage.setItem("c17inp", c17);

	var c18 = $("input[name='c18']:checked").val();
	if (c18) localStorage.setItem("c18inp", c18);

	var c19 = $("input[name='c19']:checked").val();
	if (c19) localStorage.setItem("c19inp", c19);

	var c20 = $("input[name='c20']:checked").val();
	if (c20) localStorage.setItem("c20inp", c20);

	var c21 = $("input[name='c21']:checked").val();
	if (c21) localStorage.setItem("c21inp", c21);

	var c22 = $("input[name='c22']:checked").val();
	if (c22) localStorage.setItem("c22inp", c22);
};