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

	var aa1 = $("input[name='aa1']:checked").val();
	if (aa1) localStorage.setItem("aa1inp", aa1);
	
	var aa2 = $("input[name='aa2']:checked").val();
	if (aa2) localStorage.setItem("aa2inp", aa2);
	
	var aa3 = $("input[name='aa3']:checked").val();
	if (aa3) localStorage.setItem("aa3inp", aa3);
	
	var aa4 = $("input[name='aa4']:checked").val();
	if (aa4) localStorage.setItem("aa4inp", aa4);
	
	var aa5 = $("input[name='aa5']:checked").val();
	if (aa5) localStorage.setItem("aa5inp", aa5);
	
	var aa6 = $("input[name='aa6']:checked").val();
	if (aa6) localStorage.setItem("aa6inp", aa6);

	var aa7 = $("input[name='aa7']:checked").val();
	if (aa7) localStorage.setItem("aa7inp", aa7);

	var aa8 = $("input[name='aa8']:checked").val();
	if (aa8) localStorage.setItem("aa8inp", aa8);

	var aa9 = $("input[name='aa9']:checked").val();
	if (aa9) localStorage.setItem("aa9inp", aa9);

	var aa10 = $("input[name='aa10']:checked").val();
	if (aa10) localStorage.setItem("aa10inp", aa10);

	var aa11 = $("input[name='aa11']:checked").val();
	if (aa11) localStorage.setItem("aa11inp", aa11);

	var aa12 = $("input[name='aa12']:checked").val();
	if (aa12) localStorage.setItem("aa12inp", aa12);
};