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
	if (localStorage.getItem('c1inp') != '') {
		if (localStorage.getItem('c1inp') == '6')	$('input:radio[name="c1"]').filter('[value="6"]').attr('checked',true);
		if (localStorage.getItem('c1inp') == '0')	$('input:radio[name="c1"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('c2inp') != '') {
		if (localStorage.getItem('c2inp') == '-4')	$('input:radio[name="c2"]').filter('[value="-4"]').attr('checked',true);
		if (localStorage.getItem('c2inp') == '0')	$('input:radio[name="c2"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('c3inp') != '') {
		if (localStorage.getItem('c3inp') == '-3')	$('input:radio[name="c3"]').filter('[value="-3"]').attr('checked',true);
		if (localStorage.getItem('c3inp') == '0')	$('input:radio[name="c3"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('c4inp') != '') {
		if (localStorage.getItem('c4inp') == '-2')	$('input:radio[name="c4"]').filter('[value="-2"]').attr('checked',true);
		if (localStorage.getItem('c4inp') == '0')	$('input:radio[name="c4"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('c5inp') != '') {
		if (localStorage.getItem('c5inp') == '2')	$('input:radio[name="c5"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('c5inp') == '0')	$('input:radio[name="c5"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('c6inp') != '') {
		if (localStorage.getItem('c6inp') == '1')	$('input:radio[name="c6"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('c6inp') == '0')	$('input:radio[name="c6"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('c7inp') != '') {
		if (localStorage.getItem('c7inp') == '2')	$('input:radio[name="c7"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('c7inp') == '0')	$('input:radio[name="c7"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('c8inp') != '') {
		if (localStorage.getItem('c8inp') == '3')	$('input:radio[name="c8"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('c8inp') == '0')	$('input:radio[name="c8"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('c9inp') != '') {
		if (localStorage.getItem('c9inp') == '5')	$('input:radio[name="c9"]').filter('[value="5"]').attr('checked',true);
		if (localStorage.getItem('c9inp') == '0')	$('input:radio[name="c9"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('c10inp') != '') {
		if (localStorage.getItem('c10inp') == '-1')	$('input:radio[name="c10"]').filter('[value="-1"]').attr('checked',true);
		if (localStorage.getItem('c10inp') == '0')	$('input:radio[name="c10"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('c11inp') != '') {
		if (localStorage.getItem('c11inp') == '-3')	$('input:radio[name="c11"]').filter('[value="-3"]').attr('checked',true);
		if (localStorage.getItem('c11inp') == '0')	$('input:radio[name="c11"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('c12inp') != '') {
		if (localStorage.getItem('c12inp') == '3')	$('input:radio[name="c12"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('c12inp') == '0')	$('input:radio[name="c12"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('c13inp') != '') {
		if (localStorage.getItem('c13inp') == '4')	$('input:radio[name="c13"]').filter('[value="4"]').attr('checked',true);
		if (localStorage.getItem('c13inp') == '2')	$('input:radio[name="c13"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('c13inp') == '0')	$('input:radio[name="c13"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('c14inp') != '') {
		if (localStorage.getItem('c14inp') == '-4')	$('input:radio[name="c14"]').filter('[value="-4"]').attr('checked',true);
		if (localStorage.getItem('c14inp') == '0')	$('input:radio[name="c14"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('c15inp') != '') {
		if (localStorage.getItem('c15inp') == '-4')	$('input:radio[name="c15"]').filter('[value="-3"]').attr('checked',true);
		if (localStorage.getItem('c15inp') == '0')	$('input:radio[name="c15"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('c16inp') != '') {
		if (localStorage.getItem('c16inp') == '3')	$('input:radio[name="c16"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('c16inp') == '0')	$('input:radio[name="c16"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('c17inp') != '') {
		if (localStorage.getItem('c17inp') == '1')	$('input:radio[name="c17"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('c17inp') == '0')	$('input:radio[name="c17"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('c18inp') != '') {
		if (localStorage.getItem('c18inp') == '-2')	$('input:radio[name="c18"]').filter('[value="-2"]').attr('checked',true);
		if (localStorage.getItem('c18inp') == '0')	$('input:radio[name="c18"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('c19inp') != '') {
		if (localStorage.getItem('c19inp') == '-1')	$('input:radio[name="c19"]').filter('[value="-1"]').attr('checked',true);
		if (localStorage.getItem('c19inp') == '0')	$('input:radio[name="c19"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('c20inp') != '') {
		if (localStorage.getItem('c20inp') == '-8')	$('input:radio[name="c20"]').filter('[value="-8"]').attr('checked',true);
		if (localStorage.getItem('c20inp') == '-6')	$('input:radio[name="c20"]').filter('[value="-6"]').attr('checked',true);
		if (localStorage.getItem('c20inp') == '-3')	$('input:radio[name="c20"]').filter('[value="-3"]').attr('checked',true);
	}
	if (localStorage.getItem('c21inp') != '') {
		if (localStorage.getItem('c21inp') == '-1')	$('input:radio[name="c21"]').filter('[value="-1"]').attr('checked',true);
		if (localStorage.getItem('c21inp') == '0')	$('input:radio[name="c21"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('c22inp') != '') {
		if (localStorage.getItem('c22inp') == '2')	$('input:radio[name="c22"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('c22inp') == '0')	$('input:radio[name="c22"]').filter('[value="0"]').attr('checked',true);
	}
});