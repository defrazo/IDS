$(document).on('ready mousemove change', function() { //Проверяет заполнение всех полей и выводит кнопку "Продолжить"

	var 
	v1 = $('#mname').val(), 
	v2 = $('#fname').val(),
	v3 = $('#sname').val(),
	v4 = $('#lung').val(),
	v5 = $('#chest').val(),
	v6 = $('#chestmax').val(),
	v7 = $('#chestmin').val(),
	v8 = $('#pulse').val(),
	v9 = $('#hold').val(),
	v10 = $('input[name="gender"]').is(':checked'),
	v11 = $('#date').val(),
	v12 = $('#fac').val();

	if ((v1) && (v2) && (v3) && (v4) && (v5) && (v6) && (v7) && (v8) && (v9) && (v10) && (v11) && (v12)) {
		if ($('#method_submit').is(':hidden')) {
			$('#method_submit').css('display', 'block');
			$('#method_submit').removeClass('no_click'); //Активирует	
		}

		if ($('#method_submit').is(':visible')) $('#method_submit').removeClass('no_click');
	}

	if ((!v1) || (!v2) || (!v3) || (!v4) || (!v5) || (!v6) || (!v7) || (!v8) || (!v9) || (!v10) || (!v11) || (!v12)) {
		$('#method_submit').addClass('no_click');
		if ($('#method_submit').is(':visible')) $('#method_submit').css('display', 'none');
	}
});

function valide() {	//Проверяет заполненность поля
	$('#method_submit').addClass('no_click'); //Деактивирует
	return false;
};