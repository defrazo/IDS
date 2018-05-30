$(document).ready(function() {
	$('#stopwatch_button').on('change', function() { 
		if ($('#stopwatch_button').prop('checked'))	$('.stopwatch_container').css('display', 'block');
		else	$('.stopwatch_container').css('display', 'none');
	});

	$('#options_button').on('change', function() { 
		if ($('#options_button').prop('checked'))	$('.options_container').css('display', 'block');
		else	$('.options_container').css('display', 'none');
		tmrr = parseInt(localStorage.getItem('tmrinp'));

		console.log(tmrr);
	});
});

$(document).ready(function () { //T1
	$('#timer1').runner();
	stage1 = 0;
	error1 = 0;
	$("td").click(function(event) {
		var target = $(event.target);
		if (stage1 == 0) {
			switch (true) {
				case (target.is("#tbl11")) : stage1 = stage1 + 1; $('#stage1').html(stage1); $('#timer1').runner('start'); break;	
			}
		}
		if (stage1 == 1) {
			switch (true) {
				case (target.is("#tbl12")) : stage1 = stage1 + 1; $('#stage1').html(stage1); break;
				case (target.is(":not(#tbl12)")) : error1 = error1 + 1; break;
			}
		}
		if (stage1 == 2) {
			switch (true) {
				case (target.is("#tbl13")) : stage1 = stage1 + 1; $('#stage1').html(stage1); break;
				case (target.is(":not(#tbl13)")) : error1 = error1 + 1; break;
			}
		}
		if (stage1 == 3) {
			switch (true) {
				case (target.is("#tbl14")) : stage1 = stage1 + 1; $('#stage1').html(stage1); break;
				case (target.is(":not(#tbl14)")) : error1 = error1 + 1; break;
			}
		}
		if (stage1 == 4) {
			switch (true) {
				case (target.is("#tbl15")) : stage1 = stage1 + 1; $('#stage1').html(stage1); break;
				case (target.is(":not(#tbl15)")) : error1 = error1 + 1; break;
			}
		}
		if (stage1 == 5) {
			switch (true) {
				case (target.is("#tbl16")) : stage1 = stage1 + 1; $('#stage1').html(stage1); break;
				case (target.is(":not(#tbl16)")) : error1 = error1 + 1; break;
			}
		}
		if (stage1 == 6) {
			switch (true) {
				case (target.is("#tbl17")) : stage1 = stage1 + 1; $('#stage1').html(stage1); break;
				case (target.is(":not(#tbl17)")) : error1 = error1 + 1; break;
			}
		}
		if (stage1 == 7) {
			switch (true) {
				case (target.is("#tbl18")) : stage1 = stage1 + 1; $('#stage1').html(stage1); break;
				case (target.is(":not(#tbl18)")) : error1 = error1 + 1; break;
			}
		}
		if (stage1 == 8) {
			switch (true) {
				case (target.is("#tbl19")) : stage1 = stage1 + 1; $('#stage1').html(stage1); break;
				case (target.is(":not(#tbl19)")) : error1 = error1 + 1; break;
			}
		}
		if (stage1 == 9) {
			switch (true) {
				case (target.is("#tbl110")) : stage1 = stage1 + 1; $('#stage1').html(stage1); break;
				case (target.is(":not(#tbl110)")) : error1 = error1 + 1; break;
			}
		}
		if (stage1 == 10) {
			switch (true) {
				case (target.is("#tbl111")) : stage1 = stage1 + 1; $('#stage1').html(stage1); break;
				case (target.is(":not(#tbl111)")) : error1 = error1 + 1; break;
			}
		}
		if (stage1 == 11) {
			switch (true) {
				case (target.is("#tbl112")) : stage1 = stage1 + 1; $('#stage1').html(stage1); break;
				case (target.is(":not(#tbl112)")) : error1 = error1 + 1; break;
			}
		}
		if (stage1 == 12) {
			switch (true) {
				case (target.is("#tbl113")) : stage1 = stage1 + 1; $('#stage1').html(stage1); break;
				case (target.is(":not(#tbl113)")) : error1 = error1 + 1; break;
			}
		}
		if (stage1 == 13) {
			switch (true) {
				case (target.is("#tbl114")) : stage1 = stage1 + 1; $('#stage1').html(stage1); break;
				case (target.is(":not(#tbl114)")) : error1 = error1 + 1; break;
			}
		}
		if (stage1 == 14) {
			switch (true) {
				case (target.is("#tbl115")) : stage1 = stage1 + 1; $('#stage1').html(stage1); break;
				case (target.is(":not(#tbl115)")) : error1 = error1 + 1; break;
			}
		}
		if (stage1 == 15) {
			switch (true) {
				case (target.is("#tbl116")) : stage1 = stage1 + 1; $('#stage1').html(stage1); break;
				case (target.is(":not(#tbl116)")) : error1 = error1 + 1; break;
			}
		}
		if (stage1 == 16) {
			switch (true) {
				case (target.is("#tbl117")) : stage1 = stage1 + 1; $('#stage1').html(stage1); break;
				case (target.is(":not(#tbl117)")) : error1 = error1 + 1; break;
			}
		}
		if (stage1 == 17) {
			switch (true) {
				case (target.is("#tbl118")) : stage1 = stage1 + 1; $('#stage1').html(stage1); break;
				case (target.is(":not(#tbl118)")) : error1 = error1 + 1; break;
			}
		}
		if (stage1 == 18) {
			switch (true) {
				case (target.is("#tbl119")) : stage1 = stage1 + 1; $('#stage1').html(stage1); break;
				case (target.is(":not(#tbl119)")) : error1 = error1 + 1; break;
			}
		}
		if (stage1 == 19) {
			switch (true) {
				case (target.is("#tbl120")) : stage1 = stage1 + 1; $('#stage1').html(stage1); break;
				case (target.is(":not(#tbl120)")) : error1 = error1 + 1; break;
			}
		}
		if (stage1 == 20) {
			switch (true) {
				case (target.is("#tbl121")) : stage1 = stage1 + 1; $('#stage1').html(stage1); break;
				case (target.is(":not(#tbl121)")) : error1 = error1 + 1; break;
			}
		}
		if (stage1 == 21) {
			switch (true) {
				case (target.is("#tbl122")) : stage1 = stage1 + 1; $('#stage1').html(stage1); break;
				case (target.is(":not(#tbl122)")) : error1 = error1 + 1; break;
			}
		}
		if (stage1 == 22) {
			switch (true) {
				case (target.is("#tbl123")) : stage1 = stage1 + 1; $('#stage1').html(stage1); break;
				case (target.is(":not(#tbl123)")) : error1 = error1 + 1; break;
			}
		}
		if (stage1 == 23) {
			switch (true) {
				case (target.is("#tbl124")) : stage1 = stage1 + 1; $('#stage1').html(stage1); break;
				case (target.is(":not(#tbl124)")) : error1 = error1 + 1; break;
			}
		}
		if (stage1 == 24) {
			switch (true) {
				case (target.is("#tbl125")) : $('#stage1').html(25);  $('#timer1').runner('stop'); var tmr1 = $('#timer1').val(); localStorage.setItem('tmr1inp', tmr1); $('#tab3').css('display', 'inline-block'); $('#tab4').css('display', 'inline-block');
		$('#tab5').css('display', 'inline-block');
		$('#tab6').css('display', 'inline-block'); break;
				case (target.is(":not(#tbl125)")) : error1 = error1 + 1; localStorage.setItem('error1inp', error1); break;
			}
		}
	});
});


