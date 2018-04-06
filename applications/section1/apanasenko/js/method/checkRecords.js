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
	$('#weight').focusout(function() {
		var weight = $('#weight').val();
		
		if (($(this).val() < 30) || ($(this).val() > 200)) $(this).val($(this).val().substr(0, 0));

		if (weight != '') {
			
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

$(document).ready(function() {
	$('#height').focusout(function() {
		var height = $('#height').val();
		
		if (($(this).val() < 100) || ($(this).val() > 230)) $(this).val($(this).val().substr(0, 0));

		if (height != '') {
			
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

$(document).ready(function() { //Проверка ввода систолического давления  
	$('#dynam').focusout(function() {
		var dynam = $('#dynam').val();
		
		if (($(this).val() < 8) || ($(this).val() > 80)) $(this).val($(this).val().substr(0, 0));
		
		if (dynam != '') {
			
			if (isValidDynam(dynam)) {
				$('#dynam').css('border', '1px solid #0dd01a');
				localStorage.setItem('vdynam', 1);
			} else {
				$('#dynam').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#dynam').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});  
	
	$('#dynam').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));       
	});
});

function isValidDynam(valdynam) {
	if ($('#dynam').val().length == 1) {
		var pattern = new RegExp(/[0-9]/);
		return pattern.test(valdynam);
	}

	if ($('#dynam').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valdynam);
	}

	if ($('#dynam').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valdynam);
	}
}

$(document).ready(function() { 
	$('#rec1').focusout(function() {
		var rec1 = $('#rec1').val();
		
		if ($(this).val() > 20) $(this).val($(this).val().substr(0, 0));

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

$(document).ready(function() { 
	$('#rec2').focusout(function() {
		var rec2 = $('#rec2').val();
		
		if ($(this).val() > 60) $(this).val($(this).val().substr(0, 0));

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

$(document).on('click focuson focusout mousemove', function() { //Подсветка правильности
	var mname = $('#mname').val();
	var fname = $('#fname').val();
	var sname = $('#sname').val();
	var weight = $('#weight').val();
	var height = $('#height').val();
	var pulse = $('#pulse').val();
	var sist = $('#sist').val();
	var rec1 = $('#rec1').val();
	var rec2 = $('#rec2').val();
	var lung = $('#lung').val();
	var dynam = $('#dynam').val();
		
	if (isValidSname(sname)) $('#sname').css('border', '1px solid #0dd01a');	

	if (isValidFname(fname)) $('#fname').css('border', '1px solid #0dd01a');	

	if (isValidMname(mname)) $('#mname').css('border', '1px solid #0dd01a');	

	if (isValidWeight(weight)) $('#weight').css('border', '1px solid #0dd01a');

	if (isValidHeight(height)) $('#height').css('border', '1px solid #0dd01a');	

	if (isValidSist(sist)) $('#sist').css('border', '1px solid #0dd01a');	

	if (isValidPulse(pulse)) $('#pulse').css('border', '1px solid #0dd01a');	

	if (isValidRec1(rec1)) $('#rec1').css('border', '1px solid #0dd01a');	

	if (isValidRec2(rec2)) $('#rec2').css('border', '1px solid #0dd01a');

	if (isValidLung(lung)) $('#lung').css('border', '1px solid #0dd01a');

	if (isValidDynam(dynam)) $('#dynam').css('border', '1px solid #0dd01a');
});