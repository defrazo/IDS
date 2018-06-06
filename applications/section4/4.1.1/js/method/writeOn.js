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

	var e1 = $("input[name='e1']:checked").val();
	if (e1) localStorage.setItem("e1inp", e1);
	
	var e2 = $("input[name='e2']:checked").val();
	if (e2) localStorage.setItem("e2inp", e2);
	
	var e3 = $("input[name='e3']:checked").val();
	if (e3) localStorage.setItem("e3inp", e3);
	
	var e4 = $("input[name='e4']:checked").val();
	if (e4) localStorage.setItem("e4inp", e4);
	
	var e5 = $("input[name='e5']:checked").val();
	if (e5) localStorage.setItem("e5inp", e5);
	
	var e6 = $("input[name='e6']:checked").val();
	if (e6) localStorage.setItem("e6inp", e6);

	var e7 = $("input[name='e7']:checked").val();
	if (e7) localStorage.setItem("e7inp", e7);

	var e8 = $("input[name='e8']:checked").val();
	if (e8) localStorage.setItem("e8inp", e8);

	var e9 = $("input[name='e9']:checked").val();
	if (e9) localStorage.setItem("e9inp", e9);

	var e10 = $("input[name='e10']:checked").val();
	if (e10) localStorage.setItem("e10inp", e10);

	var e11 = $("input[name='e11']:checked").val();
	if (e11) localStorage.setItem("e11inp", e11);

	var e12 = $("input[name='e12']:checked").val();
	if (e12) localStorage.setItem("e12inp", e12);

	var e13 = $("input[name='e13']:checked").val();
	if (e13) localStorage.setItem("e13inp", e13);

	var e14 = $("input[name='e14']:checked").val();
	if (e14) localStorage.setItem("e14inp", e14);

	var e15 = $("input[name='e15']:checked").val();
	if (e15) localStorage.setItem("e15inp", e15);

	var e16 = $("input[name='e16']:checked").val();
	if (e16) localStorage.setItem("e16inp", e16);
};