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
	if (localStorage.getItem('twelvewalkinp') != '')	$('#twelvewalk').val(localStorage.getItem('twelvewalkinp'));
	if (localStorage.getItem('twelveswiminp') != '')	$('#twelveswim').val(localStorage.getItem('twelveswiminp'));
	if (localStorage.getItem('twelverideinp') != '')	$('#twelveride').val(localStorage.getItem('twelverideinp'));
	if (localStorage.getItem('run1inp') != '')	$('#run1').val(localStorage.getItem('run1inp'));
	if (localStorage.getItem('run2inp') != '')	$('#run2').val(localStorage.getItem('run2inp'));
	if (localStorage.getItem('walk1inp') != '')	$('#walk1').val(localStorage.getItem('walk1inp'));
	if (localStorage.getItem('walk2inp') != '')	$('#walk2').val(localStorage.getItem('walk2inp'));
	if (localStorage.getItem('facinp') != '')	$('#fac').val(localStorage.getItem('facinp'));
});