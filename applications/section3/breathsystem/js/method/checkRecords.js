$(document).ready(function() { //Проверка ввода фамилии 
	$('#sname').focusout(function() { //Проверяет значение поля при снятии фокуса с него
		var sname = $('#sname').val();
		
		if (sname != '')	{
		
			if (isValidSname(sname)) { //Убирает класс ошибки с поля ввода
				$('#sname').css('border', '1px solid #0dd01a');
				localStorage.setItem('vSname', 1);
			} else { //Добавляет класс ошибки к полю ввода
				$('#sname').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0)); //Удаляет строку
			} 
		}
		
		$('#sname').keyup(function() { //Убирает пробелы и прочие символы
			$(this).val($(this).val().trim());
		});
	});

function isValidSname(valsname) { //Проверяет соответствие значения поля типу данных
	var pattern = new RegExp(/^[А-Я]{1}[а-я]+$/); 
	return pattern.test(valsname);
}

$(document).ready(function() { //Проверка ввода имени
	$('#fname').focusout(function() {
		var fname = $('#fname').val();
		
		if (fname != '')	{
			
			if (isValidFname(fname)) {
				$('#fname').css('border', '1px solid #0dd01a');
				localStorage.setItem('vFname', 1);
			} else {
				$('#fname').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#fname').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
});

function isValidFname(valfname) {
	var pattern = new RegExp(/^[А-Я]{1}[а-я]+$/); 
	return pattern.test(valfname);
}

$(document).ready(function() { //Проверка ввода отчества
	$('#mname').focusout(function() {
		var mname = $('#mname').val();
		
		if (mname != '')	{
			
			if (isValidMname(mname)) {
				$('#mname').css('border', '1px solid #0dd01a');
				localStorage.setItem('vMname', 1);
			} else {
				$('#mname').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));	
			}
		}
		
		$('#mname').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
});

function isValidMname(valmname) {
	var pattern = new RegExp(/^[А-Я]{1}[а-я]+$/); 
	return pattern.test(valmname);
}

$(document).ready(function() { 
	$('#lung').focusout(function() {
		var lung = $('#lung').val();
		
		if (($(this).val() < 1000) || ($(this).val() > 8000)) $(this).val($(this).val().substr(0, 0));

		if (lung != '') {
			if (isValidLung(lung)) {
				$('#lung').css('border', '1px solid #0dd01a');
				localStorage.setItem('vlung', 1);
			} else {
				$('#lung').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#lung').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#lung').keyup(function() {
		if ($(this).val().length > 4) $(this).val($(this).val().substr(0, 4));         
	});
});

function isValidLung(vallung) {
	if ($('#lung').val().length == 4) {
		var pattern = new RegExp(/[0-9][0-9][0-9][0-9]/);
		return pattern.test(vallung);
	}
}

$(document).ready(function() { //Проверка ввода веса 
	$('#chest').focusout(function() {
		var chest = $('#chest').val();
		
		if (($(this).val() < 50) || ($(this).val() > 230)) $(this).val($(this).val().substr(0, 0));

		if (chest != '') {
			
			if (isValidChest(chest)) {
				$('#chest').css('border', '1px solid #0dd01a');
				localStorage.setItem('vchest', 1);
			} else {
				$('#chest').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#chest').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#chest').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidChest(valchest) {
	if ($('#chest').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valchest);
	}

	if ($('#chest').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valchest);
	}
}

$(document).ready(function() { //Проверка ввода веса 
	$('#chestmax').focusout(function() {
		var chestmax = $('#chestmax').val();
		
		if (($(this).val() < 50) || ($(this).val() > 230)) $(this).val($(this).val().substr(0, 0));

		if (chestmax != '') {
			
			if (isValidChestmax(chestmax)) {
				$('#chestmax').css('border', '1px solid #0dd01a');
				localStorage.setItem('vchestmax', 1);
			} else {
				$('#chestmax').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#chestmax').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#chestmax').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidChestmax(valchestmax) {
	if ($('#chestmax').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valchestmax);
	}

	if ($('#chestmax').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valchestmax);
	}
}

$(document).ready(function() { //Проверка ввода веса 
	$('#chestmin').focusout(function() {
		var chestmin = $('#chestmin').val();
		
		if (($(this).val() < 50) || ($(this).val() > 230)) $(this).val($(this).val().substr(0, 0));

		if (chestmin != '') {
			
			if (isValidChestmin(chestmin)) {
				$('#chestmin').css('border', '1px solid #0dd01a');
				localStorage.setItem('vchestmin', 1);
			} else {
				$('#chestmin').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#chestmin').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#chestmin').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidChestmin(valchestmin) {
	if ($('#chestmin').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valchestmin);
	}

	if ($('#chestmin').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valchestmin);
	}
}

$(document).ready(function() {
	$('#pulse').focusout(function() {
		var pulse = $('#pulse').val();
		
		if (($(this).val() < 30) || ($(this).val() > 130)) $(this).val($(this).val().substr(0, 0));

		if (pulse != '') {
			
			if (isValidPulse(pulse)) {
				$('#pulse').css('border', '1px solid #0dd01a');
				localStorage.setItem('vpulse', 1);
			} else {
				$('#pulse').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#pulse').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#pulse').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidPulse(valpulse) {
	if ($('#pulse').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valpulse);
	}

	if ($('#pulse').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valpulse);
	}
}

$(document).ready(function() {
	$('#hold').focusout(function() {
		var hold = $('#hold').val();
		
		if (($(this).val() < 30) || ($(this).val() > 130)) $(this).val($(this).val().substr(0, 0));

		if (hold != '') {
			
			if (isValidHold(hold)) {
				$('#hold').css('border', '1px solid #0dd01a');
				localStorage.setItem('vhold', 1);
			} else {
				$('#hold').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#hold').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#hold').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidHold(valhold) {
	if ($('#hold').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valhold);
	}

	if ($('#hold').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valhold);
	}
}

$(document).on('click focuson focusout mousemove', function() { //Подсветка правильности
	var mname = $('#mname').val();
	var fname = $('#fname').val();
	var sname = $('#sname').val();
	var lung = $('#lung').val();
	var chest = $('#chest').val();
	var chestmax = $('#chestmax').val();
	var chestmin = $('#chestmin').val();
	var pulse = $('#pulse').val();
	var hold = $('#hold').val();
		
	if (isValidSname(sname)) $('#sname').css('border', '1px solid #0dd01a');	

	if (isValidFname(fname)) $('#fname').css('border', '1px solid #0dd01a');	

	if (isValidMname(mname)) $('#mname').css('border', '1px solid #0dd01a');

	if (isValidLung(lung)) $('#lung').css('border', '1px solid #0dd01a');

	if (isValidChest(chest)) $('#chest').css('border', '1px solid #0dd01a');

	if (isValidChestmax(chestmax)) $('#chestmax').css('border', '1px solid #0dd01a');

	if (isValidChestmin(chestmin)) $('#chestmin').css('border', '1px solid #0dd01a');

	if (isValidPulse(pulse)) $('#pulse').css('border', '1px solid #0dd01a');

	if (isValidHold(hold)) $('#hold').css('border', '1px solid #0dd01a');			
});
});