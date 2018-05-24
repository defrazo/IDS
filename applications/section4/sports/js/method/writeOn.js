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

	var i11 = $('#i11').val();
	if (i11 != '') localStorage.setItem('i11inp', i11);

	var i12 = $('#i12').val();
	if (i12 != '') localStorage.setItem('i12inp', i12);

	var i21 = $('#i21').val();
	if (i21 != '') localStorage.setItem('i21inp', i21);

	var i22 = $('#i22').val();
	if (i22 != '') localStorage.setItem('i22inp', i22);

	var i31 = $('#i31').val();
	if (i31 != '') localStorage.setItem('i31inp', i31);

	var i32 = $('#i32').val();
	if (i32 != '') localStorage.setItem('i32inp', i32);

	var i41 = $('#i41').val();
	if (i41 != '') localStorage.setItem('i41inp', i41);

	var i42 = $('#i42').val();
	if (i42 != '') localStorage.setItem('i42inp', i42);

	var i51 = $('#i51').val();
	if (i51 != '') localStorage.setItem('i51inp', i51);

	var i52 = $('#i52').val();
	if (i52 != '') localStorage.setItem('i52inp', i52);

	var i61 = $('#i61').val();
	if (i61 != '') localStorage.setItem('i61inp', i61);

	var i62 = $('#i62').val();
	if (i62 != '') localStorage.setItem('i62inp', i62);

	var i71 = $('#i71').val();
	if (i71 != '') localStorage.setItem('i71inp', i71);

	var i72 = $('#i72').val();
	if (i72 != '') localStorage.setItem('i72inp', i72);

	var i81 = $('#i81').val();
	if (i81 != '') localStorage.setItem('i81inp', i81);

	var i82 = $('#i82').val();
	if (i82 != '') localStorage.setItem('i82inp', i82);

	var i91 = $('#i91').val();
	if (i91 != '') localStorage.setItem('i91inp', i91);

	var i92 = $('#i92').val();
	if (i92 != '') localStorage.setItem('i92inp', i92);

	var i101 = $('#i101').val();
	if (i101 != '') localStorage.setItem('i101inp', i101);

	var i102 = $('#i102').val();
	if (i102 != '') localStorage.setItem('i102inp', i102);

	var i111 = $('#i111').val();
	if (i111 != '') localStorage.setItem('i111inp', i111);

	var i112 = $('#i112').val();
	if (i112 != '') localStorage.setItem('i112inp', i112);

	var i121 = $('#i121').val();
	if (i121 != '') localStorage.setItem('i121inp', i121);

	var i122 = $('#i122').val();
	if (i122 != '') localStorage.setItem('i122inp', i122);
};