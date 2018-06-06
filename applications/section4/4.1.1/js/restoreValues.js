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
	if (localStorage.getItem('e1inp') != '') {
		if (localStorage.getItem('e1inp') == '1')	$('input:radio[name="e1"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('e1inp') == '2')	$('input:radio[name="e1"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('e1inp') == '3')	$('input:radio[name="e1"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('e1inp') == '4')	$('input:radio[name="e1"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('e2inp') != '') {
		if (localStorage.getItem('e2inp') == '1')	$('input:radio[name="e2"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('e2inp') == '2')	$('input:radio[name="e2"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('e2inp') == '3')	$('input:radio[name="e2"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('e2inp') == '4')	$('input:radio[name="e2"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('e3inp') != '') {
		if (localStorage.getItem('e3inp') == '1')	$('input:radio[name="e3"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('e3inp') == '2')	$('input:radio[name="e3"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('e3inp') == '3')	$('input:radio[name="e3"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('e3inp') == '4')	$('input:radio[name="e3"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('e4inp') != '') {
		if (localStorage.getItem('e4inp') == '1')	$('input:radio[name="e4"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('e4inp') == '2')	$('input:radio[name="e4"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('e4inp') == '3')	$('input:radio[name="e4"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('e4inp') == '4')	$('input:radio[name="e4"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('e5inp') != '') {
		if (localStorage.getItem('e5inp') == '1')	$('input:radio[name="e5"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('e5inp') == '2')	$('input:radio[name="e5"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('e5inp') == '3')	$('input:radio[name="e5"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('e5inp') == '4')	$('input:radio[name="e5"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('e6inp') != '') {
		if (localStorage.getItem('e6inp') == '1')	$('input:radio[name="e6"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('e6inp') == '2')	$('input:radio[name="e6"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('e6inp') == '3')	$('input:radio[name="e6"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('e6inp') == '4')	$('input:radio[name="e6"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('e7inp') != '') {
		if (localStorage.getItem('e7inp') == '1')	$('input:radio[name="e7"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('e7inp') == '2')	$('input:radio[name="e7"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('e7inp') == '3')	$('input:radio[name="e7"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('e7inp') == '4')	$('input:radio[name="e7"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('e8inp') != '') {
		if (localStorage.getItem('e8inp') == '1')	$('input:radio[name="e8"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('e8inp') == '2')	$('input:radio[name="e8"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('e8inp') == '3')	$('input:radio[name="e8"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('e8inp') == '4')	$('input:radio[name="e8"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('e9inp') != '') {
		if (localStorage.getItem('e9inp') == '1')	$('input:radio[name="e9"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('e9inp') == '2')	$('input:radio[name="e9"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('e9inp') == '3')	$('input:radio[name="e9"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('e9inp') == '4')	$('input:radio[name="e9"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('e10inp') != '') {
		if (localStorage.getItem('e10inp') == '2')	$('input:radio[name="e10"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('e10inp') == '3')	$('input:radio[name="e10"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('e10inp') == '4')	$('input:radio[name="e10"]').filter('[value="4"]').attr('checked',true);
		if (localStorage.getItem('e10inp') == '4')	$('input:radio[name="e10"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('e11inp') != '') {
		if (localStorage.getItem('e11inp') == '1')	$('input:radio[name="e11"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('e11inp') == '2')	$('input:radio[name="e11"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('e11inp') == '3')	$('input:radio[name="e11"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('e11inp') == '4')	$('input:radio[name="e11"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('e12inp') != '') {
		if (localStorage.getItem('e12inp') == '1')	$('input:radio[name="e12"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('e12inp') == '2')	$('input:radio[name="e12"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('e12inp') == '3')	$('input:radio[name="e12"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('e12inp') == '4')	$('input:radio[name="e12"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('e13inp') != '') {
		if (localStorage.getItem('e13inp') == '1')	$('input:radio[name="e13"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('e13inp') == '2')	$('input:radio[name="e13"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('e13inp') == '3')	$('input:radio[name="e13"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('e13inp') == '4')	$('input:radio[name="e13"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('e14inp') != '') {
		if (localStorage.getItem('e14inp') == '0')	$('input:radio[name="e14"]').filter('[value="0"]').attr('checked',true);
		if (localStorage.getItem('e14inp') == '2')	$('input:radio[name="e14"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('e14inp') == '4')	$('input:radio[name="e14"]').filter('[value="4"]').attr('checked',true);
		if (localStorage.getItem('e14inp') == '6')	$('input:radio[name="e14"]').filter('[value="6"]').attr('checked',true);
	}
	if (localStorage.getItem('e15inp') != '') {
		if (localStorage.getItem('e15inp') == '1')	$('input:radio[name="e15"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('e15inp') == '2')	$('input:radio[name="e15"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('e15inp') == '3')	$('input:radio[name="e15"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('e15inp') == '4')	$('input:radio[name="e15"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('e16inp') != '') {
		if (localStorage.getItem('e16inp') == '1')	$('input:radio[name="e16"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('e16inp') == '2')	$('input:radio[name="e16"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('e16inp') == '3')	$('input:radio[name="e16"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('e16inp') == '4')	$('input:radio[name="e16"]').filter('[value="4"]').attr('checked',true);
	}
});