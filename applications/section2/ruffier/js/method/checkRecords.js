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
	$('#result1').focusout(function() {
		var result1 = $('#result1').val();
		
		if (($(this).val() < 1) || ($(this).val() > 60)) $(this).val($(this).val().substr(0, 0));

		if (result1 != '') {
			
			if (isValidResult1(result1)) {
				$('#result1').css('border', '1px solid #0dd01a');
				localStorage.setItem('vresult1', 1);
			} else {
				$('#result1').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#result1').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#result1').keyup(function() {
		if ($(this).val().length > 2) $(this).val($(this).val().substr(0, 2));          
	});
});

function isValidResult1(valresult1) {
	if ($('#result1').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valresult1);
	}

	if ($('#result1').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valresult1);
	}
}

$(document).ready(function() { 
	$('#result2').focusout(function() {
		var result2 = $('#result2').val();
		
		if (($(this).val() < 1) || ($(this).val() > 60)) $(this).val($(this).val().substr(0, 0));

		if (result2 != '') {
			
			if (isValidResult2(result2)) {
				$('#result2').css('border', '1px solid #0dd01a');
				localStorage.setItem('vresult2', 1);
			} else {
				$('#result2').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#result2').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#result2').keyup(function() {
		if ($(this).val().length > 2) $(this).val($(this).val().substr(0, 2));          
	});
});

function isValidResult2(valresult2) {
	if ($('#result2').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valresult2);
	}

	if ($('#result2').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valresult2);
	}
}

$(document).ready(function() { 
	$('#result3').focusout(function() {
		var result3 = $('#result3').val();
		
		if (($(this).val() < 1) || ($(this).val() > 60)) $(this).val($(this).val().substr(0, 0));

		if (result3 != '') {
			
			if (isValidResult3(result3)) {
				$('#result3').css('border', '1px solid #0dd01a');
				localStorage.setItem('vresult3', 1);
			} else {
				$('#result3').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#result3').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#result3').keyup(function() {
		if ($(this).val().length > 2) $(this).val($(this).val().substr(0, 2));          
	});
});

function isValidResult3(valresult3) {
	if ($('#result3').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valresult3);
	}

	if ($('#result3').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valresult3);
	}
}

$(document).on('click focuson focusout mousemove', function() { //Подсветка правильности
	var mname = $('#mname').val();
	var fname = $('#fname').val();
	var sname = $('#sname').val();
	var result1 = $('#result1').val();
	var result2 = $('#result2').val();
	var result3 = $('#result3').val();
		
	if (isValidSname(sname)) $('#sname').css('border', '1px solid #0dd01a');	

	if (isValidFname(fname)) $('#fname').css('border', '1px solid #0dd01a');	

	if (isValidMname(mname)) $('#mname').css('border', '1px solid #0dd01a');

	if (isValidResult1(result1)) $('#result1').css('border', '1px solid #0dd01a');

	if (isValidResult2(result2)) $('#result2').css('border', '1px solid #0dd01a');	

	if (isValidResult3(result3)) $('#result3').css('border', '1px solid #0dd01a');
});