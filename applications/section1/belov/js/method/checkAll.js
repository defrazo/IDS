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
	v12 = $('#run1').val(),
	v13 = $('#run2').val(),
	v14 = $('#heart').val(),
	v15 = $('#pull').val(),
	v16 = $('#push').val(),
	v17 = $('#lift').val(),
	v18 = $('#jump').val();

	if (localStorage.getItem('genderinp') == 'Мужской') {
		if ((v1) && (v2) && (v3) && (v4) && (v5) && (v6) && (v7) && (v8) && (v9) && (v10) && (v11) && (v12) && (v13) && (v14) && ((v15) || (v16)) && (v18)) {
			if ($('#method_submit').is(':hidden')) {
				$('#method_submit').css('display', 'block');
				$('#method_submit').removeClass('no_click'); //Активирует	
			}

		if ($('#method_submit').is(':visible')) $('#method_submit').removeClass('no_click');
	}

		if ((!v1) || (!v2) || (!v3) || (!v4) || (!v5) || (!v6) || (!v7) || (!v8) || (!v9) || (!v10) || (!v11) || (!v12) || (!v13) || (!v14) || ((!v15) && (!v16)) || (!v18)) {
			$('#method_submit').addClass('no_click');
			if ($('#method_submit').is(':visible')) $('#method_submit').css('display', 'none');
		}
	} else {
		if ((v1) && (v2) && (v3) && (v4) && (v5) && (v6) && (v7) && (v8) && (v9) && (v10) && (v11) && (v12) && (v13) && (v14) && (v17) && (v18)) {
			if ($('#method_submit').is(':hidden')) {
				$('#method_submit').css('display', 'block');
				$('#method_submit').removeClass('no_click'); //Активирует	
			}

		if ($('#method_submit').is(':visible')) $('#method_submit').removeClass('no_click');
	}

		if ((!v1) || (!v2) || (!v3) || (!v4) || (!v5) || (!v6) || (!v7) || (!v8) || (!v9) || (!v10) || (!v11) || (!v12) || (!v13) || (!v14) || (!v17) || (!v18)) {
			$('#method_submit').addClass('no_click');
			if ($('#method_submit').is(':visible')) $('#method_submit').css('display', 'none');
		}
	}


	
});

function valide_fourth() {	//Проверяет заполненность поля
	$('#method_submit').addClass('no_click'); //Деактивирует
	return false;
};