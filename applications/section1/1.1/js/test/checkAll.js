$(document).on('ready mousemove change', function() {

	var v1 = $("input[name=a1]:checked").is(':checked'),
		v2 = $("input[name=a2]:checked").is(':checked'),
		v3 = $("input[name=a3]:checked").is(':checked'),
		v4 = $("input[name=a4]:checked").is(':checked'),
		v5 = $("input[name=a5]:checked").is(':checked'),
		v6 = $("input[name=a6]:checked").is(':checked'),
		v7 = $("input[name=a7]:checked").is(':checked'),
		v8 = $("input[name=a8]:checked").is(':checked'),
		v9 = $("input[name=a9]:checked").is(':checked'),
		v10 = $("input[name=a10]:checked").is(':checked'),
		v11 = $("input[name=a11]:checked").is(':checked'),
		v12 = $("input[name=a12]:checked").is(':checked'),
		v13 = $("input[name=a13]:checked").is(':checked'),
		v14 = $("input[name=a14]:checked").is(':checked'),
		v15 = $("input[name=a15]:checked").is(':checked'),
		v16 = $("input[name=a16]:checked").is(':checked'),
		v17 = $("input[name=a17]:checked").is(':checked'),
		v18 = $("input[name=a18]:checked").is(':checked'),
		v19 = $("input[name=a19]:checked").is(':checked'),
		v20 = $("input[name=a20]:checked").is(':checked'),
		v21 = $("input[name=a21]:checked").is(':checked'),
		v22 = $("input[name=a22]:checked").is(':checked'),
		v23 = $("input[name=a23]:checked").is(':checked'),
		v24 = $("input[name=a24]:checked").is(':checked'),
		v25 = $("input[name=a25]:checked").is(':checked'),
		v26 = $("input[name=a26]:checked").is(':checked'),
		v27 = $("input[name=a27]:checked").is(':checked'),
		v28 = $("input[name=a28]:checked").is(':checked'),
		v29 = $("input[name=a29]:checked").is(':checked');

	if ((v1) && (v2) && (v3) && (v4) && (v5) && (v6) && (v7) && (v8) && (v9) && (v10) && 
		(v11) && (v12) && (v13) && (v14) && (v15) && (v16) && (v17) && (v18) && (v19) && 
		(v20) && (v21) && (v22) && (v23) && (v24) && (v25) && (v26) && (v27) && (v28) && (v29)) {
		if ($("#test_submit").is(":hidden")) $("#test_submit").css("display", "block");
	}

	if (v29) {
		if (!v1) $("#d1").addClass("error_designation");
		else $("#d1").removeClass("error_designation");

		if (!v2) $("#d2").addClass("error_designation");
		else $("#d2").removeClass("error_designation");

		if (!v3) $("#d3").addClass("error_designation");
		else $("#d3").removeClass("error_designation");

		if (!v4) $("#d4").addClass("error_designation");
		else $("#d4").removeClass("error_designation");

		if (!v5) $("#d5").addClass("error_designation");
		else $("#d5").removeClass("error_designation");

		if ((!v1) || (!v2) || (!v3) || (!v4) || (!v5)) $("#tab0").addClass("error_radio");
		else $("#tab0").removeClass("error_radio");
		
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