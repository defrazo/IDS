$(document).on('ready mousemove change', function() {

	var v1 = $('#mname').val(), 
		v2 = $('#fname').val(),
		v3 = $('#sname').val(),
		v4 = $('input[name="gender"]').is(':checked'),
		v5 = $('#i11').val(),
		v6 = $('#i12').val(),
		v7 = $('#i21').val(),
		v8 = $('#i22').val(),
		v9 = $('#i31').val(),
		v10 = $('#i32').val(),
		v11 = $('#i41').val(),
		v12 = $('#i42').val(),
		v13 = $('#i51').val(),
		v14 = $('#i52').val(),
		v15 = $('#i61').val(),
		v16 = $('#i62').val(),
		v17 = $('#i71').val(),
		v18 = $('#i72').val(),
		v19 = $('#i81').val(),
		v20 = $('#i82').val(),
		v21 = $('#i91').val(),
		v22 = $('#i92').val(),
		v23 = $('#i101').val(),
		v24 = $('#i102').val(),
		v25 = $('#i111').val(),
		v26 = $('#i112').val(),
		v27 = $('#i121').val(),
		v28 = $('#i122').val(),
		v29 = $('#date').val(),
		v30 = $('#fac').val();

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

	if ((v1) && (v2) && (v3) && (v4) && (v5) && (v6) && (v7) && (v8) && (v9) && 
		(v10) && (v11) && (v12) && (v13) && (v14) && (v15) && (v16) && (v17) && (v18) && (v19) && 
		(v20) && (v21) && (v22) && (v23) && (v24) && (v25) && (v26) && (v27) && (v28) && (v29) &&
		(v30)) {
		if ($('#method_submit').is(':hidden')) {
			$('#method_submit').css('display', 'block');
			$('#method_submit').removeClass('no_click');	
		}

		if ($('#method_submit').is(':visible')) $('#method_submit').removeClass('no_click');
	}

	if ((!v1) || (!v2) || (!v3) || (!v4) || (!v5) || (!v6) || (!v7) || (!v8) || (!v9) || 
		(!v10) || (!v11) || (!v12) || (!v13) || (!v14) || (!v15) || (!v16) || (!v17) || (!v18) || (!v19) || 
		(!v20) || (!v21) || (!v22) || (!v23) || (!v24) || (!v25) || (!v26) || (!v27) || (!v28) || (!v29) ||
		(!v30)) {
		$('#method_submit').addClass('no_click');
		if ($('#method_submit').is(':visible')) $('#method_submit').css('display', 'none');
	}
});

function valide() {
	$('#method_submit').addClass('no_click');
	return false;
};