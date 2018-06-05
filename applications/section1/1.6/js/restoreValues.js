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
	if (localStorage.getItem('dd1inp') != '') {
		if (localStorage.getItem('dd1inp') == '1')	$('input:radio[name="dd1"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('dd1inp') == '2')	$('input:radio[name="dd1"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('dd1inp') == '3')	$('input:radio[name="dd1"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('dd1inp') == '4')	$('input:radio[name="dd1"]').filter('[value="4"]').attr('checked',true);
		if (localStorage.getItem('dd1inp') == '5')	$('input:radio[name="dd1"]').filter('[value="5"]').attr('checked',true);
	}
	if (localStorage.getItem('dd2inp') != '') {
		if (localStorage.getItem('dd2inp') == '1')	$('input:radio[name="dd2"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('dd2inp') == '2')	$('input:radio[name="dd2"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('dd2inp') == '3')	$('input:radio[name="dd2"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('dd2inp') == '4')	$('input:radio[name="dd2"]').filter('[value="4"]').attr('checked',true);
		if (localStorage.getItem('dd2inp') == '5')	$('input:radio[name="dd2"]').filter('[value="5"]').attr('checked',true);
	}
	if (localStorage.getItem('dd3inp') != '') {
		if (localStorage.getItem('dd3inp') == '1')	$('input:radio[name="dd3"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('dd3inp') == '2')	$('input:radio[name="dd3"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('dd3inp') == '3')	$('input:radio[name="dd3"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('dd3inp') == '4')	$('input:radio[name="dd3"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('dd4inp') != '') {
		if (localStorage.getItem('dd4inp') == '1')	$('input:radio[name="dd4"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('dd4inp') == '2')	$('input:radio[name="dd4"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('dd4inp') == '3')	$('input:radio[name="dd4"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('dd4inp') == '4')	$('input:radio[name="dd4"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('dd5inp') != '') {
		if (localStorage.getItem('dd5inp') == '1')	$('input:radio[name="dd5"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('dd5inp') == '2')	$('input:radio[name="dd5"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('dd5inp') == '3')	$('input:radio[name="dd5"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('dd5inp') == '4')	$('input:radio[name="dd5"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('dd6inp') != '') {
		if (localStorage.getItem('dd6inp') == '1')	$('input:radio[name="dd6"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('dd6inp') == '2')	$('input:radio[name="dd6"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('dd6inp') == '3')	$('input:radio[name="dd6"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('dd6inp') == '4')	$('input:radio[name="dd6"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('dd7inp') != '') {
		if (localStorage.getItem('dd7inp') == '1')	$('input:radio[name="dd7"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('dd7inp') == '2')	$('input:radio[name="dd7"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('dd7inp') == '3')	$('input:radio[name="dd7"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('dd7inp') == '4')	$('input:radio[name="dd7"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('dd8inp') != '') {
		if (localStorage.getItem('dd8inp') == '1')	$('input:radio[name="dd8"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('dd8inp') == '2')	$('input:radio[name="dd8"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('dd8inp') == '3')	$('input:radio[name="dd8"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('dd8inp') == '4')	$('input:radio[name="dd8"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('dd9inp') != '') {
		if (localStorage.getItem('dd9inp') == '1')	$('input:radio[name="dd9"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('dd9inp') == '2')	$('input:radio[name="dd9"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('dd9inp') == '3')	$('input:radio[name="dd9"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('dd9inp') == '4')	$('input:radio[name="dd9"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('dd10inp') != '') {
		if (localStorage.getItem('dd10inp') == '2')	$('input:radio[name="dd10"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('dd10inp') == '3')	$('input:radio[name="dd10"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('dd10inp') == '4')	$('input:radio[name="dd10"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('dd11inp') != '') {
		if (localStorage.getItem('dd11inp') == '1')	$('input:radio[name="dd11"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('dd11inp') == '2')	$('input:radio[name="dd11"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('dd11inp') == '3')	$('input:radio[name="dd11"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('dd11inp') == '4')	$('input:radio[name="dd11"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('dd12inp') != '') {
		if (localStorage.getItem('dd12inp') == '1')	$('input:radio[name="dd12"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('dd12inp') == '2')	$('input:radio[name="dd12"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('dd12inp') == '3')	$('input:radio[name="dd12"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('dd12inp') == '4')	$('input:radio[name="dd12"]').filter('[value="4"]').attr('checked',true);
		if (localStorage.getItem('dd12inp') == '5')	$('input:radio[name="dd12"]').filter('[value="5"]').attr('checked',true);
	}
	if (localStorage.getItem('dd13inp') != '') {
		if (localStorage.getItem('dd13inp') == '0')	$('input:radio[name="dd13"]').filter('[value="0"]').attr('checked',true);
		if (localStorage.getItem('dd13inp') == '2')	$('input:radio[name="dd13"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('dd13inp') == '4')	$('input:radio[name="dd13"]').filter('[value="4"]').attr('checked',true);
		if (localStorage.getItem('dd13inp') == '6')	$('input:radio[name="dd13"]').filter('[value="6"]').attr('checked',true);
	}
	if (localStorage.getItem('dd14inp') != '') {
		if (localStorage.getItem('dd14inp') == '0')	$('input:radio[name="dd14"]').filter('[value="0"]').attr('checked',true);
		if (localStorage.getItem('dd14inp') == '2')	$('input:radio[name="dd14"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('dd14inp') == '3')	$('input:radio[name="dd14"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('dd14inp') == '5')	$('input:radio[name="dd14"]').filter('[value="5"]').attr('checked',true);
	}
	if (localStorage.getItem('dd15inp') != '') {
		if (localStorage.getItem('dd15inp') == '1')	$('input:radio[name="dd15"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('dd15inp') == '2')	$('input:radio[name="dd15"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('dd15inp') == '3')	$('input:radio[name="dd15"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('dd15inp') == '4')	$('input:radio[name="dd15"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('dd16inp') != '') {
		if (localStorage.getItem('dd16inp') == '1')	$('input:radio[name="dd16"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('dd16inp') == '2')	$('input:radio[name="dd16"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('dd16inp') == '3')	$('input:radio[name="dd16"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('dd16inp') == '4')	$('input:radio[name="dd16"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('dd17inp') != '') {
		if (localStorage.getItem('dd17inp') == '1')	$('input:radio[name="dd17"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('dd17inp') == '2')	$('input:radio[name="dd17"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('dd17inp') == '3')	$('input:radio[name="dd17"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('dd17inp') == '4')	$('input:radio[name="dd17"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('dd18inp') != '') {
		if (localStorage.getItem('dd18inp') == '1')	$('input:radio[name="dd18"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('dd18inp') == '2')	$('input:radio[name="dd18"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('dd18inp') == '3')	$('input:radio[name="dd18"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('dd18inp') == '4')	$('input:radio[name="dd18"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('dd19inp') != '') {
		if (localStorage.getItem('dd19inp') == '1')	$('input:radio[name="dd19"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('dd19inp') == '2')	$('input:radio[name="dd19"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('dd19inp') == '3')	$('input:radio[name="dd19"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('dd19inp') == '4')	$('input:radio[name="dd19"]').filter('[value="4"]').attr('checked',true);
	}
	if (localStorage.getItem('dd20inp') != '') {
		if (localStorage.getItem('dd20inp') == '1')	$('input:radio[name="dd20"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('dd20inp') == '2')	$('input:radio[name="dd20"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('dd20inp') == '3')	$('input:radio[name="dd20"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('dd20inp') == '4')	$('input:radio[name="dd20"]').filter('[value="4"]').attr('checked',true);
		if (localStorage.getItem('dd20inp') == '5')	$('input:radio[name="dd20"]').filter('[value="5"]').attr('checked',true);
	}
	if (localStorage.getItem('dd21inp') != '') {
		if (localStorage.getItem('dd21inp') == '1')	$('input:radio[name="dd21"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('dd21inp') == '1.1')	$('input:radio[name="dd21"]').filter('[value="1.1"]').attr('checked',true);
		if (localStorage.getItem('dd21inp') == '2')	$('input:radio[name="dd21"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('dd21inp') == '3')	$('input:radio[name="dd21"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('dd21inp') == '4')	$('input:radio[name="dd21"]').filter('[value="4"]').attr('checked',true);
		if (localStorage.getItem('dd21inp') == '5')	$('input:radio[name="dd21"]').filter('[value="5"]').attr('checked',true);
	}
	if (localStorage.getItem('dd22inp') != '') {
		if (localStorage.getItem('dd22inp') == '1')	$('input:radio[name="dd22"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('dd22inp') == '1.1')	$('input:radio[name="dd22"]').filter('[value="1.1"]').attr('checked',true);
		if (localStorage.getItem('dd22inp') == '2')	$('input:radio[name="dd22"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('dd22inp') == '3')	$('input:radio[name="dd22"]').filter('[value="3"]').attr('checked',true);
		if (localStorage.getItem('dd22inp') == '4')	$('input:radio[name="dd22"]').filter('[value="4"]').attr('checked',true);
		if (localStorage.getItem('dd22inp') == '5')	$('input:radio[name="dd22"]').filter('[value="5"]').attr('checked',true);
	}
	if (localStorage.getItem('dd23inp') != '') {
		if (localStorage.getItem('dd23inp') == '0')	$('input:radio[name="dd23"]').filter('[value="0"]').attr('checked',true);
		if (localStorage.getItem('dd23inp') == '2')	$('input:radio[name="dd23"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('dd23inp') == '4')	$('input:radio[name="dd23"]').filter('[value="4"]').attr('checked',true);
		if (localStorage.getItem('dd23inp') == '6')	$('input:radio[name="dd23"]').filter('[value="6"]').attr('checked',true);
	}
});