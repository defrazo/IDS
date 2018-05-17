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
	if (localStorage.getItem('q1') != '') {
		if (localStorage.getItem('q1') == '6')	$('input:radio[name="q1"]').filter('[value="6"]').attr('checked',true);
		if (localStorage.getItem('q1') == '0')	$('input:radio[name="q1"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('q2') != '') {
		if (localStorage.getItem('q2') == '-4')	$('input:radio[name="q2"]').filter('[value="-4"]').attr('checked',true);
		if (localStorage.getItem('q2') == '0')	$('input:radio[name="q2"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('q3') != '') {
		if (localStorage.getItem('q3') == '-3')	$('input:radio[name="q3"]').filter('[value="-3"]').attr('checked',true);
		if (localStorage.getItem('q3') == '0')	$('input:radio[name="q3"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('q4') != '') {
		if (localStorage.getItem('q4') == '-2')	$('input:radio[name="q4"]').filter('[value="-2"]').attr('checked',true);
		if (localStorage.getItem('q4') == '0')	$('input:radio[name="q4"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('q5') != '') {
		if (localStorage.getItem('q5') == '2')	$('input:radio[name="q5"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q5') == '0')	$('input:radio[name="q5"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('q6') != '') {
		if (localStorage.getItem('q6') == '1')	$('input:radio[name="q6"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('q6') == '0')	$('input:radio[name="q6"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('q7') != '') {
		if (localStorage.getItem('q7') == '2')	$('input:radio[name="q7"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q7') == '0')	$('input:radio[name="q7"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('q8') != '') {
		if (localStorage.getItem('q8') == '3')	$('input:radio[name="q8"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('q8') == '0')	$('input:radio[name="q8"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('q9') != '') {
		if (localStorage.getItem('q9') == '5')	$('input:radio[name="q9"]').filter('[value="5"]').attr('checked',true);
		if (localStorage.getItem('q9') == '0')	$('input:radio[name="q9"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('q10') != '') {
		if (localStorage.getItem('q10') == '-1')	$('input:radio[name="q10"]').filter('[value="-1"]').attr('checked',true);
		if (localStorage.getItem('q10') == '0')	$('input:radio[name="q10"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('q11') != '') {
		if (localStorage.getItem('q11') == '-3')	$('input:radio[name="q11"]').filter('[value="-3"]').attr('checked',true);
		if (localStorage.getItem('q11') == '0')	$('input:radio[name="q11"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('q12') != '') {
		if (localStorage.getItem('q12') == '3')	$('input:radio[name="q12"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('q12') == '0')	$('input:radio[name="q12"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('q13') != '') {
		if (localStorage.getItem('q13') == '4')	$('input:radio[name="q13"]').filter('[value="4"]').attr('checked',true);
		if (localStorage.getItem('q13') == '2')	$('input:radio[name="q13"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q13') == '0')	$('input:radio[name="q13"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('q14') != '') {
		if (localStorage.getItem('q14') == '-4')	$('input:radio[name="q14"]').filter('[value="-4"]').attr('checked',true);
		if (localStorage.getItem('q14') == '0')	$('input:radio[name="q14"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('q15') != '') {
		if (localStorage.getItem('q15') == '-4')	$('input:radio[name="q15"]').filter('[value="-3"]').attr('checked',true);
		if (localStorage.getItem('q15') == '0')	$('input:radio[name="q15"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('q16') != '') {
		if (localStorage.getItem('q16') == '3')	$('input:radio[name="q16"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('q16') == '0')	$('input:radio[name="q16"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('q17') != '') {
		if (localStorage.getItem('q17') == '1')	$('input:radio[name="q17"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('q17') == '0')	$('input:radio[name="q17"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('q18') != '') {
		if (localStorage.getItem('q18') == '-2')	$('input:radio[name="q18"]').filter('[value="-2"]').attr('checked',true);
		if (localStorage.getItem('q18') == '0')	$('input:radio[name="q18"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('q19') != '') {
		if (localStorage.getItem('q19') == '-1')	$('input:radio[name="q19"]').filter('[value="-1"]').attr('checked',true);
		if (localStorage.getItem('q19') == '0')	$('input:radio[name="q19"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('q20') != '') {
		if (localStorage.getItem('q20') == '-8')	$('input:radio[name="q20"]').filter('[value="-8"]').attr('checked',true);
		if (localStorage.getItem('q20') == '-6')	$('input:radio[name="q20"]').filter('[value="-6"]').attr('checked',true);
		if (localStorage.getItem('q20') == '-3')	$('input:radio[name="q20"]').filter('[value="-3"]').attr('checked',true);
	}
	if (localStorage.getItem('q21') != '') {
		if (localStorage.getItem('q21') == '-1')	$('input:radio[name="q21"]').filter('[value="-1"]').attr('checked',true);
		if (localStorage.getItem('q21') == '0')	$('input:radio[name="q21"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('q22') != '') {
		if (localStorage.getItem('q22') == '2')	$('input:radio[name="q22"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q22') == '0')	$('input:radio[name="q22"]').filter('[value="0"]').attr('checked',true);
	}
});