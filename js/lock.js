$(document).on('ready mousemove', function() {

	$.getJSON("http://worldclockapi.com/api/jsonp/cet/now?callback=mycallback=?",function(json){
		var date = "2019-12-31"
		var cDate = json.currentDateTime.substr(0, 10);
		var arrDate = date.split('-');
		var arrcDate = cDate.split('-');
		console.log(arrDate);
		console.log(arrcDate);
		if (arrDate[0] < arrcDate[0]) {
			console.log('Error');
		} else if (arrDate[1] < arrcDate[1]) {
			console.log('Error');
		} else if (arrDate[2] < arrcDate[2]) {
			$('.check').css('display', 'none');
			$('.wrong').css('display', 'inline-block');
		} else {
			$(location).attr('href', 'index.html');
		}
	});
});