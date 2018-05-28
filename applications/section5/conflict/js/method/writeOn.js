function get_data() { //Вносит заполненные данные из полей формы в localStorage
	
	var date = $('#date').val();
	if (date != '') localStorage.setItem('dateinp', date);

	var gender = $('input[name="gender"]:checked').val();
	if (gender != '') localStorage.setItem('genderinp', gender);

	var sname = $('#sname').val();
	if (sname != '') localStorage.setItem('snameinp', sname);
	
	var fname = $('#fname').val();
	if (fname != '') localStorage.setItem('fnameinp', fname);

	var mname = $('#mname').val();
	if (mname != '') localStorage.setItem('mnameinp', mname);

	var fac = $('#fac').val();
	if (fac != '') localStorage.setItem('facinp', fac);

	var ad1 = $("input[name='ad1']:checked").val();
	if (ad1) localStorage.setItem("ad1inp", ad1);
	
	var ad2 = $("input[name='ad2']:checked").val();
	if (ad2) localStorage.setItem("ad2inp", ad2);
	
	var ad3 = $("input[name='ad3']:checked").val();
	if (ad3) localStorage.setItem("ad3inp", ad3);
	
	var ad4 = $("input[name='ad4']:checked").val();
	if (ad4) localStorage.setItem("ad4inp", ad4);
	
	var ad5 = $("input[name='ad5']:checked").val();
	if (ad5) localStorage.setItem("ad5inp", ad5);
	
	var ad6 = $("input[name='ad6']:checked").val();
	if (ad6) localStorage.setItem("ad6inp", ad6);

	var ad7 = $("input[name='ad7']:checked").val();
	if (ad7) localStorage.setItem("ad7inp", ad7);

	var ad8 = $("input[name='ad8']:checked").val();
	if (ad8) localStorage.setItem("ad8inp", ad8);

	var ad9 = $("input[name='ad9']:checked").val();
	if (ad9) localStorage.setItem("ad9inp", ad9);

	var ad10 = $("input[name='ad10']:checked").val();
	if (ad10) localStorage.setItem("ad10inp", ad10);

	var ad11 = $("input[name='ad11']:checked").val();
	if (ad11) localStorage.setItem("ad11inp", ad11);

	var ad12 = $("input[name='ad12']:checked").val();
	if (ad12) localStorage.setItem("ad12inp", ad12);

	var ad13 = $("input[name='ad13']:checked").val();
	if (ad13) localStorage.setItem("ad13inp", ad13);

	var ad14 = $("input[name='ad14']:checked").val();
	if (ad14) localStorage.setItem("ad14inp", ad14);

	var ad15 = $("input[name='ad15']:checked").val();
	if (ad15) localStorage.setItem("ad15inp", ad15);

	var ad16 = $("input[name='ad16']:checked").val();
	if (ad16) localStorage.setItem("ad16inp", ad16);

	var ad17 = $("input[name='ad17']:checked").val();
	if (ad17) localStorage.setItem("ad17inp", ad17);

	var ad18 = $("input[name='ad18']:checked").val();
	if (ad18) localStorage.setItem("ad18inp", ad18);

	var ad19 = $("input[name='ad19']:checked").val();
	if (ad19) localStorage.setItem("ad19inp", ad19);

	var ad20 = $("input[name='ad20']:checked").val();
	if (ad20) localStorage.setItem("ad20inp", ad20);

	var ad21 = $("input[name='ad21']:checked").val();
	if (ad21) localStorage.setItem("ad21inp", ad21);

	var ad22 = $("input[name='ad22']:checked").val();
	if (ad22) localStorage.setItem("ad22inp", ad22);

	var ad23 = $("input[name='ad23']:checked").val();
	if (ad23) localStorage.setItem("ad23inp", ad23);

	var ad24 = $("input[name='ad24']:checked").val();
	if (ad24) localStorage.setItem("ad24inp", ad24);

	var ad25 = $("input[name='ad25']:checked").val();
	if (ad25) localStorage.setItem("ad25inp", ad25);

	var ad26 = $("input[name='ad26']:checked").val();
	if (ad26) localStorage.setItem("ad26inp", ad26);

	var ad27 = $("input[name='ad27']:checked").val();
	if (ad27) localStorage.setItem("ad27inp", ad27);

	var ad28 = $("input[name='ad28']:checked").val();
	if (ad28) localStorage.setItem("ad28inp", ad28);

	var ad29 = $("input[name='ad29']:checked").val();
	if (ad29) localStorage.setItem("ad29inp", ad29);

	var ad30 = $("input[name='ad30']:checked").val();
	if (ad30) localStorage.setItem("ad30inp", ad30);
};