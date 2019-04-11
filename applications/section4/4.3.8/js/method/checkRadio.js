$(document).on('ready mousemove change', function() {

	$("input[name=x1]").on('click', function() {
		v1 = $('input[name=x1]:checked').val();
		if (v1 == 0.01) $('#tbl1').css('background', '#00BCD4'); else $('#tbl1').css('background', '#f1f1f1');
		if (v1 == 0.02) $('#tbl2').css('background', '#00BCD4'); else $('#tbl2').css('background', '#f1f1f1');
		if (v1 == 0.03) $('#tbl3').css('background', '#00BCD4'); else $('#tbl3').css('background', '#f1f1f1');
		if (v1 == 1) $('#tbl4').css('background', '#00BCD4'); else $('#tbl4').css('background', '#f1f1f1');
		if (v1 == 0.05) $('#tbl5').css('background', '#00BCD4'); else $('#tbl5').css('background', '#f1f1f1');
	});

	$("input[name=x2]").on('click', function() {
		v2 = $('input[name=x2]:checked').val();
		if (v2 == 0.01) $('#tbl6').css('background', '#00BCD4'); else $('#tbl6').css('background', '#f1f1f1');
		if (v2 == 1) $('#tbl7').css('background', '#00BCD4'); else $('#tbl7').css('background', '#f1f1f1');
		if (v2 == 0.03) $('#tbl8').css('background', '#00BCD4'); else $('#tbl8').css('background', '#f1f1f1');
		if (v2 == 0.04) $('#tbl9').css('background', '#00BCD4'); else $('#tbl9').css('background', '#f1f1f1');
		if (v2 == 0.05) $('#tbl10').css('background', '#00BCD4'); else $('#tbl10').css('background', '#f1f1f1');
	});

	$("input[name=x3]").on('click', function() {
		v3 = $('input[name=x3]:checked').val();
		if (v3 == 0.01) $('#tbl11').css('background', '#00BCD4'); else $('#tbl11').css('background', '#f1f1f1');
		if (v3 == 0.02) $('#tbl12').css('background', '#00BCD4'); else $('#tbl12').css('background', '#f1f1f1');
		if (v3 == 0.03) $('#tbl13').css('background', '#00BCD4'); else $('#tbl13').css('background', '#f1f1f1');
		if (v3 == 1) $('#tbl14').css('background', '#00BCD4'); else $('#tbl14').css('background', '#f1f1f1');
		if (v3 == 0.05) $('#tbl15').css('background', '#00BCD4'); else $('#tbl15').css('background', '#f1f1f1');
	});

	$("input[name=x4]").on('click', function() {
		v4 = $('input[name=x4]:checked').val();
		if (v4 == 0.01) $('#tbl16').css('background', '#00BCD4'); else $('#tbl16').css('background', '#f1f1f1');
		if (v4 == 0.02) $('#tbl17').css('background', '#00BCD4'); else $('#tbl17').css('background', '#f1f1f1');
		if (v4 == 0.03) $('#tbl18').css('background', '#00BCD4'); else $('#tbl18').css('background', '#f1f1f1');
		if (v4 == 1) $('#tbl19').css('background', '#00BCD4'); else $('#tbl19').css('background', '#f1f1f1');
		if (v4 == 0.05) $('#tbl20').css('background', '#00BCD4'); else $('#tbl20').css('background', '#f1f1f1');
	});

	$("input[name=x5]").on('click', function() {
		v5 = $('input[name=x5]:checked').val();
		if (v5 == 0.01) $('#tbl21').css('background', '#00BCD4'); else $('#tbl21').css('background', '#f1f1f1');
		if (v5 == 0.02) $('#tbl22').css('background', '#00BCD4'); else $('#tbl22').css('background', '#f1f1f1');
		if (v5 == 0.03) $('#tbl23').css('background', '#00BCD4'); else $('#tbl23').css('background', '#f1f1f1');
		if (v5 == 0.04) $('#tbl24').css('background', '#00BCD4'); else $('#tbl24').css('background', '#f1f1f1');
		if (v5 == 1) $('#tbl25').css('background', '#00BCD4'); else $('#tbl25').css('background', '#f1f1f1');
	});

	$("input[name=x6]").on('click', function() {
		v6 = $('input[name=x6]:checked').val();
		if (v6 == 0.01) $('#tbl26').css('background', '#00BCD4'); else $('#tbl26').css('background', '#f1f1f1');
		if (v6 == 0.02) $('#tbl27').css('background', '#00BCD4'); else $('#tbl27').css('background', '#f1f1f1');
		if (v6 == 1) $('#tbl28').css('background', '#00BCD4'); else $('#tbl28').css('background', '#f1f1f1');
		if (v6 == 0.04) $('#tbl29').css('background', '#00BCD4'); else $('#tbl29').css('background', '#f1f1f1');
		if (v6 == 0.05) $('#tbl30').css('background', '#00BCD4'); else $('#tbl30').css('background', '#f1f1f1');
	});

	$("input[name=x7]").on('click', function() {
		v7 = $('input[name=x7]:checked').val();
		if (v7 == 0.01) $('#tbl31').css('background', '#00BCD4'); else $('#tbl31').css('background', '#f1f1f1');
		if (v7 == 0.02) $('#tbl32').css('background', '#00BCD4'); else $('#tbl32').css('background', '#f1f1f1');
		if (v7 == 0.03) $('#tbl33').css('background', '#00BCD4'); else $('#tbl33').css('background', '#f1f1f1');
		if (v7 == 1) $('#tbl34').css('background', '#00BCD4'); else $('#tbl34').css('background', '#f1f1f1');
		if (v7 == 0.05) $('#tbl35').css('background', '#00BCD4'); else $('#tbl35').css('background', '#f1f1f1');
	});

	$("input[name=x8]").on('click', function() {
		v8 = $('input[name=x8]:checked').val();
		if (v8 == 0.01) $('#tbl36').css('background', '#00BCD4'); else $('#tbl36').css('background', '#f1f1f1');
		if (v8 == 1) $('#tbl37').css('background', '#00BCD4'); else $('#tbl37').css('background', '#f1f1f1');
		if (v8 == 0.03) $('#tbl38').css('background', '#00BCD4'); else $('#tbl38').css('background', '#f1f1f1');
		if (v8 == 0.04) $('#tbl39').css('background', '#00BCD4'); else $('#tbl39').css('background', '#f1f1f1');
		if (v8 == 0.05) $('#tbl40').css('background', '#00BCD4'); else $('#tbl40').css('background', '#f1f1f1');
	});

	$("input[name=x9]").on('click', function() {
		v9 = $('input[name=x9]:checked').val();
		if (v9 == 0.01) $('#tbl41').css('background', '#00BCD4'); else $('#tbl41').css('background', '#f1f1f1');
		if (v9 == 0.02) $('#tbl42').css('background', '#00BCD4'); else $('#tbl42').css('background', '#f1f1f1');
		if (v9 == 0.03) $('#tbl43').css('background', '#00BCD4'); else $('#tbl43').css('background', '#f1f1f1');
		if (v9 == 1) $('#tbl44').css('background', '#00BCD4'); else $('#tbl44').css('background', '#f1f1f1');
		if (v9 == 0.05) $('#tbl45').css('background', '#00BCD4'); else $('#tbl45').css('background', '#f1f1f1');
	});

	$("input[name=x10]").on('click', function() {
		v10 = $('input[name=x10]:checked').val();
		if (v10 == 0.01) $('#tbl46').css('background', '#00BCD4'); else $('#tbl46').css('background', '#f1f1f1');
		if (v10 == 0.02) $('#tbl47').css('background', '#00BCD4'); else $('#tbl47').css('background', '#f1f1f1');
		if (v10 == 1) $('#tbl48').css('background', '#00BCD4'); else $('#tbl48').css('background', '#f1f1f1');
		if (v10 == 0.04) $('#tbl49').css('background', '#00BCD4'); else $('#tbl49').css('background', '#f1f1f1');
		if (v10 == 0.05) $('#tbl50').css('background', '#00BCD4'); else $('#tbl50').css('background', '#f1f1f1');
	});

	$("input[name=x11]").on('click', function() {
		v11 = $('input[name=x11]:checked').val();
		if (v11 == 0.01) $('#tbl51').css('background', '#00BCD4'); else $('#tbl51').css('background', '#f1f1f1');
		if (v11 == 0.02) $('#tbl52').css('background', '#00BCD4'); else $('#tbl52').css('background', '#f1f1f1');
		if (v11 == 0.03) $('#tbl53').css('background', '#00BCD4'); else $('#tbl53').css('background', '#f1f1f1');
		if (v11 == 1) $('#tbl54').css('background', '#00BCD4'); else $('#tbl54').css('background', '#f1f1f1');
		if (v11 == 0.05) $('#tbl55').css('background', '#00BCD4'); else $('#tbl55').css('background', '#f1f1f1');
	});

	$("input[name=x12]").on('click', function() {
		v12 = $('input[name=x12]:checked').val();
		if (v12 == 0.01) $('#tbl56').css('background', '#00BCD4'); else $('#tbl56').css('background', '#f1f1f1');
		if (v12 == 0.02) $('#tbl57').css('background', '#00BCD4'); else $('#tbl57').css('background', '#f1f1f1');
		if (v12 == 1) $('#tbl58').css('background', '#00BCD4'); else $('#tbl58').css('background', '#f1f1f1');
		if (v12 == 0.04) $('#tbl59').css('background', '#00BCD4'); else $('#tbl59').css('background', '#f1f1f1');
		if (v12 == 0.05) $('#tbl60').css('background', '#00BCD4'); else $('#tbl60').css('background', '#f1f1f1');
	});

	$("input[name=x13]").on('click', function() {
		v13 = $('input[name=x13]:checked').val();
		if (v13 == 0.01) $('#tbl61').css('background', '#00BCD4'); else $('#tbl61').css('background', '#f1f1f1');
		if (v13 == 0.02) $('#tbl62').css('background', '#00BCD4'); else $('#tbl62').css('background', '#f1f1f1');
		if (v13 == 1) $('#tbl63').css('background', '#00BCD4'); else $('#tbl63').css('background', '#f1f1f1');
		if (v13 == 0.04) $('#tbl64').css('background', '#00BCD4'); else $('#tbl64').css('background', '#f1f1f1');
		if (v13 == 0.05) $('#tbl65').css('background', '#00BCD4'); else $('#tbl65').css('background', '#f1f1f1');
	});

	$("input[name=x14]").on('click', function() {
		v14 = $('input[name=x14]:checked').val();
		if (v14 == 0.01) $('#tbl66').css('background', '#00BCD4'); else $('#tbl66').css('background', '#f1f1f1');
		if (v14 == 0.02) $('#tbl67').css('background', '#00BCD4'); else $('#tbl67').css('background', '#f1f1f1');
		if (v14 == 0.03) $('#tbl68').css('background', '#00BCD4'); else $('#tbl68').css('background', '#f1f1f1');
		if (v14 == 0.04) $('#tbl69').css('background', '#00BCD4'); else $('#tbl69').css('background', '#f1f1f1');
		if (v14 == 1) $('#tbl70').css('background', '#00BCD4'); else $('#tbl70').css('background', '#f1f1f1');
	});

	$("input[name=x15]").on('click', function() {
		v15 = $('input[name=x15]:checked').val();
		if (v15 == 0.01) $('#tbl71').css('background', '#00BCD4'); else $('#tbl71').css('background', '#f1f1f1');
		if (v15 == 0.02) $('#tbl72').css('background', '#00BCD4'); else $('#tbl72').css('background', '#f1f1f1');
		if (v15 == 0.03) $('#tbl73').css('background', '#00BCD4'); else $('#tbl73').css('background', '#f1f1f1');
		if (v15 == 1) $('#tbl74').css('background', '#00BCD4'); else $('#tbl74').css('background', '#f1f1f1');
		if (v15 == 0.05) $('#tbl75').css('background', '#00BCD4'); else $('#tbl75').css('background', '#f1f1f1');
	});

	$("input[name=x16]").on('click', function() {
		v16 = $('input[name=x16]:checked').val();
		if (v16 == 0.01) $('#tbl76').css('background', '#00BCD4'); else $('#tbl76').css('background', '#f1f1f1');
		if (v16 == 0.02) $('#tbl77').css('background', '#00BCD4'); else $('#tbl77').css('background', '#f1f1f1');
		if (v16 == 0.03) $('#tbl78').css('background', '#00BCD4'); else $('#tbl78').css('background', '#f1f1f1');
		if (v16 == 1) $('#tbl79').css('background', '#00BCD4'); else $('#tbl79').css('background', '#f1f1f1');
		if (v16 == 0.05) $('#tbl80').css('background', '#00BCD4'); else $('#tbl80').css('background', '#f1f1f1');
	});

	$("input[name=x17]").on('click', function() {
		v17 = $('input[name=x17]:checked').val();
		if (v17 == 0.01) $('#tbl81').css('background', '#00BCD4'); else $('#tbl81').css('background', '#f1f1f1');
		if (v17 == 0.02) $('#tbl82').css('background', '#00BCD4'); else $('#tbl82').css('background', '#f1f1f1');
		if (v17 == 0.03) $('#tbl83').css('background', '#00BCD4'); else $('#tbl83').css('background', '#f1f1f1');
		if (v17 == 0.04) $('#tbl84').css('background', '#00BCD4'); else $('#tbl84').css('background', '#f1f1f1');
		if (v17 == 1) $('#tbl85').css('background', '#00BCD4'); else $('#tbl85').css('background', '#f1f1f1');
	});
});