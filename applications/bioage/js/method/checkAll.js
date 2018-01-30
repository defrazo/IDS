$(document).mousemove(function() { //Проверяет заполнение всех полей и выводит кнопку "Продолжить"

	var 
	v1 = $("#mname").val(), 
	v2 = $("#fname").val(),
	v3 = $("#sname").val(),
	v4 = $("#age").val(),
	v5 = $("#weight").val(),
	v6 = $("#sist").val(),
	v7 = $("#dia").val(),
	v8 = $("#inha").val(),
	v9 = $("#static").val(),
	v10 = $("#gender").val(),
	v11 = $("#date").val();

	if ((v1) && (v2) && (v3) && (v4) && (v5) && (v6) && (v7) && (v8) && (v9) && (v10) && (v11)) {
		
		if ($("#method_submit").is(":hidden")) { //Скрывает кнопку секундомера и отображает кнопку продолжить
		
			$("#method_submit").css("display", "block");

			$('#method_submit').removeClass("no_click"); //Активирует	
		}

		if ($("#method_submit").is(":visible")) { //Скрывает кнопку секундомера и отображает кнопку продолжить

			$('#method_submit').removeClass("no_click"); //Активирует	
		}
	}

	if ((!v1) || (!v2) || (!v3) || (!v4) || (!v5) || (!v6) || (!v7) || (!v8) || (!v9) || (!v10) || (!v11)) {
		
		$('#method_submit').addClass("no_click");

		if ($("#method_submit").is(":visible")) { //Скрывает кнопку продолжить и отображает кнопку секундомера
		
			$("#method_submit").css("display", "none");	
		}
	}
});

function valide_fourth() {	//Проверяет заполненность поля

	$('#method_submit').addClass("no_click"); //Деактивирует

	return false;
};