$(document).ready(function() { //Восстанавливает значения полей
	if (localStorage.getItem('dateinp') != '')	$('#date').val(localStorage.getItem('dateinp'));
	if (localStorage.getItem('genderinp') != '') {
		if (localStorage.getItem('genderinp') == 'Мужской')	$('input:radio[name="gender"]').filter('[value="Мужской"]').attr('checked',true);
		if (localStorage.getItem('genderinp') == 'Женский')	$('input:radio[name="gender"]').filter('[value="Женский"]').attr('checked',true);
	}
	if (localStorage.getItem('snameinp') != '')	$('#sname').val(localStorage.getItem('snameinp'));
	if (localStorage.getItem('fnameinp') != '')	$('#fname').val(localStorage.getItem('fnameinp'));
	if (localStorage.getItem('mnameinp') != '')	$('#mname').val(localStorage.getItem('mnameinp'));
	if (localStorage.getItem('ageinp') != '')	$('#age').val(localStorage.getItem('ageinp'));
	if (localStorage.getItem('heightinp') != '')	$('#height').val(localStorage.getItem('heightinp'));
	if (localStorage.getItem('weightinp') != '')	$('#weight').val(localStorage.getItem('weightinp'));
	if (localStorage.getItem('facinp') != '')	$('#fac').val(localStorage.getItem('facinp'));
	if (localStorage.getItem('l1inp') != '') {
		if (localStorage.getItem('l1inp') == '2')	$('input:radio[name="l1"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('l1inp') == '1')	$('input:radio[name="l1"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('l1inp') == '0')	$('input:radio[name="l1"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('l2inp') != '') {
		if (localStorage.getItem('l2inp') == '2')	$('input:radio[name="l2"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('l2inp') == '1')	$('input:radio[name="l2"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('l2inp') == '0')	$('input:radio[name="l2"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('l3inp') != '') {
		if (localStorage.getItem('l3inp') == '2')	$('input:radio[name="l3"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('l3inp') == '1')	$('input:radio[name="l3"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('l3inp') == '0')	$('input:radio[name="l3"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('l4inp') != '') {
		if (localStorage.getItem('l4inp') == '2')	$('input:radio[name="l4"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('l4inp') == '1')	$('input:radio[name="l4"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('l4inp') == '0')	$('input:radio[name="l4"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('l5inp') != '') {
		if (localStorage.getItem('l5inp') == '2')	$('input:radio[name="l5"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('l5inp') == '1')	$('input:radio[name="l5"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('l5inp') == '0')	$('input:radio[name="l5"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('l6inp') != '') {
		if (localStorage.getItem('l6inp') == '2')	$('input:radio[name="l6"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('l6inp') == '1')	$('input:radio[name="l6"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('l6inp') == '0')	$('input:radio[name="l6"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('l7inp') != '') {
		if (localStorage.getItem('l7inp') == '2')	$('input:radio[name="l7"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('l7inp') == '1')	$('input:radio[name="l7"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('l7inp') == '0')	$('input:radio[name="l7"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('l8inp') != '') {
		if (localStorage.getItem('l8inp') == '2')	$('input:radio[name="l8"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('l8inp') == '1')	$('input:radio[name="l8"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('l8inp') == '0')	$('input:radio[name="l8"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('l9inp') != '') {
		if (localStorage.getItem('l9inp') == '2')	$('input:radio[name="l9"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('l9inp') == '1')	$('input:radio[name="l9"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('l9inp') == '0')	$('input:radio[name="l9"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('l10inp') != '') {
		if (localStorage.getItem('l10inp') == '2')	$('input:radio[name="l10"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('l10inp') == '1')	$('input:radio[name="l10"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('l10inp') == '0')	$('input:radio[name="l10"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('l11inp') != '') {
		if (localStorage.getItem('l11inp') == '2')	$('input:radio[name="l11"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('l11inp') == '1')	$('input:radio[name="l11"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('l11inp') == '0')	$('input:radio[name="l11"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('l12inp') != '') {
		if (localStorage.getItem('l12inp') == '2')	$('input:radio[name="l12"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('l12inp') == '1')	$('input:radio[name="l12"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('l12inp') == '0')	$('input:radio[name="l12"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('l13inp') != '') {
		if (localStorage.getItem('l13inp') == '2')	$('input:radio[name="l13"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('l13inp') == '1')	$('input:radio[name="l13"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('l13inp') == '0')	$('input:radio[name="l13"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('l14inp') != '') {
		if (localStorage.getItem('l14inp') == '2')	$('input:radio[name="l14"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('l14inp') == '1')	$('input:radio[name="l14"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('l14inp') == '0')	$('input:radio[name="l14"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('l15inp') != '') {
		if (localStorage.getItem('l15inp') == '2')	$('input:radio[name="l15"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('l15inp') == '1')	$('input:radio[name="l15"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('l15inp') == '0')	$('input:radio[name="l15"]').filter('[value="0"]').attr('checked',true);
	}
});