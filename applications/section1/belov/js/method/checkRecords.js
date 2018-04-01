$(document).ready(function() { //Проверка ввода фамилии 
	$('#sname').focusout(function() { //Проверяет значение поля при снятии фокуса с него
		var sname = $('#sname').val();
		
		if (sname != 0)	{
		
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
		
		if (fname != 0)	{
			
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
		
		if (mname != 0)	{
			
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


$(document).ready(function() { //Проверка ввода возраста
	$('#cold').focusout(function() {
		var cold = $('#cold').val();
		
		if (($(this).val() <= 0) || ($(this).val() > 10)) $(this).val($(this).val().substr(0, 0));

		if (cold != 0) {
		
			if (isValidCold(cold)) {
				$('#cold').css('border', '1px solid #0dd01a');
				localStorcold.setItem('vcold', 1);
			} else {
				$('#cold').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#cold').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#cold').keyup(function() {
		if ($(this).val().length > 2) $(this).val($(this).val().substr(0, 2));
	});
});

function isValidCold(valcold) {
	if ($('#cold').val().length == 1) { //Проверяет при длине значения = 1
		var pattern = new RegExp(/[0-9]/);
		return pattern.test(valcold);
	} 
}

$(document).ready(function() { //Проверка ввода веса 
	$('#weight').focusout(function() {
		var weight = $('#weight').val();
		
		if (($(this).val() < 30) || ($(this).val() > 150)) $(this).val($(this).val().substr(0, 0));

		if (weight != 0) {
			
			if (isValidWeight(weight)) {
				$('#weight').css('border', '1px solid #0dd01a');
				localStorage.setItem('vWeight', 1);
			} else {
				$('#weight').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#weight').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#weight').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidWeight(valweight) {
	if ($('#weight').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valweight);
	}

	if ($('#weight').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valweight);
	}
}

$(document).ready(function() { //Проверка ввода веса 
	$('#height').focusout(function() {
		var height = $('#height').val();
		
		if (($(this).val() < 120) || ($(this).val() > 230)) $(this).val($(this).val().substr(0, 0));

		if (height != 0) {
			
			if (isValidHeight(height)) {
				$('#height').css('border', '1px solid #0dd01a');
				localStorage.setItem('vheight', 1);
			} else {
				$('#height').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#height').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#height').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidHeight(valheight) {
	if ($('#height').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valheight);
	}
}

$(document).ready(function() { //Проверка ввода веса 
	$('#pulse').focusout(function() {
		var pulse = $('#pulse').val();
		
		if (($(this).val() < 30) || ($(this).val() > 150)) $(this).val($(this).val().substr(0, 0));

		if (pulse != 0) {
			
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
		
		if (($(this).val() < 100) || ($(this).val() > 250)) $(this).val($(this).val().substr(0, 0));
		
		if (sist != 0) {
			
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
	if ($('#sist').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valsist);
	}
}

$(document).ready(function() { //Проверка ввода диастолического давления 
	$('#dia').focusout(function() {
		var dia = $('#dia').val();
		
		if (($(this).val() < 50) || ($(this).val() > 99)) $(this).val($(this).val().substr(0, 0));

		if (dia != 0) {
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
		if ($(this).val().length > 2) $(this).val($(this).val().substr(0, 2));         
	});
});

function isValidDia(valdia) {
	if ($('#dia').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valdia);
	}
}

$(document).ready(function() { //Проверка ввода диастолического давления 
	$('#rec1').focusout(function() {
		var rec1 = $('#rec1').val();
		
		if ($(this).val() >= 20) $(this).val($(this).val().substr(0, 0));

		if (rec1 != '') {
			if (isValidRec1(rec1)) {
				$('#rec1').css('border', '1px solid #0dd01a');
				localStorage.setItem('vrec1', 1);
			} else {
				$('#rec1').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#rec1').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#rec1').keyup(function() {
		if ($(this).val().length > 2) $(this).val($(this).val().substr(0, 2));         
	});
});

function isValidRec1(valrec1) {
	if ($('#rec1').val().length == 1) {
		var pattern = new RegExp(/[0-9]/);
		return pattern.test(valrec1);
	}

	if ($('#rec1').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valrec1);
	}
}

$(document).ready(function() { //Проверка ввода диастолического давления 
	$('#rec2').focusout(function() {
		var rec2 = $('#rec2').val();
		
		if ($(this).val() >= 60) $(this).val($(this).val().substr(0, 0));

		if (rec2 != '') {
			if (isValidRec2(rec2)) {
				$('#rec2').css('border', '1px solid #0dd01a');
				localStorage.setItem('vrec2', 1);
			} else {
				$('#rec2').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#rec2').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#rec2').keyup(function() {
		if ($(this).val().length > 2) $(this).val($(this).val().substr(0, 2));         
	});
});

function isValidRec2(valrec2) {
	if ($('#rec2').val().length == 1) {
		var pattern = new RegExp(/[0-9]/);
		return pattern.test(valrec2);
	}

	if ($('#rec2').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valrec2);
	}
}

$(document).ready(function() { //Проверка ввода диастолического давления 
	$('#lung').focusout(function() {
		var lung = $('#lung').val();
		
		if (($(this).val() >= 7000) || ($(this).val() <= 1500)) $(this).val($(this).val().substr(0, 0));

		if (lung != 0) {
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

$(document).ready(function() { //Проверка ввода диастолического давления 
	$('#training').focusout(function() {
		var training = $('#training').val();
		
		if ($(this).val() >= 15) $(this).val($(this).val().substr(0, 0));

		if (training != 0) {
			if (isValidTraining(training)) {
				$('#training').css('border', '1px solid #0dd01a');
				localStorage.setItem('vtraining', 1);
			} else {
				$('#training').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#training').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#training').keyup(function() {
		if ($(this).val().length > 2) $(this).val($(this).val().substr(0, 2));         
	});
});

function isValidTraining(valtraining) {
	if ($('#training').val().length == 1) {
		var pattern = new RegExp(/[0-9]/);
		return pattern.test(valtraining);
	}

	if ($('#training').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valtraining);
	}
}

$(document).ready(function() { //Проверка ввода диастолического давления 
	$('#pull').focusout(function() {
		var pull = $('#pull').val();
		
		if ($(this).val() >= 40) $(this).val($(this).val().substr(0, 0));

		if (pull != 0) {
			if (isValidPull(pull)) {
				$('#pull').css('border', '1px solid #0dd01a');
				localStorage.setItem('vpull', 1);
			} else {
				$('#pull').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#pull').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#pull').keyup(function() {
		if ($(this).val().length > 2) $(this).val($(this).val().substr(0, 2));         
	});
});

function isValidPull(valpull) {
	if ($('#pull').val().length == 1) {
		var pattern = new RegExp(/[0-9]/);
		return pattern.test(valpull);
	}

	if ($('#pull').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valpull);
	}
}

$(document).ready(function() { //Проверка ввода диастолического давления 
	$('#push').focusout(function() {
		var push = $('#push').val();
		
		if ($(this).val() >= 100) $(this).val($(this).val().substr(0, 0));

		if (push != 0) {
			if (isValidPush(push)) {
				$('#push').css('border', '1px solid #0dd01a');
				localStorage.setItem('vpush', 1);
			} else {
				$('#push').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#push').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#push').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));         
	});
});

function isValidPush(valpush) {
	if ($('#push').val().length == 1) {
		var pattern = new RegExp(/[0-9]/);
		return pattern.test(valpush);
	}

	if ($('#push').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valpush);
	}

	if ($('#push').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valpush);
	}
}

$(document).ready(function() { //Проверка ввода диастолического давления 
	$('#lift').focusout(function() {
		var lift = $('#lift').val();
		
		if ($(this).val() >= 100) $(this).val($(this).val().substr(0, 0));

		if (lift != 0) {
			if (isValidLift(lift)) {
				$('#lift').css('border', '1px solid #0dd01a');
				localStorage.setItem('vlift', 1);
			} else {
				$('#lift').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#lift').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#lift').keyup(function() {
		if ($(this).val().length > 2) $(this).val($(this).val().substr(0, 3));         
	});
});

function isValidLift(vallift) {
	if ($('#lift').val().length == 1) {
		var pattern = new RegExp(/[0-9]/);
		return pattern.test(vallift);
	}

	if ($('#lift').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(vallift);
	}
}

$(document).ready(function() { //Проверка ввода диастолического давления 
	$('#jump').focusout(function() {
		var jump = $('#jump').val();
		
		if ($(this).val() >= 100) $(this).val($(this).val().substr(0, 0));

		if (jump != 0) {
			if (isValidJump(jump)) {
				$('#jump').css('border', '1px solid #0dd01a');
				localStorage.setItem('vjump', 1);
			} else {
				$('#jump').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#jump').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#jump').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));         
	});
});

function isValidJump(valjump) {
	if ($('#jump').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valjump);
	}
}