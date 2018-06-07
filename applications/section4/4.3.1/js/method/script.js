$(document).ready(function () { //T1
	$('#timer1').runner();
	var stage1 = 0;
	$("td").click(function(event) {
		var target = $(event.target);
		if (target.is("#tbl11")) {
			if (stage1 == 0) {
				$('#timer1').runner('start');
				stage1++; 
				$('#stage1').html(stage1);
			}
		}
		if (target.is("#tbl12")) {
			if (stage1 == 1) {
				stage1++;
				$('#stage1').html(stage1);
			}
		}
		if (target.is("#tbl13")) {
			if (stage1 == 2) {
				stage1++;
				$('#stage1').html(stage1);
			}
		}
		if (target.is("#tbl14")) {
			if (stage1 == 3) {
				stage1++;
				$('#stage1').html(stage1);
			}
		}
		if (target.is("#tbl15")) {
			if (stage1 == 4) {
				stage1++;
				$('#stage1').html(stage1);
			}
		}
		if (target.is("#tbl16")) {
			if (stage1 == 5) {
				stage1++;
				$('#stage1').html(stage1);
			}
		}
		if (target.is("#tbl17")) {
			if (stage1 == 6) {
				stage1++;
				$('#stage1').html(stage1);
			}
		}
		if (target.is("#tbl18")) {
			if (stage1 == 7) {
				stage1++;
				$('#stage1').html(stage1);
			}
		}
		if (target.is("#tbl19")) {
			if (stage1 == 8) {
				stage1++;
				$('#stage1').html(stage1);
			}
		}
		if (target.is("#tbl110")) {
			if (stage1 == 9) {
				stage1++;
				$('#stage1').html(stage1);
			}
		}
		if (target.is("#tbl111")) {
			if (stage1 == 10) {
				stage1++;
				$('#stage1').html(stage1);
			}
		}
		if (target.is("#tbl112")) {
			if (stage1 == 11) {
				stage1++;
				$('#stage1').html(stage1);
			}
		}
		if (target.is("#tbl113")) {
			if (stage1 == 12) {
				stage1++;
				$('#stage1').html(stage1);
			}
		}
		if (target.is("#tbl114")) {
			if (stage1 == 13) {
				stage1++;
				$('#stage1').html(stage1);
			}
		}
		if (target.is("#tbl115")) {
			if (stage1 == 14) {
				stage1++;
				$('#stage1').html(stage1);
			}
		}
		if (target.is("#tbl116")) {
			if (stage1 == 15) {
				stage1++;
				$('#stage1').html(stage1);
			}
		}
		if (target.is("#tbl117")) {
			if (stage1 == 16) {
				stage1++;
				$('#stage1').html(stage1);
			}
		}
		if (target.is("#tbl118")) {
			if (stage1 == 17) {
				stage1++;
				$('#stage1').html(stage1);
			}
		}
		if (target.is("#tbl119")) {
			if (stage1 == 18) {
				stage1++;
				$('#stage1').html(stage1);
			}
		}
		if (target.is("#tbl120")) {
			if (stage1 == 19) {
				stage1++;
				$('#stage1').html(stage1);
			}
		}
		if (target.is("#tbl121")) {
			if (stage1 == 20) {
				stage1++;
				$('#stage1').html(stage1);
			}
		}
		if (target.is("#tbl122")) {
			if (stage1 == 21) {
				stage1++;
				$('#stage1').html(stage1);
			}
		}
		if (target.is("#tbl123")) {
			if (stage1 == 22) {
				stage1++;
				$('#stage1').html(stage1);
			}
		}
		if (target.is("#tbl124")) {
			if (stage1 == 23) {
				stage1++;
				$('#stage1').html(stage1);
			}
		}
		if (target.is("#tbl125")) {
			if (stage1 == 24) { 
				stage1++;
				$('#stage1').html(25);  
				$('#timer1').runner('stop'); 
				localStorage.setItem('tmr1inp', $('#timer1').val()); 
				$('#tab3').css('display', 'inline-block'); 
				$('#tab4').css('display', 'inline-block');
				$('#tab5').css('display', 'inline-block');
				$('#tab6').css('display', 'inline-block');
			}
		}
	});
});

