$(document).on('ready mousemove change keydown', function() {//Проверяет заполнение всех полей и выводит кнопку "Продолжить"

	var 
	v1 = $('#mname').val(), 
	v2 = $('#fname').val(),
	v3 = $('#sname').val(),
	v4 = $('input[name="gender"]').is(':checked'),
	v5 = $('#f11').val(),
	v6 = $('#f12').val(),
	v7 = $('#f21').val(),
	v8 = $('#f22').val(),
	v9 = $('#f31').val(),
	v10 = $('#f32').val(),
	v11 = $('#f41').val(),
	v12 = $('#f42').val(),
	v13 = $('#f51').val(),
	v14 = $('#f52').val(),
	v15 = $('#f61').val(),
	v16 = $('#f62').val(),
	v17 = $('#f71').val(),
	v18 = $('#f72').val(),
	v19 = $('#f81').val(),
	v20 = $('#f82').val(),
	v21 = $('#f91').val(),
	v22 = $('#f92').val(),
	v23 = $('#f101').val(),
	v24 = $('#f102').val(),
	v25 = $('#f111').val(),
	v26 = $('#f112').val(),
	v27 = $('#f121').val(),
	v28 = $('#f121').val(),
	v29 = $('#f131').val(),
	v30 = $('#f132').val(),
	v31 = $('#f141').val(),
	v32 = $('#f142').val(),
	v33 = $('#f151').val(),
	v34 = $('#f152').val(),
	v35 = $('#f161').val(),
	v36 = $('#f162').val(),
	v37 = $('#date').val(),
	v38 = $('#fac').val();

	var real = [v5, v7, v9, v11, v13, v15, v17, v19, v21, v23, v25, v27, v29, v31, v33, v35];
	var time1 = 0;	
	$.each(real, function() {
		if (this != '') time1 += parseInt(this);
	});

 	var desir = [v6, v8, v10, v12, v14, v16, v18, v20, v22, v24, v26, v28, v30, v32, v34, v36];
	var time2 = 0;
	$.each(desir, function() {
		if (this != '') time2 += parseInt(this);
	});

	$('#time1').html(time1 + ' из 480');
	$('#time2').html(time2 + ' из 480');


	if ((time1 == 480) && (time2 == 480) && (v1) && (v2) && (v3) && (v4) && (v5) && (v6) && (v7) && (v8) && (v9) && (v10) && (v11) && (v12) && (v13) && (v14) && (v15) && (v16) && (v17) && (v18) && (v19) && (v20) && (v21) && (v22) && (v23) && (v24) && (v25) && (v26) && (v27) && (v28) && (v29) && (v30) && (v31) && (v32) && (v33) && (v34) && (v35) && (v36) && (v37) && (v38)) {
		if ($('#method_submit').is(':hidden')) {
			$('#method_submit').css('display', 'block');
			$('#method_submit').removeClass('no_click'); //Активирует	
		}

		if ($('#method_submit').is(':visible')) $('#method_submit').removeClass('no_click');
	}

	if ((time1 != 480) || (time2 != 480) && (!v1) || (!v2) || (!v3) || (!v4) || (!v5) || (!v6) || (!v7) || (!v8) || (!v9) || (!v10) || (!v11) || (!v12) || (!v13) || (!v14) || (!v15) || (!v16) || (!v17) || (!v18) || (!v19) || (!v20) || (!v21) || (!v22) || (!v23) || (!v24) || (!v25) || (!v26) || (!v27) || (!v28) || (!v29) || (!v30) || (!v31) || (!v32) || (!v33) || (!v34) || (!v35) || (!v36) || (!v37) || (!v38)) {
		$('#method_submit').addClass('no_click');
		if ($('#method_submit').is(':visible')) $('#method_submit').css('display', 'none');
	}
	/*
	if (v29) { // Индикатор пропущенных вопросов 
		if (!v8) $("#d1").addClass("error_designation"); // Добавляет класс ошибки при отсутствии значения
		else $("#d1").removeClass("error_designation");	// Убирает класс ошибки при наличии значения

		if (!v9) $("#d2").addClass("error_designation");
		else $("#d2").removeClass("error_designation");

		if (!v10) $("#d3").addClass("error_designation");
		else $("#d3").removeClass("error_designation");

		if (!v11) $("#d4").addClass("error_designation");
		else $("#d4").removeClass("error_designation");

		if (!v12) $("#d5").addClass("error_designation");
		else $("#d5").removeClass("error_designation");
		
		if (!v13) $("#d6").addClass("error_designation");
		else $("#d6").removeClass("error_designation");

		if (!v14) $("#d7").addClass("error_designation");
		else $("#d7").removeClass("error_designation");

		if (!v15) $("#d8").addClass("error_designation");
		else $("#d8").removeClass("error_designation");

		if (!v16) $("#d9").addClass("error_designation");
		else $("#d9").removeClass("error_designation");

		if (!v17) $("#d10").addClass("error_designation");
		else $("#d10").removeClass("error_designation");

		if (!v18) $("#d11").addClass("error_designation");
		else $("#d11").removeClass("error_designation");

		if (!v19) $("#d12").addClass("error_designation");
		else $("#d12").removeClass("error_designation");

		if (!v20) $("#d13").addClass("error_designation");
		else $("#d13").removeClass("error_designation");

		if (!v21) $("#d14").addClass("error_designation");
		else $("#d14").removeClass("error_designation");

		if (!v22) $("#d15").addClass("error_designation");
		else $("#d15").removeClass("error_designation");

		if (!v23) $("#d16").addClass("error_designation");
		else $("#d16").removeClass("error_designation");

		if (!v24) $("#d17").addClass("error_designation");
		else $("#d17").removeClass("error_designation");

		if (!v25) $("#d18").addClass("error_designation");
		else $("#d18").removeClass("error_designation");

		if (!v26) $("#d19").addClass("error_designation");
		else $("#d19").removeClass("error_designation");

		if (!v27) $("#d20").addClass("error_designation");
		else $("#d20").removeClass("error_designation");

		if (!v28) $("#d21").addClass("error_designation");
		else $("#d21").removeClass("error_designation");

		if (!v29) $("#d22").addClass("error_designation");
		else $("#d22").removeClass("error_designation");
	}*/
});

function valide() {	//Проверяет заполненность поля
	$('#method_submit').addClass('no_click'); //Деактивирует
	return false;
};