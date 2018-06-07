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

	var ac1 = $("input[name='ac1']:checked").val();
	if (ac1) localStorage.setItem("ac1inp", ac1);
	
	var ac2 = $("input[name='ac2']:checked").val();
	if (ac2) localStorage.setItem("ac2inp", ac2);
	
	var ac3 = $("input[name='ac3']:checked").val();
	if (ac3) localStorage.setItem("ac3inp", ac3);
	
	var ac4 = $("input[name='ac4']:checked").val();
	if (ac4) localStorage.setItem("ac4inp", ac4);
	
	var ac5 = $("input[name='ac5']:checked").val();
	if (ac5) localStorage.setItem("ac5inp", ac5);
	
	var ac6 = $("input[name='ac6']:checked").val();
	if (ac6) localStorage.setItem("ac6inp", ac6);

	var ac7 = $("input[name='ac7']:checked").val();
	if (ac7) localStorage.setItem("ac7inp", ac7);

	var ac8 = $("input[name='ac8']:checked").val();
	if (ac8) localStorage.setItem("ac8inp", ac8);

	var ac9 = $("input[name='ac9']:checked").val();
	if (ac9) localStorage.setItem("ac9inp", ac9);

	var ac10 = $("input[name='ac10']:checked").val();
	if (ac10) localStorage.setItem("ac10inp", ac10);

	var ac11 = $("input[name='ac11']:checked").val();
	if (ac11) localStorage.setItem("ac11inp", ac11);

	var ac12 = $("input[name='ac12']:checked").val();
	if (ac12) localStorage.setItem("ac12inp", ac12);

	var ac13 = $("input[name='ac13']:checked").val();
	if (ac13) localStorage.setItem("ac13inp", ac13);

	var ac14 = $("input[name='ac14']:checked").val();
	if (ac14) localStorage.setItem("ac14inp", ac14);

	var ac15 = $("input[name='ac15']:checked").val();
	if (ac15) localStorage.setItem("ac15inp", ac15);

	var ac16 = $("input[name='ac16']:checked").val();
	if (ac16) localStorage.setItem("ac16inp", ac16);
};