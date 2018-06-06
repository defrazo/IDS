function get_data() {
	
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

	var k1 = $("input[name='k1']:checked").val();
	if (k1) localStorage.setItem("k1inp", k1);
	
	var k2 = $("input[name='k2']:checked").val();
	if (k2) localStorage.setItem("k2inp", k2);
	
	var k3 = $("input[name='k3']:checked").val();
	if (k3) localStorage.setItem("k3inp", k3);
	
	var k4 = $("input[name='k4']:checked").val();
	if (k4) localStorage.setItem("k4inp", k4);
	
	var k5 = $("input[name='k5']:checked").val();
	if (k5) localStorage.setItem("k5inp", k5);
	
	var k6 = $("input[name='k6']:checked").val();
	if (k6) localStorage.setItem("k6inp", k6);

	var k7 = $("input[name='k7']:checked").val();
	if (k7) localStorage.setItem("k7inp", k7);

	var k8 = $("input[name='k8']:checked").val();
	if (k8) localStorage.setItem("k8inp", k8);

	var k9 = $("input[name='k9']:checked").val();
	if (k9) localStorage.setItem("k9inp", k9);

	var k10 = $("input[name='k10']:checked").val();
	if (k10) localStorage.setItem("k10inp", k10);

	var k11 = $("input[name='k11']:checked").val();
	if (k11) localStorage.setItem("k11inp", k11);

	var k12 = $("input[name='k12']:checked").val();
	if (k12) localStorage.setItem("k12inp", k12);

	var k13 = $("input[name='k13']:checked").val();
	if (k13) localStorage.setItem("k13inp", k13);

	var k14 = $("input[name='k14']:checked").val();
	if (k14) localStorage.setItem("k14inp", k14);

	var k15 = $("input[name='k15']:checked").val();
	if (k15) localStorage.setItem("k15inp", k15);

	var k16 = $("input[name='k16']:checked").val();
	if (k16) localStorage.setItem("k16inp", k16);

	var k17 = $("input[name='k17']:checked").val();
	if (k17) localStorage.setItem("k17inp", k17);

	var k18 = $("input[name='k18']:checked").val();
	if (k18) localStorage.setItem("k18inp", k18);

	var k19 = $("input[name='k19']:checked").val();
	if (k19) localStorage.setItem("k19inp", k19);

	var k20 = $("input[name='k20']:checked").val();
	if (k20) localStorage.setItem("k20inp", k20);
};