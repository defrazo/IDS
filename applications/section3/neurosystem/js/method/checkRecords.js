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

$(document).ready(function() { //Проверка ввода систолического давления  
	$('#sist').focusout(function() {
		var sist = $('#sist').val();
		
		if (($(this).val() < 60) || ($(this).val() > 200)) $(this).val($(this).val().substr(0, 0));
		
		if (sist != '') {
			
			if (isValidSist(sist)) {
				$('#sist').css('border', '1px solid #0dd01a');
				localStorage.setItem('vSist', 1);
			} else {
				$('#sist').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#sist').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});  
	
	$('#sist').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));       
	});
});

function isValidSist(valsist) {
	if ($('#sist').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valsist);
	}

	if ($('#sist').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valsist);
	}
}

$(document).ready(function() { //Проверка ввода диастолического давления 
	$('#dia').focusout(function() {
		var dia = $('#dia').val();
		
		if (($(this).val() < 40) || ($(this).val() > 120)) $(this).val($(this).val().substr(0, 0));

		if (dia != '') {
			if (isValidDia(dia)) {
				$('#dia').css('border', '1px solid #0dd01a');
				localStorage.setItem('vDia', 1);
			} else {
				$('#dia').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#dia').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#dia').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));         
	});
});

function isValidDia(valdia) {
	if ($('#dia').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valdia);
	}

	if ($('#dia').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valdia);
	}
}

$(document).ready(function() {
	$('#stab').focusout(function() {
		var stab = $('#stab').val();
		
		if (($(this).val() < 5) || ($(this).val() > 330)) $(this).val($(this).val().substr(0, 0));

		if (stab != '') {
			
			if (isValidStab(stab)) {
				$('#stab').css('border', '1px solid #0dd01a');
				localStorage.setItem('vstab', 1);
			} else {
				$('#stab').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#stab').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#stab').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidStab(valstab) {
	if ($('#stab').val().length == 1) {
		var pattern = new RegExp(/[0-9]/);
		return pattern.test(valstab);
	}

	if ($('#stab').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valstab);
	}

	if ($('#stab').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valstab);
	}
}

$(document).ready(function() {
	$('#ortopulseh').focusout(function() {
		var ortopulseh = $('#ortopulseh').val();
		
		if (($(this).val() < 30) || ($(this).val() > 130)) $(this).val($(this).val().substr(0, 0));

		if (ortopulseh != '') {
			
			if (isValidOrtopulseh(ortopulseh)) {
				$('#ortopulseh').css('border', '1px solid #0dd01a');
				localStorage.setItem('vortopulseh', 1);
			} else {
				$('#ortopulseh').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#ortopulseh').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#ortopulseh').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidOrtopulseh(valortopulseh) {
	if ($('#ortopulseh').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valortopulseh);
	}

	if ($('#ortopulseh').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valortopulseh);
	}
}

$(document).ready(function() {
	$('#ortopulsev').focusout(function() {
		var ortopulsev = $('#ortopulsev').val();
		
		if (($(this).val() < 30) || ($(this).val() > 130)) $(this).val($(this).val().substr(0, 0));

		if (ortopulsev != '') {
			
			if (isValidOrtopulsev(ortopulsev)) {
				$('#ortopulsev').css('border', '1px solid #0dd01a');
				localStorage.setItem('vortopulsev', 1);
			} else {
				$('#ortopulsev').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#ortopulsev').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#ortopulsev').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidOrtopulsev(valortopulsev) {
	if ($('#ortopulsev').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valortopulsev);
	}

	if ($('#ortopulsev').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valortopulsev);
	}
}

$(document).ready(function() {
	$('#clinopulsev').focusout(function() {
		var clinopulsev = $('#clinopulsev').val();
		
		if (($(this).val() < 30) || ($(this).val() > 130)) $(this).val($(this).val().substr(0, 0));

		if (clinopulsev != '') {
			
			if (isValidClinopulsev(clinopulsev)) {
				$('#clinopulsev').css('border', '1px solid #0dd01a');
				localStorage.setItem('vclinopulsev', 1);
			} else {
				$('#clinopulsev').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#clinopulsev').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#clinopulsev').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidClinopulsev(valclinopulsev) {
	if ($('#clinopulsev').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valclinopulsev);
	}

	if ($('#clinopulsev').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valclinopulsev);
	}
}

$(document).ready(function() {
	$('#clinopulseh').focusout(function() {
		var clinopulseh = $('#clinopulseh').val();
		
		if (($(this).val() < 30) || ($(this).val() > 130)) $(this).val($(this).val().substr(0, 0));

		if (clinopulseh != '') {
			
			if (isValidClinopulseh(clinopulseh)) {
				$('#clinopulseh').css('border', '1px solid #0dd01a');
				localStorage.setItem('vclinopulseh', 1);
			} else {
				$('#clinopulseh').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#clinopulseh').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#clinopulseh').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidClinopulseh(valclinopulseh) {
	if ($('#clinopulseh').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valclinopulseh);
	}

	if ($('#clinopulseh').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valclinopulseh);
	}
}

$(document).on('click focuson focusout mousemove', function() { //Подсветка правильности
	var mname = $('#mname').val();
	var fname = $('#fname').val();
	var sname = $('#sname').val();
	var sist = $('#sist').val();
	var dia = $('#dia').val();
	var pulse = $('#pulse').val();
	var stab = $('#stab').val();
	var ortopulseh = $('#ortopulseh').val();
	var ortopulsev = $('#ortopulsev').val();
	var clinopulseh = $('#clinopulseh').val();
	var clinopulsev = $('#clinopulsev').val();
		
	if (isValidSname(sname)) $('#sname').css('border', '1px solid #0dd01a');	

	if (isValidFname(fname)) $('#fname').css('border', '1px solid #0dd01a');	

	if (isValidMname(mname)) $('#mname').css('border', '1px solid #0dd01a');

	if (isValidSist(sist)) $('#sist').css('border', '1px solid #0dd01a');

	if (isValidDia(dia)) $('#dia').css('border', '1px solid #0dd01a');

	if (isValidPulse(pulse)) $('#pulse').css('border', '1px solid #0dd01a');

	if (isValidStab(stab)) $('#stab').css('border', '1px solid #0dd01a');

	if (isValidOrtopulseh(ortopulseh)) $('#ortopulseh').css('border', '1px solid #0dd01a');

	if (isValidOrtopulsev(ortopulsev)) $('#ortopulsev').css('border', '1px solid #0dd01a');

	if (isValidClinopulseh(clinopulseh)) $('#clinopulseh').css('border', '1px solid #0dd01a');

	if (isValidClinopulsev(clinopulsev)) $('#clinopulsev').css('border', '1px solid #0dd01a');
});