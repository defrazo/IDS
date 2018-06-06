$(document).ready(function() {
	if (localStorage.getItem('dateinp') != '')	$('#date').val(localStorage.getItem('dateinp'));
	if (localStorage.getItem('genderinp') != '') {
		if (localStorage.getItem('genderinp') == 'Мужской')	$('input:radio[name="gender"]').filter('[value="Мужской"]').attr('checked',true);
		if (localStorage.getItem('genderinp') == 'Женский')	$('input:radio[name="gender"]').filter('[value="Женский"]').attr('checked',true);
	}
	if (localStorage.getItem('snameinp') != '')	$('#sname').val(localStorage.getItem('snameinp'));
	if (localStorage.getItem('fnameinp') != '')	$('#fname').val(localStorage.getItem('fnameinp'));
	if (localStorage.getItem('mnameinp') != '')	$('#mname').val(localStorage.getItem('mnameinp'));
	if (localStorage.getItem('lunginp') != '')	$('#lung').val(localStorage.getItem('lunginp'));
	if (localStorage.getItem('chestinp') != '')	$('#chest').val(localStorage.getItem('chestinp'));
	if (localStorage.getItem('chestmaxinp') != '')	$('#chestmax').val(localStorage.getItem('chestmaxinp'));
	if (localStorage.getItem('chestmininp') != '')	$('#chestmin').val(localStorage.getItem('chestmininp'));
	if (localStorage.getItem('pulseinp') != '')	$('#pulse').val(localStorage.getItem('pulseinp'));
	if (localStorage.getItem('holdinp') != '')	$('#hold').val(localStorage.getItem('holdinp'));
	if (localStorage.getItem('facinp') != '')	$('#fac').val(localStorage.getItem('facinp'));
});