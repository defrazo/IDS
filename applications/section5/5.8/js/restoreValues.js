$(document).ready(function() {
	if (localStorage.getItem('dateinp') != '')	$('#date').val(localStorage.getItem('dateinp'));
	if (localStorage.getItem('genderinp') != '') {
		if (localStorage.getItem('genderinp') == 'Мужской')	$('input:radio[name="gender"]').filter('[value="Мужской"]').attr('checked',true);
		if (localStorage.getItem('genderinp') == 'Женский')	$('input:radio[name="gender"]').filter('[value="Женский"]').attr('checked',true);
	}
	if (localStorage.getItem('snameinp') != '')	$('#sname').val(localStorage.getItem('snameinp'));
	if (localStorage.getItem('fnameinp') != '')	$('#fname').val(localStorage.getItem('fnameinp'));
	if (localStorage.getItem('mnameinp') != '')	$('#mname').val(localStorage.getItem('mnameinp'));
	if (localStorage.getItem('facinp') != '')	$('#fac').val(localStorage.getItem('facinp'));
	if (localStorage.getItem('af1inp') != '') {
		if (localStorage.getItem('af1inp') == '3')	$('input:radio[name="af1"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('af1inp') == '2')	$('input:radio[name="af1"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('af1inp') == '1')	$('input:radio[name="af1"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('af2inp') != '') {
		if (localStorage.getItem('af2inp') == '3')	$('input:radio[name="af2"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('af2inp') == '2')	$('input:radio[name="af2"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('af2inp') == '1')	$('input:radio[name="af2"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('af3inp') != '') {
		if (localStorage.getItem('af3inp') == '3')	$('input:radio[name="af3"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('af3inp') == '2')	$('input:radio[name="af3"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('af3inp') == '1')	$('input:radio[name="af3"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('af4inp') != '') {
		if (localStorage.getItem('af4inp') == '3')	$('input:radio[name="af4"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('af4inp') == '2')	$('input:radio[name="af4"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('af4inp') == '1')	$('input:radio[name="af4"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('af5inp') != '') {
		if (localStorage.getItem('af5inp') == '3')	$('input:radio[name="af5"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('af5inp') == '2')	$('input:radio[name="af5"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('af5inp') == '1')	$('input:radio[name="af5"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('af6inp') != '') {
		if (localStorage.getItem('af6inp') == '3')	$('input:radio[name="af6"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('af6inp') == '2')	$('input:radio[name="af6"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('af6inp') == '1')	$('input:radio[name="af6"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('af7inp') != '') {
		if (localStorage.getItem('af7inp') == '3')	$('input:radio[name="af7"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('af7inp') == '2')	$('input:radio[name="af7"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('af7inp') == '1')	$('input:radio[name="af7"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('af8inp') != '') {
		if (localStorage.getItem('af8inp') == '3')	$('input:radio[name="af8"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('af8inp') == '2')	$('input:radio[name="af8"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('af8inp') == '1')	$('input:radio[name="af8"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('af9inp') != '') {
		if (localStorage.getItem('af9inp') == '3')	$('input:radio[name="af9"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('af9inp') == '2')	$('input:radio[name="af9"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('af9inp') == '1')	$('input:radio[name="af9"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('af10inp') != '') {
		if (localStorage.getItem('af10inp') == '3')	$('input:radio[name="af10"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('af10inp') == '2')	$('input:radio[name="af10"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('af10inp') == '1')	$('input:radio[name="af10"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('af11inp') != '') {
		if (localStorage.getItem('af11inp') == '3')	$('input:radio[name="af11"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('af11inp') == '2')	$('input:radio[name="af11"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('af11inp') == '1')	$('input:radio[name="af11"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('af12inp') != '') {
		if (localStorage.getItem('af12inp') == '3')	$('input:radio[name="af12"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('af12inp') == '2')	$('input:radio[name="af12"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('af12inp') == '1')	$('input:radio[name="af12"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('af13inp') != '') {
		if (localStorage.getItem('af13inp') == '3')	$('input:radio[name="af13"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('af13inp') == '2')	$('input:radio[name="af13"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('af13inp') == '1')	$('input:radio[name="af13"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('af14inp') != '') {
		if (localStorage.getItem('af14inp') == '3')	$('input:radio[name="af14"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('af14inp') == '2')	$('input:radio[name="af14"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('af14inp') == '1')	$('input:radio[name="af14"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('af15inp') != '') {
		if (localStorage.getItem('af15inp') == '3')	$('input:radio[name="af15"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('af15inp') == '2')	$('input:radio[name="af15"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('af15inp') == '1')	$('input:radio[name="af15"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('af16inp') != '') {
		if (localStorage.getItem('af16inp') == '3')	$('input:radio[name="af16"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('af16inp') == '2')	$('input:radio[name="af16"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('af16inp') == '1')	$('input:radio[name="af16"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('af17inp') != '') {
		if (localStorage.getItem('af17inp') == '3')	$('input:radio[name="af17"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('af17inp') == '2')	$('input:radio[name="af17"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('af17inp') == '1')	$('input:radio[name="af17"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('af18inp') != '') {
		if (localStorage.getItem('af18inp') == '3')	$('input:radio[name="af18"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('af18inp') == '2')	$('input:radio[name="af18"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('af18inp') == '1')	$('input:radio[name="af18"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('af19inp') != '') {
		if (localStorage.getItem('af19inp') == '3')	$('input:radio[name="af19"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('af19inp') == '2')	$('input:radio[name="af19"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('af19inp') == '1')	$('input:radio[name="af19"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('af20inp') != '') {
		if (localStorage.getItem('af20inp') == '3')	$('input:radio[name="af20"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('af20inp') == '2')	$('input:radio[name="af20"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('af20inp') == '1')	$('input:radio[name="af20"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('af21inp') != '') {
		if (localStorage.getItem('af21inp') == '3')	$('input:radio[name="af21"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('af21inp') == '2')	$('input:radio[name="af21"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('af21inp') == '1')	$('input:radio[name="af21"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('af22inp') != '') {
		if (localStorage.getItem('af22inp') == '3')	$('input:radio[name="af22"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('af22inp') == '2')	$('input:radio[name="af22"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('af22inp') == '1')	$('input:radio[name="af22"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('af23inp') != '') {
		if (localStorage.getItem('af23inp') == '3')	$('input:radio[name="af23"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('af23inp') == '2')	$('input:radio[name="af23"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('af23inp') == '1')	$('input:radio[name="af23"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('af24inp') != '') {
		if (localStorage.getItem('af24inp') == '3')	$('input:radio[name="af24"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('af24inp') == '2')	$('input:radio[name="af24"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('af24inp') == '1')	$('input:radio[name="af24"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('af25inp') != '') {
		if (localStorage.getItem('af25inp') == '3')	$('input:radio[name="af25"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('af25inp') == '2')	$('input:radio[name="af25"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('af25inp') == '1')	$('input:radio[name="af25"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('af26inp') != '') {
		if (localStorage.getItem('af26inp') == '3')	$('input:radio[name="af26"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('af26inp') == '2')	$('input:radio[name="af26"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('af26inp') == '1')	$('input:radio[name="af26"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('af27inp') != '') {
		if (localStorage.getItem('af27inp') == '3')	$('input:radio[name="af27"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('af27inp') == '2')	$('input:radio[name="af27"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('af27inp') == '1')	$('input:radio[name="af27"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('af28inp') != '') {
		if (localStorage.getItem('af28inp') == '3')	$('input:radio[name="af28"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('af28inp') == '2')	$('input:radio[name="af28"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('af28inp') == '1')	$('input:radio[name="af28"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('af29inp') != '') {
		if (localStorage.getItem('af29inp') == '3')	$('input:radio[name="af29"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('af29inp') == '2')	$('input:radio[name="af29"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('af29inp') == '1')	$('input:radio[name="af29"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('af30inp') != '') {
		if (localStorage.getItem('af30inp') == '3')	$('input:radio[name="af30"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('af30inp') == '2')	$('input:radio[name="af30"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('af30inp') == '1')	$('input:radio[name="af30"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('af31inp') != '') {
		if (localStorage.getItem('af31inp') == '3')	$('input:radio[name="af31"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('af31inp') == '2')	$('input:radio[name="af31"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('af31inp') == '1')	$('input:radio[name="af31"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('af32inp') != '') {
		if (localStorage.getItem('af32inp') == '3')	$('input:radio[name="af32"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('af32inp') == '2')	$('input:radio[name="af32"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('af32inp') == '1')	$('input:radio[name="af32"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('af33inp') != '') {
		if (localStorage.getItem('af33inp') == '3')	$('input:radio[name="af33"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('af33inp') == '2')	$('input:radio[name="af33"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('af33inp') == '1')	$('input:radio[name="af33"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('af34inp') != '') {
		if (localStorage.getItem('af34inp') == '3')	$('input:radio[name="af34"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('af34inp') == '2')	$('input:radio[name="af34"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('af34inp') == '1')	$('input:radio[name="af34"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('af35inp') != '') {
		if (localStorage.getItem('af35inp') == '3')	$('input:radio[name="af35"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('af35inp') == '2')	$('input:radio[name="af35"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('af35inp') == '1')	$('input:radio[name="af35"]').filter('[value="1"]').attr('checked',true);
	}
	if (localStorage.getItem('af36inp') != '') {
		if (localStorage.getItem('af36inp') == '3')	$('input:radio[name="af36"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('af36inp') == '2')	$('input:radio[name="af36"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('af36inp') == '1')	$('input:radio[name="af36"]').filter('[value="1"]').attr('checked',true);
	}
});