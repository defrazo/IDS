$(document).ready(function() {

	var sname = localStorage.getItem('snameinp'),
		fname = localStorage.getItem('fnameinp'),
		mname = localStorage.getItem('mnameinp'),
		date = localStorage.getItem('dateinp'),
		lung = localStorage.getItem('lunginp'),
		chest = localStorage.getItem('chestinp'),
		chestmax = localStorage.getItem('chestmaxinp'),
		chestmin = localStorage.getItem('chestmininp'),
		pulse = localStorage.getItem('pulseinp'),
		hold = localStorage.getItem('holdinp'),
		gender = localStorage.getItem('genderinp'),
		fac = localStorage.getItem('facinp');
	
	var ekg = ((chestmax - chestmin) / chest * 100).toFixed();

	switch (true) {
		case (ekg >= 15) : var ekgstatus = '(Отлично)'; break;
		case ((ekg >= 12) && (ekg <= 14)) : var ekgstatus = '(Хорошо)'; break;
		case ((ekg >= 9) && (ekg <= 11)) : var ekgstatus = '(Удовлетворительно)'; break;
		case ((ekg >= 6) && (ekg <= 8)) : var ekgstatus = '(Плохо)'; break;
		case (ekg <= 5) : var ekgstatus = '(Очень плохо)'; break;
	}
	
	switch (true) {
			case (gender == 'Мужской') :
				switch (true) {
					case (hold >= 40) : var holdstatus = '(Отлично)'; break;
					case ((hold >= 21) && (hold <= 39)) : var holdstatus = '(Хорошо)'; break;
					case (hold <= 20) : var holdstatus = '(Плохо)'; break;
				} 
			break;
			case (gender == 'Женский') :
				switch (true) {
					case (hold >= 36) : var holdstatus = '(Отлично)'; break;
					case ((hold >= 21) && (hold <= 35)) : var holdstatus = '(Хорошо)'; break;
					case (hold <= 20) : var holdstatus = '(Плохо)'; break;
				} 
			break;
		}

	switch (true) {
		case (hold >= 50) : var holdshtangstatus = '(Отлично)'; break;
		case ((hold >= 40) && (hold <= 49)) : var holdshtangstatus = '(Хорошо)'; break;
		case (hold <= 39) : var holdshtangstatus = '(Плохо)'; break;
	} 
	
	skib = ((lung * hold) / pulse).toFixed();

	switch (true) {
		case (skib >= 4000) : var skibstatus = '(Отлично)'; break;
		case ((skib >= 2100) && (skib <= 3999)) : var skibstatus = '(Хорошо)'; break;
		case ((skib >= 1100) && (skib <= 2099)) : var skibstatus = '(Удовлетворительно)'; break;
		case ((skib >= 600) && (skib <= 1099)) : var skibstatus = '(Плохо)'; break;
		case (skib <= 599) : var skibstatus = '(Очень плохо)'; break;
	}
	console.log(skib);

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#ekg').append(ekg + '% <br>'+ ekgstatus);
	$('#hold').append(hold + ' сек. <br>' + holdstatus);
	$('#holdshtang').append(hold + ' сек. <br>'+ holdshtangstatus);
	$('#skib').append(skib + ' усл. ед. <br>'+ skibstatus);
	$('#gender').append(gender);
	$('#fac').append(fac);
});