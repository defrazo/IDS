$(document).ready(function() {
	sname = localStorage.getItem("snameinp");
	fname = localStorage.getItem("fnameinp");
	mname = localStorage.getItem("mnameinp");
	date = localStorage.getItem("dateinp");
	age = localStorage.getItem("ageinp");
	bage = localStorage.getItem("bageinp");
	dbage = localStorage.getItem("dbageinp");
	lag = localStorage.getItem("laginp");
	index = localStorage.getItem("indexinp");
	arate = localStorage.getItem("arateinp");
	status = localStorage.getItem("statusinp");
	category = localStorage.getItem("categoryinp");
	gender = localStorage.getItem("genderinp");
	
	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#gender').append(gender);
	$('#age').append(age).append(" лет");
	$('#ibage').append(bage).append(" лет");;
	$('#pbage').append(dbage).append(" лет");;
	$('#faclass').append(category);
	$('#arate').append(arate);
	$('#outrun').append(lag).append(" лет");;
	$('#status').append(status);
	$('#index').append(index);
	});

	var m=localStorage.getItem('mval');

	switch (true) {
		case (m == 4) : fourth(); break;
	};