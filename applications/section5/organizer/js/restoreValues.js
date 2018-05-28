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
	if (localStorage.getItem('ab1inp') != '') {
		if (localStorage.getItem('ab1inp') == '1')	$('input:radio[name="ab1"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ab1inp') == '0')	$('input:radio[name="ab1"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ab2inp') != '') {
		if (localStorage.getItem('ab2inp') == '1')	$('input:radio[name="ab2"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ab2inp') == '0')	$('input:radio[name="ab2"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ab3inp') != '') {
		if (localStorage.getItem('ab3inp') == '1')	$('input:radio[name="ab3"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ab3inp') == '0')	$('input:radio[name="ab3"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ab4inp') != '') {
		if (localStorage.getItem('ab4inp') == '1')	$('input:radio[name="ab4"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ab4inp') == '0')	$('input:radio[name="ab4"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ab5inp') != '') {
		if (localStorage.getItem('ab5inp') == '1')	$('input:radio[name="ab5"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ab5inp') == '0')	$('input:radio[name="ab5"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ab6inp') != '') {
		if (localStorage.getItem('ab6inp') == '1')	$('input:radio[name="ab6"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ab6inp') == '0')	$('input:radio[name="ab6"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ab7inp') != '') {
		if (localStorage.getItem('ab7inp') == '1')	$('input:radio[name="ab7"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ab7inp') == '0')	$('input:radio[name="ab7"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ab8inp') != '') {
		if (localStorage.getItem('ab8inp') == '1')	$('input:radio[name="ab8"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ab8inp') == '0')	$('input:radio[name="ab8"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ab9inp') != '') {
		if (localStorage.getItem('ab9inp') == '1')	$('input:radio[name="ab9"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ab9inp') == '0')	$('input:radio[name="ab9"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ab10inp') != '') {
		if (localStorage.getItem('ab10inp') == '1')	$('input:radio[name="ab10"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ab10inp') == '0')	$('input:radio[name="ab10"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ab11inp') != '') {
		if (localStorage.getItem('ab11inp') == '1')	$('input:radio[name="ab11"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ab11inp') == '0')	$('input:radio[name="ab11"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ab12inp') != '') {
		if (localStorage.getItem('ab12inp') == '1')	$('input:radio[name="ab12"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ab12inp') == '0')	$('input:radio[name="ab12"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ab13inp') != '') {
		if (localStorage.getItem('ab13inp') == '1')	$('input:radio[name="ab13"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ab13inp') == '0')	$('input:radio[name="ab13"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ab14inp') != '') {
		if (localStorage.getItem('ab14inp') == '1')	$('input:radio[name="ab14"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ab14inp') == '0')	$('input:radio[name="ab14"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ab15inp') != '') {
		if (localStorage.getItem('ab15inp') == '1')	$('input:radio[name="ab15"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ab15inp') == '0')	$('input:radio[name="ab15"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ab16inp') != '') {
		if (localStorage.getItem('ab16inp') == '1')	$('input:radio[name="ab16"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ab16inp') == '0')	$('input:radio[name="ab16"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ab17inp') != '') {
		if (localStorage.getItem('ab17inp') == '1')	$('input:radio[name="ab17"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ab17inp') == '0')	$('input:radio[name="ab17"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ab18inp') != '') {
		if (localStorage.getItem('ab18inp') == '1')	$('input:radio[name="ab18"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ab18inp') == '0')	$('input:radio[name="ab18"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ab19inp') != '') {
		if (localStorage.getItem('ab19inp') == '1')	$('input:radio[name="ab19"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ab19inp') == '0')	$('input:radio[name="ab19"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ab20inp') != '') {
		if (localStorage.getItem('ab20inp') == '1')	$('input:radio[name="ab20"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ab20inp') == '0')	$('input:radio[name="ab20"]').filter('[value="0"]').attr('checked',true);
	}

	if (localStorage.getItem('ab21inp') != '') {
		if (localStorage.getItem('ab21inp') == '1')	$('input:radio[name="ab21"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ab21inp') == '0')	$('input:radio[name="ab21"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ab22inp') != '') {
		if (localStorage.getItem('ab22inp') == '1')	$('input:radio[name="ab22"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ab22inp') == '0')	$('input:radio[name="ab22"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ab23inp') != '') {
		if (localStorage.getItem('ab23inp') == '1')	$('input:radio[name="ab23"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ab23inp') == '0')	$('input:radio[name="ab23"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ab24inp') != '') {
		if (localStorage.getItem('ab24inp') == '1')	$('input:radio[name="ab24"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ab24inp') == '0')	$('input:radio[name="ab24"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ab25inp') != '') {
		if (localStorage.getItem('ab25inp') == '1')	$('input:radio[name="ab25"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ab25inp') == '0')	$('input:radio[name="ab25"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ab26inp') != '') {
		if (localStorage.getItem('ab26inp') == '1')	$('input:radio[name="ab26"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ab26inp') == '0')	$('input:radio[name="ab26"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ab27inp') != '') {
		if (localStorage.getItem('ab27inp') == '1')	$('input:radio[name="ab27"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ab27inp') == '0')	$('input:radio[name="ab27"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ab28inp') != '') {
		if (localStorage.getItem('ab28inp') == '1')	$('input:radio[name="ab28"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ab28inp') == '0')	$('input:radio[name="ab28"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ab29inp') != '') {
		if (localStorage.getItem('ab29inp') == '1')	$('input:radio[name="ab29"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ab29inp') == '0')	$('input:radio[name="ab29"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ab30inp') != '') {
		if (localStorage.getItem('ab30inp') == '1')	$('input:radio[name="ab30"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ab30inp') == '0')	$('input:radio[name="ab30"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ab31inp') != '') {
		if (localStorage.getItem('ab31inp') == '1')	$('input:radio[name="ab31"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ab31inp') == '0')	$('input:radio[name="ab31"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ab32inp') != '') {
		if (localStorage.getItem('ab32inp') == '1')	$('input:radio[name="ab32"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ab32inp') == '0')	$('input:radio[name="ab32"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ab33inp') != '') {
		if (localStorage.getItem('ab33inp') == '1')	$('input:radio[name="ab33"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ab33inp') == '0')	$('input:radio[name="ab33"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ab34inp') != '') {
		if (localStorage.getItem('ab34inp') == '1')	$('input:radio[name="ab34"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ab34inp') == '0')	$('input:radio[name="ab34"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ab35inp') != '') {
		if (localStorage.getItem('ab35inp') == '1')	$('input:radio[name="ab35"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ab35inp') == '0')	$('input:radio[name="ab35"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ab36inp') != '') {
		if (localStorage.getItem('ab36inp') == '1')	$('input:radio[name="ab36"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ab36inp') == '0')	$('input:radio[name="ab36"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ab37inp') != '') {
		if (localStorage.getItem('ab37inp') == '1')	$('input:radio[name="ab37"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ab37inp') == '0')	$('input:radio[name="ab37"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ab38inp') != '') {
		if (localStorage.getItem('ab38inp') == '1')	$('input:radio[name="ab38"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ab38inp') == '0')	$('input:radio[name="ab38"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ab39inp') != '') {
		if (localStorage.getItem('ab39inp') == '1')	$('input:radio[name="ab39"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ab39inp') == '0')	$('input:radio[name="ab39"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('ab40inp') != '') {
		if (localStorage.getItem('ab40inp') == '1')	$('input:radio[name="ab40"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ab40inp') == '0')	$('input:radio[name="ab40"]').filter('[value="0"]').attr('checked',true);
	}
});