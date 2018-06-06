$(document).ready(function() { //Восстанавливает значения полей
	if (localStorage.getItem('dateinp') != '')	$('#date').val(localStorage.getItem('dateinp'));
	if (localStorage.getItem('genderinp') != '') {
		if (localStorage.getItem('genderinp') == 'Мужской')	$('input:radio[name="gender"]').filter('[value="Мужской"]').attr('checked',true);
		if (localStorage.getItem('genderinp') == 'Женский')	$('input:radio[name="gender"]').filter('[value="Женский"]').attr('checked',true);
	}
	if (localStorage.getItem('snameinp') != '')	$('#sname').val(localStorage.getItem('snameinp'));
	if (localStorage.getItem('fnameinp') != '')	$('#fname').val(localStorage.getItem('fnameinp'));
	if (localStorage.getItem('mnameinp') != '')	$('#mname').val(localStorage.getItem('mnameinp'));
	if (localStorage.getItem('sistinp') != '')	$('#sist').val(localStorage.getItem('sistinp'));
	if (localStorage.getItem('diainp') != '')	$('#dia').val(localStorage.getItem('diainp'));
	if (localStorage.getItem('pulseinp') != '')	$('#pulse').val(localStorage.getItem('pulseinp'));
	if (localStorage.getItem('ortopulsehinp') != '')	$('#ortopulseh').val(localStorage.getItem('ortopulsehinp'));
	if (localStorage.getItem('ortopulsevinp') != '')	$('#ortopulsev').val(localStorage.getItem('ortopulsevinp'));
	if (localStorage.getItem('clinopulsehinp') != '')	$('#clinopulseh').val(localStorage.getItem('clinopulsehinp'));
	if (localStorage.getItem('clinopulsevinp') != '')	$('#clinopulsev').val(localStorage.getItem('clinopulsevinp'));
	if (localStorage.getItem('stabinp') != '')	$('#stab').val(localStorage.getItem('stabinp'));
	if (localStorage.getItem('facinp') != '')	$('#fac').val(localStorage.getItem('facinp'));
});