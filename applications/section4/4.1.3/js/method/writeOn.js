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

	var g1 = $("input[name='g1']:checked").val();
	if (g1) localStorage.setItem("g1inp", g1);
	
	var g2 = $("input[name='g2']:checked").val();
	if (g2) localStorage.setItem("g2inp", g2);
	
	var g3 = $("input[name='g3']:checked").val();
	if (g3) localStorage.setItem("g3inp", g3);
	
	var g4 = $("input[name='g4']:checked").val();
	if (g4) localStorage.setItem("g4inp", g4);
	
	var g5 = $("input[name='g5']:checked").val();
	if (g5) localStorage.setItem("g5inp", g5);
	
	var g6 = $("input[name='g6']:checked").val();
	if (g6) localStorage.setItem("g6inp", g6);

	var g7 = $("input[name='g7']:checked").val();
	if (g7) localStorage.setItem("g7inp", g7);

	var g8 = $("input[name='g8']:checked").val();
	if (g8) localStorage.setItem("g8inp", g8);

	var g9 = $("input[name='g9']:checked").val();
	if (g9) localStorage.setItem("g9inp", g9);

	var g10 = $("input[name='g10']:checked").val();
	if (g10) localStorage.setItem("g10inp", g10);

	var g11 = $("input[name='g11']:checked").val();
	if (g11) localStorage.setItem("g11inp", g11);

	var g12 = $("input[name='g12']:checked").val();
	if (g12) localStorage.setItem("g12inp", g12);

	var g13 = $("input[name='g13']:checked").val();
	if (g13) localStorage.setItem("g13inp", g13);

	var g14 = $("input[name='g14']:checked").val();
	if (g14) localStorage.setItem("g14inp", g14);

	var g15 = $("input[name='g15']:checked").val();
	if (g15) localStorage.setItem("g15inp", g15);

	var g16 = $("input[name='g16']:checked").val();
	if (g16) localStorage.setItem("g16inp", g16);

	var g17 = $("input[name='g17']:checked").val();
	if (g17) localStorage.setItem("g17inp", g17);

	var g18 = $("input[name='g18']:checked").val();
	if (g18) localStorage.setItem("g18inp", g18);

	var g19 = $("input[name='g19']:checked").val();
	if (g19) localStorage.setItem("g19inp", g19);

	var g20 = $("input[name='g20']:checked").val();
	if (g20) localStorage.setItem("g20inp", g20);
};