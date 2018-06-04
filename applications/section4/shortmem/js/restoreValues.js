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
	if (localStorage.getItem('q1') != '') {
		if (localStorage.getItem('q1') == '1')	$('input:radio[name="q1"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('q1') == '2')	$('input:radio[name="q1"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q1') == '3')	$('input:radio[name="q1"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('q1') == '4')	$('input:radio[name="q1"]').filter('[value="4"]').attr('checked',true);
		if (localStorage.getItem('q1') == '5')	$('input:radio[name="q1"]').filter('[value="5"]').attr('checked',true);
	}
	if (localStorage.getItem('q2') != '') {
		if (localStorage.getItem('q2') == '1')	$('input:radio[name="q2"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('q2') == '2')	$('input:radio[name="q2"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q2') == '3')	$('input:radio[name="q2"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('q2') == '4')	$('input:radio[name="q2"]').filter('[value="4"]').attr('checked',true);
		if (localStorage.getItem('q2') == '5')	$('input:radio[name="q2"]').filter('[value="5"]').attr('checked',true);
	}
	if (localStorage.getItem('q3') != '') {
		if (localStorage.getItem('q3') == '1')	$('input:radio[name="q3"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('q3') == '2')	$('input:radio[name="q3"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q3') == '3')	$('input:radio[name="q3"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('q3') == '4')	$('input:radio[name="q3"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('q4') != '') {
		if (localStorage.getItem('q4') == '1')	$('input:radio[name="q4"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('q4') == '2')	$('input:radio[name="q4"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q4') == '3')	$('input:radio[name="q4"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('q4') == '4')	$('input:radio[name="q4"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('q5') != '') {
		if (localStorage.getItem('q5') == '1')	$('input:radio[name="q5"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('q5') == '2')	$('input:radio[name="q5"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q5') == '3')	$('input:radio[name="q5"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('q5') == '4')	$('input:radio[name="q5"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('q6') != '') {
		if (localStorage.getItem('q6') == '1')	$('input:radio[name="q6"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('q6') == '2')	$('input:radio[name="q6"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q6') == '3')	$('input:radio[name="q6"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('q6') == '4')	$('input:radio[name="q6"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('q7') != '') {
		if (localStorage.getItem('q7') == '1')	$('input:radio[name="q7"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('q7') == '2')	$('input:radio[name="q7"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q7') == '3')	$('input:radio[name="q7"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('q7') == '4')	$('input:radio[name="q7"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('q8') != '') {
		if (localStorage.getItem('q8') == '1')	$('input:radio[name="q8"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('q8') == '2')	$('input:radio[name="q8"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q8') == '3')	$('input:radio[name="q8"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('q8') == '4')	$('input:radio[name="q8"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('q9') != '') {
		if (localStorage.getItem('q9') == '1')	$('input:radio[name="q9"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('q9') == '2')	$('input:radio[name="q9"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q9') == '3')	$('input:radio[name="q9"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('q9') == '4')	$('input:radio[name="q9"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('q10') != '') {
		if (localStorage.getItem('q10') == '2')	$('input:radio[name="q10"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q10') == '3')	$('input:radio[name="q10"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('q10') == '4')	$('input:radio[name="q10"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('q11') != '') {
		if (localStorage.getItem('q11') == '1')	$('input:radio[name="q11"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('q11') == '2')	$('input:radio[name="q11"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q11') == '3')	$('input:radio[name="q11"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('q11') == '4')	$('input:radio[name="q11"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('q12') != '') {
		if (localStorage.getItem('q12') == '1')	$('input:radio[name="q12"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('q12') == '2')	$('input:radio[name="q12"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q12') == '3')	$('input:radio[name="q12"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('q12') == '4')	$('input:radio[name="q12"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('q13') != '') {
		if (localStorage.getItem('q13') == '1')	$('input:radio[name="q13"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('q13') == '2')	$('input:radio[name="q13"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q13') == '3')	$('input:radio[name="q13"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('q13') == '4')	$('input:radio[name="q13"]').filter('[value="4"]').attr('checked',true);
		if (localStorage.getItem('q13') == '5')	$('input:radio[name="q13"]').filter('[value="5"]').attr('checked',true);
	}
	if (localStorage.getItem('q14') != '') {
		if (localStorage.getItem('q14') == '0')	$('input:radio[name="q14"]').filter('[value="0"]').attr('checked',true);
		if (localStorage.getItem('q14') == '2')	$('input:radio[name="q14"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q14') == '4')	$('input:radio[name="q14"]').filter('[value="4"]').attr('checked',true);
		if (localStorage.getItem('q14') == '6')	$('input:radio[name="q14"]').filter('[value="6"]').attr('checked',true);
	}
	if (localStorage.getItem('q15') != '') {
		if (localStorage.getItem('q15') == '0')	$('input:radio[name="q15"]').filter('[value="0"]').attr('checked',true);
		if (localStorage.getItem('q15') == '2')	$('input:radio[name="q15"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q15') == '3')	$('input:radio[name="q15"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('q15') == '5')	$('input:radio[name="q15"]').filter('[value="5"]').attr('checked',true);
	}
	if (localStorage.getItem('q16') != '') {
		if (localStorage.getItem('q16') == '1')	$('input:radio[name="q16"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('q16') == '2')	$('input:radio[name="q16"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q16') == '3')	$('input:radio[name="q16"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('q16') == '4')	$('input:radio[name="q16"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('q17') != '') {
		if (localStorage.getItem('q17') == '1')	$('input:radio[name="q17"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('q17') == '2')	$('input:radio[name="q17"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q17') == '3')	$('input:radio[name="q17"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('q17') == '4')	$('input:radio[name="q17"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('q18') != '') {
		if (localStorage.getItem('q18') == '1')	$('input:radio[name="q18"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('q18') == '2')	$('input:radio[name="q18"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q18') == '3')	$('input:radio[name="q18"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('q18') == '4')	$('input:radio[name="q18"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('q19') != '') {
		if (localStorage.getItem('q19') == '1')	$('input:radio[name="q19"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('q19') == '2')	$('input:radio[name="q19"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q19') == '3')	$('input:radio[name="q19"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('q19') == '4')	$('input:radio[name="q19"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('q20') != '') {
		if (localStorage.getItem('q20') == '1')	$('input:radio[name="q20"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('q20') == '2')	$('input:radio[name="q20"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q20') == '3')	$('input:radio[name="q20"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('q20') == '4')	$('input:radio[name="q20"]').filter('[value="4"]').attr('checked',true);
		if (localStorage.getItem('q20') == '5')	$('input:radio[name="q20"]').filter('[value="5"]').attr('checked',true);
	}
	if (localStorage.getItem('q21') != '') {
		if (localStorage.getItem('q21') == '1')	$('input:radio[name="q21"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('q21') == '2')	$('input:radio[name="q21"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q21') == '3')	$('input:radio[name="q21"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('q21') == '4')	$('input:radio[name="q21"]').filter('[value="4"]').attr('checked',true);
		if (localStorage.getItem('q21') == '5')	$('input:radio[name="q21"]').filter('[value="5"]').attr('checked',true);
	}
	if (localStorage.getItem('q22') != '') {
		if (localStorage.getItem('q22') == '1')	$('input:radio[name="q22"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('q22') == '2')	$('input:radio[name="q22"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q22') == '3')	$('input:radio[name="q22"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('q22') == '4')	$('input:radio[name="q22"]').filter('[value="4"]').attr('checked',true);
		if (localStorage.getItem('q22') == '5')	$('input:radio[name="q22"]').filter('[value="5"]').attr('checked',true);
	}
	if (localStorage.getItem('q23') != '') {
		if (localStorage.getItem('q23') == '0')	$('input:radio[name="q23"]').filter('[value="0"]').attr('checked',true);
		if (localStorage.getItem('q23') == '2')	$('input:radio[name="q23"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q23') == '4')	$('input:radio[name="q23"]').filter('[value="4"]').attr('checked',true);
		if (localStorage.getItem('q23') == '6')	$('input:radio[name="q23"]').filter('[value="6"]').attr('checked',true);
	}
});