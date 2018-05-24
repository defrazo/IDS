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
	if (localStorage.getItem('q4111') != '') {
		if (localStorage.getItem('q4111') == '1')	$('input:radio[name="q4111"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('q4111') == '2')	$('input:radio[name="q4111"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q4111') == '3')	$('input:radio[name="q4111"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('q4111') == '4')	$('input:radio[name="q4111"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('q4112') != '') {
		if (localStorage.getItem('q4112') == '1')	$('input:radio[name="q4112"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('q4112') == '2')	$('input:radio[name="q4112"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q4112') == '3')	$('input:radio[name="q4112"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('q4112') == '4')	$('input:radio[name="q4112"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('q4113') != '') {
		if (localStorage.getItem('q4113') == '1')	$('input:radio[name="q4113"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('q4113') == '2')	$('input:radio[name="q4113"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q4113') == '3')	$('input:radio[name="q4113"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('q4113') == '4')	$('input:radio[name="q4113"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('q4114') != '') {
		if (localStorage.getItem('q4114') == '1')	$('input:radio[name="q4114"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('q4114') == '2')	$('input:radio[name="q4114"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q4114') == '3')	$('input:radio[name="q4114"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('q4114') == '4')	$('input:radio[name="q4114"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('q4115') != '') {
		if (localStorage.getItem('q4115') == '1')	$('input:radio[name="q4115"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('q4115') == '2')	$('input:radio[name="q4115"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q4115') == '3')	$('input:radio[name="q4115"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('q4115') == '4')	$('input:radio[name="q4115"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('q4116') != '') {
		if (localStorage.getItem('q4116') == '1')	$('input:radio[name="q4116"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('q4116') == '2')	$('input:radio[name="q4116"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q4116') == '3')	$('input:radio[name="q4116"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('q4116') == '4')	$('input:radio[name="q4116"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('q4117') != '') {
		if (localStorage.getItem('q4117') == '1')	$('input:radio[name="q4117"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('q4117') == '2')	$('input:radio[name="q4117"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q4117') == '3')	$('input:radio[name="q4117"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('q4117') == '4')	$('input:radio[name="q4117"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('q4118') != '') {
		if (localStorage.getItem('q4118') == '1')	$('input:radio[name="q4118"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('q4118') == '2')	$('input:radio[name="q4118"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q4118') == '3')	$('input:radio[name="q4118"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('q4118') == '4')	$('input:radio[name="q4118"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('q4119') != '') {
		if (localStorage.getItem('q4119') == '1')	$('input:radio[name="q4119"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('q4119') == '2')	$('input:radio[name="q4119"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q4119') == '3')	$('input:radio[name="q4119"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('q4119') == '4')	$('input:radio[name="q4119"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('q41110') != '') {
		if (localStorage.getItem('q41110') == '2')	$('input:radio[name="q41110"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q41110') == '3')	$('input:radio[name="q41110"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('q41110') == '4')	$('input:radio[name="q41110"]').filter('[value="4"]').attr('checked',true);
		if (localStorage.getItem('q41110') == '4')	$('input:radio[name="q41110"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('q41111') != '') {
		if (localStorage.getItem('q41111') == '1')	$('input:radio[name="q41111"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('q41111') == '2')	$('input:radio[name="q41111"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q41111') == '3')	$('input:radio[name="q41111"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('q41111') == '4')	$('input:radio[name="q41111"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('q41112') != '') {
		if (localStorage.getItem('q41112') == '1')	$('input:radio[name="q41112"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('q41112') == '2')	$('input:radio[name="q41112"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q41112') == '3')	$('input:radio[name="q41112"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('q41112') == '4')	$('input:radio[name="q41112"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('q41113') != '') {
		if (localStorage.getItem('q41113') == '1')	$('input:radio[name="q41113"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('q41113') == '2')	$('input:radio[name="q41113"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q41113') == '3')	$('input:radio[name="q41113"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('q41113') == '4')	$('input:radio[name="q41113"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('q41114') != '') {
		if (localStorage.getItem('q41114') == '0')	$('input:radio[name="q41114"]').filter('[value="0"]').attr('checked',true);
		if (localStorage.getItem('q41114') == '2')	$('input:radio[name="q41114"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q41114') == '4')	$('input:radio[name="q41114"]').filter('[value="4"]').attr('checked',true);
		if (localStorage.getItem('q41114') == '6')	$('input:radio[name="q41114"]').filter('[value="6"]').attr('checked',true);
	}
	if (localStorage.getItem('q41115') != '') {
		if (localStorage.getItem('q41115') == '1')	$('input:radio[name="q41115"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('q41115') == '2')	$('input:radio[name="q41115"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q41115') == '3')	$('input:radio[name="q41115"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('q41115') == '4')	$('input:radio[name="q41115"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('q41116') != '') {
		if (localStorage.getItem('q41116') == '1')	$('input:radio[name="q41116"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('q41116') == '2')	$('input:radio[name="q41116"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('q41116') == '3')	$('input:radio[name="q41116"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('q41116') == '4')	$('input:radio[name="q41116"]').filter('[value="4"]').attr('checked',true);
	}
});