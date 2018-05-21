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
	if (localStorage.getItem('weightinp') != '')	$('#weight').val(localStorage.getItem('weightinp'));
	if (localStorage.getItem('heightinp') != '')	$('#height').val(localStorage.getItem('heightinp'));
	if (localStorage.getItem('heightsitinp') != '')	$('#heightsit').val(localStorage.getItem('heightsitinp'));
	if (localStorage.getItem('heightmotherinp') != '')	$('#heightmother').val(localStorage.getItem('heightmotherinp'));
	if (localStorage.getItem('heightfatherinp') != '')	$('#heightfather').val(localStorage.getItem('heightfatherinp'));
	if (localStorage.getItem('lunginp') != '')	$('#lung').val(localStorage.getItem('lunginp'));
	if (localStorage.getItem('dynaminp') != '')	$('#dynam').val(localStorage.getItem('dynaminp'));
	if (localStorage.getItem('chestinp') != '')	$('#chest').val(localStorage.getItem('chestinp'));
	if (localStorage.getItem('waistinp') != '')	$('#waist').val(localStorage.getItem('waistinp'));
	if (localStorage.getItem('shouldersinp') != '')	$('#shoulders').val(localStorage.getItem('shouldersinp'));
	if (localStorage.getItem('legsinp') != '')	$('#legs').val(localStorage.getItem('legsinp'));
	if (localStorage.getItem('facinp') != '')	$('#fac').val(localStorage.getItem('facinp'));
});