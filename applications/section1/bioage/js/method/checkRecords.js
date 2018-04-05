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


$(document).ready(function() { //Проверка ввода возраста
	$('#age').focusout(function() {
		var age = $('#age').val();
		
		if (($(this).val() < 6) || ($(this).val() > 75)) $(this).val($(this).val().substr(0, 0));

		if (age != '') {
		
			if (isValidAge(age)) {
				$('#age').css('border', '1px solid #0dd01a');
				localStorage.setItem('vAge', 1);
			} else {
				$('#age').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#age').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#age').keyup(function() {
		if ($(this).val().length > 2) $(this).val($(this).val().substr(0, 2));
	});
});

function isValidAge(valage) {
	if ($('#age').val().length == 1) { //Проверяет при длине значения = 1
		var pattern = new RegExp(/[0-9]/);
		return pattern.test(valage);
	} 

	if ($('#age').val().length == 2) { //Проверяет при длине значения = 2
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valage);
	}
}

$(document).ready(function() { //Проверка ввода веса 
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

$(document).ready(function() { //Проверка ввода задержки дыхания после вдоха
	$('#inha').focusout(function() {
		var inha = $('#inha').val();
		
		if ($(this).val() > 300) $(this).val($(this).val().substr(0, 0));

		if (inha != '') {
			
			if (isValidInha(inha)) {
				$('#inha').css('border', '1px solid #0dd01a');
				localStorage.setItem('vInha', 1);	
			} else {
				$('#inha').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#inha').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#inha').keyup( function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));        
	});
});

function isValidInha(valinha) {
	if ($('#inha').val().length == 1) {
		var pattern = new RegExp(/[0-9]/);
		return pattern.test(valinha);
	} 

	if ($('#inha').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valinha);
	}

	if ($('#inha').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valinha);
	}
}

$(document).ready(function() { //Проверка ввода статической балансировки
	$('#static').focusout(function() {
		var static = $('#static').val();
		
		if ($(this).val() > 420) $(this).val($(this).val().substr(0, 0));

		if (static != '') {
			
			if (isValidStatic(static)) {
				$('#static').css('border', '1px solid #0dd01a');	
				localStorage.setItem('vStatic', 1);
			} else {
				$('#static').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#static').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});  
	
	$('#static').keyup( function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));        
	});
});

function isValidStatic(valstatic) {
	if ($('#static').val().length == 1) {
		var pattern = new RegExp(/[0-9]/);
		return pattern.test(valstatic);
	} 

	if ($('#static').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valstatic);
	}

	if ($('#static').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valstatic);
	}
}

$(document).on('click focuson focusout mousemove', function() { //Подсветка правильности
	var sname = $('#sname').val();
	var fname = $('#fname').val();
	var mname = $('#mname').val();
	var age = $('#age').val();
	var weight = $('#weight').val();
	var sist = $('#sist').val();
	var dia = $('#dia').val();
	var inha = $('#inha').val();
	var static = $('#static').val();
	
	if (isValidSname(sname)) $('#sname').css('border', '1px solid #0dd01a');	

	if (isValidFname(fname)) $('#fname').css('border', '1px solid #0dd01a');	

	if (isValidMname(mname)) $('#mname').css('border', '1px solid #0dd01a');	

	if (isValidAge(age)) $('#age').css('border', '1px solid #0dd01a');	

	if (isValidWeight(weight)) $('#weight').css('border', '1px solid #0dd01a');	

	if (isValidSist(sist)) $('#sist').css('border', '1px solid #0dd01a');	

	if (isValidDia(dia)) $('#dia').css('border', '1px solid #0dd01a');	

	if (isValidInha(inha)) $('#inha').css('border', '1px solid #0dd01a');	

	if (isValidStatic(static)) $('#static').css('border', '1px solid #0dd01a');	
});