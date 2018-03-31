$(document).mousemove(function() { //Проверяет заполнение всех полей и выводит кнопку "Продолжить"

	var 
	v1 = $('#mname').val(), 
	v2 = $('#fname').val(),
	v3 = $('#sname').val(),
	v4 = $('#cold').val(),
	v5 = $('#weight').val(),
	v6 = $('#height').val(),
	v7 = $('#pulse').val(),
	v8 = $('#sist').val(),
	v9 = $('#dia').val(),
	v10 = $('#gender').val(),
	v11 = $('#date').val(),
	v12 = $('#rec1').val(),
	v13 = $('#rec2').val(),
	v14 = $('#exercval').val(),
	v15 = $('#exercise').val(),
	v16 = $('#recovery').val(),
	v17 = $('#lift').val(),
	v18 = $('#jump').val(),
	v19 = $('#group').val(),
	v20 = $('#lung').val();
	
	if ($('input[name="gender"]:checked').val() == 'Мужской') {
		if ((v1) && (v2) && (v3) && (v4) && (v5) && (v6) && (v7) && (v8) && (v9) && (v10) && (v11) && (v12) && (v13) && (v14) && (v15) && (v16) && (v18) && (v19)) {
			if ($('#method_submit').is(':hidden')) {
				$('#method_submit').css('display', 'block');
				$('#method_submit').removeClass('no_click'); //Активирует	
			}

		if ($('#method_submit').is(':visible')) $('#method_submit').removeClass('no_click');
	}

		if ((!v1) || (!v2) || (!v3) || (!v4) || (!v5) || (!v6) || (!v7) || (!v8) || (!v9) || (!v10) || (!v11) || (!v12) || (!v13) || (!v14) || (!v15) || (!v16) || (!v18) || (!v19)) {
			$('#method_submit').addClass('no_click');
			if ($('#method_submit').is(':visible')) $('#method_submit').css('display', 'none');
		}
	} else {
		if ((v1) && (v2) && (v3) && (v4) && (v5) && (v6) && (v7) && (v8) && (v9) && (v10) && (v11) && (v12) && (v13) && (v16) && (v17) && (v18) && (v19)) {
			if ($('#method_submit').is(':hidden')) {
				$('#method_submit').css('display', 'block');
				$('#method_submit').removeClass('no_click'); //Активирует	
			}

		if ($('#method_submit').is(':visible')) $('#method_submit').removeClass('no_click');
	}

		if ((!v1) || (!v2) || (!v3) || (!v4) || (!v5) || (!v6) || (!v7) || (!v8) || (!v9) || (!v10) || (!v11) || (!v12) || (!v13) || (!v16) || (!v17) || (!v18) || (!v19)) {
			$('#method_submit').addClass('no_click');
			if ($('#method_submit').is(':visible')) $('#method_submit').css('display', 'none');
		}
	}


	
});

function valide() {	//Проверяет заполненность поля
	$('#method_submit').addClass('no_click'); //Деактивирует
	return false;
};