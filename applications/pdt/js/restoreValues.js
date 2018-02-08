$(document).ready(function() { //Восстанавливает значения полей
	if (localStorage.getItem('dateinp') != '')	$('#date').val(localStorage.getItem('dateinp'));
	if (localStorage.getItem('snameinp') != '')	$('#sname').val(localStorage.getItem('snameinp'));
	if (localStorage.getItem('fnameinp') != '')	$('#fname').val(localStorage.getItem('fnameinp'));
	if (localStorage.getItem('mnameinp') != '')	$('#mname').val(localStorage.getItem('mnameinp'));

	if (localStorage.getItem('q1') != '') {
		if (localStorage.getItem('q1') == 'yes')	$('input:radio[name="q1"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q1') == 'no')	$('input:radio[name="q1"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q1') == 'unsure')	$('input:radio[name="q1"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q2') != '') {
		if (localStorage.getItem('q2') == 'yes')	$('input:radio[name="q2"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q2') == 'no')	$('input:radio[name="q2"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q2') == 'unsure')	$('input:radio[name="q2"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q3') != '') {
		if (localStorage.getItem('q3') == 'yes')	$('input:radio[name="q3"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q3') == 'no')	$('input:radio[name="q3"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q3') == 'unsure')	$('input:radio[name="q3"]').filter('[value="no"]').attr('checked',true);
	}
	
	if (localStorage.getItem('q4') != '') {
		if (localStorage.getItem('q4') == 'yes')	$('input:radio[name="q4"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q4') == 'no')	$('input:radio[name="q4"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q4') == 'unsure')	$('input:radio[name="q4"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q5') != '') {
		if (localStorage.getItem('q5') == 'yes')	$('input:radio[name="q5"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q5') == 'no')	$('input:radio[name="q5"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q5') == 'unsure')	$('input:radio[name="q5"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q6') != '') {
		if (localStorage.getItem('q6') == 'yes')	$('input:radio[name="q6"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q6') == 'no')	$('input:radio[name="q6"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q6') == 'unsure')	$('input:radio[name="q6"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q7') != '') {
		if (localStorage.getItem('q7') == 'yes')	$('input:radio[name="q7"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q7') == 'no')	$('input:radio[name="q7"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q7') == 'unsure')	$('input:radio[name="q7"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q8') != '') {
		if (localStorage.getItem('q8') == 'yes')	$('input:radio[name="q8"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q8') == 'no')	$('input:radio[name="q8"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q8') == 'unsure')	$('input:radio[name="q8"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q8') != '') {
		if (localStorage.getItem('q8') == 'yes')	$('input:radio[name="q8"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q8') == 'no')	$('input:radio[name="q8"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q8') == 'unsure')	$('input:radio[name="q8"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q9') != '') {
		if (localStorage.getItem('q9') == 'yes')	$('input:radio[name="q9"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q9') == 'no')	$('input:radio[name="q9"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q9') == 'unsure')	$('input:radio[name="q9"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q10') != '') {
		if (localStorage.getItem('q10') == 'yes')	$('input:radio[name="q10"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q10') == 'no')	$('input:radio[name="q10"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q10') == 'unsure')	$('input:radio[name="q10"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q11') != '') {
		if (localStorage.getItem('q11') == 'yes')	$('input:radio[name="q11"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q11') == 'no')	$('input:radio[name="q11"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q11') == 'unsure')	$('input:radio[name="q11"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q12') != '') {
		if (localStorage.getItem('q12') == 'yes')	$('input:radio[name="q12"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q12') == 'no')	$('input:radio[name="q12"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q12') == 'unsure')	$('input:radio[name="q12"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q13') != '') {
		if (localStorage.getItem('q13') == 'yes')	$('input:radio[name="q13"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q13') == 'no')	$('input:radio[name="q13"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q13') == 'unsure')	$('input:radio[name="q13"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q14') != '') {
		if (localStorage.getItem('q14') == 'yes')	$('input:radio[name="q14"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q14') == 'no')	$('input:radio[name="q14"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q14') == 'unsure')	$('input:radio[name="q14"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q15') != '') {
		if (localStorage.getItem('q15') == 'yes')	$('input:radio[name="q15"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q15') == 'no')	$('input:radio[name="q15"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q15') == 'unsure')	$('input:radio[name="q15"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q16') != '') {
		if (localStorage.getItem('q16') == 'yes')	$('input:radio[name="q16"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q16') == 'no')	$('input:radio[name="q16"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q16') == 'unsure')	$('input:radio[name="q16"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q17') != '') {
		if (localStorage.getItem('q17') == 'yes')	$('input:radio[name="q17"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q17') == 'no')	$('input:radio[name="q17"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q17') == 'unsure')	$('input:radio[name="q17"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q18') != '') {
		if (localStorage.getItem('q18') == 'yes')	$('input:radio[name="q18"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q18') == 'no')	$('input:radio[name="q18"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q18') == 'unsure')	$('input:radio[name="q18"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q19') != '') {
		if (localStorage.getItem('q19') == 'yes')	$('input:radio[name="q19"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q19') == 'no')	$('input:radio[name="q19"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q19') == 'unsure')	$('input:radio[name="q19"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q20') != '') {
		if (localStorage.getItem('q20') == 'yes')	$('input:radio[name="q20"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q20') == 'no')	$('input:radio[name="q20"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q20') == 'unsure')	$('input:radio[name="q20"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q21') != '') {
		if (localStorage.getItem('q21') == 'yes')	$('input:radio[name="q21"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q21') == 'no')	$('input:radio[name="q21"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q21') == 'unsure')	$('input:radio[name="q21"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q22') != '') {
		if (localStorage.getItem('q22') == 'yes')	$('input:radio[name="q22"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q22') == 'no')	$('input:radio[name="q22"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q22') == 'unsure')	$('input:radio[name="q22"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q23') != '') {
		if (localStorage.getItem('q23') == 'yes')	$('input:radio[name="q23"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q23') == 'no')	$('input:radio[name="q23"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q23') == 'unsure')	$('input:radio[name="q23"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q24') != '') {
		if (localStorage.getItem('q24') == 'yes')	$('input:radio[name="q24"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q24') == 'no')	$('input:radio[name="q24"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q24') == 'unsure')	$('input:radio[name="q24"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q25') != '') {
		if (localStorage.getItem('q25') == 'yes')	$('input:radio[name="q25"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q25') == 'no')	$('input:radio[name="q25"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q25') == 'unsure')	$('input:radio[name="q25"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q26') != '') {
		if (localStorage.getItem('q26') == 'yes')	$('input:radio[name="q26"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q26') == 'no')	$('input:radio[name="q26"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q26') == 'unsure')	$('input:radio[name="q26"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q27') != '') {
		if (localStorage.getItem('q27') == 'yes')	$('input:radio[name="q27"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q27') == 'no')	$('input:radio[name="q27"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q27') == 'unsure')	$('input:radio[name="q27"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q28') != '') {
		if (localStorage.getItem('q28') == 'yes')	$('input:radio[name="q28"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q28') == 'no')	$('input:radio[name="q28"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q28') == 'unsure')	$('input:radio[name="q28"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q29') != '') {
		if (localStorage.getItem('q29') == 'yes')	$('input:radio[name="q29"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q29') == 'no')	$('input:radio[name="q29"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q29') == 'unsure')	$('input:radio[name="q29"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q30') != '') {
		if (localStorage.getItem('q30') == 'yes')	$('input:radio[name="q30"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q30') == 'no')	$('input:radio[name="q30"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q30') == 'unsure')	$('input:radio[name="q30"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q31') != '') {
		if (localStorage.getItem('q31') == 'yes')	$('input:radio[name="q31"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q31') == 'no')	$('input:radio[name="q31"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q31') == 'unsure')	$('input:radio[name="q31"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q32') != '') {
		if (localStorage.getItem('q32') == 'yes')	$('input:radio[name="q32"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q32') == 'no')	$('input:radio[name="q32"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q32') == 'unsure')	$('input:radio[name="q32"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q33') != '') {
		if (localStorage.getItem('q33') == 'yes')	$('input:radio[name="q33"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q33') == 'no')	$('input:radio[name="q33"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q33') == 'unsure')	$('input:radio[name="q33"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q34') != '') {
		if (localStorage.getItem('q34') == 'yes')	$('input:radio[name="q34"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q34') == 'no')	$('input:radio[name="q34"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q34') == 'unsure')	$('input:radio[name="q34"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q35') != '') {
		if (localStorage.getItem('q35') == 'yes')	$('input:radio[name="q35"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q35') == 'no')	$('input:radio[name="q35"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q35') == 'unsure')	$('input:radio[name="q35"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q36') != '') {
		if (localStorage.getItem('q36') == 'yes')	$('input:radio[name="q36"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q36') == 'no')	$('input:radio[name="q36"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q36') == 'unsure')	$('input:radio[name="q36"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q37') != '') {
		if (localStorage.getItem('q37') == 'yes')	$('input:radio[name="q37"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q37') == 'no')	$('input:radio[name="q37"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q37') == 'unsure')	$('input:radio[name="q37"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q38') != '') {
		if (localStorage.getItem('q38') == 'yes')	$('input:radio[name="q38"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q38') == 'no')	$('input:radio[name="q38"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q38') == 'unsure')	$('input:radio[name="q38"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q39') != '') {
		if (localStorage.getItem('q39') == 'yes')	$('input:radio[name="q39"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q39') == 'no')	$('input:radio[name="q39"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q39') == 'unsure')	$('input:radio[name="q39"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q40') != '') {
		if (localStorage.getItem('q40') == 'yes')	$('input:radio[name="q40"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q40') == 'no')	$('input:radio[name="q40"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q40') == 'unsure')	$('input:radio[name="q40"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q41') != '') {
		if (localStorage.getItem('q41') == 'yes')	$('input:radio[name="q41"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q41') == 'no')	$('input:radio[name="q41"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q41') == 'unsure')	$('input:radio[name="q41"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q42') != '') {
		if (localStorage.getItem('q42') == 'yes')	$('input:radio[name="q42"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q42') == 'no')	$('input:radio[name="q42"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q42') == 'unsure')	$('input:radio[name="q42"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q43') != '') {
		if (localStorage.getItem('q43') == 'yes')	$('input:radio[name="q43"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q43') == 'no')	$('input:radio[name="q43"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q43') == 'unsure')	$('input:radio[name="q43"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q44') != '') {
		if (localStorage.getItem('q44') == 'yes')	$('input:radio[name="q44"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q44') == 'no')	$('input:radio[name="q44"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q44') == 'unsure')	$('input:radio[name="q44"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q45') != '') {
		if (localStorage.getItem('q45') == 'yes')	$('input:radio[name="q45"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q45') == 'no')	$('input:radio[name="q45"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q45') == 'unsure')	$('input:radio[name="q45"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q46') != '') {
		if (localStorage.getItem('q46') == 'yes')	$('input:radio[name="q46"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q46') == 'no')	$('input:radio[name="q46"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q46') == 'unsure')	$('input:radio[name="q46"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q47') != '') {
		if (localStorage.getItem('q47') == 'yes')	$('input:radio[name="q47"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q47') == 'no')	$('input:radio[name="q47"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q47') == 'unsure')	$('input:radio[name="q47"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q48') != '') {
		if (localStorage.getItem('q48') == 'yes')	$('input:radio[name="q48"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q48') == 'no')	$('input:radio[name="q48"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q48') == 'unsure')	$('input:radio[name="q48"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q49') != '') {
		if (localStorage.getItem('q49') == 'yes')	$('input:radio[name="q49"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q49') == 'no')	$('input:radio[name="q49"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q49') == 'unsure')	$('input:radio[name="q49"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q50') != '') {
		if (localStorage.getItem('q50') == 'yes')	$('input:radio[name="q50"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q50') == 'no')	$('input:radio[name="q50"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q50') == 'unsure')	$('input:radio[name="q50"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q51') != '') {
		if (localStorage.getItem('q51') == 'yes')	$('input:radio[name="q51"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q51') == 'no')	$('input:radio[name="q51"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q51') == 'unsure')	$('input:radio[name="q51"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q52') != '') {
		if (localStorage.getItem('q52') == 'yes')	$('input:radio[name="q52"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q52') == 'no')	$('input:radio[name="q52"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q52') == 'unsure')	$('input:radio[name="q52"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q53') != '') {
		if (localStorage.getItem('q53') == 'yes')	$('input:radio[name="q53"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q53') == 'no')	$('input:radio[name="q53"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q53') == 'unsure')	$('input:radio[name="q53"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q54') != '') {
		if (localStorage.getItem('q54') == 'yes')	$('input:radio[name="q54"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q54') == 'no')	$('input:radio[name="q54"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q54') == 'unsure')	$('input:radio[name="q54"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q55') != '') {
		if (localStorage.getItem('q55') == 'yes')	$('input:radio[name="q55"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q55') == 'no')	$('input:radio[name="q55"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q55') == 'unsure')	$('input:radio[name="q55"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q56') != '') {
		if (localStorage.getItem('q56') == 'yes')	$('input:radio[name="q56"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q56') == 'no')	$('input:radio[name="q56"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q56') == 'unsure')	$('input:radio[name="q56"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q57') != '') {
		if (localStorage.getItem('q57') == 'yes')	$('input:radio[name="q57"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q57') == 'no')	$('input:radio[name="q57"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q57') == 'unsure')	$('input:radio[name="q57"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q58') != '') {
		if (localStorage.getItem('q58') == 'yes')	$('input:radio[name="q58"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q58') == 'no')	$('input:radio[name="q58"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q58') == 'unsure')	$('input:radio[name="q58"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q59') != '') {
		if (localStorage.getItem('q59') == 'yes')	$('input:radio[name="q59"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q59') == 'no')	$('input:radio[name="q59"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q59') == 'unsure')	$('input:radio[name="q59"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q60') != '') {
		if (localStorage.getItem('q60') == 'yes')	$('input:radio[name="q60"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q60') == 'no')	$('input:radio[name="q60"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q60') == 'unsure')	$('input:radio[name="q60"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q61') != '') {
		if (localStorage.getItem('q61') == 'yes')	$('input:radio[name="q61"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q61') == 'no')	$('input:radio[name="q61"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q61') == 'unsure')	$('input:radio[name="q61"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q62') != '') {
		if (localStorage.getItem('q62') == 'yes')	$('input:radio[name="q62"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q62') == 'no')	$('input:radio[name="q62"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q62') == 'unsure')	$('input:radio[name="q62"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q63') != '') {
		if (localStorage.getItem('q63') == 'yes')	$('input:radio[name="q63"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q63') == 'no')	$('input:radio[name="q63"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q63') == 'unsure')	$('input:radio[name="q63"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q64') != '') {
		if (localStorage.getItem('q64') == 'yes')	$('input:radio[name="q64"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q64') == 'no')	$('input:radio[name="q64"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q64') == 'unsure')	$('input:radio[name="q64"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q65') != '') {
		if (localStorage.getItem('q65') == 'yes')	$('input:radio[name="q65"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q65') == 'no')	$('input:radio[name="q65"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q65') == 'unsure')	$('input:radio[name="q65"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q66') != '') {
		if (localStorage.getItem('q66') == 'yes')	$('input:radio[name="q66"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q66') == 'no')	$('input:radio[name="q66"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q66') == 'unsure')	$('input:radio[name="q66"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q67') != '') {
		if (localStorage.getItem('q67') == 'yes')	$('input:radio[name="q67"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q67') == 'no')	$('input:radio[name="q67"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q67') == 'unsure')	$('input:radio[name="q67"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q68') != '') {
		if (localStorage.getItem('q68') == 'yes')	$('input:radio[name="q68"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q68') == 'no')	$('input:radio[name="q68"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q68') == 'unsure')	$('input:radio[name="q68"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q69') != '') {
		if (localStorage.getItem('q69') == 'yes')	$('input:radio[name="q69"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q69') == 'no')	$('input:radio[name="q69"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q69') == 'unsure')	$('input:radio[name="q69"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q70') != '') {
		if (localStorage.getItem('q70') == 'yes')	$('input:radio[name="q70"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q70') == 'no')	$('input:radio[name="q70"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q70') == 'unsure')	$('input:radio[name="q70"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q71') != '') {
		if (localStorage.getItem('q71') == 'yes')	$('input:radio[name="q71"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q71') == 'no')	$('input:radio[name="q71"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q71') == 'unsure')	$('input:radio[name="q71"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q72') != '') {
		if (localStorage.getItem('q72') == 'yes')	$('input:radio[name="q72"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q72') == 'no')	$('input:radio[name="q72"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q72') == 'unsure')	$('input:radio[name="q72"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q73') != '') {
		if (localStorage.getItem('q73') == 'yes')	$('input:radio[name="q73"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q73') == 'no')	$('input:radio[name="q73"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q73') == 'unsure')	$('input:radio[name="q73"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q74') != '') {
		if (localStorage.getItem('q74') == 'yes')	$('input:radio[name="q74"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q74') == 'no')	$('input:radio[name="q74"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q74') == 'unsure')	$('input:radio[name="q74"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q75') != '') {
		if (localStorage.getItem('q75') == 'yes')	$('input:radio[name="q75"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q75') == 'no')	$('input:radio[name="q75"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q75') == 'unsure')	$('input:radio[name="q75"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q76') != '') {
		if (localStorage.getItem('q76') == 'yes')	$('input:radio[name="q76"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q76') == 'no')	$('input:radio[name="q76"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q76') == 'unsure')	$('input:radio[name="q76"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q77') != '') {
		if (localStorage.getItem('q77') == 'yes')	$('input:radio[name="q77"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q77') == 'no')	$('input:radio[name="q77"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q77') == 'unsure')	$('input:radio[name="q77"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q78') != '') {
		if (localStorage.getItem('q78') == 'yes')	$('input:radio[name="q78"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q78') == 'no')	$('input:radio[name="q78"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q78') == 'unsure')	$('input:radio[name="q78"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q79') != '') {
		if (localStorage.getItem('q79') == 'yes')	$('input:radio[name="q79"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q79') == 'no')	$('input:radio[name="q79"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q79') == 'unsure')	$('input:radio[name="q79"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q80') != '') {
		if (localStorage.getItem('q80') == 'yes')	$('input:radio[name="q80"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q80') == 'no')	$('input:radio[name="q80"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q80') == 'unsure')	$('input:radio[name="q80"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q81') != '') {
		if (localStorage.getItem('q81') == 'yes')	$('input:radio[name="q81"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q81') == 'no')	$('input:radio[name="q81"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q81') == 'unsure')	$('input:radio[name="q81"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q82') != '') {
		if (localStorage.getItem('q82') == 'yes')	$('input:radio[name="q82"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q82') == 'no')	$('input:radio[name="q82"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q82') == 'unsure')	$('input:radio[name="q82"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q83') != '') {
		if (localStorage.getItem('q83') == 'yes')	$('input:radio[name="q83"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q83') == 'no')	$('input:radio[name="q83"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q83') == 'unsure')	$('input:radio[name="q83"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q84') != '') {
		if (localStorage.getItem('q84') == 'yes')	$('input:radio[name="q84"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q84') == 'no')	$('input:radio[name="q84"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q84') == 'unsure')	$('input:radio[name="q84"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q85') != '') {
		if (localStorage.getItem('q85') == 'yes')	$('input:radio[name="q85"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q85') == 'no')	$('input:radio[name="q85"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q85') == 'unsure')	$('input:radio[name="q85"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q86') != '') {
		if (localStorage.getItem('q86') == 'yes')	$('input:radio[name="q86"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q86') == 'no')	$('input:radio[name="q86"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q86') == 'unsure')	$('input:radio[name="q86"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q87') != '') {
		if (localStorage.getItem('q87') == 'yes')	$('input:radio[name="q87"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q87') == 'no')	$('input:radio[name="q87"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q87') == 'unsure')	$('input:radio[name="q87"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q88') != '') {
		if (localStorage.getItem('q88') == 'yes')	$('input:radio[name="q88"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q88') == 'no')	$('input:radio[name="q88"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q88') == 'unsure')	$('input:radio[name="q88"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q89') != '') {
		if (localStorage.getItem('q89') == 'yes')	$('input:radio[name="q89"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q89') == 'no')	$('input:radio[name="q89"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q89') == 'unsure')	$('input:radio[name="q89"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q90') != '') {
		if (localStorage.getItem('q90') == 'yes')	$('input:radio[name="q90"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q90') == 'no')	$('input:radio[name="q90"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q90') == 'unsure')	$('input:radio[name="q90"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q91') != '') {
		if (localStorage.getItem('q91') == 'yes')	$('input:radio[name="q91"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q91') == 'no')	$('input:radio[name="q91"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q91') == 'unsure')	$('input:radio[name="q91"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q92') != '') {
		if (localStorage.getItem('q92') == 'yes')	$('input:radio[name="q92"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q92') == 'no')	$('input:radio[name="q92"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q92') == 'unsure')	$('input:radio[name="q92"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q93') != '') {
		if (localStorage.getItem('q93') == 'yes')	$('input:radio[name="q93"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q93') == 'no')	$('input:radio[name="q93"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q93') == 'unsure')	$('input:radio[name="q93"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q94') != '') {
		if (localStorage.getItem('q94') == 'yes')	$('input:radio[name="q94"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q94') == 'no')	$('input:radio[name="q94"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q94') == 'unsure')	$('input:radio[name="q94"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q95') != '') {
		if (localStorage.getItem('q95') == 'yes')	$('input:radio[name="q95"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q95') == 'no')	$('input:radio[name="q95"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q95') == 'unsure')	$('input:radio[name="q95"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q96') != '') {
		if (localStorage.getItem('q96') == 'yes')	$('input:radio[name="q96"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q96') == 'no')	$('input:radio[name="q96"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q96') == 'unsure')	$('input:radio[name="q96"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q97') != '') {
		if (localStorage.getItem('q97') == 'yes')	$('input:radio[name="q97"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q97') == 'no')	$('input:radio[name="q97"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q97') == 'unsure')	$('input:radio[name="q97"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q98') != '') {
		if (localStorage.getItem('q98') == 'yes')	$('input:radio[name="q98"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q98') == 'no')	$('input:radio[name="q98"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q98') == 'unsure')	$('input:radio[name="q98"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q99') != '') {
		if (localStorage.getItem('q99') == 'yes')	$('input:radio[name="q99"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q99') == 'no')	$('input:radio[name="q99"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q99') == 'unsure')	$('input:radio[name="q99"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q100') != '') {
		if (localStorage.getItem('q100') == 'yes')	$('input:radio[name="q100"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q100') == 'no')	$('input:radio[name="q100"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q100') == 'unsure')	$('input:radio[name="q100"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q101') != '') {
		if (localStorage.getItem('q101') == 'yes')	$('input:radio[name="q101"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q101') == 'no')	$('input:radio[name="q101"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q101') == 'unsure')	$('input:radio[name="q101"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q102') != '') {
		if (localStorage.getItem('q102') == 'yes')	$('input:radio[name="q102"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q102') == 'no')	$('input:radio[name="q102"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q102') == 'unsure')	$('input:radio[name="q102"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q103') != '') {
		if (localStorage.getItem('q103') == 'yes')	$('input:radio[name="q103"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q103') == 'no')	$('input:radio[name="q103"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q103') == 'unsure')	$('input:radio[name="q103"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q104') != '') {
		if (localStorage.getItem('q104') == 'yes')	$('input:radio[name="q104"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q104') == 'no')	$('input:radio[name="q104"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q104') == 'unsure')	$('input:radio[name="q104"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q105') != '') {
		if (localStorage.getItem('q105') == 'yes')	$('input:radio[name="q105"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q105') == 'no')	$('input:radio[name="q105"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q105') == 'unsure')	$('input:radio[name="q105"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q106') != '') {
		if (localStorage.getItem('q106') == 'yes')	$('input:radio[name="q106"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q106') == 'no')	$('input:radio[name="q106"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q106') == 'unsure')	$('input:radio[name="q106"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q107') != '') {
		if (localStorage.getItem('q107') == 'yes')	$('input:radio[name="q107"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q107') == 'no')	$('input:radio[name="q107"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q107') == 'unsure')	$('input:radio[name="q107"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q108') != '') {
		if (localStorage.getItem('q108') == 'yes')	$('input:radio[name="q108"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q108') == 'no')	$('input:radio[name="q108"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q108') == 'unsure')	$('input:radio[name="q108"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q109') != '') {
		if (localStorage.getItem('q109') == 'yes')	$('input:radio[name="q109"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q109') == 'no')	$('input:radio[name="q109"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q109') == 'unsure')	$('input:radio[name="q109"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q110') != '') {
		if (localStorage.getItem('q110') == 'yes')	$('input:radio[name="q110"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q110') == 'no')	$('input:radio[name="q110"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q110') == 'unsure')	$('input:radio[name="q110"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q111') != '') {
		if (localStorage.getItem('q111') == 'yes')	$('input:radio[name="q111"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q111') == 'no')	$('input:radio[name="q111"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q111') == 'unsure')	$('input:radio[name="q111"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q112') != '') {
		if (localStorage.getItem('q112') == 'yes')	$('input:radio[name="q112"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q112') == 'no')	$('input:radio[name="q112"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q112') == 'unsure')	$('input:radio[name="q112"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q113') != '') {
		if (localStorage.getItem('q113') == 'yes')	$('input:radio[name="q113"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q113') == 'no')	$('input:radio[name="q113"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q113') == 'unsure')	$('input:radio[name="q113"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q114') != '') {
		if (localStorage.getItem('q114') == 'yes')	$('input:radio[name="q114"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q114') == 'no')	$('input:radio[name="q114"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q114') == 'unsure')	$('input:radio[name="q114"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q115') != '') {
		if (localStorage.getItem('q115') == 'yes')	$('input:radio[name="q115"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q115') == 'no')	$('input:radio[name="q115"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q115') == 'unsure')	$('input:radio[name="q115"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q116') != '') {
		if (localStorage.getItem('q116') == 'yes')	$('input:radio[name="q116"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q116') == 'no')	$('input:radio[name="q116"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q116') == 'unsure')	$('input:radio[name="q116"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q117') != '') {
		if (localStorage.getItem('q117') == 'yes')	$('input:radio[name="q117"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q117') == 'no')	$('input:radio[name="q117"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q117') == 'unsure')	$('input:radio[name="q117"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q118') != '') {
		if (localStorage.getItem('q118') == 'yes')	$('input:radio[name="q118"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q118') == 'no')	$('input:radio[name="q118"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q118') == 'unsure')	$('input:radio[name="q118"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q119') != '') {
		if (localStorage.getItem('q119') == 'yes')	$('input:radio[name="q119"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q119') == 'no')	$('input:radio[name="q119"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q119') == 'unsure')	$('input:radio[name="q119"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q120') != '') {
		if (localStorage.getItem('q120') == 'yes')	$('input:radio[name="q120"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q120') == 'no')	$('input:radio[name="q120"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q120') == 'unsure')	$('input:radio[name="q120"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q121') != '') {
		if (localStorage.getItem('q121') == 'yes')	$('input:radio[name="q121"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q121') == 'no')	$('input:radio[name="q121"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q121') == 'unsure')	$('input:radio[name="q121"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q122') != '') {
		if (localStorage.getItem('q122') == 'yes')	$('input:radio[name="q122"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q122') == 'no')	$('input:radio[name="q122"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q122') == 'unsure')	$('input:radio[name="q122"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q123') != '') {
		if (localStorage.getItem('q123') == 'yes')	$('input:radio[name="q123"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q123') == 'no')	$('input:radio[name="q123"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q123') == 'unsure')	$('input:radio[name="q123"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q124') != '') {
		if (localStorage.getItem('q124') == 'yes')	$('input:radio[name="q124"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q124') == 'no')	$('input:radio[name="q124"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q124') == 'unsure')	$('input:radio[name="q124"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q125') != '') {
		if (localStorage.getItem('q125') == 'yes')	$('input:radio[name="q125"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q125') == 'no')	$('input:radio[name="q125"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q125') == 'unsure')	$('input:radio[name="q125"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q126') != '') {
		if (localStorage.getItem('q126') == 'yes')	$('input:radio[name="q126"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q126') == 'no')	$('input:radio[name="q126"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q126') == 'unsure')	$('input:radio[name="q126"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q127') != '') {
		if (localStorage.getItem('q127') == 'yes')	$('input:radio[name="q127"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q127') == 'no')	$('input:radio[name="q127"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q127') == 'unsure')	$('input:radio[name="q127"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q128') != '') {
		if (localStorage.getItem('q128') == 'yes')	$('input:radio[name="q128"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q128') == 'no')	$('input:radio[name="q128"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q128') == 'unsure')	$('input:radio[name="q128"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q129') != '') {
		if (localStorage.getItem('q129') == 'yes')	$('input:radio[name="q129"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q129') == 'no')	$('input:radio[name="q129"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q129') == 'unsure')	$('input:radio[name="q129"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q130') != '') {
		if (localStorage.getItem('q130') == 'yes')	$('input:radio[name="q130"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q130') == 'no')	$('input:radio[name="q130"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q130') == 'unsure')	$('input:radio[name="q130"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q131') != '') {
		if (localStorage.getItem('q131') == 'yes')	$('input:radio[name="q131"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q131') == 'no')	$('input:radio[name="q131"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q131') == 'unsure')	$('input:radio[name="q131"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q132') != '') {
		if (localStorage.getItem('q132') == 'yes')	$('input:radio[name="q132"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q132') == 'no')	$('input:radio[name="q132"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q132') == 'unsure')	$('input:radio[name="q132"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q133') != '') {
		if (localStorage.getItem('q133') == 'yes')	$('input:radio[name="q133"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q133') == 'no')	$('input:radio[name="q133"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q133') == 'unsure')	$('input:radio[name="q133"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q134') != '') {
		if (localStorage.getItem('q134') == 'yes')	$('input:radio[name="q134"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q134') == 'no')	$('input:radio[name="q134"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q134') == 'unsure')	$('input:radio[name="q134"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q135') != '') {
		if (localStorage.getItem('q135') == 'yes')	$('input:radio[name="q135"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q135') == 'no')	$('input:radio[name="q135"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q135') == 'unsure')	$('input:radio[name="q135"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q136') != '') {
		if (localStorage.getItem('q136') == 'yes')	$('input:radio[name="q136"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q136') == 'no')	$('input:radio[name="q136"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q136') == 'unsure')	$('input:radio[name="q136"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q137') != '') {
		if (localStorage.getItem('q137') == 'yes')	$('input:radio[name="q137"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q137') == 'no')	$('input:radio[name="q137"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q137') == 'unsure')	$('input:radio[name="q137"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q138') != '') {
		if (localStorage.getItem('q138') == 'yes')	$('input:radio[name="q138"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q138') == 'no')	$('input:radio[name="q138"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q138') == 'unsure')	$('input:radio[name="q138"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q139') != '') {
		if (localStorage.getItem('q139') == 'yes')	$('input:radio[name="q139"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q139') == 'no')	$('input:radio[name="q139"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q139') == 'unsure')	$('input:radio[name="q139"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q140') != '') {
		if (localStorage.getItem('q140') == 'yes')	$('input:radio[name="q140"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q140') == 'no')	$('input:radio[name="q140"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q140') == 'unsure')	$('input:radio[name="q140"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q141') != '') {
		if (localStorage.getItem('q141') == 'yes')	$('input:radio[name="q141"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q141') == 'no')	$('input:radio[name="q141"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q141') == 'unsure')	$('input:radio[name="q141"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q142') != '') {
		if (localStorage.getItem('q142') == 'yes')	$('input:radio[name="q142"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q142') == 'no')	$('input:radio[name="q142"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q142') == 'unsure')	$('input:radio[name="q142"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q143') != '') {
		if (localStorage.getItem('q143') == 'yes')	$('input:radio[name="q143"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q143') == 'no')	$('input:radio[name="q143"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q143') == 'unsure')	$('input:radio[name="q143"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q144') != '') {
		if (localStorage.getItem('q144') == 'yes')	$('input:radio[name="q144"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q144') == 'no')	$('input:radio[name="q144"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q144') == 'unsure')	$('input:radio[name="q144"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q145') != '') {
		if (localStorage.getItem('q145') == 'yes')	$('input:radio[name="q145"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q145') == 'no')	$('input:radio[name="q145"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q145') == 'unsure')	$('input:radio[name="q145"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q146') != '') {
		if (localStorage.getItem('q146') == 'yes')	$('input:radio[name="q146"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q146') == 'no')	$('input:radio[name="q146"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q146') == 'unsure')	$('input:radio[name="q146"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q147') != '') {
		if (localStorage.getItem('q147') == 'yes')	$('input:radio[name="q147"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q147') == 'no')	$('input:radio[name="q147"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q147') == 'unsure')	$('input:radio[name="q147"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q148') != '') {
		if (localStorage.getItem('q148') == 'yes')	$('input:radio[name="q148"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q148') == 'no')	$('input:radio[name="q148"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q148') == 'unsure')	$('input:radio[name="q148"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q149') != '') {
		if (localStorage.getItem('q149') == 'yes')	$('input:radio[name="q149"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q149') == 'no')	$('input:radio[name="q149"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q149') == 'unsure')	$('input:radio[name="q149"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q150') != '') {
		if (localStorage.getItem('q150') == 'yes')	$('input:radio[name="q150"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q150') == 'no')	$('input:radio[name="q150"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q150') == 'unsure')	$('input:radio[name="q150"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q151') != '') {
		if (localStorage.getItem('q151') == 'yes')	$('input:radio[name="q151"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q151') == 'no')	$('input:radio[name="q151"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q151') == 'unsure')	$('input:radio[name="q151"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q152') != '') {
		if (localStorage.getItem('q152') == 'yes')	$('input:radio[name="q152"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q152') == 'no')	$('input:radio[name="q152"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q152') == 'unsure')	$('input:radio[name="q152"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q153') != '') {
		if (localStorage.getItem('q153') == 'yes')	$('input:radio[name="q153"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q153') == 'no')	$('input:radio[name="q153"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q153') == 'unsure')	$('input:radio[name="q153"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q154') != '') {
		if (localStorage.getItem('q154') == 'yes')	$('input:radio[name="q154"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q154') == 'no')	$('input:radio[name="q154"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q154') == 'unsure')	$('input:radio[name="q154"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q155') != '') {
		if (localStorage.getItem('q155') == 'yes')	$('input:radio[name="q155"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q155') == 'no')	$('input:radio[name="q155"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q155') == 'unsure')	$('input:radio[name="q155"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q156') != '') {
		if (localStorage.getItem('q156') == 'yes')	$('input:radio[name="q156"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q156') == 'no')	$('input:radio[name="q156"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q156') == 'unsure')	$('input:radio[name="q156"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q157') != '') {
		if (localStorage.getItem('q157') == 'yes')	$('input:radio[name="q157"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q157') == 'no')	$('input:radio[name="q157"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q157') == 'unsure')	$('input:radio[name="q157"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q158') != '') {
		if (localStorage.getItem('q158') == 'yes')	$('input:radio[name="q158"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q158') == 'no')	$('input:radio[name="q158"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q158') == 'unsure')	$('input:radio[name="q158"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q159') != '') {
		if (localStorage.getItem('q159') == 'yes')	$('input:radio[name="q159"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q159') == 'no')	$('input:radio[name="q159"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q159') == 'unsure')	$('input:radio[name="q159"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q160') != '') {
		if (localStorage.getItem('q160') == 'yes')	$('input:radio[name="q160"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q160') == 'no')	$('input:radio[name="q160"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q160') == 'unsure')	$('input:radio[name="q160"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q161') != '') {
		if (localStorage.getItem('q161') == 'yes')	$('input:radio[name="q161"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q161') == 'no')	$('input:radio[name="q161"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q161') == 'unsure')	$('input:radio[name="q161"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q162') != '') {
		if (localStorage.getItem('q162') == 'yes')	$('input:radio[name="q162"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q162') == 'no')	$('input:radio[name="q162"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q162') == 'unsure')	$('input:radio[name="q162"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q163') != '') {
		if (localStorage.getItem('q163') == 'yes')	$('input:radio[name="q163"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q163') == 'no')	$('input:radio[name="q163"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q163') == 'unsure')	$('input:radio[name="q163"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q164') != '') {
		if (localStorage.getItem('q164') == 'yes')	$('input:radio[name="q164"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q164') == 'no')	$('input:radio[name="q164"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q164') == 'unsure')	$('input:radio[name="q164"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q165') != '') {
		if (localStorage.getItem('q165') == 'yes')	$('input:radio[name="q165"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q165') == 'no')	$('input:radio[name="q165"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q165') == 'unsure')	$('input:radio[name="q165"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q166') != '') {
		if (localStorage.getItem('q166') == 'yes')	$('input:radio[name="q166"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q166') == 'no')	$('input:radio[name="q166"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q166') == 'unsure')	$('input:radio[name="q166"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q167') != '') {
		if (localStorage.getItem('q167') == 'yes')	$('input:radio[name="q167"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q167') == 'no')	$('input:radio[name="q167"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q167') == 'unsure')	$('input:radio[name="q167"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q168') != '') {
		if (localStorage.getItem('q168') == 'yes')	$('input:radio[name="q168"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q168') == 'no')	$('input:radio[name="q168"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q168') == 'unsure')	$('input:radio[name="q168"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q168') != '') {
		if (localStorage.getItem('q168') == 'yes')	$('input:radio[name="q168"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q168') == 'no')	$('input:radio[name="q168"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q168') == 'unsure')	$('input:radio[name="q168"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q169') != '') {
		if (localStorage.getItem('q169') == 'yes')	$('input:radio[name="q169"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q169') == 'no')	$('input:radio[name="q169"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q169') == 'unsure')	$('input:radio[name="q169"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q170') != '') {
		if (localStorage.getItem('q170') == 'yes')	$('input:radio[name="q170"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q170') == 'no')	$('input:radio[name="q170"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q170') == 'unsure')	$('input:radio[name="q170"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q171') != '') {
		if (localStorage.getItem('q171') == 'yes')	$('input:radio[name="q171"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q171') == 'no')	$('input:radio[name="q171"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q171') == 'unsure')	$('input:radio[name="q171"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q172') != '') {
		if (localStorage.getItem('q172') == 'yes')	$('input:radio[name="q172"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q172') == 'no')	$('input:radio[name="q172"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q172') == 'unsure')	$('input:radio[name="q172"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q173') != '') {
		if (localStorage.getItem('q173') == 'yes')	$('input:radio[name="q173"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q173') == 'no')	$('input:radio[name="q173"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q173') == 'unsure')	$('input:radio[name="q173"]').filter('[value="no"]').attr('checked',true);
	}

	if (localStorage.getItem('q174') != '') {
		if (localStorage.getItem('q174') == 'yes')	$('input:radio[name="q174"]').filter('[value="yes"]').attr('checked',true);
		if (localStorage.getItem('q174') == 'no')	$('input:radio[name="q174"]').filter('[value="no"]').attr('checked',true);
		if (localStorage.getItem('q174') == 'unsure')	$('input:radio[name="q174"]').filter('[value="no"]').attr('checked',true);
	}
});