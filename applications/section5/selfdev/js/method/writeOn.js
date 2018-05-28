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

	var ae1 = $("input[name='ae1']:checked").val();
	if (ae1) localStorage.setItem("ae1inp", ae1);
	
	var ae2 = $("input[name='ae2']:checked").val();
	if (ae2) localStorage.setItem("ae2inp", ae2);
	
	var ae3 = $("input[name='ae3']:checked").val();
	if (ae3) localStorage.setItem("ae3inp", ae3);
	
	var ae4 = $("input[name='ae4']:checked").val();
	if (ae4) localStorage.setItem("ae4inp", ae4);
	
	var ae5 = $("input[name='ae5']:checked").val();
	if (ae5) localStorage.setItem("ae5inp", ae5);
	
	var ae6 = $("input[name='ae6']:checked").val();
	if (ae6) localStorage.setItem("ae6inp", ae6);

	var ae7 = $("input[name='ae7']:checked").val();
	if (ae7) localStorage.setItem("ae7inp", ae7);

	var ae8 = $("input[name='ae8']:checked").val();
	if (ae8) localStorage.setItem("ae8inp", ae8);

	var ae9 = $("input[name='ae9']:checked").val();
	if (ae9) localStorage.setItem("ae9inp", ae9);

	var ae10 = $("input[name='ae10']:checked").val();
	if (ae10) localStorage.setItem("ae10inp", ae10);

	var ae11 = $("input[name='ae11']:checked").val();
	if (ae11) localStorage.setItem("ae11inp", ae11);

	var ae12 = $("input[name='ae12']:checked").val();
	if (ae12) localStorage.setItem("ae12inp", ae12);

	var ae13 = $("input[name='ae13']:checked").val();
	if (ae13) localStorage.setItem("ae13inp", ae13);

	var ae14 = $("input[name='ae14']:checked").val();
	if (ae14) localStorage.setItem("ae14inp", ae14);

	var ae15 = $("input[name='ae15']:checked").val();
	if (ae15) localStorage.setItem("ae15inp", ae15);

	var ae16 = $("input[name='ae16']:checked").val();
	if (ae16) localStorage.setItem("ae16inp", ae16);

	var ae17 = $("input[name='ae17']:checked").val();
	if (ae17) localStorage.setItem("ae17inp", ae17);

	var ae18 = $("input[name='ae18']:checked").val();
	if (ae18) localStorage.setItem("ae18inp", ae18);

	var ae19 = $("input[name='ae19']:checked").val();
	if (ae19) localStorage.setItem("ae19inp", ae19);

	var ae20 = $("input[name='ae20']:checked").val();
	if (ae20) localStorage.setItem("ae20inp", ae20);

	var ae21 = $("input[name='ae21']:checked").val();
	if (ae21) localStorage.setItem("ae21inp", ae21);
};