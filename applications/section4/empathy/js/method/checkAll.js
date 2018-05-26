$(document).on('ready mousemove change', function() {//Проверяет заполнение всех полей и выводит кнопку "Продолжить"

	var 
	v1 = $('#mname').val(), 
	v2 = $('#fname').val(),
	v3 = $('#sname').val(),
	v4 = $('input[name="gender"]').is(':checked'),
	v5 = $("input[name=o1]:checked").is(':checked'),
	v6 = $("input[name=o2]:checked").is(':checked'),
	v7 = $("input[name=o3]:checked").is(':checked'),
	v8 = $("input[name=o4]:checked").is(':checked'),
	v9 = $("input[name=o5]:checked").is(':checked'),
	v10 = $("input[name=o6]:checked").is(':checked'),
	v11 = $("input[name=o7]:checked").is(':checked'),
	v12 = $("input[name=o8]:checked").is(':checked'),
	v13 = $("input[name=o9]:checked").is(':checked'),
	v14 = $("input[name=o10]:checked").is(':checked'),
	v15 = $("input[name=o11]:checked").is(':checked'),
	v16 = $("input[name=o12]:checked").is(':checked'),
	v17 = $("input[name=o13]:checked").is(':checked'),
	v18 = $("input[name=o14]:checked").is(':checked'),
	v19 = $("input[name=o15]:checked").is(':checked'),
	v20 = $("input[name=o16]:checked").is(':checked'),
	v21 = $("input[name=o17]:checked").is(':checked'),
	v22 = $("input[name=o18]:checked").is(':checked'),
	v23 = $("input[name=o19]:checked").is(':checked'),
	v24 = $("input[name=o20]:checked").is(':checked'),
	v25 = $("input[name=o21]:checked").is(':checked'),
	v26 = $("input[name=o22]:checked").is(':checked'),
	v27 = $("input[name=o23]:checked").is(':checked'),
	v28 = $("input[name=o24]:checked").is(':checked'),
	v29 = $("input[name=o25]:checked").is(':checked'),
	v30 = $("input[name=o26]:checked").is(':checked'),
	v31 = $("input[name=o27]:checked").is(':checked'),
	v32 = $("input[name=o28]:checked").is(':checked'),
	v33 = $("input[name=o29]:checked").is(':checked'),
	v34 = $("input[name=o30]:checked").is(':checked'),
	v35 = $("input[name=o31]:checked").is(':checked'),
	v36 = $("input[name=o32]:checked").is(':checked'),
	v37 = $("input[name=o33]:checked").is(':checked'),
	v38 = $("input[name=o34]:checked").is(':checked'),
	v39 = $("input[name=o35]:checked").is(':checked'),
	v40 = $("input[name=o36]:checked").is(':checked'),
	v41 = $('#date').val(),
	v42 = $('#fac').val();

	if ((v1) && (v2) && (v3) && (v4) && (v5) && (v6) && (v7) && (v8) && (v9) && (v10) && (v11) && (v12) && (v13) && (v14) && (v15) && (v16) && (v17) && (v18) && (v19) && (v20) && (v21) && (v22) && (v23) && (v24) && (v25) && (v26) && (v27) && (v28) && (v29) && (v30) && (v31) && (v32) && (v33) && (v34) && (v35) && (v36) && (v37) && (v38) && (v39) && (v40) && (v41) && (v42)) {
		if ($('#method_submit').is(':hidden')) {
			$('#method_submit').css('display', 'block');
			$('#method_submit').removeClass('no_click'); //Активирует	
		}

		if ($('#method_submit').is(':visible')) $('#method_submit').removeClass('no_click');
	}

	if ((!v1) || (!v2) || (!v3) || (!v4) || (!v5) || (!v6) || (!v7) || (!v8) || (!v9) || (!v10) || (!v11) || (!v12) || (!v13) || (!v14) || (!v15) || (!v16) || (!v17) || (!v18) || (!v19) || (!v20) || (!v21) || (!v22) || (!v23) || (!v24) || (!v25) || (!v26) || (!v27) || (!v28) || (!v29) || (!v30) || (!v31) || (!v32) || (!v33) || (!v34) || (!v35) || (!v36) || (!v37) || (!v38) || (!v39) || (!v40) || (!v41) || (!v42)) {
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