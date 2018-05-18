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

$(document).ready(function() { //Проверка ввода диастолического давления 
	$('#twelvewalk').focusout(function() {
		var twelvewalk = $('#twelvewalk').val();
		
		if ($(this).val() > 20) $(this).val($(this).val().substr(0, 0));

		if (twelvewalk != '') {
			if (isValidTwelvewalk(twelvewalk)) {
				$('#twelvewalk').css('border', '1px solid #0dd01a');
				localStorage.setItem('vtwelvewalk', 1);
			} else {
				$('#twelvewalk').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#twelvewalk').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#twelvewalk').keyup(function() {
		if ($(this).val().length > 4) $(this).val($(this).val().substr(0, 4));         
	});
});

function isValidTwelvewalk(valtwelvewalk) {
	if ($('#twelvewalk').val().length == 1) {
		var pattern = new RegExp(/[0-9]/);
		return pattern.test(valtwelvewalk);
	}

	if ($('#twelvewalk').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valtwelvewalk);
	}

	if ($('#twelvewalk').val().length == 3) {
		var pattern = new RegExp(/[0-9].[0-9]/);
		return pattern.test(valtwelvewalk);
	}

	if ($('#twelvewalk').val().length == 4) {
		var pattern = new RegExp(/[0-9][0-9].[0-9]/);
		return pattern.test(valtwelvewalk);
	}
}

$(document).ready(function() { //Проверка ввода диастолического давления 
	$('#twelveswim').focusout(function() {
		var twelveswim = $('#twelveswim').val();
		
		if ($(this).val() > 999) $(this).val($(this).val().substr(0, 0));

		if (twelveswim != '') {
			if (isValidTwelveswim(twelveswim)) {
				$('#twelveswim').css('border', '1px solid #0dd01a');
				localStorage.setItem('vtwelveswim', 1);
			} else {
				$('#twelveswim').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#twelveswim').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#twelveswim').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));         
	});
});

function isValidTwelveswim(valtwelveswim) {
	if ($('#twelveswim').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valtwelveswim);
	}

	if ($('#twelveswim').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valtwelveswim);
	}
}

$(document).ready(function() { //Проверка ввода диастолического давления 
	$('#twelveride').focusout(function() {
		var twelveride = $('#twelveride').val();
		
		if ($(this).val() > 30) $(this).val($(this).val().substr(0, 0));

		if (twelveride != '') {
			if (isValidTwelveride(twelveride)) {
				$('#twelveride').css('border', '1px solid #0dd01a');
				localStorage.setItem('vtwelveride', 1);
			} else {
				$('#twelveride').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#twelveride').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#twelveride').keyup(function() {
		if ($(this).val().length > 2) $(this).val($(this).val().substr(0, 2));         
	});
});

function isValidTwelveride(valtwelveride) {
	if ($('#twelveride').val().length == 1) {
		var pattern = new RegExp(/[0-9]/);
		return pattern.test(valtwelveride);
	}

	if ($('#twelveride').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valtwelveride);
	}

	if ($('#twelveride').val().length == 3) {
		var pattern = new RegExp(/[0-9].[0-9]/);
		return pattern.test(valtwelveride);
	}

	if ($('#twelveride').val().length == 4) {
		var pattern = new RegExp(/[0-9][0-9].[0-9]/);
		return pattern.test(valtwelveride);
	}
}

$(document).ready(function() { 
	$('#run1').focusout(function() {
		var run1 = $('#run1').val();

		if (run1 != '') {
			if (isValidRun1(run1)) {
				$('#run1').css('border', '1px solid #0dd01a');
				localStorage.setItem('vrun1', 1);
			} else {
				$('#run1').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#run1').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#run1').keyup(function() {
		if ($(this).val().length > 2) $(this).val($(this).val().substr(0, 2));         
	});
});

function isValidRun1(valrun1) {
	if ($('#run1').val().length == 1) {
		var pattern = new RegExp(/[0-9]/);
		return pattern.test(valrun1);
	}

	if ($('#run1').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valrun1);
	}
}

$(document).ready(function() { 
	$('#run2').focusout(function() {
		var run2 = $('#run2').val();
		
		if ($(this).val() > 60) $(this).val($(this).val().substr(0, 0));

		if (run2 != '') {
			if (isValidRun2(run2)) {
				$('#run2').css('border', '1px solid #0dd01a');
				localStorage.setItem('vrun2', 1);
			} else {
				$('#run2').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#run2').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#run2').keyup(function() {
		if ($(this).val().length > 2) $(this).val($(this).val().substr(0, 2));         
	});
});

function isValidRun2(valrun2) {
	if ($('#run2').val().length == 1) {
		var pattern = new RegExp(/[0-9]/);
		return pattern.test(valrun2);
	}

	if ($('#run2').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valrun2);
	}
}

$(document).ready(function() { 
	$('#walk1').focusout(function() {
		var walk1 = $('#walk1').val();

		if (walk1 != '') {
			if (isValidWalk1(walk1)) {
				$('#walk1').css('border', '1px solid #0dd01a');
				localStorage.setItem('vwalk1', 1);
			} else {
				$('#walk1').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#walk1').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#walk1').keyup(function() {
		if ($(this).val().length > 2) $(this).val($(this).val().substr(0, 2));         
	});
});

function isValidWalk1(valwalk1) {
	if ($('#walk1').val().length == 1) {
		var pattern = new RegExp(/[0-9]/);
		return pattern.test(valwalk1);
	}

	if ($('#walk1').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valwalk1);
	}
}

$(document).ready(function() { 
	$('#walk2').focusout(function() {
		var walk2 = $('#walk2').val();
		
		if ($(this).val() > 60) $(this).val($(this).val().substr(0, 0));

		if (walk2 != '') {
			if (isValidWalk2(walk2)) {
				$('#walk2').css('border', '1px solid #0dd01a');
				localStorage.setItem('vwalk2', 1);
			} else {
				$('#walk2').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#walk2').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#walk2').keyup(function() {
		if ($(this).val().length > 2) $(this).val($(this).val().substr(0, 2));         
	});
});

function isValidWalk2(valwalk2) {
	if ($('#walk2').val().length == 1) {
		var pattern = new RegExp(/[0-9]/);
		return pattern.test(valwalk2);
	}

	if ($('#walk2').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valwalk2);
	}
}

$(document).on('click focuson focusout mousemove', function() { //Подсветка правильности
	var mname = $('#mname').val();
	var fname = $('#fname').val();
	var sname = $('#sname').val();
	var age = $('#age').val();
	var twelvewalk = $('#twelvewalk').val();
	var twelveswim = $('#twelveswim').val();
	var twelveride = $('#twelveride').val();
	var run1 = $('#run1').val();
	var run2 = $('#run2').val();
	var walk1 = $('#walk1').val();
	var walk2 = $('#walk2').val();

		
	if (isValidSname(sname)) $('#sname').css('border', '1px solid #0dd01a');	

	if (isValidFname(fname)) $('#fname').css('border', '1px solid #0dd01a');	

	if (isValidMname(mname)) $('#mname').css('border', '1px solid #0dd01a');

	if (isValidAge(age)) $('#age').css('border', '1px solid #0dd01a');	

	if (isValidTwelvewalk(twelvewalk)) $('#twelvewalk').css('border', '1px solid #0dd01a');

	if (isValidTwelveswim(twelveswim)) $('#twelveswim').css('border', '1px solid #0dd01a');

	if (isValidTwelveride(twelveride)) $('#twelveride').css('border', '1px solid #0dd01a');

	if (isValidRun1(run1)) $('#run1').css('border', '1px solid #0dd01a');

	if (isValidRun2(run2)) $('#run2').css('border', '1px solid #0dd01a');

	if (isValidWalk1(walk1)) $('#walk1').css('border', '1px solid #0dd01a');

	if (isValidWalk2(walk2)) $('#walk2').css('border', '1px solid #0dd01a');
});