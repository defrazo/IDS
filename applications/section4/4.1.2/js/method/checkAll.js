$(document).on('ready mousemove change keydown', function() {

	var v1 = $('#mname').val(), 
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
		v15a = $('#f61a').val(),
		v16 = $('#f62').val(),
		v16a = $('#f62a').val(),
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

	var real = [v5, v7, v9, v11, v13, v15, v15a, v17, v19, v21, v23, v25, v27, v29, v31, v33, v35];
	var time1 = 0;	
	$.each(real, function() {
		if (this != '') time1 += parseInt(this);
	});

 	var desir = [v6, v8, v10, v12, v14, v16, v16a, v18, v20, v22, v24, v26, v28, v30, v32, v34, v36];
	var time2 = 0;
	$.each(desir, function() {
		if (this != '') time2 += parseInt(this);
	});

	$('#time1').html(time1 + ' из 480');
	
	$('#time2').html(time2 + ' из 480');

	if ((time1 == 480) && (time2 == 480) && (v1) && (v2) && (v3) && (v4) && (v5) && (v6) && (v7) && (v8) && (v9) && 
		(v10) && (v11) && (v12) && (v13) && (v14) && (v15) && (v15a) && (v16) && (v16a) && (v17) && (v18) && (v19) && 
		(v20) && (v21) && (v22) && (v23) && (v24) && (v25) && (v26) && (v27) && (v28) && (v29) && 
		(v30) && (v31) && (v32) && (v33) && (v34) && (v35) && (v36) && (v37) && (v38)) {
		if ($('#method_submit').is(':hidden')) {
			$('#method_submit').css('display', 'block');
			$('#method_submit').removeClass('no_click');
		}

		if ($('#method_submit').is(':visible')) $('#method_submit').removeClass('no_click');
	}

	if ((time1 != 480) || (time2 != 480) && (!v1) || (!v2) || (!v3) || (!v4) || (!v5) || (!v6) || (!v7) || (!v8) || (!v9) || 
		(!v10) || (!v11) || (!v12) || (!v13) || (!v14) || (!v15) || (!v15a) || (!v16) || (!v16a) || (!v17) || (!v18) || (!v19) || 
		(!v20) || (!v21) || (!v22) || (!v23) || (!v24) || (!v25) || (!v26) || (!v27) || (!v28) || (!v29) || 
		(!v30) || (!v31) || (!v32) || (!v33) || (!v34) || (!v35) || (!v36) || (!v37) || (!v38)) {
		$('#method_submit').addClass('no_click');
		if ($('#method_submit').is(':visible')) $('#method_submit').css('display', 'none');
	}
});

function valide() {
	$('#method_submit').addClass('no_click');
	return false;
};