$(document).ready(function () { //T2
	$('#timer2').runner();
	var stage2 = 0;
	$("td").click(function(event) {
		var target = $(event.target);
		if (target.is("#tbl21")) {
			if (stage2 == 0) {
				$('#timer2').runner('start');
				stage2++; 
				$('#stage2').html(stage2);
			}
		}
		if (target.is("#tbl22")) {
			if (stage2 == 1) {
				stage2++;
				$('#stage2').html(stage2);
			}
		}
		if (target.is("#tbl23")) {
			if (stage2 == 2) {
				stage2++;
				$('#stage2').html(stage2);
			}
		}
		if (target.is("#tbl24")) {
			if (stage2 == 3) {
				stage2++;
				$('#stage2').html(stage2);
			}
		}
		if (target.is("#tbl25")) {
			if (stage2 == 4) {
				stage2++;
				$('#stage2').html(stage2);
			}
		}
		if (target.is("#tbl26")) {
			if (stage2 == 5) {
				stage2++;
				$('#stage2').html(stage2);
			}
		}
		if (target.is("#tbl27")) {
			if (stage2 == 6) {
				stage2++;
				$('#stage2').html(stage2);
			}
		}
		if (target.is("#tbl28")) {
			if (stage2 == 7) {
				stage2++;
				$('#stage2').html(stage2);
			}
		}
		if (target.is("#tbl29")) {
			if (stage2 == 8) {
				stage2++;
				$('#stage2').html(stage2);
			}
		}
		if (target.is("#tbl210")) {
			if (stage2 == 9) {
				stage2++;
				$('#stage2').html(stage2);
			}
		}
		if (target.is("#tbl211")) {
			if (stage2 == 10) {
				stage2++;
				$('#stage2').html(stage2);
			}
		}
		if (target.is("#tbl212")) {
			if (stage2 == 11) {
				stage2++;
				$('#stage2').html(stage2);
			}
		}
		if (target.is("#tbl213")) {
			if (stage2 == 12) {
				stage2++;
				$('#stage2').html(stage2);
			}
		}
		if (target.is("#tbl214")) {
			if (stage2 == 13) {
				stage2++;
				$('#stage2').html(stage2);
			}
		}
		if (target.is("#tbl215")) {
			if (stage2 == 14) {
				stage2++;
				$('#stage2').html(stage2);
			}
		}
		if (target.is("#tbl216")) {
			if (stage2 == 15) {
				stage2++;
				$('#stage2').html(stage2);
			}
		}
		if (target.is("#tbl217")) {
			if (stage2 == 16) {
				stage2++;
				$('#stage2').html(stage2);
			}
		}
		if (target.is("#tbl218")) {
			if (stage2 == 17) {
				stage2++;
				$('#stage2').html(stage2);
			}
		}
		if (target.is("#tbl219")) {
			if (stage2 == 18) {
				stage2++;
				$('#stage2').html(stage2);
			}
		}
		if (target.is("#tbl220")) {
			if (stage2 == 19) {
				stage2++;
				$('#stage2').html(stage2);
			}
		}
		if (target.is("#tbl221")) {
			if (stage2 == 20) {
				stage2++;
				$('#stage2').html(stage2);
			}
		}
		if (target.is("#tbl222")) {
			if (stage2 == 21) {
				stage2++;
				$('#stage2').html(stage2);
			}
		}
		if (target.is("#tbl223")) {
			if (stage2 == 22) {
				stage2++;
				$('#stage2').html(stage2);
			}
		}
		if (target.is("#tbl224")) {
			if (stage2 == 23) {
				stage2++;
				$('#stage2').html(stage2);
			}
		}
		if (target.is("#tbl225")) {
			if (stage2 == 24) { 
				stage2++;
				$('#stage2').html(25);  
				$('#timer2').runner('stop'); 
				localStorage.setItem('tmr2inp', $('#timer2').val()); 
			}
		}
	});
});

