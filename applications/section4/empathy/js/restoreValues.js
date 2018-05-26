$(document).ready(function() { //Восстанавливает значения полей
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
	if (localStorage.getItem('o1inp') != '') {
		if (localStorage.getItem('o1inp') == '1')	$('input:radio[name="o1"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('o1inp') == '0')	$('input:radio[name="o1"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('o2inp') != '') {
		if (localStorage.getItem('o2inp') == '1')	$('input:radio[name="o2"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('o2inp') == '0')	$('input:radio[name="o2"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('o3inp') != '') {
		if (localStorage.getItem('o3inp') == '1')	$('input:radio[name="o3"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('o3inp') == '0')	$('input:radio[name="o3"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('o4inp') != '') {
		if (localStorage.getItem('o4inp') == '1')	$('input:radio[name="o4"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('o4inp') == '0')	$('input:radio[name="o4"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('o5inp') != '') {
		if (localStorage.getItem('o5inp') == '1')	$('input:radio[name="o5"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('o5inp') == '0')	$('input:radio[name="o5"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('o6inp') != '') {
		if (localStorage.getItem('o6inp') == '1')	$('input:radio[name="o6"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('o6inp') == '0')	$('input:radio[name="o6"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('o7inp') != '') {
		if (localStorage.getItem('o7inp') == '1')	$('input:radio[name="o7"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('o7inp') == '0')	$('input:radio[name="o7"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('o8inp') != '') {
		if (localStorage.getItem('o8inp') == '1')	$('input:radio[name="o8"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('o8inp') == '0')	$('input:radio[name="o8"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('o9inp') != '') {
		if (localStorage.getItem('o9inp') == '1')	$('input:radio[name="o9"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('o9inp') == '0')	$('input:radio[name="o9"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('o10inp') != '') {
		if (localStorage.getItem('o10inp') == '1')	$('input:radio[name="o10"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('o10inp') == '0')	$('input:radio[name="o10"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('o11inp') != '') {
		if (localStorage.getItem('o11inp') == '1')	$('input:radio[name="o11"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('o11inp') == '0')	$('input:radio[name="o11"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('o12inp') != '') {
		if (localStorage.getItem('o12inp') == '1')	$('input:radio[name="o12"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('o12inp') == '0')	$('input:radio[name="o12"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('o13inp') != '') {
		if (localStorage.getItem('o13inp') == '1')	$('input:radio[name="o13"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('o13inp') == '0')	$('input:radio[name="o13"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('o14inp') != '') {
		if (localStorage.getItem('o14inp') == '1')	$('input:radio[name="o14"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('o14inp') == '0')	$('input:radio[name="o14"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('o15inp') != '') {
		if (localStorage.getItem('o15inp') == '1')	$('input:radio[name="o15"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('o15inp') == '0')	$('input:radio[name="o15"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('o16inp') != '') {
		if (localStorage.getItem('o16inp') == '1')	$('input:radio[name="o16"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('o16inp') == '0')	$('input:radio[name="o16"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('o17inp') != '') {
		if (localStorage.getItem('o17inp') == '1')	$('input:radio[name="o17"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('o17inp') == '0')	$('input:radio[name="o17"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('o18inp') != '') {
		if (localStorage.getItem('o18inp') == '1')	$('input:radio[name="o18"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('o18inp') == '0')	$('input:radio[name="o18"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('o19inp') != '') {
		if (localStorage.getItem('o19inp') == '1')	$('input:radio[name="o19"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('o19inp') == '0')	$('input:radio[name="o19"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('o20inp') != '') {
		if (localStorage.getItem('o20inp') == '1')	$('input:radio[name="o20"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('o20inp') == '0')	$('input:radio[name="o20"]').filter('[value="0"]').attr('checked',true);
	}

	if (localStorage.getItem('o21inp') != '') {
		if (localStorage.getItem('o21inp') == '1')	$('input:radio[name="o21"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('o21inp') == '0')	$('input:radio[name="o21"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('o22inp') != '') {
		if (localStorage.getItem('o22inp') == '1')	$('input:radio[name="o22"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('o22inp') == '0')	$('input:radio[name="o22"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('o23inp') != '') {
		if (localStorage.getItem('o23inp') == '1')	$('input:radio[name="o23"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('o23inp') == '0')	$('input:radio[name="o23"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('o24inp') != '') {
		if (localStorage.getItem('o24inp') == '1')	$('input:radio[name="o24"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('o24inp') == '0')	$('input:radio[name="o24"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('o25inp') != '') {
		if (localStorage.getItem('o25inp') == '1')	$('input:radio[name="o25"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('o25inp') == '0')	$('input:radio[name="o25"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('o26inp') != '') {
		if (localStorage.getItem('o26inp') == '1')	$('input:radio[name="o26"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('o26inp') == '0')	$('input:radio[name="o26"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('o27inp') != '') {
		if (localStorage.getItem('o27inp') == '1')	$('input:radio[name="o27"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('o27inp') == '0')	$('input:radio[name="o27"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('o28inp') != '') {
		if (localStorage.getItem('o28inp') == '1')	$('input:radio[name="o28"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('o28inp') == '0')	$('input:radio[name="o28"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('o29inp') != '') {
		if (localStorage.getItem('o29inp') == '1')	$('input:radio[name="o29"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('o29inp') == '0')	$('input:radio[name="o29"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('o30inp') != '') {
		if (localStorage.getItem('o30inp') == '1')	$('input:radio[name="o30"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('o30inp') == '0')	$('input:radio[name="o30"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('o31inp') != '') {
		if (localStorage.getItem('o31inp') == '1')	$('input:radio[name="o31"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('o31inp') == '0')	$('input:radio[name="o31"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('o32inp') != '') {
		if (localStorage.getItem('o32inp') == '1')	$('input:radio[name="o32"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('o32inp') == '0')	$('input:radio[name="o32"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('o33inp') != '') {
		if (localStorage.getItem('o33inp') == '1')	$('input:radio[name="o33"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('o33inp') == '0')	$('input:radio[name="o33"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('o34inp') != '') {
		if (localStorage.getItem('o34inp') == '1')	$('input:radio[name="o34"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('o34inp') == '0')	$('input:radio[name="o34"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('o35inp') != '') {
		if (localStorage.getItem('o35inp') == '1')	$('input:radio[name="o35"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('o35inp') == '0')	$('input:radio[name="o35"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('o36inp') != '') {
		if (localStorage.getItem('o36inp') == '1')	$('input:radio[name="o36"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('o36inp') == '0')	$('input:radio[name="o36"]').filter('[value="0"]').attr('checked',true);
	}
});