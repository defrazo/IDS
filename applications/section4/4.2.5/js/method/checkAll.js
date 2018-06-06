$(document).on('ready mousemove change', function() {

	var v1 = $('#mname').val(), 
		v2 = $('#fname').val(),
		v3 = $('#sname').val(),
		v4 = $('input[name="gender"]').is(':checked'),
		v5 = $("input[name=n1]:checked").is(':checked'),
		v6 = $("input[name=n2]:checked").is(':checked'),
		v7 = $("input[name=n3]:checked").is(':checked'),
		v8 = $("input[name=n4]:checked").is(':checked'),
		v9 = $("input[name=n5]:checked").is(':checked'),
		v10 = $("input[name=n6]:checked").is(':checked'),
		v11 = $("input[name=n7]:checked").is(':checked'),
		v12 = $("input[name=n8]:checked").is(':checked'),
		v13 = $("input[name=n9]:checked").is(':checked'),
		v14 = $("input[name=n10]:checked").is(':checked'),
		v15 = $("input[name=n11]:checked").is(':checked'),
		v16 = $("input[name=n12]:checked").is(':checked'),
		v17 = $("input[name=n13]:checked").is(':checked'),
		v18 = $("input[name=n14]:checked").is(':checked'),
		v19 = $("input[name=n15]:checked").is(':checked'),
		v20 = $("input[name=n16]:checked").is(':checked'),
		v21 = $('#date').val(),
		v22 = $('#fac').val();
	
	if ((v1) && (v2) && (v3) && (v4) && (v5) && (v6) && (v7) && (v8) && (v9) && (v10) && 
		(v11) && (v12) && (v13) && (v14) && (v15) && (v16) && (v17) && (v18) && (v19) && (v20) && (v21) && (v22)) {
		if ($('#method_submit').is(':hidden')) {
			$('#method_submit').css('display', 'block');
			$('#method_submit').removeClass('no_click');
		}

		if ($('#method_submit').is(':visible')) $('#method_submit').removeClass('no_click');
	}

	if ((!v1) || (!v2) || (!v3) || (!v4) || (!v5) || (!v6) || (!v7) || (!v8) || (!v9) || (!v10) || 
		(!v11) || (!v12) || (!v13) || (!v14) || (!v15) || (!v16) || (!v17) || (!v18) || (!v19) || (!v20) || (!v21) || (!v22)) {
		$('#method_submit').addClass('no_click');
		if ($('#method_submit').is(':visible')) $('#method_submit').css('display', 'none');
	}

	if (v20) {
		if (!v5) $("#d1").addClass("error_designation");
		else $("#d1").removeClass("error_designation");

		if (!v6) $("#d2").addClass("error_designation");
		else $("#d2").removeClass("error_designation");

		if (!v7) $("#d3").addClass("error_designation");
		else $("#d3").removeClass("error_designation");

		if (!v8) $("#d4").addClass("error_designation");
		else $("#d4").removeClass("error_designation");

		if (!v9) $("#d5").addClass("error_designation");
		else $("#d5").removeClass("error_designation");

		if ((!v5) || (!v6) || (!v7) || (!v8) || (!v9)) $("#tab2").addClass("error_radio");
		else $("#tab2").removeClass("error_radio");
		
		if (!v10) $("#d6").addClass("error_designation");
		else $("#d6").removeClass("error_designation");

		if (!v11) $("#d7").addClass("error_designation");
		else $("#d7").removeClass("error_designation");

		if (!v12) $("#d8").addClass("error_designation");
		else $("#d8").removeClass("error_designation");

		if (!v13) $("#d9").addClass("error_designation");
		else $("#d9").removeClass("error_designation");

		if (!v14) $("#d10").addClass("error_designation");
		else $("#d10").removeClass("error_designation");

		if ((!v10) || (!v11) || (!v12) || (!v13) || (!v14)) $("#tab3").addClass("error_radio");
		else $("#tab3").removeClass("error_radio");

		if (!v15) $("#d11").addClass("error_designation");
		else $("#d11").removeClass("error_designation");

		if (!v16) $("#d12").addClass("error_designation");
		else $("#d12").removeClass("error_designation");

		if (!v17) $("#d13").addClass("error_designation");
		else $("#d13").removeClass("error_designation");

		if (!v18) $("#d14").addClass("error_designation");
		else $("#d14").removeClass("error_designation");

		if (!v19) $("#d15").addClass("error_designation");
		else $("#d15").removeClass("error_designation");

		if (!v20) $("#d16").addClass("error_designation");
		else $("#d16").removeClass("error_designation");

		if ((!v15) || (!v16) || (!v17) || (!v18) || (!v19) || (!v20)) $("#tab4").addClass("error_radio");
		else $("#tab4").removeClass("error_radio");
	}

	$('input:radio[name="n1"]').change(function() {
		n1 = $("input[name='n1']:checked").val();
		if (n1 == 1) $('input:radio[name="n2"]').filter('[value="0"]').prop('checked',true); 
		if (n1 == 0) $('input:radio[name="n2"]').filter('[value="1"]').prop('checked',true); 
	});
	
	$('input:radio[name="n2"]').change(function() {
		n2 = $("input[name='n2']:checked").val();
		if (n2 == 1) $('input:radio[name="n1"]').filter('[value="0"]').prop('checked',true);
		if (n2 == 0) $('input:radio[name="n1"]').filter('[value="1"]').prop('checked',true);
	});

	$('input:radio[name="n3"]').change(function() {
		n3 = $("input[name='n3']:checked").val();
		if (n3 == 1) $('input:radio[name="n4"]').filter('[value="0"]').prop('checked',true); 
		if (n3 == 0) $('input:radio[name="n4"]').filter('[value="1"]').prop('checked',true); 
	});
	
	$('input:radio[name="n4"]').change(function() {
		n4 = $("input[name='n4']:checked").val();
		if (n4 == 1) $('input:radio[name="n3"]').filter('[value="0"]').prop('checked',true);
		if (n4 == 0) $('input:radio[name="n3"]').filter('[value="1"]').prop('checked',true);
	});

	$('input:radio[name="n5"]').change(function() {
		n5 = $("input[name='n5']:checked").val();
		if (n5 == 1) $('input:radio[name="n6"]').filter('[value="0"]').prop('checked',true); 
		if (n5 == 0) $('input:radio[name="n6"]').filter('[value="1"]').prop('checked',true); 
	});
	
	$('input:radio[name="n6"]').change(function() {
		n6 = $("input[name='n6']:checked").val();
		if (n6 == 1) $('input:radio[name="n5"]').filter('[value="0"]').prop('checked',true);
		if (n6 == 0) $('input:radio[name="n5"]').filter('[value="1"]').prop('checked',true);
	});

	$('input:radio[name="n7"]').change(function() {
		n7 = $("input[name='n7']:checked").val();
		if (n7 == 1) $('input:radio[name="n8"]').filter('[value="0"]').prop('checked',true); 
		if (n7 == 0) $('input:radio[name="n8"]').filter('[value="1"]').prop('checked',true); 
	});
	
	$('input:radio[name="n8"]').change(function() {
		n8 = $("input[name='n8']:checked").val();
		if (n8 == 1) $('input:radio[name="n7"]').filter('[value="0"]').prop('checked',true);
		if (n8 == 0) $('input:radio[name="n7"]').filter('[value="1"]').prop('checked',true);
	});

	$('input:radio[name="n9"]').change(function() {
		n9 = $("input[name='n9']:checked").val();
		if (n9 == 1) $('input:radio[name="n10"]').filter('[value="0"]').prop('checked',true); 
		if (n9 == 0) $('input:radio[name="n10"]').filter('[value="1"]').prop('checked',true); 
	});
	
	$('input:radio[name="n10"]').change(function() {
		n10 = $("input[name='n10']:checked").val();
		if (n10 == 1) $('input:radio[name="n9"]').filter('[value="0"]').prop('checked',true);
		if (n10 == 0) $('input:radio[name="n9"]').filter('[value="1"]').prop('checked',true);
	});

	$('input:radio[name="n11"]').change(function() {
		n11 = $("input[name='n11']:checked").val();
		if (n11 == 1) $('input:radio[name="n12"]').filter('[value="0"]').prop('checked',true); 
		if (n11 == 0) $('input:radio[name="n12"]').filter('[value="1"]').prop('checked',true); 
	});
	
	$('input:radio[name="n12"]').change(function() {
		n12 = $("input[name='n12']:checked").val();
		if (n12 == 1) $('input:radio[name="n11"]').filter('[value="0"]').prop('checked',true);
		if (n12 == 0) $('input:radio[name="n11"]').filter('[value="1"]').prop('checked',true);
	});

	$('input:radio[name="n13"]').change(function() {
		n13 = $("input[name='n13']:checked").val();
		if (n13 == 1) $('input:radio[name="n14"]').filter('[value="0"]').prop('checked',true); 
		if (n13 == 0) $('input:radio[name="n14"]').filter('[value="1"]').prop('checked',true); 
	});
	
	$('input:radio[name="n14"]').change(function() {
		n14 = $("input[name='n14']:checked").val();
		if (n14 == 1) $('input:radio[name="n13"]').filter('[value="0"]').prop('checked',true);
		if (n14 == 0) $('input:radio[name="n13"]').filter('[value="1"]').prop('checked',true);
	});

	$('input:radio[name="n15"]').change(function() {
		n15 = $("input[name='n15']:checked").val();
		if (n15 == 1) $('input:radio[name="n16"]').filter('[value="0"]').prop('checked',true); 
		if (n15 == 0) $('input:radio[name="n16"]').filter('[value="1"]').prop('checked',true); 
	});
	
	$('input:radio[name="n16"]').change(function() {
		n16 = $("input[name='n16']:checked").val();
		if (n16 == 1) $('input:radio[name="n15"]').filter('[value="0"]').prop('checked',true);
		if (n16 == 0) $('input:radio[name="n15"]').filter('[value="1"]').prop('checked',true);
	});
});

function valide() {
	$('#method_submit').addClass('no_click');
	return false;
};

