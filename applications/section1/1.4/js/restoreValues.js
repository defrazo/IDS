$(document).ready(function() {
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
	if (localStorage.getItem('b1inp') != '') {
		if (localStorage.getItem('b1inp') == '8')	$('input:radio[name="b1"]').filter('[value="8"]').attr('checked',true);
		if (localStorage.getItem('b1inp') == '0')	$('input:radio[name="b1"]').filter('[value="0"]').attr('checked',true);
		if (localStorage.getItem('b1inp') == '4')	$('input:radio[name="b1"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('b2inp') != '') {
		if (localStorage.getItem('b2inp') == '0')	$('input:radio[name="b2"]').filter('[value="0"]').attr('checked',true);
		if (localStorage.getItem('b2inp') == '1')	$('input:radio[name="b2"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('b2inp') == '1.1')	$('input:radio[name="b2"]').filter('[value="1.1"]').attr('checked',true);
		if (localStorage.getItem('b2inp') == '3')	$('input:radio[name="b2"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('b2inp') == '8')	$('input:radio[name="b2"]').filter('[value="8"]').attr('checked',true);
	}
	if (localStorage.getItem('b3inp') != '') {
		if (localStorage.getItem('b3inp') == '0')	$('input:radio[name="b3"]').filter('[value="0"]').attr('checked',true);
		if (localStorage.getItem('b3inp') == '2')	$('input:radio[name="b3"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('b3inp') == '4')	$('input:radio[name="b3"]').filter('[value="4"]').attr('checked',true);
		if (localStorage.getItem('b3inp') == '5')	$('input:radio[name="b3"]').filter('[value="5"]').attr('checked',true);
	}
	if (localStorage.getItem('b4inp') != '') {
		if (localStorage.getItem('b4inp') == '1')	$('input:radio[name="b4"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('b4inp') == '3')	$('input:radio[name="b4"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('b4inp') == '7')	$('input:radio[name="b4"]').filter('[value="7"]').attr('checked',true);
	}
	if (localStorage.getItem('b5inp') != '') {
		if (localStorage.getItem('b5inp') == '0')	$('input:radio[name="b5"]').filter('[value="0"]').attr('checked',true);
		if (localStorage.getItem('b5inp') == '2')	$('input:radio[name="b5"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('b5inp') == '4')	$('input:radio[name="b5"]').filter('[value="4"]').attr('checked',true);
		if (localStorage.getItem('b5inp') == '5')	$('input:radio[name="b5"]').filter('[value="5"]').attr('checked',true);
		if (localStorage.getItem('b5inp') == '8')	$('input:radio[name="b5"]').filter('[value="8"]').attr('checked',true);
	}
	if (localStorage.getItem('b6inp') != '') {
		if (localStorage.getItem('b6inp') == '1')	$('input:radio[name="b6"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('b6inp') == '2')	$('input:radio[name="b6"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('b6inp') == '4')	$('input:radio[name="b6"]').filter('[value="4"]').attr('checked',true);
		if (localStorage.getItem('b6inp') == '8')	$('input:radio[name="b6"]').filter('[value="8"]').attr('checked',true);
	}
});