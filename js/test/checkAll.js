$(document).mousemove(function () { //Проверяет заполнение всех полей и выводит кнопку "Продолжить"

	var 
	v1 = localStorage.getItem('vHead'), 
	v2 = localStorage.getItem('vWake'),
	v3 = localStorage.getItem('vHeart'),
	v4 = localStorage.getItem('vVision'),
	v5 = localStorage.getItem('vHearing'),
	v6 = localStorage.getItem('vWater'),
	v7 = localStorage.getItem('vSeat'),
	v8 = localStorage.getItem('vJoint'),
	v9 = localStorage.getItem('vBeach'),
	v10 = localStorage.getItem('vWeather'),
	v11 = localStorage.getItem('vSleep'),
	v12 = localStorage.getItem('vConstip'),
	v13 = localStorage.getItem('vEffic')
	v14 = localStorage.getItem('vLiver'),
	v15 = localStorage.getItem('vDizzi'),
	v16 = localStorage.getItem('vFocus'),
	v17 = localStorage.getItem('vForget'),
	v18 = localStorage.getItem('vCreep'),
	v19 = localStorage.getItem('vHappy'),
	v20 = localStorage.getItem('vNoise'),
	v21 = localStorage.getItem('vMedic'),
	v22 = localStorage.getItem('vSwell'),
	v23 = localStorage.getItem('vDish'),
	v24 = localStorage.getItem('vDysp'),
	v25 = localStorage.getItem('vLoins'),
	v26 = localStorage.getItem('vMineral'),
	v27 = localStorage.getItem('vTaste'),
	v28 = localStorage.getItem('vCry'),
	v29 = localStorage.getItem('vState');

	if ((v1) && (v2) && (v3) && (v4) && (v5) && (v6) && (v7) && (v8) && (v9) && (v10) && (v11) && (v12) && (v13) && (v14) && (v15) && (v16) && (v17) && (v18)
		&& (v19) && (v20) && (v21) && (v22) && (v23) && (v24) && (v25) && (v26) && (v27) && (v28) && (v29)) {
		if ($("#test_submit").is(":hidden")) $("#test_submit").css("display", "block"); //Показывает кнопку далее
	}

	if (v29) { // Индикатор пропущенных вопросов 
		if (!v1) $("#d1").addClass("error_designation"); //Добавляет класс ошибки при отсутствии значения
		else $("#d1").removeClass("error_designation");	//Убирает класс ошибки при наличии значения

		if (!v2) $("#d2").addClass("error_designation");
		else $("#d2").removeClass("error_designation");

		if (!v3) $("#d3").addClass("error_designation");
		else $("#d3").removeClass("error_designation");

		if (!v4) $("#d4").addClass("error_designation");
		else $("#d4").removeClass("error_designation");

		if (!v5) $("#d5").addClass("error_designation");
		else $("#d5").removeClass("error_designation");

		if ((!v1) || (!v2) || (!v3) || (!v4) || (!v5)) $("#tab0").addClass("error_radio"); //Проверяет отсутствие значений
		else $("#tab0").removeClass("error_radio"); //Добавляет класс ошибки при отсутствии значений ко вкладке
		
		if (!v6) $("#d6").addClass("error_designation");
		else $("#d6").removeClass("error_designation");

		if (!v7) $("#d7").addClass("error_designation");
		else $("#d7").removeClass("error_designation");

		if (!v8) $("#d8").addClass("error_designation");
		else $("#d8").removeClass("error_designation");

		if (!v9) $("#d9").addClass("error_designation");
		else $("#d9").removeClass("error_designation");

		if (!v10) $("#d10").addClass("error_designation");
		else $("#d10").removeClass("error_designation");
		
		if ((!v6) || (!v7) || (!v8) || (!v9) || (!v10)) $("#tab1").addClass("error_radio"); 
		else $("#tab1").removeClass("error_radio"); 

		if (!v11) $("#d11").addClass("error_designation");
		else $("#d11").removeClass("error_designation");

		if (!v12) $("#d12").addClass("error_designation");
		else $("#d12").removeClass("error_designation");

		if (!v13) $("#d13").addClass("error_designation");
		else $("#d13").removeClass("error_designation");

		if (!v14) $("#d14").addClass("error_designation");
		else $("#d14").removeClass("error_designation");

		if (!v15) $("#d15").addClass("error_designation");
		else $("#d15").removeClass("error_designation");

		if ((!v11) || (!v12) || (!v13) || (!v14) || (!v15)) $("#tab2").addClass("error_radio"); 
		else $("#tab2").removeClass("error_radio"); 

		if (!v16) $("#d16").addClass("error_designation");
		else $("#d16").removeClass("error_designation");

		if (!v17) $("#d17").addClass("error_designation");
		else $("#d17").removeClass("error_designation");

		if (!v18) $("#d18").addClass("error_designation");
		else $("#d18").removeClass("error_designation");

		if (!v19) $("#d19").addClass("error_designation");
		else $("#d19").removeClass("error_designation");

		if (!v20) $("#d20").addClass("error_designation");
		else $("#d20").removeClass("error_designation");

		if ((!v16) || (!v17) || (!v18) || (!v19) || (!v20)) $("#tab3").addClass("error_radio"); 
		else $("#tab3").removeClass("error_radio"); 

		if (!v21) $("#d21").addClass("error_designation");
		else $("#d21").removeClass("error_designation");

		if (!v22) $("#d22").addClass("error_designation");
		else $("#d22").removeClass("error_designation");

		if (!v23) $("#d23").addClass("error_designation");
		else $("#d23").removeClass("error_designation");

		if (!v24) $("#d24").addClass("error_designation");
		else $("#d24").removeClass("error_designation");

		if (!v25) $("#d25").addClass("error_designation");
		else $("#d25").removeClass("error_designation");

		if ((!v21) || (!v22) || (!v23) || (!v24) || (!v25)) $("#tab4").addClass("error_radio"); 
		else $("#tab4").removeClass("error_radio"); 

		if (!v26) $("#d26").addClass("error_designation");
		else $("#d26").removeClass("error_designation");

		if (!v27) $("#d27").addClass("error_designation");
		else $("#d27").removeClass("error_designation");

		if (!v28) $("#d28").addClass("error_designation");
		else $("#d28").removeClass("error_designation");

		if (!v29) $("#d29").addClass("error_designation");
		else $("#d29").removeClass("error_designation");

		if ((!v26) || (!v27) || (!v28) || (!v29)) $("#tab5").addClass("error_radio"); 
		else $("#tab5").removeClass("error_radio"); 
	};
});