$(document).ready(function () { //T2
	$('#timer2').runner();
	stage2 = 0;
	error2 = 0;
	$("td").click(function(event) {
		var target = $(event.target);
		if (stage2 == 0) {
			switch (true) {
				case (target.is("#tbl21")) : stage2 = stage2 + 1; $('#stage2').html(stage2); $('#timer2').runner('start'); break;	
			}
		}
		if (stage2 == 1) {
			switch (true) {
				case (target.is("#tbl22")) : stage2 = stage2 + 1; $('#stage2').html(stage2); break;
				case (target.is(":not(#tbl22)")) : error2 = error2 + 1; break;
			}
		}
		if (stage2 == 2) {
			switch (true) {
				case (target.is("#tbl23")) : stage2 = stage2 + 1; $('#stage2').html(stage2); break;
				case (target.is(":not(#tbl23)")) : error2 = error2 + 1; break;
			}
		}
		if (stage2 == 3) {
			switch (true) {
				case (target.is("#tbl24")) : stage2 = stage2 + 1; $('#stage2').html(stage2); break;
				case (target.is(":not(#tbl24)")) : error2 = error2 + 1; break;
			}
		}
		if (stage2 == 4) {
			switch (true) {
				case (target.is("#tbl25")) : stage2 = stage2 + 1; $('#stage2').html(stage2); break;
				case (target.is(":not(#tbl25)")) : error2 = error2 + 1; break;
			}
		}
		if (stage2 == 5) {
			switch (true) {
				case (target.is("#tbl26")) : stage2 = stage2 + 1; $('#stage2').html(stage2); break;
				case (target.is(":not(#tbl26)")) : error2 = error2 + 1; break;
			}
		}
		if (stage2 == 6) {
			switch (true) {
				case (target.is("#tbl27")) : stage2 = stage2 + 1; $('#stage2').html(stage2); break;
				case (target.is(":not(#tbl27)")) : error2 = error2 + 1; break;
			}
		}
		if (stage2 == 7) {
			switch (true) {
				case (target.is("#tbl28")) : stage2 = stage2 + 1; $('#stage2').html(stage2); break;
				case (target.is(":not(#tbl28)")) : error2 = error2 + 1; break;
			}
		}
		if (stage2 == 8) {
			switch (true) {
				case (target.is("#tbl29")) : stage2 = stage2 + 1; $('#stage2').html(stage2); break;
				case (target.is(":not(#tbl29)")) : error2 = error2 + 1; break;
			}
		}
		if (stage2 == 9) {
			switch (true) {
				case (target.is("#tbl210")) : stage2 = stage2 + 1; $('#stage2').html(stage2); break;
				case (target.is(":not(#tbl210)")) : error2 = error2 + 1; break;
			}
		}
		if (stage2 == 10) {
			switch (true) {
				case (target.is("#tbl211")) : stage2 = stage2 + 1; $('#stage2').html(stage2); break;
				case (target.is(":not(#tbl211)")) : error2 = error2 + 1; break;
			}
		}
		if (stage2 == 11) {
			switch (true) {
				case (target.is("#tbl212")) : stage2 = stage2 + 1; $('#stage2').html(stage2); break;
				case (target.is(":not(#tbl212)")) : error2 = error2 + 1; break;
			}
		}
		if (stage2 == 12) {
			switch (true) {
				case (target.is("#tbl213")) : stage2 = stage2 + 1; $('#stage2').html(stage2); break;
				case (target.is(":not(#tbl213)")) : error2 = error2 + 1; break;
			}
		}
		if (stage2 == 13) {
			switch (true) {
				case (target.is("#tbl214")) : stage2 = stage2 + 1; $('#stage2').html(stage2); break;
				case (target.is(":not(#tbl214)")) : error2 = error2 + 1; break;
			}
		}
		if (stage2 == 14) {
			switch (true) {
				case (target.is("#tbl215")) : stage2 = stage2 + 1; $('#stage2').html(stage2); break;
				case (target.is(":not(#tbl215)")) : error2 = error2 + 1; break;
			}
		}
		if (stage2 == 15) {
			switch (true) {
				case (target.is("#tbl216")) : stage2 = stage2 + 1; $('#stage2').html(stage2); break;
				case (target.is(":not(#tbl216)")) : error2 = error2 + 1; break;
			}
		}
		if (stage2 == 16) {
			switch (true) {
				case (target.is("#tbl217")) : stage2 = stage2 + 1; $('#stage2').html(stage2); break;
				case (target.is(":not(#tbl217)")) : error2 = error2 + 1; break;
			}
		}
		if (stage2 == 17) {
			switch (true) {
				case (target.is("#tbl218")) : stage2 = stage2 + 1; $('#stage2').html(stage2); break;
				case (target.is(":not(#tbl218)")) : error2 = error2 + 1; break;
			}
		}
		if (stage2 == 18) {
			switch (true) {
				case (target.is("#tbl219")) : stage2 = stage2 + 1; $('#stage2').html(stage2); break;
				case (target.is(":not(#tbl219)")) : error2 = error2 + 1; break;
			}
		}
		if (stage2 == 19) {
			switch (true) {
				case (target.is("#tbl220")) : stage2 = stage2 + 1; $('#stage2').html(stage2); break;
				case (target.is(":not(#tbl220)")) : error2 = error2 + 1; break;
			}
		}
		if (stage2 == 20) {
			switch (true) {
				case (target.is("#tbl221")) : stage2 = stage2 + 1; $('#stage2').html(stage2); break;
				case (target.is(":not(#tbl221)")) : error2 = error2 + 1; break;
			}
		}
		if (stage2 == 21) {
			switch (true) {
				case (target.is("#tbl222")) : stage2 = stage2 + 1; $('#stage2').html(stage2); break;
				case (target.is(":not(#tbl222)")) : error2 = error2 + 1; break;
			}
		}
		if (stage2 == 22) {
			switch (true) {
				case (target.is("#tbl223")) : stage2 = stage2 + 1; $('#stage2').html(stage2); break;
				case (target.is(":not(#tbl223)")) : error2 = error2 + 1; break;
			}
		}
		if (stage2 == 23) {
			switch (true) {
				case (target.is("#tbl224")) : stage2 = stage2 + 1; $('#stage2').html(stage2); break;
				case (target.is(":not(#tbl224)")) : error2 = error2 + 1; break;
			}
		}
		if (stage2 == 24) {
			switch (true) {
				case (target.is("#tbl225")) : $('#stage2').html(25); $('#timer2').runner('stop'); var tmr2 = $('#timer2').val(); localStorage.setItem('tmr2inp', tmr2); break;
				case (target.is(":not(#tbl225)")) : error2 = error2 + 1; localStorage.setItem('error2inp', error2); break;
			}
		}
	});
});