$(document).ready(function () { //T3
	$('#timer3').runner();
	var stage3 = 0;
	$("td").click(function(event) {
		var target = $(event.target);
		if (target.is("#tbl31")) {
			if (stage3 == 0) {
				$('#timer3').runner('start');
				stage3++; 
				$('#stage3').html(stage3);
			}
		}
		if (target.is("#tbl32")) {
			if (stage3 == 1) {
				stage3++;
				$('#stage3').html(stage3);
			}
		}
		if (target.is("#tbl33")) {
			if (stage3 == 2) {
				stage3++;
				$('#stage3').html(stage3);
			}
		}
		if (target.is("#tbl34")) {
			if (stage3 == 3) {
				stage3++;
				$('#stage3').html(stage3);
			}
		}
		if (target.is("#tbl35")) {
			if (stage3 == 4) {
				stage3++;
				$('#stage3').html(stage3);
			}
		}
		if (target.is("#tbl36")) {
			if (stage3 == 5) {
				stage3++;
				$('#stage3').html(stage3);
			}
		}
		if (target.is("#tbl37")) {
			if (stage3 == 6) {
				stage3++;
				$('#stage3').html(stage3);
			}
		}
		if (target.is("#tbl38")) {
			if (stage3 == 7) {
				stage3++;
				$('#stage3').html(stage3);
			}
		}
		if (target.is("#tbl39")) {
			if (stage3 == 8) {
				stage3++;
				$('#stage3').html(stage3);
			}
		}
		if (target.is("#tbl310")) {
			if (stage3 == 9) {
				stage3++;
				$('#stage3').html(stage3);
			}
		}
		if (target.is("#tbl311")) {
			if (stage3 == 10) {
				stage3++;
				$('#stage3').html(stage3);
			}
		}
		if (target.is("#tbl312")) {
			if (stage3 == 11) {
				stage3++;
				$('#stage3').html(stage3);
			}
		}
		if (target.is("#tbl313")) {
			if (stage3 == 12) {
				stage3++;
				$('#stage3').html(stage3);
			}
		}
		if (target.is("#tbl314")) {
			if (stage3 == 13) {
				stage3++;
				$('#stage3').html(stage3);
			}
		}
		if (target.is("#tbl315")) {
			if (stage3 == 14) {
				stage3++;
				$('#stage3').html(stage3);
			}
		}
		if (target.is("#tbl316")) {
			if (stage3 == 15) {
				stage3++;
				$('#stage3').html(stage3);
			}
		}
		if (target.is("#tbl317")) {
			if (stage3 == 16) {
				stage3++;
				$('#stage3').html(stage3);
			}
		}
		if (target.is("#tbl318")) {
			if (stage3 == 17) {
				stage3++;
				$('#stage3').html(stage3);
			}
		}
		if (target.is("#tbl319")) {
			if (stage3 == 18) {
				stage3++;
				$('#stage3').html(stage3);
			}
		}
		if (target.is("#tbl320")) {
			if (stage3 == 19) {
				stage3++;
				$('#stage3').html(stage3);
			}
		}
		if (target.is("#tbl321")) {
			if (stage3 == 20) {
				stage3++;
				$('#stage3').html(stage3);
			}
		}
		if (target.is("#tbl322")) {
			if (stage3 == 21) {
				stage3++;
				$('#stage3').html(stage3);
			}
		}
		if (target.is("#tbl323")) {
			if (stage3 == 22) {
				stage3++;
				$('#stage3').html(stage3);
			}
		}
		if (target.is("#tbl324")) {
			if (stage3 == 23) {
				stage3++;
				$('#stage3').html(stage3);
			}
		}
		if (target.is("#tbl325")) {
			if (stage3 == 24) { 
				stage3++;
				$('#stage3').html(25);  
				$('#timer3').runner('stop');
				localStorage.setItem('tmr3inp', $('#timer3').val()); 
			}
		}
	});
});

