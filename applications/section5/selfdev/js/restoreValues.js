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
	if (localStorage.getItem('ae1inp') != '') {
		if (localStorage.getItem('ae1inp') == '3')	$('input:radio[name="ae1"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('ae1inp') == '2')	$('input:radio[name="ae1"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('ae1inp') == '1')	$('input:radio[name="ae1"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('ae2inp') != '') {
		if (localStorage.getItem('ae2inp') == '3')	$('input:radio[name="ae2"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('ae2inp') == '2')	$('input:radio[name="ae2"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('ae2inp') == '1')	$('input:radio[name="ae2"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('ae3inp') != '') {
		if (localStorage.getItem('ae3inp') == '3')	$('input:radio[name="ae3"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('ae3inp') == '2')	$('input:radio[name="ae3"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('ae3inp') == '1')	$('input:radio[name="ae3"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('ae4inp') != '') {
		if (localStorage.getItem('ae4inp') == '3')	$('input:radio[name="ae4"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('ae4inp') == '2')	$('input:radio[name="ae4"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('ae4inp') == '1')	$('input:radio[name="ae4"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('ae5inp') != '') {
		if (localStorage.getItem('ae5inp') == '3')	$('input:radio[name="ae5"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('ae5inp') == '2')	$('input:radio[name="ae5"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('ae5inp') == '1')	$('input:radio[name="ae5"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('ae6inp') != '') {
		if (localStorage.getItem('ae6inp') == '3')	$('input:radio[name="ae6"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('ae6inp') == '2')	$('input:radio[name="ae6"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('ae6inp') == '1')	$('input:radio[name="ae6"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('ae7inp') != '') {
		if (localStorage.getItem('ae7inp') == '3')	$('input:radio[name="ae7"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('ae7inp') == '2')	$('input:radio[name="ae7"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('ae7inp') == '1')	$('input:radio[name="ae7"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('ae8inp') != '') {
		if (localStorage.getItem('ae8inp') == '3')	$('input:radio[name="ae8"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('ae8inp') == '2')	$('input:radio[name="ae8"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('ae8inp') == '1')	$('input:radio[name="ae8"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('ae9inp') != '') {
		if (localStorage.getItem('ae9inp') == '3')	$('input:radio[name="ae9"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('ae9inp') == '2')	$('input:radio[name="ae9"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('ae9inp') == '1')	$('input:radio[name="ae9"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('ae10inp') != '') {
		if (localStorage.getItem('ae10inp') == '3')	$('input:radio[name="ae10"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('ae10inp') == '2')	$('input:radio[name="ae10"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('ae10inp') == '1')	$('input:radio[name="ae10"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('ae11inp') != '') {
		if (localStorage.getItem('ae11inp') == '3')	$('input:radio[name="ae11"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('ae11inp') == '2')	$('input:radio[name="ae11"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('ae11inp') == '1')	$('input:radio[name="ae11"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('ae12inp') != '') {
		if (localStorage.getItem('ae12inp') == '3')	$('input:radio[name="ae12"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('ae12inp') == '2')	$('input:radio[name="ae12"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('ae12inp') == '1')	$('input:radio[name="ae12"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('ae13inp') != '') {
		if (localStorage.getItem('ae13inp') == '3')	$('input:radio[name="ae13"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('ae13inp') == '2')	$('input:radio[name="ae13"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('ae13inp') == '1')	$('input:radio[name="ae13"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('ae14inp') != '') {
		if (localStorage.getItem('ae14inp') == '3')	$('input:radio[name="ae14"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('ae14inp') == '2')	$('input:radio[name="ae14"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('ae14inp') == '1')	$('input:radio[name="ae14"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('ae15inp') != '') {
		if (localStorage.getItem('ae15inp') == '3')	$('input:radio[name="ae15"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('ae15inp') == '2')	$('input:radio[name="ae15"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('ae15inp') == '1')	$('input:radio[name="ae15"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('ae16inp') != '') {
		if (localStorage.getItem('ae16inp') == '3')	$('input:radio[name="ae16"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('ae16inp') == '2')	$('input:radio[name="ae16"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('ae16inp') == '1')	$('input:radio[name="ae16"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('ae17inp') != '') {
		if (localStorage.getItem('ae17inp') == '3')	$('input:radio[name="ae17"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('ae17inp') == '2')	$('input:radio[name="ae17"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('ae17inp') == '1')	$('input:radio[name="ae17"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('ae18inp') != '') {
		if (localStorage.getItem('ae18inp') == '3')	$('input:radio[name="ae18"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('ae18inp') == '2')	$('input:radio[name="ae18"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('ae18inp') == '1')	$('input:radio[name="ae18"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('ae19inp') != '') {
		if (localStorage.getItem('ae19inp') == '3')	$('input:radio[name="ae19"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('ae19inp') == '2')	$('input:radio[name="ae19"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('ae19inp') == '1')	$('input:radio[name="ae19"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('ae20inp') != '') {
		if (localStorage.getItem('ae20inp') == '3')	$('input:radio[name="ae20"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('ae20inp') == '2')	$('input:radio[name="ae20"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('ae20inp') == '1')	$('input:radio[name="ae20"]').filter('[value="1"]').attr('checked',true);
	}

	if (localStorage.getItem('ae21inp') != '') {
		if (localStorage.getItem('ae21inp') == '3')	$('input:radio[name="ae21"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('ae21inp') == '2')	$('input:radio[name="ae21"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('ae21inp') == '1')	$('input:radio[name="ae21"]').filter('[value="1"]').attr('checked',true);
	}
});