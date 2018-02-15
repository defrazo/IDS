$(document).ready(function() {
	sname = localStorage.getItem('snameinp');
	fname = localStorage.getItem('fnameinp');
	mname = localStorage.getItem('mnameinp');
	date = localStorage.getItem('dateinp');
	index = localStorage.getItem('indexinp');
	arate = localStorage.getItem('arateinp');
	group = localStorage.getItem('groupinp');
	category = localStorage.getItem('categoryinp');
	grade = localStorage.getItem('gradeinp');
	gender = localStorage.getItem('genderinp');
	
	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#gender').append(gender);
	$('#faclass').append(category);
	$('#arate').append(arate);
	$('#grade').append(grade);
	$('#group').append(group);
	$('#index').append(index);
});

method();