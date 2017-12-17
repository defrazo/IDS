$(document).ready(function() { //Проверка ввода фамилии 
	$("#sname").focusout(function() { //Проверяет значение поля при снятии фокуса с него
		var sname = $("#sname").val();
		
		if (sname != 0)	{
		
			if (isValidSname(sname)) { //Убирает класс ошибки с поля ввода
				$("#validSname").css("background-image", "url('../img/validYes.png')");
				$(this).removeClass('error');
				localStorage.setItem('vSname', 1);
			} else { //Добавляет класс ошибки к полю ввода
				$("#validSname").css("background-image", "url('../img/validNo.png')");
				$(this).addClass('error');
				$(this).val($(this).val().substr(0, 0)); //Удаляет строку
			} 
		}
		
		$("#sname").keyup(function() { //Убирает изображение ошибки при вводе значения
			$("#validSname").css("background-image", "none");
			$(this).val($(this).val().trim());
		});
	});
});

function isValidSname(valsname) { //Проверяет соответствие значения поля типу данных
	var pattern = new RegExp(/^[А-Я]{1}[а-я]+$/); 
	return pattern.test(valsname);
}

$(document).ready(function() { //Проверка ввода имени
	$("#fname").focusout(function() {
		var fname = $("#fname").val();
		
		if (fname != 0)	{
			
			if (isValidFname(fname)) {
				$("#validFname").css("background-image", "url('../img/validYes.png')");
				$(this).removeClass('error');
				localStorage.setItem('vFname', 1);
			} else {
				$("#validFname").css("background-image", "url('../img/validNo.png')");
				$(this).addClass('error');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$("#fname").keyup(function() {
			$("#validFname").css("background-image", "none");
			$(this).val($(this).val().trim());
		});
	});
});

function isValidFname(valfname) {
	var pattern = new RegExp(/^[А-Я]{1}[а-я]+$/); 
	return pattern.test(valfname);
}

$(document).ready(function() { //Проверка ввода отчества
	$("#mname").focusout(function() {
		var mname = $("#mname").val();
		
		if (mname != 0)	{
			
			if (isValidMname(mname)) {
				$("#validMname").css("background-image", "url('../img/validYes.png')");
				$(this).removeClass('error');
				localStorage.setItem('vMname', 1);
			} else {
				$("#validMname").css("background-image", "url('../img/validNo.png')");
				$(this).val($(this).val().substr(0, 0));	
				$(this).addClass('error');
			}
		}
		
		$("#mname").keyup(function() {
			$("#validMname").css("background-image", "none");
			$(this).val($(this).val().trim());
		});
	});
});

function isValidMname(valmname) {
	var pattern = new RegExp(/^[А-Я]{1}[а-я]+$/); 
	return pattern.test(valmname);
}


$(document).ready(function() { //Проверка ввода возраста
	$("#age").focusout(function() {
		var age = $("#age").val();
		
		if (($(this).val() < 6) || ($(this).val() > 70)) $(this).val($(this).val().substr(0, 0));

		if (age != 0) {
		
			if (isValidAge(age)) {
				$("#validAge").css("background-image", "url('../img/validYes.png')");
				$(this).removeClass('error');
				localStorage.setItem('vAge', 1);
			} else {
				$("#validAge").css("background-image", "url('../img/validNo.png')");
				$(this).addClass('error');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#age').keyup(function() {
			$("#validAge").css("background-image", "none");
			$(this).val($(this).val().trim());
		});
	});
	
	$('#age').keyup(function() {
		if ($(this).val().length > 2) $(this).val($(this).val().substr(0, 2));
	});
});

function isValidAge(valage) {
	if ($("#age").val().length == 1) { //Проверяет при длине значения = 1
		var pattern = new RegExp(/[0-9]/);
		return pattern.test(valage);
	} 

	if ($("#age").val().length == 2) { //Проверяет при длине значения = 2
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valage);
	}
}

$(document).ready(function() { //Проверка ввода веса 
	$("#weight").focusout(function() {
		var weight = $("#weight").val();
		
		if (($(this).val() < 30) || ($(this).val() > 150)) $(this).val($(this).val().substr(0, 0));

		if (weight != 0) {
			
			if (isValidWeight(weight)) {
				$("#validWeight").css("background-image", "url('../img/validYes.png')");
				$(this).removeClass('error');
				localStorage.setItem('vWeight', 1);
			} else {
				$("#validWeight").css("background-image", "url('../img/validNo.png')");
				$(this).addClass('error');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$("#weight").keyup(function() {
			$("#validWeight").css("background-image", "none");
			$(this).val($(this).val().trim());
		});
	});
	
	$('#weight').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidWeight(valweight) {
	if ($("#weight").val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valweight);
	}

	if ($("#weight").val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valweight);
	}
}

$(document).ready(function() { //Проверка ввода систолического давления  
	$("#sist").focusout(function() {
		var sist = $("#sist").val();
		
		if (($(this).val() < 100) || ($(this).val() > 250)) $(this).val($(this).val().substr(0, 0));
		
		if (sist != 0) {
			
			if (isValidSist(sist)) {
				$("#validSist").css("background-image", "url('../img/validYes.png')");
				$(this).removeClass('error');
				localStorage.setItem('vSist', 1);
			} else {
				$("#validSist").css("background-image", "url('../img/validNo.png')");
				$(this).val($(this).val().substr(0, 0));
				$(this).addClass('error');
			}
		}
		
		$("#sist").keyup(function() {
			$("#validSist").css("background-image", "none");
			$(this).val($(this).val().trim());
		});
	});  
	
	$('#sist').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));       
	});
});

