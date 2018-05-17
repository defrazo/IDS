$(document).on('ready mousemove change', function() { //Проверяет заполнение всех полей и выводит кнопку "Продолжить"

	var 
	v1 = $('#mname').val(), 
	v2 = $('#fname').val(),
	v3 = $('#sname').val(),
	v4 = $('#age').val(),
	v5 = $('#weight').val(),
	v6 = $('#sist').val(),
	v7 = $('#dia').val(),
	v8 = $('#exerc').val(),
	v9 = $('#pulse').val(),
	v10 = $('#pulsel').val(),
	v11 = $('#cigaret').val(),
	v12 = $('#alco').val(),
	v13 = $('input[name="gender"]').is(':checked'),
	v14 = $('#date').val(),
	v15 = $('#fac').val();

	if ((v1) && (v2) && (v3) && (v4) && (v5) && (v6) && (v7) && (v8) && (v9) && (v10) && (v11) && (v12)  && (v13)  && (v14)  && (v15)) {
		if ($('#method_submit').is(':hidden')) {
			$('#method_submit').css('display', 'block');
			$('#method_submit').removeClass('no_click'); //Активирует	
		}

		if ($('#method_submit').is(':visible')) $('#method_submit').removeClass('no_click');
	}

	if ((!v1) || (!v2) || (!v3) || (!v4) || (!v5) || (!v6) || (!v7) || (!v8) || (!v9) || (!v10) || (!v11) || (!v12) || (!v13) || (!v14) || (!v15)) {
		$('#method_submit').addClass('no_click');
		if ($('#method_submit').is(':visible')) $('#method_submit').css('display', 'none');
	}
});

function valide() {	//Проверяет заполненность поля
	$('#method_submit').addClass('no_click'); //Деактивирует
	return false;
};