$(document).ready(function () { //T3
	$('#timer3').runner();
	stage3 = 0;
	error3 = 0;
	$("td").click(function(event) {
		var target = $(event.target);
		if (stage3 == 0) {
			switch (true) {
				case (target.is("#tbl31")) : stage3 = stage3 + 1; $('#stage3').html(stage3); $('#timer3').runner('start'); break;	
			}
		}
		if (stage3 == 1) {
			switch (true) {
				case (target.is("#tbl32")) : stage3 = stage3 + 1; $('#stage3').html(stage3); break;
				case (target.is(":not(#tbl32)")) : error3 = error3 + 1; break;
			}
		}
		if (stage3 == 2) {
			switch (true) {
				case (target.is("#tbl33")) : stage3 = stage3 + 1; $('#stage3').html(stage3); break;
				case (target.is(":not(#tbl33)")) : error3 = error3 + 1; break;
			}
		}
		if (stage3 == 3) {
			switch (true) {
				case (target.is("#tbl34")) : stage3 = stage3 + 1; $('#stage3').html(stage3); break;
				case (target.is(":not(#tbl34)")) : error3 = error3 + 1; break;
			}
		}
		if (stage3 == 4) {
			switch (true) {
				case (target.is("#tbl35")) : stage3 = stage3 + 1; $('#stage3').html(stage3); break;
				case (target.is(":not(#tbl35)")) : error3 = error3 + 1; break;
			}
		}
		if (stage3 == 5) {
			switch (true) {
				case (target.is("#tbl36")) : stage3 = stage3 + 1; $('#stage3').html(stage3); break;
				case (target.is(":not(#tbl36)")) : error3 = error3 + 1; break;
			}
		}
		if (stage3 == 6) {
			switch (true) {
				case (target.is("#tbl37")) : stage3 = stage3 + 1; $('#stage3').html(stage3); break;
				case (target.is(":not(#tbl37)")) : error3 = error3 + 1; break;
			}
		}
		if (stage3 == 7) {
			switch (true) {
				case (target.is("#tbl38")) : stage3 = stage3 + 1; $('#stage3').html(stage3); break;
				case (target.is(":not(#tbl38)")) : error3 = error3 + 1; break;
			}
		}
		if (stage3 == 8) {
			switch (true) {
				case (target.is("#tbl39")) : stage3 = stage3 + 1; $('#stage3').html(stage3); break;
				case (target.is(":not(#tbl39)")) : error3 = error3 + 1; break;
			}
		}
		if (stage3 == 9) {
			switch (true) {
				case (target.is("#tbl310")) : stage3 = stage3 + 1; $('#stage3').html(stage3); break;
				case (target.is(":not(#tbl310)")) : error3 = error3 + 1; break;
			}
		}
		if (stage3 == 10) {
			switch (true) {
				case (target.is("#tbl311")) : stage3 = stage3 + 1; $('#stage3').html(stage3); break;
				case (target.is(":not(#tbl311)")) : error3 = error3 + 1; break;
			}
		}
		if (stage3 == 11) {
			switch (true) {
				case (target.is("#tbl312")) : stage3 = stage3 + 1; $('#stage3').html(stage3); break;
				case (target.is(":not(#tbl312)")) : error3 = error3 + 1; break;
			}
		}
		if (stage3 == 12) {
			switch (true) {
				case (target.is("#tbl313")) : stage3 = stage3 + 1; $('#stage3').html(stage3); break;
				case (target.is(":not(#tbl313)")) : error3 = error3 + 1; break;
			}
		}
		if (stage3 == 13) {
			switch (true) {
				case (target.is("#tbl314")) : stage3 = stage3 + 1; $('#stage3').html(stage3); break;
				case (target.is(":not(#tbl314)")) : error3 = error3 + 1; break;
			}
		}
		if (stage3 == 14) {
			switch (true) {
				case (target.is("#tbl315")) : stage3 = stage3 + 1; $('#stage3').html(stage3); break;
				case (target.is(":not(#tbl315)")) : error3 = error3 + 1; break;
			}
		}
		if (stage3 == 15) {
			switch (true) {
				case (target.is("#tbl316")) : stage3 = stage3 + 1; $('#stage3').html(stage3); break;
				case (target.is(":not(#tbl316)")) : error3 = error3 + 1; break;
			}
		}
		if (stage3 == 16) {
			switch (true) {
				case (target.is("#tbl317")) : stage3 = stage3 + 1; $('#stage3').html(stage3); break;
				case (target.is(":not(#tbl317)")) : error3 = error3 + 1; break;
			}
		}
		if (stage3 == 17) {
			switch (true) {
				case (target.is("#tbl318")) : stage3 = stage3 + 1; $('#stage3').html(stage3); break;
				case (target.is(":not(#tbl318)")) : error3 = error3 + 1; break;
			}
		}
		if (stage3 == 18) {
			switch (true) {
				case (target.is("#tbl319")) : stage3 = stage3 + 1; $('#stage3').html(stage3); break;
				case (target.is(":not(#tbl319)")) : error3 = error3 + 1; break;
			}
		}
		if (stage3 == 19) {
			switch (true) {
				case (target.is("#tbl320")) : stage3 = stage3 + 1; $('#stage3').html(stage3); break;
				case (target.is(":not(#tbl320)")) : error3 = error3 + 1; break;
			}
		}
		if (stage3 == 20) {
			switch (true) {
				case (target.is("#tbl321")) : stage3 = stage3 + 1; $('#stage3').html(stage3); break;
				case (target.is(":not(#tbl321)")) : error3 = error3 + 1; break;
			}
		}
		if (stage3 == 21) {
			switch (true) {
				case (target.is("#tbl322")) : stage3 = stage3 + 1; $('#stage3').html(stage3); break;
				case (target.is(":not(#tbl322)")) : error3 = error3 + 1; break;
			}
		}
		if (stage3 == 22) {
			switch (true) {
				case (target.is("#tbl323")) : stage3 = stage3 + 1; $('#stage3').html(stage3); break;
				case (target.is(":not(#tbl323)")) : error3 = error3 + 1; break;
			}
		}
		if (stage3 == 23) {
			switch (true) {
				case (target.is("#tbl324")) : stage3 = stage3 + 1; $('#stage3').html(stage3); break;
				case (target.is(":not(#tbl324)")) : error3 = error3 + 1; break;
			}
		}
		if (stage3 == 24) {
			switch (true) {
				case (target.is("#tbl325")) : $('#stage3').html(25); $('#timer3').runner('stop'); var tmr3 = $('#timer3').val(); localStorage.setItem('tmr3inp', tmr3); break;
				case (target.is(":not(#tbl325)")) : error3 = error3 + 1; localStorage.setItem('error3inp', error3); break;
			}
		}
	});
});

