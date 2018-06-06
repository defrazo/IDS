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
	if (localStorage.getItem('n1inp') != '') {
		if (localStorage.getItem('n1inp') == '1')	$('input:radio[name="n1"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('n1inp') == '0')	$('input:radio[name="n1"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('n2inp') != '') {
		if (localStorage.getItem('n2inp') == '1')	$('input:radio[name="n2"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('n2inp') == '0')	$('input:radio[name="n2"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('n3inp') != '') {
		if (localStorage.getItem('n3inp') == '1')	$('input:radio[name="n3"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('n3inp') == '0')	$('input:radio[name="n3"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('n4inp') != '') {
		if (localStorage.getItem('n4inp') == '1')	$('input:radio[name="n4"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('n4inp') == '0')	$('input:radio[name="n4"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('n5inp') != '') {
		if (localStorage.getItem('n5inp') == '1')	$('input:radio[name="n5"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('n5inp') == '0')	$('input:radio[name="n5"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('n6inp') != '') {
		if (localStorage.getItem('n6inp') == '1')	$('input:radio[name="n6"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('n6inp') == '0')	$('input:radio[name="n6"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('n7inp') != '') {
		if (localStorage.getItem('n7inp') == '1')	$('input:radio[name="n7"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('n7inp') == '0')	$('input:radio[name="n7"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('n8inp') != '') {
		if (localStorage.getItem('n8inp') == '1')	$('input:radio[name="n8"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('n8inp') == '0')	$('input:radio[name="n8"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('n9inp') != '') {
		if (localStorage.getItem('n9inp') == '1')	$('input:radio[name="n9"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('n9inp') == '0')	$('input:radio[name="n9"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('n10inp') != '') {
		if (localStorage.getItem('n10inp') == '1')	$('input:radio[name="n10"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('n10inp') == '0')	$('input:radio[name="n10"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('n11inp') != '') {
		if (localStorage.getItem('n11inp') == '1')	$('input:radio[name="n11"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('n11inp') == '0')	$('input:radio[name="n11"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('n12inp') != '') {
		if (localStorage.getItem('n12inp') == '1')	$('input:radio[name="n12"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('n12inp') == '0')	$('input:radio[name="n12"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('n13inp') != '') {
		if (localStorage.getItem('n13inp') == '1')	$('input:radio[name="n13"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('n13inp') == '0')	$('input:radio[name="n13"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('n14inp') != '') {
		if (localStorage.getItem('n14inp') == '1')	$('input:radio[name="n14"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('n14inp') == '0')	$('input:radio[name="n14"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('n15inp') != '') {
		if (localStorage.getItem('n15inp') == '1')	$('input:radio[name="n15"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('n15inp') == '0')	$('input:radio[name="n15"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('n16inp') != '') {
		if (localStorage.getItem('n16inp') == '1')	$('input:radio[name="n16"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('n16inp') == '0')	$('input:radio[name="n16"]').filter('[value="0"]').attr('checked',true);
	}
});