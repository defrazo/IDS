$(document).ready(function() {
	if (localStorage.getItem('dateinp') != '')	$('#date').val(localStorage.getItem('dateinp'));
	if (localStorage.getItem('genderinp') != '') {
		if (localStorage.getItem('genderinp') == 'Мужской')	$('input:radio[name="gender"]').filter('[value="Мужской"]').attr('checked',true);
		if (localStorage.getItem('genderinp') == 'Женский')	$('input:radio[name="gender"]').filter('[value="Женский"]').attr('checked',true);
	}
	if (localStorage.getItem('snameinp') != '')	$('#sname').val(localStorage.getItem('snameinp'));
	if (localStorage.getItem('fnameinp') != '')	$('#fname').val(localStorage.getItem('fnameinp'));
	if (localStorage.getItem('mnameinp') != '')	$('#mname').val(localStorage.getItem('mnameinp'));
	if (localStorage.getItem('facinp') != '')	$('#fac').val(localStorage.getItem('facinp'));
	if (localStorage.getItem('i11inp') != '') $('#i11').val(localStorage.getItem('i11inp'));
	if (localStorage.getItem('i12inp') != '') $('#i12').val(localStorage.getItem('i12inp'));
	if (localStorage.getItem('i21inp') != '') $('#i21').val(localStorage.getItem('i21inp'));
	if (localStorage.getItem('i22inp') != '') $('#i22').val(localStorage.getItem('i22inp'));
	if (localStorage.getItem('i31inp') != '') $('#i31').val(localStorage.getItem('i31inp'));
	if (localStorage.getItem('i32inp') != '') $('#i32').val(localStorage.getItem('i32inp'));
	if (localStorage.getItem('i41inp') != '') $('#i41').val(localStorage.getItem('i41inp'));
	if (localStorage.getItem('i42inp') != '') $('#i42').val(localStorage.getItem('i42inp'));
	if (localStorage.getItem('i51inp') != '') $('#i51').val(localStorage.getItem('i51inp'));
	if (localStorage.getItem('i52inp') != '') $('#i52').val(localStorage.getItem('i52inp'));
	if (localStorage.getItem('i61inp') != '') $('#i61').val(localStorage.getItem('i61inp'));
	if (localStorage.getItem('i62inp') != '') $('#i62').val(localStorage.getItem('i62inp'));
	if (localStorage.getItem('i71inp') != '') $('#i71').val(localStorage.getItem('i71inp'));
	if (localStorage.getItem('i72inp') != '') $('#i72').val(localStorage.getItem('i72inp'));
	if (localStorage.getItem('i81inp') != '') $('#i81').val(localStorage.getItem('i81inp'));
	if (localStorage.getItem('i82inp') != '') $('#i82').val(localStorage.getItem('i82inp'));
	if (localStorage.getItem('i91inp') != '') $('#i91').val(localStorage.getItem('i91inp'));
	if (localStorage.getItem('i92inp') != '') $('#i92').val(localStorage.getItem('i92inp'));
	if (localStorage.getItem('i101inp') != '') $('#i101').val(localStorage.getItem('i101inp'));
	if (localStorage.getItem('i102inp') != '') $('#i102').val(localStorage.getItem('i102inp'));
	if (localStorage.getItem('i111inp') != '') $('#i111').val(localStorage.getItem('i111inp'));
	if (localStorage.getItem('i112inp') != '') $('#i112').val(localStorage.getItem('i112inp'));
	if (localStorage.getItem('i121inp') != '') $('#i121').val(localStorage.getItem('i121inp'));
	if (localStorage.getItem('i122inp') != '') $('#i122').val(localStorage.getItem('i122inp'));
});