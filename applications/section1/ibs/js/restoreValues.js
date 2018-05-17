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
		if (localStorage.getItem('q1') == '8')	$('input:radio[name="q1"]').filter('[value="8"]').attr('checked',true);
		if (localStorage.getItem('q1') == '0')	$('input:radio[name="q1"]').filter('[value="0"]').attr('checked',true);
		if (localStorage.getItem('q1') == '4')	$('input:radio[name="q1"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('q2') != '') {
		if (localStorage.getItem('q2') == '0')	$('input:radio[name="q2"]').filter('[value="0"]').attr('checked',true);
		if (localStorage.getItem('q2') == '1')	$('input:radio[name="q2"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('q2') == '3')	$('input:radio[name="q2"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('q2') == '8')	$('input:radio[name="q2"]').filter('[value="8"]').attr('checked',true);
	}
	if (localStorage.getItem('q3') != '') {
		if (localStorage.getItem('q3') == '0')	$('input:radio[name="q3"]').filter('[value="0"]').attr('checked',true);
		if (localStorage.getItem('q3') == '2')	$('input:radio[name="q3"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q3') == '4')	$('input:radio[name="q3"]').filter('[value="4"]').attr('checked',true);
		if (localStorage.getItem('q3') == '5')	$('input:radio[name="q3"]').filter('[value="5"]').attr('checked',true);
	}
	if (localStorage.getItem('q4') != '') {
		if (localStorage.getItem('q4') == '1')	$('input:radio[name="q4"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('q4') == '3')	$('input:radio[name="q4"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('q4') == '7')	$('input:radio[name="q4"]').filter('[value="7"]').attr('checked',true);
	}
	if (localStorage.getItem('q5') != '') {
		if (localStorage.getItem('q5') == '0')	$('input:radio[name="q5"]').filter('[value="0"]').attr('checked',true);
		if (localStorage.getItem('q5') == '2')	$('input:radio[name="q5"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q5') == '4')	$('input:radio[name="q5"]').filter('[value="4"]').attr('checked',true);
		if (localStorage.getItem('q5') == '5')	$('input:radio[name="q5"]').filter('[value="5"]').attr('checked',true);
		if (localStorage.getItem('q5') == '8')	$('input:radio[name="q5"]').filter('[value="8"]').attr('checked',true);
	}
	if (localStorage.getItem('q6') != '') {
		if (localStorage.getItem('q6') == '1')	$('input:radio[name="q6"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('q6') == '2')	$('input:radio[name="q6"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q6') == '4')	$('input:radio[name="q6"]').filter('[value="4"]').attr('checked',true);
		if (localStorage.getItem('q6') == '8')	$('input:radio[name="q6"]').filter('[value="8"]').attr('checked',true);
	}
});