$(document).ready(function () { //T4
	$('#timer4').runner();
	stage4 = 0;
	error4 = 0;
	$("td").click(function(event) {
		var target = $(event.target);
		if (stage4 == 0) {
			switch (true) {
				case (target.is("#tbl41")) : stage4 = stage4 + 1; $('#stage4').html(stage4); $('#timer4').runner('start'); break;	
			}
		}
		if (stage4 == 1) {
			switch (true) {
				case (target.is("#tbl42")) : stage4 = stage4 + 1; $('#stage4').html(stage4); break;
				case (target.is(":not(#tbl42)")) : error4 = error4 + 1; break;
			}
		}
		if (stage4 == 2) {
			switch (true) {
				case (target.is("#tbl43")) : stage4 = stage4 + 1; $('#stage4').html(stage4); break;
				case (target.is(":not(#tbl43)")) : error4 = error4 + 1; break;
			}
		}
		if (stage4 == 3) {
			switch (true) {
				case (target.is("#tbl44")) : stage4 = stage4 + 1; $('#stage4').html(stage4); break;
				case (target.is(":not(#tbl44)")) : error4 = error4 + 1; break;
			}
		}
		if (stage4 == 4) {
			switch (true) {
				case (target.is("#tbl45")) : stage4 = stage4 + 1; $('#stage4').html(stage4); break;
				case (target.is(":not(#tbl45)")) : error4 = error4 + 1; break;
			}
		}
		if (stage4 == 5) {
			switch (true) {
				case (target.is("#tbl46")) : stage4 = stage4 + 1; $('#stage4').html(stage4); break;
				case (target.is(":not(#tbl46)")) : error4 = error4 + 1; break;
			}
		}
		if (stage4 == 6) {
			switch (true) {
				case (target.is("#tbl47")) : stage4 = stage4 + 1; $('#stage4').html(stage4); break;
				case (target.is(":not(#tbl47)")) : error4 = error4 + 1; break;
			}
		}
		if (stage4 == 7) {
			switch (true) {
				case (target.is("#tbl48")) : stage4 = stage4 + 1; $('#stage4').html(stage4); break;
				case (target.is(":not(#tbl48)")) : error4 = error4 + 1; break;
			}
		}
		if (stage4 == 8) {
			switch (true) {
				case (target.is("#tbl49")) : stage4 = stage4 + 1; $('#stage4').html(stage4); break;
				case (target.is(":not(#tbl49)")) : error4 = error4 + 1; break;
			}
		}
		if (stage4 == 9) {
			switch (true) {
				case (target.is("#tbl410")) : stage4 = stage4 + 1; $('#stage4').html(stage4); break;
				case (target.is(":not(#tbl410)")) : error4 = error4 + 1; break;
			}
		}
		if (stage4 == 10) {
			switch (true) {
				case (target.is("#tbl411")) : stage4 = stage4 + 1; $('#stage4').html(stage4); break;
				case (target.is(":not(#tbl411)")) : error4 = error4 + 1; break;
			}
		}
		if (stage4 == 11) {
			switch (true) {
				case (target.is("#tbl412")) : stage4 = stage4 + 1; $('#stage4').html(stage4); break;
				case (target.is(":not(#tbl412)")) : error4 = error4 + 1; break;
			}
		}
		if (stage4 == 12) {
			switch (true) {
				case (target.is("#tbl413")) : stage4 = stage4 + 1; $('#stage4').html(stage4); break;
				case (target.is(":not(#tbl413)")) : error4 = error4 + 1; break;
			}
		}
		if (stage4 == 13) {
			switch (true) {
				case (target.is("#tbl414")) : stage4 = stage4 + 1; $('#stage4').html(stage4); break;
				case (target.is(":not(#tbl414)")) : error4 = error4 + 1; break;
			}
		}
		if (stage4 == 14) {
			switch (true) {
				case (target.is("#tbl415")) : stage4 = stage4 + 1; $('#stage4').html(stage4); break;
				case (target.is(":not(#tbl415)")) : error4 = error4 + 1; break;
			}
		}
		if (stage4 == 15) {
			switch (true) {
				case (target.is("#tbl416")) : stage4 = stage4 + 1; $('#stage4').html(stage4); break;
				case (target.is(":not(#tbl416)")) : error4 = error4 + 1; break;
			}
		}
		if (stage4 == 16) {
			switch (true) {
				case (target.is("#tbl417")) : stage4 = stage4 + 1; $('#stage4').html(stage4); break;
				case (target.is(":not(#tbl417)")) : error4 = error4 + 1; break;
			}
		}
		if (stage4 == 17) {
			switch (true) {
				case (target.is("#tbl418")) : stage4 = stage4 + 1; $('#stage4').html(stage4); break;
				case (target.is(":not(#tbl418)")) : error4 = error4 + 1; break;
			}
		}
		if (stage4 == 18) {
			switch (true) {
				case (target.is("#tbl419")) : stage4 = stage4 + 1; $('#stage4').html(stage4); break;
				case (target.is(":not(#tbl419)")) : error4 = error4 + 1; break;
			}
		}
		if (stage4 == 19) {
			switch (true) {
				case (target.is("#tbl420")) : stage4 = stage4 + 1; $('#stage4').html(stage4); break;
				case (target.is(":not(#tbl420)")) : error4 = error4 + 1; break;
			}
		}
		if (stage4 == 20) {
			switch (true) {
				case (target.is("#tbl421")) : stage4 = stage4 + 1; $('#stage4').html(stage4); break;
				case (target.is(":not(#tbl421)")) : error4 = error4 + 1; break;
			}
		}
		if (stage4 == 21) {
			switch (true) {
				case (target.is("#tbl422")) : stage4 = stage4 + 1; $('#stage4').html(stage4); break;
				case (target.is(":not(#tbl422)")) : error4 = error4 + 1; break;
			}
		}
		if (stage4 == 22) {
			switch (true) {
				case (target.is("#tbl423")) : stage4 = stage4 + 1; $('#stage4').html(stage4); break;
				case (target.is(":not(#tbl423)")) : error4 = error4 + 1; break;
			}
		}
		if (stage4 == 23) {
			switch (true) {
				case (target.is("#tbl424")) : stage4 = stage4 + 1; $('#stage4').html(stage4); break;
				case (target.is(":not(#tbl424)")) : error4 = error4 + 1; break;
			}
		}
		if (stage4 == 24) {
			switch (true) {
				case (target.is("#tbl425")) : $('#stage4').html(25); $('#timer4').runner('stop'); var tmr4 = $('#timer4').val(); localStorage.setItem('tmr4inp', tmr4); break;
				case (target.is(":not(#tbl425)")) : error4 = error4 + 1; localStorage.setItem('error4inp', error4); break;
			}
		}
	});
});

