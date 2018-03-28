function gender() { //Записывает в память пол, выбранный пользователем
	$(document).ready(function() {
		$('input[name="gender"]').change(function() {
		var genderValue = $('input[name="gender"]:checked').val();
			if (genderValue) {
				localStorage.setItem('genderinp', genderValue);	
				localStorage.setItem('vGender', 1);	
			}
		});
	});
};