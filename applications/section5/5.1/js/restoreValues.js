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
	if (localStorage.getItem('y1inp') != '') {
		if (localStorage.getItem('y1inp') == '0')	$('input:radio[name="y1"]').filter('[value="0"]').attr('checked',true);
		if (localStorage.getItem('y1inp') == '20')	$('input:radio[name="y1"]').filter('[value="20"]').attr('checked',true);
		if (localStorage.getItem('y1inp') == '30')	$('input:radio[name="y1"]').filter('[value="30"]').attr('checked',true);
	}
	if (localStorage.getItem('y2inp') != '') {
		if (localStorage.getItem('y2inp') == '0')	$('input:radio[name="y2"]').filter('[value="0"]').attr('checked',true);
		if (localStorage.getItem('y2inp') == '10')	$('input:radio[name="y2"]').filter('[value="10"]').attr('checked',true);
		if (localStorage.getItem('y2inp') == '30')	$('input:radio[name="y2"]').filter('[value="30"]').attr('checked',true);
	}
	if (localStorage.getItem('y3inp') != '') {
		if (localStorage.getItem('y3inp') == '0')	$('input:radio[name="y3"]').filter('[value="0"]').attr('checked',true);
		if (localStorage.getItem('y3inp') == '20')	$('input:radio[name="y3"]').filter('[value="20"]').attr('checked',true);
		if (localStorage.getItem('y3inp') == '30')	$('input:radio[name="y3"]').filter('[value="30"]').attr('checked',true);
	}
	if (localStorage.getItem('y4inp') != '') {
		if (localStorage.getItem('y4inp') == '0')	$('input:radio[name="y4"]').filter('[value="0"]').attr('checked',true);
		if (localStorage.getItem('y4inp') == '20')	$('input:radio[name="y4"]').filter('[value="20"]').attr('checked',true);
		if (localStorage.getItem('y4inp') == '30')	$('input:radio[name="y4"]').filter('[value="30"]').attr('checked',true);
	}
	if (localStorage.getItem('y5inp') != '') {
		if (localStorage.getItem('y5inp') == '0')	$('input:radio[name="y5"]').filter('[value="0"]').attr('checked',true);
		if (localStorage.getItem('y5inp') == '10')	$('input:radio[name="y5"]').filter('[value="10"]').attr('checked',true);
		if (localStorage.getItem('y5inp') == '30')	$('input:radio[name="y5"]').filter('[value="30"]').attr('checked',true);
	}
	if (localStorage.getItem('y6inp') != '') {
		if (localStorage.getItem('y6inp') == '0')	$('input:radio[name="y6"]').filter('[value="0"]').attr('checked',true);
		if (localStorage.getItem('y6inp') == '20')	$('input:radio[name="y6"]').filter('[value="20"]').attr('checked',true);
		if (localStorage.getItem('y6inp') == '30')	$('input:radio[name="y6"]').filter('[value="30"]').attr('checked',true);
	}
	if (localStorage.getItem('y7inp') != '') {
		if (localStorage.getItem('y7inp') == '0')	$('input:radio[name="y7"]').filter('[value="0"]').attr('checked',true);
		if (localStorage.getItem('y7inp') == '0.1')	$('input:radio[name="y7"]').filter('[value="0.1"]').attr('checked',true);
		if (localStorage.getItem('y7inp') == '30')	$('input:radio[name="y7"]').filter('[value="30"]').attr('checked',true);
	}
	if (localStorage.getItem('y8inp') != '') {
		if (localStorage.getItem('y8inp') == '0')	$('input:radio[name="y8"]').filter('[value="0"]').attr('checked',true);
		if (localStorage.getItem('y8inp') == '10')	$('input:radio[name="y8"]').filter('[value="10"]').attr('checked',true);
		if (localStorage.getItem('y8inp') == '30')	$('input:radio[name="y8"]').filter('[value="30"]').attr('checked',true);
	}
	if (localStorage.getItem('y9inp') != '') {
		if (localStorage.getItem('y9inp') == '10')	$('input:radio[name="y9"]').filter('[value="10"]').attr('checked',true);
		if (localStorage.getItem('y9inp') == '20')	$('input:radio[name="y9"]').filter('[value="20"]').attr('checked',true);
		if (localStorage.getItem('y9inp') == '30')	$('input:radio[name="y9"]').filter('[value="30"]').attr('checked',true);
	}
	if (localStorage.getItem('y10inp') != '') {
		if (localStorage.getItem('y10inp') == '0')	$('input:radio[name="y10"]').filter('[value="0"]').attr('checked',true);
		if (localStorage.getItem('y10inp') == '0.1')	$('input:radio[name="y10"]').filter('[value="0.1"]').attr('checked',true);
		if (localStorage.getItem('y10inp') == '30')	$('input:radio[name="y10"]').filter('[value="30"]').attr('checked',true);
	}
	if (localStorage.getItem('y11inp') != '') {
		if (localStorage.getItem('y11inp') == '0')	$('input:radio[name="y11"]').filter('[value="0"]').attr('checked',true);
		if (localStorage.getItem('y11inp') == '0.1')	$('input:radio[name="y11"]').filter('[value="0.1"]').attr('checked',true);
		if (localStorage.getItem('y11inp') == '30')	$('input:radio[name="y11"]').filter('[value="30"]').attr('checked',true);
	}
	if (localStorage.getItem('y12inp') != '') {
		if (localStorage.getItem('y12inp') == '0')	$('input:radio[name="y12"]').filter('[value="0"]').attr('checked',true);
		if (localStorage.getItem('y12inp') == '20')	$('input:radio[name="y12"]').filter('[value="20"]').attr('checked',true);
		if (localStorage.getItem('y12inp') == '30')	$('input:radio[name="y12"]').filter('[value="30"]').attr('checked',true);
	}
	if (localStorage.getItem('y13inp') != '') {
		if (localStorage.getItem('y13inp') == '0')	$('input:radio[name="y13"]').filter('[value="0"]').attr('checked',true);
		if (localStorage.getItem('y13inp') == '0.1')	$('input:radio[name="y13"]').filter('[value="0.1"]').attr('checked',true);
		if (localStorage.getItem('y13inp') == '30')	$('input:radio[name="y13"]').filter('[value="30"]').attr('checked',true);
	}
	if (localStorage.getItem('y14inp') != '') {
		if (localStorage.getItem('y14inp') == '30')	$('input:radio[name="y14"]').filter('[value="30"]').attr('checked',true);
		if (localStorage.getItem('y14inp') == '30.1')	$('input:radio[name="y14"]').filter('[value="30.1"]').attr('checked',true);
		if (localStorage.getItem('y14inp') == '30.2')	$('input:radio[name="y14"]').filter('[value="30.2"]').attr('checked',true);
	}
	if (localStorage.getItem('y15inp') != '') {
		if (localStorage.getItem('y15inp') == '0')	$('input:radio[name="y15"]').filter('[value="0"]').attr('checked',true);
		if (localStorage.getItem('y15inp') == '20')	$('input:radio[name="y15"]').filter('[value="20"]').attr('checked',true);
		if (localStorage.getItem('y15inp') == '30')	$('input:radio[name="y15"]').filter('[value="30"]').attr('checked',true);
	}
	if (localStorage.getItem('y16inp') != '') {
		if (localStorage.getItem('y16inp') == '0')	$('input:radio[name="y16"]').filter('[value="0"]').attr('checked',true);
		if (localStorage.getItem('y16inp') == '10')	$('input:radio[name="y16"]').filter('[value="10"]').attr('checked',true);
		if (localStorage.getItem('y16inp') == '30')	$('input:radio[name="y16"]').filter('[value="30"]').attr('checked',true);
	}
});