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
	if (localStorage.getItem('ac1inp') != '') {
		if (localStorage.getItem('ac1inp') == '2')	$('input:radio[name="ac1"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('ac1inp') == '1')	$('input:radio[name="ac1"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ac1inp') == '0')	$('input:radio[name="ac1"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ac2inp') != '') {
		if (localStorage.getItem('ac2inp') == '2')	$('input:radio[name="ac2"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('ac2inp') == '1')	$('input:radio[name="ac2"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ac2inp') == '0')	$('input:radio[name="ac2"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ac3inp') != '') {
		if (localStorage.getItem('ac3inp') == '2')	$('input:radio[name="ac3"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('ac3inp') == '1')	$('input:radio[name="ac3"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ac3inp') == '0')	$('input:radio[name="ac3"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ac4inp') != '') {
		if (localStorage.getItem('ac4inp') == '2')	$('input:radio[name="ac4"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('ac4inp') == '1')	$('input:radio[name="ac4"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ac4inp') == '0')	$('input:radio[name="ac4"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ac5inp') != '') {
		if (localStorage.getItem('ac5inp') == '2')	$('input:radio[name="ac5"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('ac5inp') == '1')	$('input:radio[name="ac5"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ac5inp') == '0')	$('input:radio[name="ac5"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ac6inp') != '') {
		if (localStorage.getItem('ac6inp') == '2')	$('input:radio[name="ac6"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('ac6inp') == '1')	$('input:radio[name="ac6"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ac6inp') == '0')	$('input:radio[name="ac6"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ac7inp') != '') {
		if (localStorage.getItem('ac7inp') == '2')	$('input:radio[name="ac7"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('ac7inp') == '1')	$('input:radio[name="ac7"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ac7inp') == '0')	$('input:radio[name="ac7"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ac8inp') != '') {
		if (localStorage.getItem('ac8inp') == '2')	$('input:radio[name="ac8"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('ac8inp') == '1')	$('input:radio[name="ac8"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ac8inp') == '0')	$('input:radio[name="ac8"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ac9inp') != '') {
		if (localStorage.getItem('ac9inp') == '2')	$('input:radio[name="ac9"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('ac9inp') == '1')	$('input:radio[name="ac9"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ac9inp') == '0')	$('input:radio[name="ac9"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ac10inp') != '') {
		if (localStorage.getItem('ac10inp') == '2')	$('input:radio[name="ac10"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('ac10inp') == '1')	$('input:radio[name="ac10"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ac10inp') == '0')	$('input:radio[name="ac10"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ac11inp') != '') {
		if (localStorage.getItem('ac11inp') == '2')	$('input:radio[name="ac11"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('ac11inp') == '1')	$('input:radio[name="ac11"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ac11inp') == '0')	$('input:radio[name="ac11"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ac12inp') != '') {
		if (localStorage.getItem('ac12inp') == '2')	$('input:radio[name="ac12"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('ac12inp') == '1')	$('input:radio[name="ac12"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ac12inp') == '0')	$('input:radio[name="ac12"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ac13inp') != '') {
		if (localStorage.getItem('ac13inp') == '2')	$('input:radio[name="ac13"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('ac13inp') == '1')	$('input:radio[name="ac13"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ac13inp') == '0')	$('input:radio[name="ac13"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ac14inp') != '') {
		if (localStorage.getItem('ac14inp') == '2')	$('input:radio[name="ac14"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('ac14inp') == '1')	$('input:radio[name="ac14"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ac14inp') == '0')	$('input:radio[name="ac14"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ac15inp') != '') {
		if (localStorage.getItem('ac15inp') == '2')	$('input:radio[name="ac15"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('ac15inp') == '1')	$('input:radio[name="ac15"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ac15inp') == '0')	$('input:radio[name="ac15"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ac16inp') != '') {
		if (localStorage.getItem('ac16inp') == '2')	$('input:radio[name="ac16"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('ac16inp') == '1')	$('input:radio[name="ac16"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ac16inp') == '0')	$('input:radio[name="ac16"]').filter('[value="0"]').attr('checked',true);
	}
});