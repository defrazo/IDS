$(document).ready(function() { // Проверка ввода фамилии
	$("#sname").focusout(function() { // Проверяет значение поля при снятии фокуса с него
		var sname = $("#sname").val();
		
		if (sname != 0)	{
			
			if (isValidSname(sname)) { // Добавляет класс ошибки к полю ввода
				$("#validSname").css("background-image", "url('../images/validYes.png')");
				$(this).removeClass('error');
				localStorage.setItem('vSname', 1);

			} else { // Убирает класс ошибки с поля ввода
				$("#validSname").css("background-image", "url('../images/validNo.png')");
				$(this).addClass('error');
				$(this).val($(this).val().substr(0, 0)); // Удаляет строку
			} 
		}
		
		$("#sname").keyup(function() { // Убирает изображение ошибки при вводе значения
			$("#validSname").css("background-image", "none");
			$(this).val($(this).val().trim());
		});
	});
});

function isValidSname(valsname) { // Проверяет соответствие значения поля типу данных
	var pattern = new RegExp(/^[А-Я]{1}[а-я]+$/); 
	return pattern.test(valsname);
}

$(document).ready(function() { // Проверка ввода имени 
	$("#fname").focusout(function() {
		var fname = $("#fname").val();
		
		if (fname != 0)	{
			
			if (isValidFname(fname)) {
				$("#validFname").css("background-image", "url('../images/validYes.png')");
				$(this).removeClass('error');
				localStorage.setItem('vFname', 1);
			} else {
				$("#validFname").css("background-image", "url('../images/validNo.png')");
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

$(document).ready(function() { // Проверка ввода отчества 
	$("#mname").focusout(function() {
		var mname = $("#mname").val();
		
		if (mname != 0)	{
			
			if (isValidMname(mname)) {
				$("#validMname").css("background-image", "url('../images/validYes.png')");
				$(this).removeClass('error');
				localStorage.setItem('vMname', 1);
			} else {
				$("#validMname").css("background-image", "url('../images/validNo.png')");
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