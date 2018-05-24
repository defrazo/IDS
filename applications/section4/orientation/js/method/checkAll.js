$(document).on('ready mousemove change', function() {//Проверяет заполнение всех полей и выводит кнопку "Продолжить"

	var 
	v1 = $('#mname').val(), 
	v2 = $('#fname').val(),
	v3 = $('#sname').val(),
	v4 = $('input[name="gender"]').is(':checked'),
	v5 = $('#h11').val(),
	v6 = $('#h12').val(),
	v7 = $('#h21').val(),
	v8 = $('#h22').val(),
	v9 = $('#h31').val(),
	v10 = $('#h32').val(),
	v11 = $('#h41').val(),
	v12 = $('#h42').val(),
	v13 = $('#h51').val(),
	v14 = $('#h52').val(),
	v15 = $('#h61').val(),
	v16 = $('#h62').val(),
	v17 = $('#h71').val(),
	v18 = $('#h72').val(),
	v19 = $('#h81').val(),
	v20 = $('#h82').val(),
	v21 = $('#h91').val(),
	v22 = $('#h92').val(),
	v23 = $('#h101').val(),
	v24 = $('#h102').val(),
	v25 = $('#h111').val(),
	v26 = $('#h112').val(),
	v27 = $('#h121').val(),
	v28 = $('#h122').val(),
	v29 = $('#h131').val(),
	v30 = $('#h132').val(),
	v31 = $('#h141').val(),
	v32 = $('#h142').val(),
	v33 = $('#h151').val(),
	v34 = $('#h152').val(),
	v35 = $('#h161').val(),
	v36 = $('#h162').val(),
	v37 = $('#h171').val(),
	v38 = $('#h172').val(),
	v39 = $('#h181').val(),
	v40 = $('#h182').val(),
	v41 = $('#h191').val(),
	v42 = $('#h192').val(),
	v43 = $('#h201').val(),
	v44 = $('#h202').val(),
	v45 = $('#h211').val(),
	v46 = $('#h212').val(),
	v47 = $('#h221').val(),
	v48 = $('#h222').val(),
	v49 = $('#h231').val(),
	v50 = $('#h232').val(),
	v51 = $('#h241').val(),
	v52 = $('#h242').val(),
	v53 = $('#h251').val(),
	v54 = $('#h252').val(),
	v55 = $('#h261').val(),
	v56 = $('#h262').val(),
	v57 = $('#h271').val(),
	v58 = $('#h272').val(),
	v59 = $('#h281').val(),
	v60 = $('#h282').val(),
	v61 = $('#h291').val(),
	v62 = $('#h292').val(),
	v63 = $('#h301').val(),
	v64 = $('#h302').val(),
	v65 = $('#h311').val(),
	v66 = $('#h312').val(),
	v67 = $('#h321').val(),
	v68 = $('#h322').val(),
	v69 = $('#h331').val(),
	v70 = $('#h332').val(),
	v71 = $('#h341').val(),
	v72 = $('#h342').val(),
	v73 = $('#h351').val(),
	v74 = $('#h352').val(),
	v75 = $('#h361').val(),
	v76 = $('#h362').val(),
	v77 = $('#h371').val(),
	v78 = $('#h372').val(),
	v79 = $('#h381').val(),
	v80 = $('#h382').val(),
	v81 = $('#h391').val(),
	v82 = $('#h392').val(),
	v83 = $('#h401').val(),
	v84 = $('#h402').val(),
	v85 = $('#h411').val(),
	v86 = $('#h412').val(),
	v87 = $('#date').val(),
	v88 = $('#fac').val();

	if ((v1) && (v2) && (v3) && (v4) && (v5) && (v6) && (v7) && (v8) && (v9) && 
		(v10) && (v11) && (v12) && (v13) && (v14) && (v15) && (v16) && (v17) && (v18) && (v19) && 
		(v20) && (v21) && (v22) && (v23) && (v24) && (v25) && (v26) && (v27) && (v28) && (v29) &&
		(v30) && (v31) && (v32) && (v33) && (v34) && (v35) && (v36) && (v37) && (v38) && (v39) &&
		(v40) && (v41) && (v42) && (v43) && (v44) && (v45) && (v46) && (v47) && (v48) && (v49) &&
		(v50) && (v51) && (v52) && (v53) && (v54) && (v55) && (v56) && (v57) && (v58) && (v59) &&
		(v60) && (v61) && (v62) && (v63) && (v64) && (v65) && (v66) && (v67) && (v68) && (v69) &&
		(v70) && (v71) && (v72) && (v73) && (v74) && (v75) && (v76) && (v77) && (v78) && (v79) &&
		(v80) && (v81) && (v82) && (v83) && (v84) && (v85) && (v86) && (v87) && (v88)) {
		if ($('#method_submit').is(':hidden')) {
			$('#method_submit').css('display', 'block');
			$('#method_submit').removeClass('no_click'); //Активирует	
		}

		if ($('#method_submit').is(':visible')) $('#method_submit').removeClass('no_click');
	}

	if ((!v1) || (!v2) || (!v3) || (!v4) || (!v5) || (!v6) || (!v7) || (!v8) || (!v9) || 
		(!v10) || (!v11) || (!v12) || (!v13) || (!v14) || (!v15) || (!v16) || (!v17) || (!v18) || (!v19) || 
		(!v20) || (!v21) || (!v22) || (!v23) || (!v24) || (!v25) || (!v26) || (!v27) || (!v28) || (!v29) ||
		(!v30) || (!v31) || (!v32) || (!v33) || (!v34) || (!v35) || (!v36) || (!v37) || (!v38) || (!v39) ||
		(!v40) || (!v41) || (!v42) || (!v43) || (!v44) || (!v45) || (!v46) || (!v47) || (!v48) || (!v49) ||
		(!v50) || (!v51) || (!v52) || (!v53) || (!v54) || (!v55) || (!v56) || (!v57) || (!v58) || (!v59) ||
		(!v60) || (!v61) || (!v62) || (!v63) || (!v64) || (!v65) || (!v66) || (!v67) || (!v68) || (!v69) ||
		(!v70) || (!v71) || (!v72) || (!v73) || (!v74) || (!v75) || (!v76) || (!v77) || (!v78) || (!v79) ||
		(!v80) || (!v81) || (!v82) || (!v83) || (!v84) || (!v85) || (!v86) || (!v87) || (!v88)) {
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