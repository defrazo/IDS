$(document).ready(function() {
	var	sname = localStorage.getItem('snameinp'),
		fname = localStorage.getItem('fnameinp'),
		mname = localStorage.getItem('mnameinp'),
		date = localStorage.getItem('dateinp'),
		sist = localStorage.getItem('sistinp'),
		dia = localStorage.getItem('diainp'),
		pulse = localStorage.getItem('pulseinp'),
		pulseop = localStorage.getItem('pulseopinp'),
		pulsep = localStorage.getItem('pulsepinp'),
		sistp = localStorage.getItem('sistpinp'),
		diap = localStorage.getItem('diapinp'),
		pulsebb = localStorage.getItem('pulsebbinp'),
		pulseba = localStorage.getItem('pulsebainp'),
		pulsebaa = localStorage.getItem('pulsebaainp'),
		gender = localStorage.getItem('genderinp'),
		fac = localStorage.getItem('facinp');

	var adp = sist - dia;

	var kek = adp * pulse;

	switch (true) {
		case (kek <= 2600) : var kekstatus = '(Отличное состояние)'; break;
		case (kek >= 2601 && kek <= 3000) : var kekstatus = '(Нормальное состояние)'; break;
		case (kek >= 3001) : var kekstatus = '(Утомление организма)'; break;
	}

	var endur = ((pulse * 10) / adp).toFixed();

	switch (true) {
		case (endur >= 17.01) : var endurstatus = '(Ослабленная деятельность ССС)'; break;
		case (endur >= 15 && endur <= 17) : var endurstatus = '(Нормальная деятельность ССС)'; break;
		case (endur <= 14.99) : var endurstatus = '(Усиленная деятельность ССС)'; break;
	}

	var pdp = (pulse * 100 / sist).toFixed();

	switch (true) {
		case (pdp <= 75) : var pdpstatus = '(Выше среднего)'; break;
		case (pdp >= 76 && pdp <= 89) : var pdpstatus = '(Среднее состояние)'; break;
		case (pdp >= 90) : var pdpstatus = '(Ниже среднего)'; break;
	}

	var robin = (pulse * sist / 100).toFixed();

	switch (true) {
		case (robin <= 75) : var robinstatus = '(Выше среднего)'; break;
		case (robin >= 76 && robin <= 89) : var robinstatus = '(Среднее состояние)'; break;
		case (robin >= 90) : var robinstatus = '(Ниже среднего)'; break;
	}

	var onestage = Math.abs((pulse - pulseop)).toFixed();
	var onestagepercent = ((pulse / 100) * onestage).toFixed(1);


	switch (true) {
		case (onestagepercent <= 20) : var onestagestatus = 'Отлично'; break;
		case (onestagepercent >= 21 && onestagepercent <= 40) : var onestagestatus = 'Хорошо'; break;
		case (onestagepercent >= 41 && onestagepercent <= 65) : var onestagestatus = 'Удовлетворительно'; break;
		case (onestagepercent >= 66 && onestagepercent <= 75) : var onestagestatus = 'Плохо'; break;
		case (onestagepercent >= 76) : var onestagestatus = 'Очень плохо'; break;
	}

	var adpp = sistp - diap;
	
	var bobs = ((adpp - adp) / (pulsep - pulse)).toFixed(1);

	var belg = (((parseInt(pulsebb) + parseInt(pulseba) + parseInt(pulsebaa)) / 6 - 33) / 10).toFixed();

	switch (true) {
		case (belg <= 0.3) : var belgstatus = 'Отлично'; break;
		case (belg >= 0.31 && belg <= 0.6) : var belgstatus = 'Хорошо'; break;
		case (belg >= 0.61 && belg <= 0.9) : var belgstatus = 'Удовлетворительно'; break;
		case (belg >= 0.91 && belg <= 1.2) : var belgstatus = 'Плохо'; break;
		case (belg >= 1.21) : var belgstatus = 'Очень плохо'; break;
	}

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#kek').append(kek).append(' '+ kekstatus);
	$('#endur').append(endur).append(' '+ endurstatus);
	$('#pdp').append(pdp).append(' '+ pdpstatus);
	$('#robin').append(robin).append(' '+ robinstatus);
	$('#onestage').append(onestagestatus);
	$('#bobs').append(bobs);
	$('#belg').append(belgstatus);
	$('#gender').append(gender);
	$('#fac').append(fac);
});