function isValidSist(valsist) {
	if ($("#sist").val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valsist);
	}
}

$(document).ready(function() { //Проверка ввода диастолического давления 
	$("#dia").focusout(function() {
		var dia = $("#dia").val();
		
		if (($(this).val() < 50) || ($(this).val() > 99)) $(this).val($(this).val().substr(0, 0));

		if (dia != 0) {
			if (isValidDia(dia)) {
				$("#validDia").css("background-image", "url('../img/validYes.png')");
				$(this).removeClass('error');
				localStorage.setItem('vDia', 1);
			} else {
				$("#validDia").css("background-image", "url('../img/validNo.png')");
				$(this).val($(this).val().substr(0, 0));
				$(this).addClass('error');
			}
		}
		
		$("#dia").keyup(function() {
			$("#validDia").css("background-image", "none");
			$(this).val($(this).val().trim());
		});
	});
	
	$('#dia').keyup(function() {
		if ($(this).val().length > 2) $(this).val($(this).val().substr(0, 2));         
	});
});

function isValidDia(valdia) {
	if ($("#dia").val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valdia);
	}
}

$(document).ready(function() { //Проверка ввода задержки дыхания после вдоха
	$("#inha").focusout(function() {
		var inha = $("#inha").val();
		
		if ($(this).val() > 300) $(this).val($(this).val().substr(0, 0));

		if (inha != 0) {
			
			if (isValidInha(inha)) {
				$("#validInha").css("background-image", "url('../img/validYes.png')");
				$(this).removeClass('error');
				localStorage.setItem('vInha', 1);	
			} else {
				$("#validInha").css("background-image", "url('../img/validNo.png')");
				$(this).val($(this).val().substr(0, 0));
				$(this).addClass('error');
			}
		}
		
		$("#inha").keyup(function() {
			$("#validInha").css("background-image", "none");
			$(this).val($(this).val().trim());
		});
	});
	
	$('#inha').keyup( function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));        
	});
});

function isValidInha(valinha) {
	if ($("#inha").val().length == 1) {
		var pattern = new RegExp(/[0-9]/);
		return pattern.test(valinha);
	} 

	if ($("#inha").val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valinha);
	}

	if ($("#inha").val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valinha);
	}
}

$(document).ready(function() { //Проверка ввода статической балансировки
	$("#static").focusout(function() {
		var static = $("#static").val();
		
		if ($(this).val() > 60) $(this).val($(this).val().substr(0, 0));

		if (static != 0) {
			
			if (isValidStatic(static)) {
				$("#validStatic").css("background-image", "url('../img/validYes.png')");
				$(this).removeClass('error');	
				localStorage.setItem('vStatic', 1);
			} else {
				$("#validStatic").css("background-image", "url('../img/validNo.png')");
				$(this).val($(this).val().substr(0, 0));
				$(this).addClass('error');
			}
		}
		
		$("#static").keyup(function() {
			$("#validStatic").css("background-image", "none");
			$(this).val($(this).val().trim());
		});
	});  
	
	$('#static').keyup( function() {
		if ($(this).val().length > 2) $(this).val($(this).val().substr(0, 2));        
	});
});

function isValidStatic(valstatic) {
	if ($("#static").val().length == 1) {
		var pattern = new RegExp(/[0-9]/);
		return pattern.test(valstatic);
	} 

	if ($("#static").val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valstatic);
	}
}