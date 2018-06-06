$(document).ready(function() {
	if (localStorage.getItem('dateinp') != '')	$('#date').val(localStorage.getItem('dateinp'));
	if (localStorage.getItem('genderinp') != '') {
		if (localStorage.getItem('genderinp') == 'Мужской')	$('input:radio[name="gender"]').filter('[value="Мужской"]').attr('checked',true);
		if (localStorage.getItem('genderinp') == 'Женский')	$('input:radio[name="gender"]').filter('[value="Женский"]').attr('checked',true);
	}
	if (localStorage.getItem('snameinp') != '')	$('#sname').val(localStorage.getItem('snameinp'));
	if (localStorage.getItem('fnameinp') != '')	$('#fname').val(localStorage.getItem('fnameinp'));
	if (localStorage.getItem('mnameinp') != '')	$('#mname').val(localStorage.getItem('mnameinp'));
	if (localStorage.getItem('ageinp') != '')	$('#age').val(localStorage.getItem('ageinp'));
	if (localStorage.getItem('heightinp') != '')	$('#height').val(localStorage.getItem('heightinp'));
	if (localStorage.getItem('weightinp') != '')	$('#weight').val(localStorage.getItem('weightinp'));
	if (localStorage.getItem('facinp') != '')	$('#fac').val(localStorage.getItem('facinp'));
	if (localStorage.getItem('k1inp') != '') {
		if (localStorage.getItem('k1inp') == '0')	$('input:radio[name="k1"]').filter('[value="0"]').attr('checked',true);
		if (localStorage.getItem('k1inp') == '1')	$('input:radio[name="k1"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('k1inp') == '2')	$('input:radio[name="k1"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('k1inp') == '3')	$('input:radio[name="k1"]').filter('[value="3"]').attr('checked',true);
	}
	if (localStorage.getItem('k2inp') != '') {
		if (localStorage.getItem('k2inp') == '0')	$('input:radio[name="k2"]').filter('[value="0"]').attr('checked',true);
		if (localStorage.getItem('k2inp') == '1')	$('input:radio[name="k2"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('k3inp') != '') {
		if (localStorage.getItem('k3inp') == '1')	$('input:radio[name="k3"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('k3inp') == '1')	$('input:radio[name="k3"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('k4inp') != '') {
		if (localStorage.getItem('k4inp') == '2')	$('input:radio[name="k4"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('k4inp') == '0')	$('input:radio[name="k4"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('k5inp') != '') {
		if (localStorage.getItem('k5inp') == '2')	$('input:radio[name="k5"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('k5inp') == '0')	$('input:radio[name="k5"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('k6inp') != '') {
		if (localStorage.getItem('k6inp') == '2')	$('input:radio[name="k6"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('k6inp') == '0')	$('input:radio[name="k6"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('k7inp') != '') {
		if (localStorage.getItem('k7inp') == '2')	$('input:radio[name="k7"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('k7inp') == '0')	$('input:radio[name="k7"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('k8inp') != '') {
		if (localStorage.getItem('k8inp') == '2')	$('input:radio[name="k8"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('k8inp') == '0')	$('input:radio[name="k8"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('k9inp') != '') {
		if (localStorage.getItem('k9inp') == '0')	$('input:radio[name="k9"]').filter('[value="0"]').attr('checked',true);
		if (localStorage.getItem('k9inp') == '0.1')	$('input:radio[name="k9"]').filter('[value="0.1"]').attr('checked',true);
		if (localStorage.getItem('k9inp') == '1')	$('input:radio[name="k9"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('k9inp') == '2')	$('input:radio[name="k9"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('k9inp') == '2.1')	$('input:radio[name="k9"]').filter('[value="2.1"]').attr('checked',true);
		if (localStorage.getItem('k9inp') == '3')	$('input:radio[name="k9"]').filter('[value="3"]').attr('checked',true);
	}
	if (localStorage.getItem('k10inp') != '') {
		if (localStorage.getItem('k10inp') == '2')	$('input:radio[name="k10"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('k10inp') == '0')	$('input:radio[name="k10"]').filter('[value="0"]').attr('checked',true);
		if (localStorage.getItem('k10inp') == '0.1')	$('input:radio[name="k10"]').filter('[value="0.1"]').attr('checked',true);
		if (localStorage.getItem('k10inp') == '0.2')	$('input:radio[name="k10"]').filter('[value="0.2"]').attr('checked',true);

	}
	if (localStorage.getItem('k11inp') != '') {
		if (localStorage.getItem('k11inp') == '2')	$('input:radio[name="k11"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('k11inp') == '1')	$('input:radio[name="k11"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('k11inp') == '0')	$('input:radio[name="k11"]').filter('[value="0"]').attr('checked',true);
		if (localStorage.getItem('k11inp') == '0.1')	$('input:radio[name="k11"]').filter('[value="0.1"]').attr('checked',true);
	}
	if (localStorage.getItem('k12inp') != '') {
		if (localStorage.getItem('k12inp') == '2')	$('input:radio[name="k12"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('k12inp') == '1')	$('input:radio[name="k12"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('k12inp') == '3')	$('input:radio[name="k12"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('k12inp') == '0')	$('input:radio[name="k12"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('k13inp') != '') {
		if (localStorage.getItem('k13inp') == '2')	$('input:radio[name="k13"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('k13inp') == '1')	$('input:radio[name="k13"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('k13inp') == '0')	$('input:radio[name="k13"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('k14inp') != '') {
		if (localStorage.getItem('k14inp') == '2')	$('input:radio[name="k14"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('k14inp') == '0.1')	$('input:radio[name="k14"]').filter('[value="0.1"]').attr('checked',true);
		if (localStorage.getItem('k14inp') == '0')	$('input:radio[name="k14"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('k15inp') != '') {
		if (localStorage.getItem('k15inp') == '2')	$('input:radio[name="k15"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('k15inp') == '0')	$('input:radio[name="k15"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('k16inp') != '') {
		if (localStorage.getItem('k16inp') == '2')	$('input:radio[name="k16"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('k16inp') == '1')	$('input:radio[name="k16"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('k16inp') == '0')	$('input:radio[name="k16"]').filter('[value="0"]').attr('checked',true);
		if (localStorage.getItem('k16inp') == '0.1')	$('input:radio[name="k16"]').filter('[value="0.1"]').attr('checked',true);
	}
	if (localStorage.getItem('k17inp') != '') {
		if (localStorage.getItem('k17inp') == '2')	$('input:radio[name="k17"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('k17inp') == '1')	$('input:radio[name="k17"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('k17inp') == '0')	$('input:radio[name="k17"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('k18inp') != '') {
		if (localStorage.getItem('k18inp') == '2')	$('input:radio[name="k18"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('k18inp') == '1')	$('input:radio[name="k18"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('k18inp') == '0')	$('input:radio[name="k18"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('k19inp') != '') {
		if (localStorage.getItem('k19inp') == '2')	$('input:radio[name="k19"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('k19inp') == '0')	$('input:radio[name="k19"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('k20inp') != '') {
		if (localStorage.getItem('k20inp') == '2')	$('input:radio[name="k20"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('k20inp') == '1')	$('input:radio[name="k20"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('k20inp') == '0')	$('input:radio[name="k20"]').filter('[value="0"]').attr('checked',true);
	}
});