$(document).ready(function () { //T2
	$('#timer4').runner();
	var stage4 = 0;
	$("td").click(function(event) {
		var target = $(event.target);
		if (target.is("#tbl41")) {
			if (stage4 == 0) {
				$('#timer4').runner('start');
				stage4++; 
				$('#stage4').html(stage4);
			}
		}
		if (target.is("#tbl42")) {
			if (stage4 == 1) {
				stage4++;
				$('#stage4').html(stage4);
			}
		}
		if (target.is("#tbl43")) {
			if (stage4 == 2) {
				stage4++;
				$('#stage4').html(stage4);
			}
		}
		if (target.is("#tbl44")) {
			if (stage4 == 3) {
				stage4++;
				$('#stage4').html(stage4);
			}
		}
		if (target.is("#tbl45")) {
			if (stage4 == 4) {
				stage4++;
				$('#stage4').html(stage4);
			}
		}
		if (target.is("#tbl46")) {
			if (stage4 == 5) {
				stage4++;
				$('#stage4').html(stage4);
			}
		}
		if (target.is("#tbl47")) {
			if (stage4 == 6) {
				stage4++;
				$('#stage4').html(stage4);
			}
		}
		if (target.is("#tbl48")) {
			if (stage4 == 7) {
				stage4++;
				$('#stage4').html(stage4);
			}
		}
		if (target.is("#tbl49")) {
			if (stage4 == 8) {
				stage4++;
				$('#stage4').html(stage4);
			}
		}
		if (target.is("#tbl410")) {
			if (stage4 == 9) {
				stage4++;
				$('#stage4').html(stage4);
			}
		}
		if (target.is("#tbl411")) {
			if (stage4 == 10) {
				stage4++;
				$('#stage4').html(stage4);
			}
		}
		if (target.is("#tbl412")) {
			if (stage4 == 11) {
				stage4++;
				$('#stage4').html(stage4);
			}
		}
		if (target.is("#tbl413")) {
			if (stage4 == 12) {
				stage4++;
				$('#stage4').html(stage4);
			}
		}
		if (target.is("#tbl414")) {
			if (stage4 == 13) {
				stage4++;
				$('#stage4').html(stage4);
			}
		}
		if (target.is("#tbl415")) {
			if (stage4 == 14) {
				stage4++;
				$('#stage4').html(stage4);
			}
		}
		if (target.is("#tbl416")) {
			if (stage4 == 15) {
				stage4++;
				$('#stage4').html(stage4);
			}
		}
		if (target.is("#tbl417")) {
			if (stage4 == 16) {
				stage4++;
				$('#stage4').html(stage4);
			}
		}
		if (target.is("#tbl418")) {
			if (stage4 == 17) {
				stage4++;
				$('#stage4').html(stage4);
			}
		}
		if (target.is("#tbl419")) {
			if (stage4 == 18) {
				stage4++;
				$('#stage4').html(stage4);
			}
		}
		if (target.is("#tbl420")) {
			if (stage4 == 19) {
				stage4++;
				$('#stage4').html(stage4);
			}
		}
		if (target.is("#tbl421")) {
			if (stage4 == 20) {
				stage4++;
				$('#stage4').html(stage4);
			}
		}
		if (target.is("#tbl422")) {
			if (stage4 == 21) {
				stage4++;
				$('#stage4').html(stage4);
			}
		}
		if (target.is("#tbl423")) {
			if (stage4 == 22) {
				stage4++;
				$('#stage4').html(stage4);
			}
		}
		if (target.is("#tbl424")) {
			if (stage4 == 23) {
				stage4++;
				$('#stage4').html(stage4);
			}
		}
		if (target.is("#tbl425")) {
			if (stage4 == 24) { 
				stage4++;
				$('#stage4').html(25);  
				$('#timer4').runner('stop');
				localStorage.setItem('tmr4inp', $('#timer4').val()); 
			}
		}
	});
});

