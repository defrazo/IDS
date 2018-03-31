$(document).ready(function() { //Восстанавливает значения полей
	if (localStorage.getItem('dateinp') != '')	$('#date').val(localStorage.getItem('dateinp'));
	if (localStorage.getItem('genderinp') != '') {
		if (localStorage.getItem('genderinp') == 'Мужской')	$('input:radio[name="gender"]').filter('[value="Мужской"]').attr('checked',true);
		if (localStorage.getItem('genderinp') == 'Женский')	$('input:radio[name="gender"]').filter('[value="Женский"]').attr('checked',true);
	}
	if (localStorage.getItem('groupinp') != '') {
			if (localStorage.getItem('groupinp') == 'Основная')	$('input:radio[name="group"]').filter('[value="Основная"]').attr('checked',true);
			if (localStorage.getItem('groupinp') == 'Специальная')	$('input:radio[name="group"]').filter('[value="Специальная"]').attr('checked',true);
		}
	if (localStorage.getItem('recoveryinp') != '') {
			if (localStorage.getItem('recoveryinp') == 'Бег')	$('input:radio[name="recovery"]').filter('[value="Бег"]').attr('checked',true);
			if (localStorage.getItem('recoveryinp') == 'ЧСС')	$('input:radio[name="recovery"]').filter('[value="ЧСС"]').attr('checked',true);
		}
	if (localStorage.getItem('exerciseinp') != '') {
			if (localStorage.getItem('exerciseinp') == 'push')	$('input:radio[name="exercise"]').filter('[value="push"]').attr('checked',true);
			if (localStorage.getItem('exerciseinp') == 'pull')	$('input:radio[name="exercise"]').filter('[value="pull"]').attr('checked',true);
		}
	if (localStorage.getItem('snameinp') != '')	$('#sname').val(localStorage.getItem('snameinp'));
	if (localStorage.getItem('fnameinp') != '')	$('#fname').val(localStorage.getItem('fnameinp'));
	if (localStorage.getItem('mnameinp') != '')	$('#mname').val(localStorage.getItem('mnameinp'));
	if (localStorage.getItem('coldinp') != '')	$('#cold').val(localStorage.getItem('coldinp'));
	if (localStorage.getItem('weightinp') != '')	$('#weight').val(localStorage.getItem('weightinp'));
	if (localStorage.getItem('heightinp') != '')	$('#height').val(localStorage.getItem('heightinp'));
	if (localStorage.getItem('pulseinp') != '')	$('#pulse').val(localStorage.getItem('pulseinp'));
	if (localStorage.getItem('sistinp') != '')	$('#sist').val(localStorage.getItem('sistinp'));
	if (localStorage.getItem('diainp') != '')	$('#dia').val(localStorage.getItem('diainp'));
	if (localStorage.getItem('rec1inp') != '')	$('#rec1').val(localStorage.getItem('rec1inp'));
	if (localStorage.getItem('rec2inp') != '')	$('#rec2').val(localStorage.getItem('rec2inp'));
	if (localStorage.getItem('exercvalinp') != '')	$('#exercval').val(localStorage.getItem('exercvalinp'));
	if (localStorage.getItem('liftinp') != '')	$('#lift').val(localStorage.getItem('liftinp'));
	if (localStorage.getItem('jumpinp') != '')	$('#jump').val(localStorage.getItem('jumpinp'));
	if (localStorage.getItem('lunginp') != '')	$('#lung').val(localStorage.getItem('lunginp'));
	if (localStorage.getItem('traininginp') != '')	$('#training').val(localStorage.getItem('traininginp'));
});