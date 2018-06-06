$(document).ready(function() {

	var sname = localStorage.getItem('snameinp'),
		fname = localStorage.getItem('fnameinp'),
		mname = localStorage.getItem('mnameinp'),
		date = localStorage.getItem('dateinp'),
		sist = localStorage.getItem('sistinp'),
		dia = localStorage.getItem('diainp'),
		pulse = localStorage.getItem('pulseinp'),
		stab = localStorage.getItem('stabinp'),
		ortopulseh = localStorage.getItem('ortopulsehinp'),
		ortopulsev = localStorage.getItem('ortopulsevinp'),
		clinopulseh = localStorage.getItem('clinopulsehinp'),
		clinopulsev = localStorage.getItem('clinopulsevinp'),
		gender = localStorage.getItem('genderinp'),
		fac = localStorage.getItem('facinp');
	
	switch (true) {
			case (stab >= 15) : var romberg = 'Хорошо'; break;
			case (stab <= 14) : var romberg = 'Плохо'; break;
		}

	var cerdo = ((1 - dia / pulse) * 100).toFixed();

	switch (true) {
			case ((cerdo <= -10) && (cerdo <= 10)) : var cerdostatus = '(Норма)'; break;
			case ((cerdo >= -11) && (cerdo >= 11)) : var cerdostatus = '(Плохо)'; break;
		}

	var orto = Math.abs((ortopulseh - ortopulsev)).toFixed();

	switch (true) {
			case ((orto >= 0) && (orto <= 12)) : var ortostatus = 'Отлично'; break;
			case ((orto >= 13) && (orto <= 18)) : var ortostatus = 'Хорошо'; break;
			case ((orto >= 19) && (orto <= 24)) : var ortostatus = 'Удовлетворительно'; break;
			case (orto >= 25) : var ortostatus = 'Плохо'; break;
		}

	var clino = Math.abs((clinopulsev - clinopulseh)).toFixed();
	
	var clinopercent = ((clinopulsev / 100) * clino).toFixed(1);

	switch (true) {
			case (clinopercent <= 6.1) : var clinostatus = 'Нормальная возбудимость (слабая)'; break;
			case ((clinopercent >= 6.1) && (clinopercent <= 12.3)) : var clinostatus = 'Нормальная возбудимость (средняя)'; break;
			case ((clinopercent >= 12.4) && (clinopercent <= 18.5)) : var clinostatus = 'Нормальная возбудимость (живая)'; break;
			case ((clinopercent >= 18.6) && (clinopercent <= 24.6)) : var clinostatus = 'Повышенная возбудимость (слабая)'; break;
			case ((clinopercent >= 24.7) && (clinopercent <= 30.8)) : var clinostatus = 'Повышенная возбудимость (заметная)'; break;
			case ((clinopercent >= 30.9) && (clinopercent <= 37.0)) : var clinostatus = 'Повышенная возбудимость (значительная)'; break;
			case ((clinopercent >= 37.1) && (clinopercent <= 43.1)) : var clinostatus = 'Повышенная возбудимость (резкая)'; break;
			case (clinopercent >= 43.2) : var clinostatus = 'Повышенная возбудимость (Очень резкая)'; break;
		}

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#cerdo').append(cerdo).append('% ' + cerdostatus);
	$('#romberg').append(romberg);
	$('#orto').append(ortostatus);
	$('#clino').append(clinostatus);
	$('#gender').append(gender);
	$('#fac').append(fac);
});