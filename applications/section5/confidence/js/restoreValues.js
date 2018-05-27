$(document).ready(function() { //Восстанавливает значения полей
	if (localStorage.getItem('dateinp') != '')	$('#date').val(localStorage.getItem('dateinp'));
	if (localStorage.getItem('genderinp') != '') {
		if (localStorage.getItem('genderinp') == 'Мужской')	$('input:radio[name="gender"]').filter('[value="Мужской"]').attr('checked',true);
		if (localStorage.getItem('genderinp') == 'Женский')	$('input:radio[name="gender"]').filter('[value="Женский"]').attr('checked',true);
	}
	if (localStorage.getItem('snameinp') != '')	$('#sname').val(localStorage.getItem('snameinp'));
	if (localStorage.getItem('fnameinp') != '')	$('#fname').val(localStorage.getItem('fnameinp'));
	if (localStorage.getItem('mnameinp') != '')	$('#mname').val(localStorage.getItem('mnameinp'));
	if (localStorage.getItem('facinp') != '')	$('#fac').val(localStorage.getItem('facinp'));
	if (localStorage.getItem('z1inp') != '') {
		if (localStorage.getItem('z1inp') == '2')	$('input:radio[name="z1"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('z1inp') == '1')	$('input:radio[name="z1"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('z1inp') == '3')	$('input:radio[name="z1"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('z1inp') == '4')	$('input:radio[name="z1"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('z2inp') != '') {
		if (localStorage.getItem('z2inp') == '2')	$('input:radio[name="z2"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('z2inp') == '1')	$('input:radio[name="z2"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('z2inp') == '3')	$('input:radio[name="z2"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('z2inp') == '4')	$('input:radio[name="z2"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('z3inp') != '') {
		if (localStorage.getItem('z3inp') == '2')	$('input:radio[name="z3"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('z3inp') == '1')	$('input:radio[name="z3"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('z3inp') == '3')	$('input:radio[name="z3"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('z3inp') == '4')	$('input:radio[name="z3"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('z4inp') != '') {
		if (localStorage.getItem('z4inp') == '2')	$('input:radio[name="z4"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('z4inp') == '1')	$('input:radio[name="z4"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('z4inp') == '3')	$('input:radio[name="z4"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('z4inp') == '4')	$('input:radio[name="z4"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('z5inp') != '') {
		if (localStorage.getItem('z5inp') == '2')	$('input:radio[name="z5"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('z5inp') == '1')	$('input:radio[name="z5"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('z5inp') == '3')	$('input:radio[name="z5"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('z5inp') == '4')	$('input:radio[name="z5"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('z6inp') != '') {
		if (localStorage.getItem('z6inp') == '2')	$('input:radio[name="z6"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('z6inp') == '1')	$('input:radio[name="z6"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('z6inp') == '3')	$('input:radio[name="z6"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('z6inp') == '4')	$('input:radio[name="z6"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('z7inp') != '') {
		if (localStorage.getItem('z7inp') == '2')	$('input:radio[name="z7"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('z7inp') == '1')	$('input:radio[name="z7"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('z7inp') == '3')	$('input:radio[name="z7"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('z7inp') == '4')	$('input:radio[name="z7"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('z8inp') != '') {
		if (localStorage.getItem('z8inp') == '2')	$('input:radio[name="z8"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('z8inp') == '1')	$('input:radio[name="z8"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('z8inp') == '3')	$('input:radio[name="z8"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('z8inp') == '4')	$('input:radio[name="z8"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('z9inp') != '') {
		if (localStorage.getItem('z9inp') == '2')	$('input:radio[name="z9"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('z9inp') == '1')	$('input:radio[name="z9"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('z9inp') == '3')	$('input:radio[name="z9"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('z9inp') == '4')	$('input:radio[name="z9"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('z10inp') != '') {
		if (localStorage.getItem('z10inp') == '2')	$('input:radio[name="z10"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('z10inp') == '1')	$('input:radio[name="z10"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('z10inp') == '3')	$('input:radio[name="z10"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('z10inp') == '4')	$('input:radio[name="z10"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('z11inp') != '') {
		if (localStorage.getItem('z11inp') == '2')	$('input:radio[name="z11"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('z11inp') == '1')	$('input:radio[name="z11"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('z11inp') == '3')	$('input:radio[name="z11"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('z11inp') == '4')	$('input:radio[name="z11"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('z12inp') != '') {
		if (localStorage.getItem('z12inp') == '2')	$('input:radio[name="z12"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('z12inp') == '1')	$('input:radio[name="z12"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('z12inp') == '3')	$('input:radio[name="z12"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('z12inp') == '4')	$('input:radio[name="z12"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('z13inp') != '') {
		if (localStorage.getItem('z13inp') == '2')	$('input:radio[name="z13"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('z13inp') == '1')	$('input:radio[name="z13"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('z13inp') == '3')	$('input:radio[name="z13"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('z13inp') == '4')	$('input:radio[name="z13"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('z14inp') != '') {
		if (localStorage.getItem('z14inp') == '2')	$('input:radio[name="z14"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('z14inp') == '1')	$('input:radio[name="z14"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('z14inp') == '3')	$('input:radio[name="z14"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('z14inp') == '4')	$('input:radio[name="z14"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('z15inp') != '') {
		if (localStorage.getItem('z15inp') == '2')	$('input:radio[name="z15"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('z15inp') == '1')	$('input:radio[name="z15"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('z15inp') == '3')	$('input:radio[name="z15"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('z15inp') == '4')	$('input:radio[name="z15"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('z16inp') != '') {
		if (localStorage.getItem('z16inp') == '2')	$('input:radio[name="z16"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('z16inp') == '1')	$('input:radio[name="z16"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('z16inp') == '3')	$('input:radio[name="z16"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('z16inp') == '4')	$('input:radio[name="z16"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('z17inp') != '') {
		if (localStorage.getItem('z17inp') == '2')	$('input:radio[name="z17"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('z17inp') == '1')	$('input:radio[name="z17"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('z17inp') == '3')	$('input:radio[name="z17"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('z17inp') == '4')	$('input:radio[name="z17"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('z18inp') != '') {
		if (localStorage.getItem('z18inp') == '2')	$('input:radio[name="z18"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('z18inp') == '1')	$('input:radio[name="z18"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('z18inp') == '3')	$('input:radio[name="z18"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('z18inp') == '4')	$('input:radio[name="z18"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('z19inp') != '') {
		if (localStorage.getItem('z19inp') == '2')	$('input:radio[name="z19"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('z19inp') == '1')	$('input:radio[name="z19"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('z19inp') == '3')	$('input:radio[name="z19"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('z19inp') == '4')	$('input:radio[name="z19"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('z20inp') != '') {
		if (localStorage.getItem('z20inp') == '2')	$('input:radio[name="z20"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('z20inp') == '1')	$('input:radio[name="z20"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('z20inp') == '3')	$('input:radio[name="z20"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('z20inp') == '4')	$('input:radio[name="z20"]').filter('[value="4"]').attr('checked',true);
	}

	if (localStorage.getItem('z21inp') != '') {
		if (localStorage.getItem('z21inp') == '2')	$('input:radio[name="z21"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('z21inp') == '1')	$('input:radio[name="z21"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('z21inp') == '3')	$('input:radio[name="z21"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('z21inp') == '4')	$('input:radio[name="z21"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('z22inp') != '') {
		if (localStorage.getItem('z22inp') == '2')	$('input:radio[name="z22"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('z22inp') == '1')	$('input:radio[name="z22"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('z22inp') == '3')	$('input:radio[name="z22"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('z22inp') == '4')	$('input:radio[name="z22"]').filter('[value="4"]').attr('checked',true);
	}
});