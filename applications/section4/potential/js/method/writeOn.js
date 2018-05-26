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

	var l1 = $("input[name='l1']:checked").val();
	if (l1) localStorage.setItem("l1inp", l1);
	
	var l2 = $("input[name='l2']:checked").val();
	if (l2) localStorage.setItem("l2inp", l2);
	
	var l3 = $("input[name='l3']:checked").val();
	if (l3) localStorage.setItem("l3inp", l3);
	
	var l4 = $("input[name='l4']:checked").val();
	if (l4) localStorage.setItem("l4inp", l4);
	
	var l5 = $("input[name='l5']:checked").val();
	if (l5) localStorage.setItem("l5inp", l5);
	
	var l6 = $("input[name='l6']:checked").val();
	if (l6) localStorage.setItem("l6inp", l6);

	var l7 = $("input[name='l7']:checked").val();
	if (l7) localStorage.setItem("l7inp", l7);

	var l8 = $("input[name='l8']:checked").val();
	if (l8) localStorage.setItem("l8inp", l8);

	var l9 = $("input[name='l9']:checked").val();
	if (l9) localStorage.setItem("l9inp", l9);

	var l10 = $("input[name='l10']:checked").val();
	if (l10) localStorage.setItem("l10inp", l10);

	var l11 = $("input[name='l11']:checked").val();
	if (l11) localStorage.setItem("l11inp", l11);

	var l12 = $("input[name='l12']:checked").val();
	if (l12) localStorage.setItem("l12inp", l12);

	var l13 = $("input[name='l13']:checked").val();
	if (l13) localStorage.setItem("l13inp", l13);

	var l14 = $("input[name='l14']:checked").val();
	if (l14) localStorage.setItem("l14inp", l14);

	var l15 = $("input[name='l15']:checked").val();
	if (l15) localStorage.setItem("l15inp", l15);
};