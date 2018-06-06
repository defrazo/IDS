$(document).on('ready mousemove change', function() {

	var v1 = $('#mname').val(), 
		v2 = $('#fname').val(),
		v3 = $('#sname').val(),
		v4 = $('input[name="gender"]').is(':checked'),
		v5 = $('#p11').val(),
		v6 = $('#p12').val(),
		v7 = $('#p21').val(),
		v8 = $('#p22').val(),
		v9 = $('#p31').val(),
		v10 = $('#p32').val(),
		v11 = $('#p41').val(),
		v12 = $('#p42').val(),
		v13 = $('#p51').val(),
		v14 = $('#p52').val(),
		v15 = $('#p61').val(),
		v16 = $('#p62').val(),
		v17 = $('#p71').val(),
		v18 = $('#p72').val(),
		v19 = $('#p81').val(),
		v20 = $('#p82').val(),
		v21 = $('#p91').val(),
		v22 = $('#p92').val(),
		v23 = $('#p101').val(),
		v24 = $('#p102').val(),
		v25 = $('#p111').val(),
		v26 = $('#p112').val(),
		v27 = $('#p121').val(),
		v28 = $('#p122').val(),
		v29 = $('#p131').val(),
		v30 = $('#p132').val(),
		v31 = $('#p141').val(),
		v32 = $('#p142').val(),
		v33 = $('#p151').val(),
		v34 = $('#p152').val(),
		v35 = $('#p161').val(),
		v36 = $('#p162').val(),
		v37 = $('#p171').val(),
		v38 = $('#p172').val(),
		v39 = $('#p181').val(),
		v40 = $('#p182').val(),
		v41 = $('#p191').val(),
		v42 = $('#p192').val(),
		v43 = $('#p201').val(),
		v44 = $('#p202').val(),
		v45 = $('#date').val(),
		v46 = $('#fac').val();

	var sel = $('.ranks'),
    opt = $('option:not(:first-child)', sel);

	function review(){
	    var chosen = sel.map(function(i, el){
	        return $(':selected',el);
	    });
	    var rankID = 0;
	    opt.show();
	    chosen.each(function(i, el){
	        rankID = $(el).val();
	        opt.not(el).filter(function(){
	            return $(this).val() == rankID;
	        }).hide();
	    });
	    return false;
	}

	sel.on('change',review);

	var sel2 = $('.ranks2'),
    opt2 = $('option:not(:first-child)', sel2);

	function review2(){
	    var chosen = sel2.map(function(i, el){
	        return $(':selected',el);
	    });
	    var rankID = 0;
	    opt2.show();
	    chosen.each(function(i, el){
	        rankID = $(el).val();
	        opt2.not(el).filter(function(){
	            return $(this).val() == rankID;
	        }).hide();
	    });
	    return false;
	}

	sel2.on('change',review2);

	if ((v1) && (v2) && (v3) && (v4) && (v5) && (v6) && (v7) && (v8) && (v9) && 
		(v10) && (v11) && (v12) && (v13) && (v14) && (v15) && (v16) && (v17) && (v18) && (v19) && 
		(v20) && (v21) && (v22) && (v23) && (v24) && (v25) && (v26) && (v27) && (v28) && (v29) &&
		(v30) && (v31) && (v32) && (v33) && (v34) && (v35) && (v36) && (v37) && (v38) && (v39) && 
		(v40) && (v41) && (v42) && (v43) && (v44) && (v45) && (v46)) {
		if ($('#method_submit').is(':hidden')) {
			$('#method_submit').css('display', 'block');
			$('#method_submit').removeClass('no_click');	
		}

		if ($('#method_submit').is(':visible')) $('#method_submit').removeClass('no_click');
	}

	if ((!v1) || (!v2) || (!v3) || (!v4) || (!v5) || (!v6) || (!v7) || (!v8) || (!v9) || 
		(!v10) || (!v11) || (!v12) || (!v13) || (!v14) || (!v15) || (!v16) || (!v17) || (!v18) || (!v19) || 
		(!v20) || (!v21) || (!v22) || (!v23) || (!v24) || (!v25) || (!v26) || (!v27) || (!v28) || (!v29) ||
		(!v30) || (!v31) || (!v32) || (!v33) || (!v34) || (!v35) || (!v36) || (!v37) || (!v38) || (!v39) || 
		(!v40) || (!v41) || (!v42) || (!v43) || (!v44) || (!v45) || (!v46)) {
		$('#method_submit').addClass('no_click');
		if ($('#method_submit').is(':visible')) $('#method_submit').css('display', 'none');
	}
});

function valide() {
	$('#method_submit').addClass('no_click');
	return false;
};