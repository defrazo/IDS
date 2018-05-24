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
	if (localStorage.getItem('g1') != '') {
		if (localStorage.getItem('g1') == '1')	$('input:radio[name="g1"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('g1') == '0')	$('input:radio[name="g1"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('g2') != '') {
		if (localStorage.getItem('g2') == '1')	$('input:radio[name="g2"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('g2') == '0')	$('input:radio[name="g2"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('g3') != '') {
		if (localStorage.getItem('g3') == '1')	$('input:radio[name="g3"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('g3') == '0')	$('input:radio[name="g3"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('g4') != '') {
		if (localStorage.getItem('g4') == '1')	$('input:radio[name="g4"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('g4') == '0')	$('input:radio[name="g4"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('g5') != '') {
		if (localStorage.getItem('g5') == '1')	$('input:radio[name="g5"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('g5') == '0')	$('input:radio[name="g5"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('g6') != '') {
		if (localStorage.getItem('g6') == '1')	$('input:radio[name="g6"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('g6') == '0')	$('input:radio[name="g6"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('g7') != '') {
		if (localStorage.getItem('g7') == '1')	$('input:radio[name="g7"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('g7') == '0')	$('input:radio[name="g7"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('g8') != '') {
		if (localStorage.getItem('g8') == '1')	$('input:radio[name="g8"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('g8') == '0')	$('input:radio[name="g8"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('g9') != '') {
		if (localStorage.getItem('g9') == '1')	$('input:radio[name="g9"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('g9') == '0')	$('input:radio[name="g9"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('g10') != '') {
		if (localStorage.getItem('g10') == '1')	$('input:radio[name="g10"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('g10') == '0')	$('input:radio[name="g10"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('g11') != '') {
		if (localStorage.getItem('g11') == '1')	$('input:radio[name="g11"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('g11') == '0')	$('input:radio[name="g11"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('g12') != '') {
		if (localStorage.getItem('g12') == '1')	$('input:radio[name="g12"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('g12') == '0')	$('input:radio[name="g12"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('g13') != '') {
		if (localStorage.getItem('g13') == '1')	$('input:radio[name="g13"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('g13') == '0')	$('input:radio[name="g13"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('g14') != '') {
		if (localStorage.getItem('g14') == '1')	$('input:radio[name="g14"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('g14') == '0')	$('input:radio[name="g14"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('g15') != '') {
		if (localStorage.getItem('g15') == '1')	$('input:radio[name="g15"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('g15') == '0')	$('input:radio[name="g15"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('g16') != '') {
		if (localStorage.getItem('g16') == '1')	$('input:radio[name="g16"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('g16') == '0')	$('input:radio[name="g16"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('g17') != '') {
		if (localStorage.getItem('g17') == '1')	$('input:radio[name="g17"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('g17') == '0')	$('input:radio[name="g17"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('g18') != '') {
		if (localStorage.getItem('g18') == '1')	$('input:radio[name="g18"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('g18') == '0')	$('input:radio[name="g18"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('g19') != '') {
		if (localStorage.getItem('g19') == '1')	$('input:radio[name="g19"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('g19') == '0')	$('input:radio[name="g19"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('g20') != '') {
		if (localStorage.getItem('g20') == '1')	$('input:radio[name="g20"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('g20') == '0')	$('input:radio[name="g20"]').filter('[value="0"]').attr('checked',true);
	}
});