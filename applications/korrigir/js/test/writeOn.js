$(document).ready(function() { //Сохраняет введенные даные в localStorage
	
	//Первый блок
	$( "input[name='head']" ).change(function() {
		var headValue = $("input[name='head']:checked").val();
		if (headValue) {
			localStorage.setItem("headinp", headValue);
			localStorage.setItem('vHead', 1);	
		}
	})
	
	$( "input[name='wake']" ).change(function() {
		var wakeValue = $("input[name='wake']:checked").val();
		if (wakeValue) {
			localStorage.setItem("wakeinp", wakeValue);
			localStorage.setItem('vWake', 1);		
		}
	})
	
	$( "input[name='heart']" ).change(function() {
		var heartValue = $("input[name='heart']:checked").val();
		if (heartValue) {
			localStorage.setItem("heartinp", heartValue);
			localStorage.setItem('vHeart', 1);		
		}
	})	
	
	$( "input[name='vision']" ).change(function() {
		var visionValue = $("input[name='vision']:checked").val();
		if (visionValue) {
			localStorage.setItem("visioninp", visionValue);	
			localStorage.setItem('vVision', 1);	
		}
	})	
	
	$( "input[name='hearing']" ).change(function() {
		var hearingValue = $("input[name='hearing']:checked").val();
		if (hearingValue) {
			localStorage.setItem("hearinginp", hearingValue);
			localStorage.setItem('vHearing', 1);		
		}
	})

	//Второй блок
	$( "input[name='water']" ).change(function() {
		var waterValue = $("input[name='water']:checked").val();
		if (waterValue) {
			localStorage.setItem("waterinp", waterValue);
			localStorage.setItem('vWater', 1);		
		}
	})
	
	$( "input[name='seat']" ).change(function() {
		var seatValue = $("input[name='seat']:checked").val();
		if (seatValue) {
			localStorage.setItem("seatinp", seatValue);
			localStorage.setItem('vSeat', 1);		
		}
	})
	
	$( "input[name='joint']" ).change(function() {
		var jointValue = $("input[name='joint']:checked").val();
		if (jointValue) {
			localStorage.setItem("jointinp", jointValue);
			localStorage.setItem('vJoint', 1);		
		}
	})
	
	$( "input[name='beach']" ).change(function() {
		var beachValue = $("input[name='beach']:checked").val();
		if (beachValue) {
			localStorage.setItem("beachinp", beachValue);
			localStorage.setItem('vBeach', 1);		
		}
	})
	
	$( "input[name='weather']" ).change(function() {
		var weatherValue = $("input[name='weather']:checked").val();
		if (weatherValue) {
			localStorage.setItem("weatherinp", weatherValue);
			localStorage.setItem('vWeather', 1);		
		}
	})

	//Третий блок
	$( "input[name='sleep']" ).change(function() {
		var sleepValue = $("input[name='sleep']:checked").val();
		if (sleepValue) {
			localStorage.setItem("sleepinp", sleepValue);
			localStorage.setItem('vSleep', 1);		
		}
	})
	
	$( "input[name='constip']" ).change(function() {
		var constipValue = $("input[name='constip']:checked").val();
		if (constipValue) {
			localStorage.setItem("constipinp", constipValue);
			localStorage.setItem('vConstip', 1);		
		}
	})
	
	$( "input[name='effic']" ).change(function() {
		var efficValue = $("input[name='effic']:checked").val();
		if (efficValue) {
			localStorage.setItem("efficinp", efficValue);
			localStorage.setItem('vEffic', 1);		
		}
	})
	
	$( "input[name='liver']" ).change(function() {
		var liverValue = $("input[name='liver']:checked").val();
		if (liverValue) {
			localStorage.setItem("liverinp", liverValue);
			localStorage.setItem('vLiver', 1);		
		}
	})
	
	$( "input[name='dizzi']" ).change(function() {
		var dizziValue = $("input[name='dizzi']:checked").val();
		if (dizziValue) {
			localStorage.setItem("dizziinp", dizziValue);
			localStorage.setItem('vDizzi', 1);		
		}
	})

	//Четвертый блок
	$( "input[name='focus']" ).change(function() {
		var focusValue = $("input[name='focus']:checked").val();
		if (focusValue) {
			localStorage.setItem("focusinp", focusValue);
			localStorage.setItem('vFocus', 1);		
		}
	})
	
	$( "input[name='happy']" ).change(function() {
		var happyValue = $("input[name='happy']:checked").val();
		if (happyValue) {
			localStorage.setItem("happyinp", happyValue);
			localStorage.setItem('vHappy', 1);		
		}
	})
	
	$( "input[name='creep']" ).change(function() {
		var creepValue = $("input[name='creep']:checked").val();
		if (creepValue) {
			localStorage.setItem("creepinp", creepValue);
			localStorage.setItem('vCreep', 1);		
		}
	})
	
	$( "input[name='forget']" ).change(function() {
		var forgetValue = $("input[name='forget']:checked").val();
		if (forgetValue) {
			localStorage.setItem("forgetinp", forgetValue);
			localStorage.setItem('vForget', 1);		
		}
	})
	
	$( "input[name='noise']" ).change(function() {
		var noiseValue = $("input[name='noise']:checked").val();
		if (noiseValue) {
			localStorage.setItem("noiseinp", noiseValue);
			localStorage.setItem('vNoise', 1);		
		}
	})

	//Пятый блок
	$( "input[name='medic']" ).change(function() {
		var medicValue = $("input[name='medic']:checked").val();
		if (medicValue) {
			localStorage.setItem("medicinp", medicValue);
			localStorage.setItem('vMedic', 1);		
		}
	})
	
	$( "input[name='swell']" ).change(function() {
		var swellValue = $("input[name='swell']:checked").val();
		if (swellValue) {
			localStorage.setItem("swellinp", swellValue);
			localStorage.setItem('vSwell', 1);		
		}
	})
	
	$( "input[name='dish']" ).change(function() {
		var dishValue = $("input[name='dish']:checked").val();
		if (dishValue) {
			localStorage.setItem("dishinp", dishValue);
			localStorage.setItem('vDish', 1);		
		}
	})
	
	$( "input[name='dysp']" ).change(function() {
		var dyspValue = $("input[name='dysp']:checked").val();
		if (dyspValue) {
			localStorage.setItem("dyspinp", dyspValue);
			localStorage.setItem('vDysp', 1);		
		}
	})
	
	$( "input[name='loins']" ).change(function() {
		var loinsValue = $("input[name='loins']:checked").val();
		if (loinsValue) {
			localStorage.setItem("loinsinp", loinsValue);
			localStorage.setItem('vLoins', 1);		
		}
	})

	//Шестой блок
	$( "input[name='mineral']" ).change(function() {
		var mineralValue = $("input[name='mineral']:checked").val();
		if (mineralValue) {
			localStorage.setItem("mineralinp", mineralValue);
			localStorage.setItem('vMineral', 1);		
		}
	})
	
	$( "input[name='taste']" ).change(function() {
		var tasteValue = $("input[name='taste']:checked").val();
		if (tasteValue) {
			localStorage.setItem("tasteinp", tasteValue);
			localStorage.setItem('vTaste', 1);		
		}
	})
	
	$( "input[name='cry']" ).change(function() {
		var cryValue = $("input[name='cry']:checked").val();
		if (cryValue) {
			localStorage.setItem("cryinp", cryValue);
			localStorage.setItem('vCry', 1);		
		}
	})
	
	$( "input[name='state']" ).change(function() {
		var stateValue = $("input[name='state']:checked").val();
		if (stateValue) {
			localStorage.setItem("stateinp", stateValue);
			localStorage.setItem('vState', 1);		
		}
	})
});