$(document).ready(function () { //T5
	$('#timer5').runner();
	stage5 = 0;
	error5 = 0;
	$("td").click(function(event) {
		var target = $(event.target);
		if (stage5 == 0) {
			switch (true) {
				case (target.is("#tbl51")) : stage5 = stage5 + 1; $('#stage5').html(stage5); $('#timer5').runner('start'); break;	
			}
		}
		if (stage5 == 1) {
			switch (true) {
				case (target.is("#tbl52")) : stage5 = stage5 + 1; $('#stage5').html(stage5); break;
				case (target.is(":not(#tbl52)")) : error5 = error5 + 1; break;
			}
		}
		if (stage5 == 2) {
			switch (true) {
				case (target.is("#tbl53")) : stage5 = stage5 + 1; $('#stage5').html(stage5); break;
				case (target.is(":not(#tbl53)")) : error5 = error5 + 1; break;
			}
		}
		if (stage5 == 3) {
			switch (true) {
				case (target.is("#tbl54")) : stage5 = stage5 + 1; $('#stage5').html(stage5); break;
				case (target.is(":not(#tbl54)")) : error5 = error5 + 1; break;
			}
		}
		if (stage5 == 4) {
			switch (true) {
				case (target.is("#tbl55")) : stage5 = stage5 + 1; $('#stage5').html(stage5); break;
				case (target.is(":not(#tbl55)")) : error5 = error5 + 1; break;
			}
		}
		if (stage5 == 5) {
			switch (true) {
				case (target.is("#tbl56")) : stage5 = stage5 + 1; $('#stage5').html(stage5); break;
				case (target.is(":not(#tbl56)")) : error5 = error5 + 1; break;
			}
		}
		if (stage5 == 6) {
			switch (true) {
				case (target.is("#tbl57")) : stage5 = stage5 + 1; $('#stage5').html(stage5); break;
				case (target.is(":not(#tbl57)")) : error5 = error5 + 1; break;
			}
		}
		if (stage5 == 7) {
			switch (true) {
				case (target.is("#tbl58")) : stage5 = stage5 + 1; $('#stage5').html(stage5); break;
				case (target.is(":not(#tbl58)")) : error5 = error5 + 1; break;
			}
		}
		if (stage5 == 8) {
			switch (true) {
				case (target.is("#tbl59")) : stage5 = stage5 + 1; $('#stage5').html(stage5); break;
				case (target.is(":not(#tbl59)")) : error5 = error5 + 1; break;
			}
		}
		if (stage5 == 9) {
			switch (true) {
				case (target.is("#tbl510")) : stage5 = stage5 + 1; $('#stage5').html(stage5); break;
				case (target.is(":not(#tbl510)")) : error5 = error5 + 1; break;
			}
		}
		if (stage5 == 10) {
			switch (true) {
				case (target.is("#tbl511")) : stage5 = stage5 + 1; $('#stage5').html(stage5); break;
				case (target.is(":not(#tbl511)")) : error5 = error5 + 1; break;
			}
		}
		if (stage5 == 11) {
			switch (true) {
				case (target.is("#tbl512")) : stage5 = stage5 + 1; $('#stage5').html(stage5); break;
				case (target.is(":not(#tbl512)")) : error5 = error5 + 1; break;
			}
		}
		if (stage5 == 12) {
			switch (true) {
				case (target.is("#tbl513")) : stage5 = stage5 + 1; $('#stage5').html(stage5); break;
				case (target.is(":not(#tbl513)")) : error5 = error5 + 1; break;
			}
		}
		if (stage5 == 13) {
			switch (true) {
				case (target.is("#tbl514")) : stage5 = stage5 + 1; $('#stage5').html(stage5); break;
				case (target.is(":not(#tbl514)")) : error5 = error5 + 1; break;
			}
		}
		if (stage5 == 14) {
			switch (true) {
				case (target.is("#tbl515")) : stage5 = stage5 + 1; $('#stage5').html(stage5); break;
				case (target.is(":not(#tbl515)")) : error5 = error5 + 1; break;
			}
		}
		if (stage5 == 15) {
			switch (true) {
				case (target.is("#tbl516")) : stage5 = stage5 + 1; $('#stage5').html(stage5); break;
				case (target.is(":not(#tbl516)")) : error5 = error5 + 1; break;
			}
		}
		if (stage5 == 16) {
			switch (true) {
				case (target.is("#tbl517")) : stage5 = stage5 + 1; $('#stage5').html(stage5); break;
				case (target.is(":not(#tbl517)")) : error5 = error5 + 1; break;
			}
		}
		if (stage5 == 17) {
			switch (true) {
				case (target.is("#tbl518")) : stage5 = stage5 + 1; $('#stage5').html(stage5); break;
				case (target.is(":not(#tbl518)")) : error5 = error5 + 1; break;
			}
		}
		if (stage5 == 18) {
			switch (true) {
				case (target.is("#tbl519")) : stage5 = stage5 + 1; $('#stage5').html(stage5); break;
				case (target.is(":not(#tbl519)")) : error5 = error5 + 1; break;
			}
		}
		if (stage5 == 19) {
			switch (true) {
				case (target.is("#tbl520")) : stage5 = stage5 + 1; $('#stage5').html(stage5); break;
				case (target.is(":not(#tbl520)")) : error5 = error5 + 1; break;
			}
		}
		if (stage5 == 20) {
			switch (true) {
				case (target.is("#tbl521")) : stage5 = stage5 + 1; $('#stage5').html(stage5); break;
				case (target.is(":not(#tbl521)")) : error5 = error5 + 1; break;
			}
		}
		if (stage5 == 21) {
			switch (true) {
				case (target.is("#tbl522")) : stage5 = stage5 + 1; $('#stage5').html(stage5); break;
				case (target.is(":not(#tbl522)")) : error5 = error5 + 1; break;
			}
		}
		if (stage5 == 22) {
			switch (true) {
				case (target.is("#tbl523")) : stage5 = stage5 + 1; $('#stage5').html(stage5); break;
				case (target.is(":not(#tbl523)")) : error5 = error5 + 1; break;
			}
		}
		if (stage5 == 23) {
			switch (true) {
				case (target.is("#tbl524")) : stage5 = stage5 + 1; $('#stage5').html(stage5); break;
				case (target.is(":not(#tbl524)")) : error5 = error5 + 1; break;
			}
		}
		if (stage5 == 24) {
			switch (true) {
				case (target.is("#tbl525")) : $('#stage5').html(25); $('#timer5').runner('stop'); var tmr5 = $('#timer5').val(); localStorage.setItem('tmr5inp', tmr5); break;
				case (target.is(":not(#tbl525)")) : error5 = error5 + 1; localStorage.setItem('error5inp', error5); break;
			}
		}
	});
});