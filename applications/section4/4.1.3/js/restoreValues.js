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
	if (localStorage.getItem('g1inp') != '') {
		if (localStorage.getItem('g1inp') == '1')	$('input:radio[name="g1"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('g1inp') == '0')	$('input:radio[name="g1"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('g2inp') != '') {
		if (localStorage.getItem('g2inp') == '1')	$('input:radio[name="g2"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('g2inp') == '0')	$('input:radio[name="g2"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('g3inp') != '') {
		if (localStorage.getItem('g3inp') == '1')	$('input:radio[name="g3"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('g3inp') == '0')	$('input:radio[name="g3"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('g4inp') != '') {
		if (localStorage.getItem('g4inp') == '1')	$('input:radio[name="g4"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('g4inp') == '0')	$('input:radio[name="g4"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('g5inp') != '') {
		if (localStorage.getItem('g5inp') == '1')	$('input:radio[name="g5"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('g5inp') == '0')	$('input:radio[name="g5"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('g6inp') != '') {
		if (localStorage.getItem('g6inp') == '1')	$('input:radio[name="g6"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('g6inp') == '0')	$('input:radio[name="g6"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('g7inp') != '') {
		if (localStorage.getItem('g7inp') == '1')	$('input:radio[name="g7"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('g7inp') == '0')	$('input:radio[name="g7"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('g8inp') != '') {
		if (localStorage.getItem('g8inp') == '1')	$('input:radio[name="g8"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('g8inp') == '0')	$('input:radio[name="g8"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('g9inp') != '') {
		if (localStorage.getItem('g9inp') == '1')	$('input:radio[name="g9"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('g9inp') == '0')	$('input:radio[name="g9"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('g10inp') != '') {
		if (localStorage.getItem('g10inp') == '1')	$('input:radio[name="g10"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('g10inp') == '0')	$('input:radio[name="g10"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('g11inp') != '') {
		if (localStorage.getItem('g11inp') == '1')	$('input:radio[name="g11"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('g11inp') == '0')	$('input:radio[name="g11"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('g12inp') != '') {
		if (localStorage.getItem('g12inp') == '1')	$('input:radio[name="g12"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('g12inp') == '0')	$('input:radio[name="g12"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('g13inp') != '') {
		if (localStorage.getItem('g13inp') == '1')	$('input:radio[name="g13"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('g13inp') == '0')	$('input:radio[name="g13"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('g14inp') != '') {
		if (localStorage.getItem('g14inp') == '1')	$('input:radio[name="g14"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('g14inp') == '0')	$('input:radio[name="g14"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('g15inp') != '') {
		if (localStorage.getItem('g15inp') == '1')	$('input:radio[name="g15"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('g15inp') == '0')	$('input:radio[name="g15"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('g16inp') != '') {
		if (localStorage.getItem('g16inp') == '1')	$('input:radio[name="g16"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('g16inp') == '0')	$('input:radio[name="g16"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('g17inp') != '') {
		if (localStorage.getItem('g17inp') == '1')	$('input:radio[name="g17"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('g17inp') == '0')	$('input:radio[name="g17"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('g18inp') != '') {
		if (localStorage.getItem('g18inp') == '1')	$('input:radio[name="g18"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('g18inp') == '0')	$('input:radio[name="g18"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('g19inp') != '') {
		if (localStorage.getItem('g19inp') == '1')	$('input:radio[name="g19"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('g19inp') == '0')	$('input:radio[name="g19"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('g20inp') != '') {
		if (localStorage.getItem('g20inp') == '1')	$('input:radio[name="g20"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('g20inp') == '0')	$('input:radio[name="g20"]').filter('[value="0"]').attr('checked',true);
	}
});