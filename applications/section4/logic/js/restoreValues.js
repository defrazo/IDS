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
	if (localStorage.getItem('w1inp') != '') {
		if (localStorage.getItem('w1inp') == '1')	$('input:radio[name="w1"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('w1inp') == '0')	$('input:radio[name="w1"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('w2inp') != '') {
		if (localStorage.getItem('w2inp') == '1')	$('input:radio[name="w2"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('w2inp') == '0')	$('input:radio[name="w2"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('w3inp') != '') {
		if (localStorage.getItem('w3inp') == '1')	$('input:radio[name="w3"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('w3inp') == '0')	$('input:radio[name="w3"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('w4inp') != '') {
		if (localStorage.getItem('w4inp') == '1')	$('input:radio[name="w4"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('w4inp') == '0')	$('input:radio[name="w4"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('w5inp') != '') {
		if (localStorage.getItem('w5inp') == '1')	$('input:radio[name="w5"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('w5inp') == '0')	$('input:radio[name="w5"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('w6inp') != '') {
		if (localStorage.getItem('w6inp') == '1')	$('input:radio[name="w6"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('w6inp') == '0')	$('input:radio[name="w6"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('w7inp') != '') {
		if (localStorage.getItem('w7inp') == '1')	$('input:radio[name="w7"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('w7inp') == '0')	$('input:radio[name="w7"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('w8inp') != '') {
		if (localStorage.getItem('w8inp') == '1')	$('input:radio[name="w8"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('w8inp') == '0')	$('input:radio[name="w8"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('w9inp') != '') {
		if (localStorage.getItem('w9inp') == '1')	$('input:radio[name="w9"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('w9inp') == '0')	$('input:radio[name="w9"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('w10inp') != '') {
		if (localStorage.getItem('w10inp') == '1')	$('input:radio[name="w10"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('w10inp') == '0')	$('input:radio[name="w10"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('w11inp') != '') {
		if (localStorage.getItem('w11inp') == '1')	$('input:radio[name="w11"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('w11inp') == '0')	$('input:radio[name="w11"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('w12inp') != '') {
		if (localStorage.getItem('w12inp') == '1')	$('input:radio[name="w12"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('w12inp') == '0')	$('input:radio[name="w12"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('w13inp') != '') {
		if (localStorage.getItem('w13inp') == '1')	$('input:radio[name="w13"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('w13inp') == '0')	$('input:radio[name="w13"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('w14inp') != '') {
		if (localStorage.getItem('w14inp') == '1')	$('input:radio[name="w14"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('w14inp') == '0')	$('input:radio[name="w14"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('w15inp') != '') {
		if (localStorage.getItem('w15inp') == '1')	$('input:radio[name="w15"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('w15inp') == '0')	$('input:radio[name="w15"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('w16inp') != '') {
		if (localStorage.getItem('w16inp') == '1')	$('input:radio[name="w16"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('w16inp') == '0')	$('input:radio[name="w16"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('w17inp') != '') {
		if (localStorage.getItem('w17inp') == '1')	$('input:radio[name="w17"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('w17inp') == '0')	$('input:radio[name="w17"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('w18inp') != '') {
		if (localStorage.getItem('w18inp') == '1')	$('input:radio[name="w18"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('w18inp') == '0')	$('input:radio[name="w18"]').filter('[value="0"]').attr('checked',true);
	}
});