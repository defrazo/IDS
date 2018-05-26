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

	var n1 = $("input[name='n1']:checked").val();
	if (n1) localStorage.setItem("n1inp", n1);
	
	var n2 = $("input[name='n2']:checked").val();
	if (n2) localStorage.setItem("n2inp", n2);
	
	var n3 = $("input[name='n3']:checked").val();
	if (n3) localStorage.setItem("n3inp", n3);
	
	var n4 = $("input[name='n4']:checked").val();
	if (n4) localStorage.setItem("n4inp", n4);
	
	var n5 = $("input[name='n5']:checked").val();
	if (n5) localStorage.setItem("n5inp", n5);
	
	var n6 = $("input[name='n6']:checked").val();
	if (n6) localStorage.setItem("n6inp", n6);

	var n7 = $("input[name='n7']:checked").val();
	if (n7) localStorage.setItem("n7inp", n7);

	var n8 = $("input[name='n8']:checked").val();
	if (n8) localStorage.setItem("n8inp", n8);

	var n9 = $("input[name='n9']:checked").val();
	if (n9) localStorage.setItem("n9inp", n9);

	var n10 = $("input[name='n10']:checked").val();
	if (n10) localStorage.setItem("n10inp", n10);

	var n11 = $("input[name='n11']:checked").val();
	if (n11) localStorage.setItem("n11inp", n11);

	var n12 = $("input[name='n12']:checked").val();
	if (n12) localStorage.setItem("n12inp", n12);

	var n13 = $("input[name='n13']:checked").val();
	if (n13) localStorage.setItem("n13inp", n13);

	var n14 = $("input[name='n14']:checked").val();
	if (n14) localStorage.setItem("n14inp", n14);

	var n15 = $("input[name='n15']:checked").val();
	if (n15) localStorage.setItem("n15inp", n15);

	var n16 = $("input[name='n16']:checked").val();
	if (n16) localStorage.setItem("n16inp", n16);
};