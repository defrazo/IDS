$(document).ready(function() {
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
	if (localStorage.getItem('pulseopinp') != '')	$('#pulseop').val(localStorage.getItem('pulseopinp'));
	if (localStorage.getItem('sistpinp') != '')	$('#sistp').val(localStorage.getItem('sistpinp'));
	if (localStorage.getItem('diapinp') != '')	$('#diap').val(localStorage.getItem('diapinp'));
	if (localStorage.getItem('pulsepinp') != '')	$('#pulsep').val(localStorage.getItem('pulsepinp'));
	if (localStorage.getItem('pulsebbinp') != '')	$('#pulsebb').val(localStorage.getItem('pulsebbinp'));
	if (localStorage.getItem('pulsebainp') != '')	$('#pulseba').val(localStorage.getItem('pulsebainp'));
	if (localStorage.getItem('pulsebaainp') != '')	$('#pulsebaa').val(localStorage.getItem('pulsebaainp'));
	if (localStorage.getItem('facinp') != '')	$('#fac').val(localStorage.getItem('facinp'));
});