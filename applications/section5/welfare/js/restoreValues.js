$(document).ready(function() { //Восстанавливает значения полей
	if (localStorage.getItem('dateinp') != '')	$('#date').val(localStorage.getItem('dateinp'));
	if (localStorage.getItem('genderinp') != '') {
		if (localStorage.getItem('genderinp') == 'Мужской')	$('input:radio[name="gender"]').filter('[value="Мужской"]').attr('checked',true);
		if (localStorage.getItem('genderinp') == 'Женский')	$('input:radio[name="gender"]').filter('[value="Женский"]').attr('checked',true);
	}
	if (localStorage.getItem('snameinp') != '')	$('#sname').val(localStorage.getItem('snameinp'));
	if (localStorage.getItem('fnameinp') != '')	$('#fname').val(localStorage.getItem('fnameinp'));
	if (localStorage.getItem('mnameinp') != '')	$('#mname').val(localStorage.getItem('mnameinp'));
	if (localStorage.getItem('facinp') != '')	$('#fac').val(localStorage.getItem('facinp'));
	if (localStorage.getItem('aa1inp') != '') {
		if (localStorage.getItem('aa1inp') == '2')	$('input:radio[name="aa1"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('aa1inp') == '1')	$('input:radio[name="aa1"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('aa1inp') == '0')	$('input:radio[name="aa1"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('aa2inp') != '') {
		if (localStorage.getItem('aa2inp') == '2')	$('input:radio[name="aa2"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('aa2inp') == '1')	$('input:radio[name="aa2"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('aa2inp') == '0')	$('input:radio[name="aa2"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('aa3inp') != '') {
		if (localStorage.getItem('aa3inp') == '2')	$('input:radio[name="aa3"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('aa3inp') == '1')	$('input:radio[name="aa3"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('aa3inp') == '0')	$('input:radio[name="aa3"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('aa4inp') != '') {
		if (localStorage.getItem('aa4inp') == '2')	$('input:radio[name="aa4"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('aa4inp') == '1')	$('input:radio[name="aa4"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('aa4inp') == '0')	$('input:radio[name="aa4"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('aa5inp') != '') {
		if (localStorage.getItem('aa5inp') == '2')	$('input:radio[name="aa5"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('aa5inp') == '1')	$('input:radio[name="aa5"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('aa5inp') == '0')	$('input:radio[name="aa5"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('aa6inp') != '') {
		if (localStorage.getItem('aa6inp') == '2')	$('input:radio[name="aa6"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('aa6inp') == '1')	$('input:radio[name="aa6"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('aa6inp') == '0')	$('input:radio[name="aa6"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('aa7inp') != '') {
		if (localStorage.getItem('aa7inp') == '2')	$('input:radio[name="aa7"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('aa7inp') == '1')	$('input:radio[name="aa7"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('aa7inp') == '0')	$('input:radio[name="aa7"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('aa8inp') != '') {
		if (localStorage.getItem('aa8inp') == '2')	$('input:radio[name="aa8"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('aa8inp') == '1')	$('input:radio[name="aa8"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('aa8inp') == '0')	$('input:radio[name="aa8"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('aa9inp') != '') {
		if (localStorage.getItem('aa9inp') == '2')	$('input:radio[name="aa9"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('aa9inp') == '1')	$('input:radio[name="aa9"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('aa9inp') == '0')	$('input:radio[name="aa9"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('aa10inp') != '') {
		if (localStorage.getItem('aa10inp') == '2')	$('input:radio[name="aa10"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('aa10inp') == '1')	$('input:radio[name="aa10"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('aa10inp') == '0')	$('input:radio[name="aa10"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('aa11inp') != '') {
		if (localStorage.getItem('aa11inp') == '2')	$('input:radio[name="aa11"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('aa11inp') == '1')	$('input:radio[name="aa11"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('aa11inp') == '0')	$('input:radio[name="aa11"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('aa12inp') != '') {
		if (localStorage.getItem('aa12inp') == '2')	$('input:radio[name="aa12"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('aa12inp') == '1')	$('input:radio[name="aa12"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('aa12inp') == '0')	$('input:radio[name="aa12"]').filter('[value="0"]').attr('checked',true);
	}
});