$(document).ready(function () { //T5
	$('#timer5').runner();
	var stage5 = 0;
	$("td").click(function(event) {
		var target = $(event.target);
		if (target.is("#tbl51")) {
			if (stage5 == 0) {
				$('#timer5').runner('start');
				stage5++; 
				$('#stage5').html(stage5);
			}
		}
		if (target.is("#tbl52")) {
			if (stage5 == 1) {
				stage5++;
				$('#stage5').html(stage5);
			}
		}
		if (target.is("#tbl53")) {
			if (stage5 == 2) {
				stage5++;
				$('#stage5').html(stage5);
			}
		}
		if (target.is("#tbl54")) {
			if (stage5 == 3) {
				stage5++;
				$('#stage5').html(stage5);
			}
		}
		if (target.is("#tbl55")) {
			if (stage5 == 4) {
				stage5++;
				$('#stage5').html(stage5);
			}
		}
		if (target.is("#tbl56")) {
			if (stage5 == 5) {
				stage5++;
				$('#stage5').html(stage5);
			}
		}
		if (target.is("#tbl57")) {
			if (stage5 == 6) {
				stage5++;
				$('#stage5').html(stage5);
			}
		}
		if (target.is("#tbl58")) {
			if (stage5 == 7) {
				stage5++;
				$('#stage5').html(stage5);
			}
		}
		if (target.is("#tbl59")) {
			if (stage5 == 8) {
				stage5++;
				$('#stage5').html(stage5);
			}
		}
		if (target.is("#tbl510")) {
			if (stage5 == 9) {
				stage5++;
				$('#stage5').html(stage5);
			}
		}
		if (target.is("#tbl511")) {
			if (stage5 == 10) {
				stage5++;
				$('#stage5').html(stage5);
			}
		}
		if (target.is("#tbl512")) {
			if (stage5 == 11) {
				stage5++;
				$('#stage5').html(stage5);
			}
		}
		if (target.is("#tbl513")) {
			if (stage5 == 12) {
				stage5++;
				$('#stage5').html(stage5);
			}
		}
		if (target.is("#tbl514")) {
			if (stage5 == 13) {
				stage5++;
				$('#stage5').html(stage5);
			}
		}
		if (target.is("#tbl515")) {
			if (stage5 == 14) {
				stage5++;
				$('#stage5').html(stage5);
			}
		}
		if (target.is("#tbl516")) {
			if (stage5 == 15) {
				stage5++;
				$('#stage5').html(stage5);
			}
		}
		if (target.is("#tbl517")) {
			if (stage5 == 16) {
				stage5++;
				$('#stage5').html(stage5);
			}
		}
		if (target.is("#tbl518")) {
			if (stage5 == 17) {
				stage5++;
				$('#stage5').html(stage5);
			}
		}
		if (target.is("#tbl519")) {
			if (stage5 == 18) {
				stage5++;
				$('#stage5').html(stage5);
			}
		}
		if (target.is("#tbl520")) {
			if (stage5 == 19) {
				stage5++;
				$('#stage5').html(stage5);
			}
		}
		if (target.is("#tbl521")) {
			if (stage5 == 20) {
				stage5++;
				$('#stage5').html(stage5);
			}
		}
		if (target.is("#tbl522")) {
			if (stage5 == 21) {
				stage5++;
				$('#stage5').html(stage5);
			}
		}
		if (target.is("#tbl523")) {
			if (stage5 == 22) {
				stage5++;
				$('#stage5').html(stage5);
			}
		}
		if (target.is("#tbl524")) {
			if (stage5 == 23) {
				stage5++;
				$('#stage5').html(stage5);
			}
		}
		if (target.is("#tbl525")) {
			if (stage5 == 24) { 
				stage5++;
				$('#stage5').html(25);  
				$('#timer5').runner('stop');
				localStorage.setItem('tmr5inp', $('#timer5').val()); 
			}
		}
	});
});