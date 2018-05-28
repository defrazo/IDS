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
	if (localStorage.getItem('ad1inp') != '') {
		if (localStorage.getItem('ad1inp') == '1')	$('input:radio[name="ad1"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ad1inp') == '1.1')	$('input:radio[name="ad1"]').filter('[value="1.1"]').attr('checked',true);
	}
	if (localStorage.getItem('ad2inp') != '') {
		if (localStorage.getItem('ad2inp') == '1')	$('input:radio[name="ad2"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ad2inp') == '1.1')	$('input:radio[name="ad2"]').filter('[value="1.1"]').attr('checked',true);
	}
	if (localStorage.getItem('ad3inp') != '') {
		if (localStorage.getItem('ad3inp') == '1')	$('input:radio[name="ad3"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ad3inp') == '1.1')	$('input:radio[name="ad3"]').filter('[value="1.1"]').attr('checked',true);
	}
	if (localStorage.getItem('ad4inp') != '') {
		if (localStorage.getItem('ad4inp') == '1')	$('input:radio[name="ad4"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ad4inp') == '1.1')	$('input:radio[name="ad4"]').filter('[value="1.1"]').attr('checked',true);
	}
	if (localStorage.getItem('ad5inp') != '') {
		if (localStorage.getItem('ad5inp') == '1')	$('input:radio[name="ad5"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ad5inp') == '1.1')	$('input:radio[name="ad5"]').filter('[value="1.1"]').attr('checked',true);
	}
	if (localStorage.getItem('ad6inp') != '') {
		if (localStorage.getItem('ad6inp') == '1')	$('input:radio[name="ad6"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ad6inp') == '1.1')	$('input:radio[name="ad6"]').filter('[value="1.1"]').attr('checked',true);
	}
	if (localStorage.getItem('ad7inp') != '') {
		if (localStorage.getItem('ad7inp') == '1')	$('input:radio[name="ad7"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ad7inp') == '1.1')	$('input:radio[name="ad7"]').filter('[value="1.1"]').attr('checked',true);
	}
	if (localStorage.getItem('ad8inp') != '') {
		if (localStorage.getItem('ad8inp') == '1')	$('input:radio[name="ad8"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ad8inp') == '1.1')	$('input:radio[name="ad8"]').filter('[value="1.1"]').attr('checked',true);
	}
	if (localStorage.getItem('ad9inp') != '') {
		if (localStorage.getItem('ad9inp') == '1')	$('input:radio[name="ad9"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ad9inp') == '1.1')	$('input:radio[name="ad9"]').filter('[value="1.1"]').attr('checked',true);
	}
	if (localStorage.getItem('ad10inp') != '') {
		if (localStorage.getItem('ad10inp') == '1')	$('input:radio[name="ad10"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ad10inp') == '1.1')	$('input:radio[name="ad10"]').filter('[value="1.1"]').attr('checked',true);
	}
	if (localStorage.getItem('ad11inp') != '') {
		if (localStorage.getItem('ad11inp') == '1')	$('input:radio[name="ad11"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ad11inp') == '1.1')	$('input:radio[name="ad11"]').filter('[value="1.1"]').attr('checked',true);
	}
	if (localStorage.getItem('ad12inp') != '') {
		if (localStorage.getItem('ad12inp') == '1')	$('input:radio[name="ad12"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ad12inp') == '1.1')	$('input:radio[name="ad12"]').filter('[value="1.1"]').attr('checked',true);
	}
	if (localStorage.getItem('ad13inp') != '') {
		if (localStorage.getItem('ad13inp') == '1')	$('input:radio[name="ad13"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ad13inp') == '1.1')	$('input:radio[name="ad13"]').filter('[value="1.1"]').attr('checked',true);
	}
	if (localStorage.getItem('ad14inp') != '') {
		if (localStorage.getItem('ad14inp') == '1')	$('input:radio[name="ad14"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ad14inp') == '1.1')	$('input:radio[name="ad14"]').filter('[value="1.1"]').attr('checked',true);
	}
	if (localStorage.getItem('ad15inp') != '') {
		if (localStorage.getItem('ad15inp') == '1')	$('input:radio[name="ad15"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ad15inp') == '1.1')	$('input:radio[name="ad15"]').filter('[value="1.1"]').attr('checked',true);
	}
	if (localStorage.getItem('ad16inp') != '') {
		if (localStorage.getItem('ad16inp') == '1')	$('input:radio[name="ad16"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ad16inp') == '1.1')	$('input:radio[name="ad16"]').filter('[value="1.1"]').attr('checked',true);
	}
	if (localStorage.getItem('ad17inp') != '') {
		if (localStorage.getItem('ad17inp') == '1')	$('input:radio[name="ad17"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ad17inp') == '1.1')	$('input:radio[name="ad17"]').filter('[value="1.1"]').attr('checked',true);
	}
	if (localStorage.getItem('ad18inp') != '') {
		if (localStorage.getItem('ad18inp') == '1')	$('input:radio[name="ad18"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ad18inp') == '1.1')	$('input:radio[name="ad18"]').filter('[value="1.1"]').attr('checked',true);
	}
	if (localStorage.getItem('ad19inp') != '') {
		if (localStorage.getItem('ad19inp') == '1')	$('input:radio[name="ad19"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ad19inp') == '1.1')	$('input:radio[name="ad19"]').filter('[value="1.1"]').attr('checked',true);
	}
	if (localStorage.getItem('ad20inp') != '') {
		if (localStorage.getItem('ad20inp') == '1')	$('input:radio[name="ad20"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ad20inp') == '1.1')	$('input:radio[name="ad20"]').filter('[value="1.1"]').attr('checked',true);
	}

	if (localStorage.getItem('ad21inp') != '') {
		if (localStorage.getItem('ad21inp') == '1')	$('input:radio[name="ad21"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ad21inp') == '1.1')	$('input:radio[name="ad21"]').filter('[value="1.1"]').attr('checked',true);
	}
	if (localStorage.getItem('ad22inp') != '') {
		if (localStorage.getItem('ad22inp') == '1')	$('input:radio[name="ad22"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ad22inp') == '1.1')	$('input:radio[name="ad22"]').filter('[value="1.1"]').attr('checked',true);
	}
	if (localStorage.getItem('ad23inp') != '') {
		if (localStorage.getItem('ad23inp') == '1')	$('input:radio[name="ad23"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ad23inp') == '1.1')	$('input:radio[name="ad23"]').filter('[value="1.1"]').attr('checked',true);
	}
	if (localStorage.getItem('ad24inp') != '') {
		if (localStorage.getItem('ad24inp') == '1')	$('input:radio[name="ad24"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ad24inp') == '1.1')	$('input:radio[name="ad24"]').filter('[value="1.1"]').attr('checked',true);
	}
	if (localStorage.getItem('ad25inp') != '') {
		if (localStorage.getItem('ad25inp') == '1')	$('input:radio[name="ad25"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ad25inp') == '1.1')	$('input:radio[name="ad25"]').filter('[value="1.1"]').attr('checked',true);
	}
	if (localStorage.getItem('ad26inp') != '') {
		if (localStorage.getItem('ad26inp') == '1')	$('input:radio[name="ad26"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ad26inp') == '1.1')	$('input:radio[name="ad26"]').filter('[value="1.1"]').attr('checked',true);
	}
	if (localStorage.getItem('ad27inp') != '') {
		if (localStorage.getItem('ad27inp') == '1')	$('input:radio[name="ad27"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ad27inp') == '1.1')	$('input:radio[name="ad27"]').filter('[value="1.1"]').attr('checked',true);
	}
	if (localStorage.getItem('ad28inp') != '') {
		if (localStorage.getItem('ad28inp') == '1')	$('input:radio[name="ad28"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ad28inp') == '1.1')	$('input:radio[name="ad28"]').filter('[value="1.1"]').attr('checked',true);
	}
	if (localStorage.getItem('ad29inp') != '') {
		if (localStorage.getItem('ad29inp') == '1')	$('input:radio[name="ad29"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ad29inp') == '1.1')	$('input:radio[name="ad29"]').filter('[value="1.1"]').attr('checked',true);
	}
	if (localStorage.getItem('ad30inp') != '') {
		if (localStorage.getItem('ad30inp') == '1')	$('input:radio[name="ad30"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('ad30inp') == '1.1')	$('input:radio[name="ad30"]').filter('[value="1.1"]').attr('checked',true);
	}
});