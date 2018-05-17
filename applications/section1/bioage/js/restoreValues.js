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
	if (localStorage.getItem('sistinp') != '')	$('#sist').val(localStorage.getItem('sistinp'));
	if (localStorage.getItem('diainp') != '')	$('#dia').val(localStorage.getItem('diainp'));
	if (localStorage.getItem('inhainp') != '')	$('#inha').val(localStorage.getItem('inhainp'));
	if (localStorage.getItem('staticinp') != '')	$('#static').val(localStorage.getItem('staticinp'));
	if (localStorage.getItem('facinp') != '')	$('#fac').val(localStorage.getItem('facinp'));



	if (localStorage.getItem('headinp') != '') {
		if (localStorage.getItem('headinp') == 'yes')	$('input:radio[name="head"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('headinp') == 'no')	$('input:radio[name="head"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('wakeinp') != '') {
		if (localStorage.getItem('wakeinp') == 'yes')	$('input:radio[name="wake"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('wakeinp') == 'no')	$('input:radio[name="wake"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('heartinp') != '') {
		if (localStorage.getItem('heartinp') == 'yes')	$('input:radio[name="heart"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('heartinp') == 'no')	$('input:radio[name="heart"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('visioninp') != '') {
		if (localStorage.getItem('visioninp') == 'yes')	$('input:radio[name="vision"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('visioninp') == 'no')	$('input:radio[name="vision"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('hearinginp') != '') {
		if (localStorage.getItem('hearinginp') == 'yes')	$('input:radio[name="hearing"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('hearinginp') == 'no')	$('input:radio[name="hearing"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('waterinp') != '') {
		if (localStorage.getItem('waterinp') == 'yes')	$('input:radio[name="water"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('waterinp') == 'no')	$('input:radio[name="water"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('seatinp') != '') {
		if (localStorage.getItem('seatinp') == 'yes')	$('input:radio[name="seat"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('seatinp') == 'no')	$('input:radio[name="seat"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('jointinp') != '') {
		if (localStorage.getItem('jointinp') == 'yes')	$('input:radio[name="joint"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('jointinp') == 'no')	$('input:radio[name="joint"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('beachinp') != '') {
		if (localStorage.getItem('beachinp') == 'yes')	$('input:radio[name="beach"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('beachinp') == 'no')	$('input:radio[name="beach"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('weatherinp') != '') {
		if (localStorage.getItem('weatherinp') == 'yes')	$('input:radio[name="weather"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('weatherinp') == 'no')	$('input:radio[name="weather"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('sleepinp') != '') {
		if (localStorage.getItem('sleepinp') == 'yes')	$('input:radio[name="sleep"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('sleepinp') == 'no')	$('input:radio[name="sleep"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('constipinp') != '') {
		if (localStorage.getItem('constipinp') == 'yes')	$('input:radio[name="constip"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('constipinp') == 'no')	$('input:radio[name="constip"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('efficinp') != '') {
		if (localStorage.getItem('efficinp') == 'yes')	$('input:radio[name="effic"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('efficinp') == 'no')	$('input:radio[name="effic"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('liverinp') != '') {
		if (localStorage.getItem('liverinp') == 'yes')	$('input:radio[name="liver"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('liverinp') == 'no')	$('input:radio[name="liver"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('dizziinp') != '') {
		if (localStorage.getItem('dizziinp') == 'yes')	$('input:radio[name="dizzi"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('dizziinp') == 'no')	$('input:radio[name="dizzi"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('focusinp') != '') {
		if (localStorage.getItem('focusinp') == 'yes')	$('input:radio[name="focus"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('focusinp') == 'no')	$('input:radio[name="focus"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('happyinp') != '') {
		if (localStorage.getItem('happyinp') == 'yes')	$('input:radio[name="happy"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('happyinp') == 'no')	$('input:radio[name="happy"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('creepinp') != '') {
		if (localStorage.getItem('creepinp') == 'yes')	$('input:radio[name="creep"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('creepinp') == 'no')	$('input:radio[name="creep"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('forgetinp') != '') {
		if (localStorage.getItem('forgetinp') == 'yes')	$('input:radio[name="forget"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('forgetinp') == 'no')	$('input:radio[name="forget"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('noiseinp') != '') {
		if (localStorage.getItem('noiseinp') == 'yes')	$('input:radio[name="noise"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('noiseinp') == 'no')	$('input:radio[name="noise"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('medicinp') != '') {
		if (localStorage.getItem('medicinp') == 'yes')	$('input:radio[name="medic"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('medicinp') == 'no')	$('input:radio[name="medic"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('swellinp') != '') {
		if (localStorage.getItem('swellinp') == 'yes')	$('input:radio[name="swell"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('swellinp') == 'no')	$('input:radio[name="swell"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('dishinp') != '') {
		if (localStorage.getItem('dishinp') == 'yes')	$('input:radio[name="dish"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('dishinp') == 'no')	$('input:radio[name="dish"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('dyspinp') != '') {
		if (localStorage.getItem('dyspinp') == 'yes')	$('input:radio[name="dysp"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('dyspinp') == 'no')	$('input:radio[name="dysp"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('loinsinp') != '') {
		if (localStorage.getItem('loinsinp') == 'yes')	$('input:radio[name="loins"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('loinsinp') == 'no')	$('input:radio[name="loins"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('mineralinp') != '') {
		if (localStorage.getItem('mineralinp') == 'yes')	$('input:radio[name="mineral"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('mineralinp') == 'no')	$('input:radio[name="mineral"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('tasteinp') != '') {
		if (localStorage.getItem('tasteinp') == 'yes')	$('input:radio[name="taste"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('tasteinp') == 'no')	$('input:radio[name="taste"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('cryinp') != '') {
		if (localStorage.getItem('cryinp') == 'yes')	$('input:radio[name="cry"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('cryinp') == 'no')	$('input:radio[name="cry"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('stateinp') != '') {
		if (localStorage.getItem('stateinp') == 'good')	$('input:radio[name="state"]').filter('[value="good"]').attr('checked',true);
		if (localStorage.getItem('stateinp') == 'passably')	$('input:radio[name="state"]').filter('[value="passably"]').attr('checked',true);
		if (localStorage.getItem('stateinp') == 'bad')	$('input:radio[name="state"]').filter('[value="bad"]').attr('checked',true);
		if (localStorage.getItem('stateinp') == 'badly')	$('input:radio[name="state"]').filter('[value="badly"]').attr('checked',true);
	}
});