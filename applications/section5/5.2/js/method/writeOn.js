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

	var z1 = $("input[name='z1']:checked").val();
	if (z1) localStorage.setItem("z1inp", z1);
	
	var z2 = $("input[name='z2']:checked").val();
	if (z2) localStorage.setItem("z2inp", z2);
	
	var z3 = $("input[name='z3']:checked").val();
	if (z3) localStorage.setItem("z3inp", z3);
	
	var z4 = $("input[name='z4']:checked").val();
	if (z4) localStorage.setItem("z4inp", z4);
	
	var z5 = $("input[name='z5']:checked").val();
	if (z5) localStorage.setItem("z5inp", z5);
	
	var z6 = $("input[name='z6']:checked").val();
	if (z6) localStorage.setItem("z6inp", z6);

	var z7 = $("input[name='z7']:checked").val();
	if (z7) localStorage.setItem("z7inp", z7);

	var z8 = $("input[name='z8']:checked").val();
	if (z8) localStorage.setItem("z8inp", z8);

	var z9 = $("input[name='z9']:checked").val();
	if (z9) localStorage.setItem("z9inp", z9);

	var z10 = $("input[name='z10']:checked").val();
	if (z10) localStorage.setItem("z10inp", z10);

	var z11 = $("input[name='z11']:checked").val();
	if (z11) localStorage.setItem("z11inp", z11);

	var z12 = $("input[name='z12']:checked").val();
	if (z12) localStorage.setItem("z12inp", z12);

	var z13 = $("input[name='z13']:checked").val();
	if (z13) localStorage.setItem("z13inp", z13);

	var z14 = $("input[name='z14']:checked").val();
	if (z14) localStorage.setItem("z14inp", z14);

	var z15 = $("input[name='z15']:checked").val();
	if (z15) localStorage.setItem("z15inp", z15);

	var z16 = $("input[name='z16']:checked").val();
	if (z16) localStorage.setItem("z16inp", z16);

	var z17 = $("input[name='z17']:checked").val();
	if (z17) localStorage.setItem("z17inp", z17);

	var z18 = $("input[name='z18']:checked").val();
	if (z18) localStorage.setItem("z18inp", z18);

	var z19 = $("input[name='z19']:checked").val();
	if (z19) localStorage.setItem("z19inp", z19);

	var z20 = $("input[name='z20']:checked").val();
	if (z20) localStorage.setItem("z20inp", z20);

	var z21 = $("input[name='z21']:checked").val();
	if (z21) localStorage.setItem("z21inp", z21);

	var z22 = $("input[name='z22']:checked").val();
	if (z22) localStorage.setItem("z22inp", z22);
};