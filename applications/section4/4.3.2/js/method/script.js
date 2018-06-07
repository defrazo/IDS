$(document).on('ready', function () { //T1
	$('#timer').runner();
	stage = 0;
	$("#btnstart").click(function() {
		$('#table1').css('display', 'table');
		$('#timer').runner('start');
		$('.s1').css('display','none');
	});

	setInterval(function() {
		if (stage == 0) {
			if ($('#timer').val() >= '03.00') {
				$('#table1').css('display', 'none'); 
				$('#table1c').css('display', 'table');
			}
			if ($('#timer').val() >= '10.00') $('#table1c').addClass('blink');
			if ($('#timer').val() <= '13.00') {
				$("td").click(function(event) {
					var target = $(event.target);
					switch (true) {
						case (target.is("#tbl11c")) : $('#tbl11c').html('X'); break;
						case (target.is("#tbl12c")) : $('#tbl12c').html('X'); break;
						case (target.is("#tbl13c")) : $('#tbl13c').html('X'); break;
						case (target.is("#tbl14c")) : $('#tbl14c').html('X'); break;
						case (target.is("#tbl15c")) : $('#tbl15c').html('X'); break;
						case (target.is("#tbl16c")) : $('#tbl16c').html('X'); break;
						case (target.is("#tbl17c")) : $('#tbl17c').html('X'); break;
						case (target.is("#tbl18c")) : $('#tbl18c').html('X'); break;
						case (target.is("#tbl19c")) : $('#tbl19c').html('X'); break;
						case (target.is("#tbl110c")) : $('#tbl110c').html('X'); break;
						case (target.is("#tbl111c")) : $('#tbl111c').html('X'); break;
						case (target.is("#tbl112c")) : $('#tbl112c').html('X'); break;
						case (target.is("#tbl113c")) : $('#tbl113c').html('X'); break;
						case (target.is("#tbl114c")) : $('#tbl114c').html('X'); break;
						case (target.is("#tbl115c")) : $('#tbl115c').html('X'); break;
						case (target.is("#tbl116c")) : $('#tbl116c').html('X'); break;
					}
				})
			} else {
				if (($('#tbl11c').text() == '') && ($('#tbl12c').text() == '') && ($('#tbl13c').text() == '') && ($('#tbl14c').text() == 'X') && ($('#tbl15c').text() == '') && ($('#tbl16c').text() == '') && ($('#tbl17c').text() == '') && ($('#tbl18c').text() == '') && ($('#tbl19c').text() == '') && ($('#tbl110c').text() == '') && ($('#tbl111c').text() == '') && ($('#tbl112c').text() == '') && ($('#tbl113c').text() == '') && ($('#tbl114c').text() == 'X') && ($('#tbl115c').text() == '') && ($('#tbl116c').text() == '')) {
					localStorage.setItem('tbl1c', 2);
				} else localStorage.setItem('tbl1c', 0);
				$('#timer').runner('stop');
				$('#timer').runner('reset');
				$('#table1c').css('visibility', 'hidden');
				stage++;
			}
		}
		if (stage == 1) {
			$('#timer').runner('start');
			$('#table1c').css('display', 'none');
			$('#table2').css('display', 'table');
			if ($('#timer').val() >= '03.00') {
				$('#table2').css('display', 'none'); 
				$('#table2c').css('display', 'table');
			}
			if ($('#timer').val() >= '10.00') $('#table2c').addClass('blink');
			if ($('#timer').val() <= '13.00') {
				$("td").click(function(event) {
					var target = $(event.target);
					switch (true) {
						case (target.is("#tbl21c")) : $('#tbl21c').html('X'); break;
						case (target.is("#tbl22c")) : $('#tbl22c').html('X'); break;
						case (target.is("#tbl23c")) : $('#tbl23c').html('X'); break;
						case (target.is("#tbl24c")) : $('#tbl24c').html('X'); break;
						case (target.is("#tbl25c")) : $('#tbl25c').html('X'); break;
						case (target.is("#tbl26c")) : $('#tbl26c').html('X'); break;
						case (target.is("#tbl27c")) : $('#tbl27c').html('X'); break;
						case (target.is("#tbl28c")) : $('#tbl28c').html('X'); break;
						case (target.is("#tbl29c")) : $('#tbl29c').html('X'); break;
						case (target.is("#tbl210c")) : $('#tbl210c').html('X'); break;
						case (target.is("#tbl211c")) : $('#tbl211c').html('X'); break;
						case (target.is("#tbl212c")) : $('#tbl212c').html('X'); break;
						case (target.is("#tbl213c")) : $('#tbl213c').html('X'); break;
						case (target.is("#tbl214c")) : $('#tbl214c').html('X'); break;
						case (target.is("#tbl215c")) : $('#tbl215c').html('X'); break;
						case (target.is("#tbl216c")) : $('#tbl216c').html('X'); break;
					}
				})
			} else {
				if (($('#tbl21c').text() == '') && ($('#tbl22c').text() == '') && ($('#tbl23c').text() == 'X') && ($('#tbl24c').text() == '') && ($('#tbl25c').text() == 'X') && ($('#tbl26c').text() == '') && ($('#tbl27c').text() == '') && ($('#tbl28c').text() == '') && ($('#tbl29c').text() == '') && ($('#tbl210c').text() == 'X') && ($('#tbl211c').text() == '') && ($('#tbl212c').text() == '') && ($('#tbl213c').text() == '') && ($('#tbl214c').text() == '') && ($('#tbl215c').text() == '') && ($('#tbl216c').text() == '')) {
					localStorage.setItem('tbl2c', 3);
				} else localStorage.setItem('tbl2c', 0);
				$('#timer').runner('stop');
				$('#timer').runner('reset');
				$('#table2c').css('visibility', 'hidden');
				stage++;
			}
		}
		if (stage == 2) {
			$('#timer').runner('start');
			$('#table2c').css('display', 'none');
			$('#table3').css('display', 'table');
			if ($('#timer').val() >= '03.00') {
				$('#table3').css('display', 'none'); 
				$('#table3c').css('display', 'table');
			}
			if ($('#timer').val() >= '10.00') $('#table3c').addClass('blink');
			if ($('#timer').val() <= '13.00') {
				$("td").click(function(event) {
					var target = $(event.target);
					switch (true) {
						case (target.is("#tbl31c")) : $('#tbl31c').html('X'); break;
						case (target.is("#tbl32c")) : $('#tbl32c').html('X'); break;
						case (target.is("#tbl33c")) : $('#tbl33c').html('X'); break;
						case (target.is("#tbl34c")) : $('#tbl34c').html('X'); break;
						case (target.is("#tbl35c")) : $('#tbl35c').html('X'); break;
						case (target.is("#tbl36c")) : $('#tbl36c').html('X'); break;
						case (target.is("#tbl37c")) : $('#tbl37c').html('X'); break;
						case (target.is("#tbl38c")) : $('#tbl38c').html('X'); break;
						case (target.is("#tbl39c")) : $('#tbl39c').html('X'); break;
						case (target.is("#tbl310c")) : $('#tbl310c').html('X'); break;
						case (target.is("#tbl311c")) : $('#tbl311c').html('X'); break;
						case (target.is("#tbl312c")) : $('#tbl312c').html('X'); break;
						case (target.is("#tbl313c")) : $('#tbl313c').html('X'); break;
						case (target.is("#tbl314c")) : $('#tbl314c').html('X'); break;
						case (target.is("#tbl315c")) : $('#tbl315c').html('X'); break;
						case (target.is("#tbl316c")) : $('#tbl316c').html('X'); break;
					}
				})
			} else {
				if (($('#tbl31c').text() == '') && ($('#tbl32c').text() == '') && ($('#tbl33c').text() == '') && ($('#tbl34c').text() == 'X') && ($('#tbl35c').text() == 'X') && ($('#tbl36c').text() == 'X') && ($('#tbl37c').text() == '') && ($('#tbl38c').text() == '') && ($('#tbl39c').text() == '') && ($('#tbl310c').text() == '') && ($('#tbl311c').text() == 'X') && ($('#tbl312c').text() == '') && ($('#tbl313c').text() == '') && ($('#tbl314c').text() == '') && ($('#tbl315c').text() == '') && ($('#tbl316c').text() == '')) {
					localStorage.setItem('tbl3c', 4);
				} else localStorage.setItem('tbl3c', 0);
				$('#timer').runner('stop');
				$('#timer').runner('reset');
				$('#table3c').css('visibility', 'hidden');
				stage++;
			}
		}
		if (stage == 3) {
			$('#timer').runner('start');
			$('#table3c').css('display', 'none');
			$('#table4').css('display', 'table');
			if ($('#timer').val() >= '03.00') {
				$('#table4').css('display', 'none'); 
				$('#table4c').css('display', 'table');
			}
			if ($('#timer').val() >= '10.00') $('#table4c').addClass('blink');
			if ($('#timer').val() <= '13.00') {
				$("td").click(function(event) {
					var target = $(event.target);
					switch (true) {
						case (target.is("#tbl41c")) : $('#tbl41c').html('X'); break;
						case (target.is("#tbl42c")) : $('#tbl42c').html('X'); break;
						case (target.is("#tbl43c")) : $('#tbl43c').html('X'); break;
						case (target.is("#tbl44c")) : $('#tbl44c').html('X'); break;
						case (target.is("#tbl45c")) : $('#tbl45c').html('X'); break;
						case (target.is("#tbl46c")) : $('#tbl46c').html('X'); break;
						case (target.is("#tbl47c")) : $('#tbl47c').html('X'); break;
						case (target.is("#tbl48c")) : $('#tbl48c').html('X'); break;
						case (target.is("#tbl49c")) : $('#tbl49c').html('X'); break;
						case (target.is("#tbl410c")) : $('#tbl410c').html('X'); break;
						case (target.is("#tbl411c")) : $('#tbl411c').html('X'); break;
						case (target.is("#tbl412c")) : $('#tbl412c').html('X'); break;
						case (target.is("#tbl413c")) : $('#tbl413c').html('X'); break;
						case (target.is("#tbl414c")) : $('#tbl414c').html('X'); break;
						case (target.is("#tbl415c")) : $('#tbl415c').html('X'); break;
						case (target.is("#tbl416c")) : $('#tbl416c').html('X'); break;
					}
				})
			} else {
				if (($('#tbl41c').text() == '') && ($('#tbl42c').text() == '') && ($('#tbl43c').text() == 'X') && ($('#tbl44c').text() == '') && ($('#tbl45c').text() == 'X') && ($('#tbl46c').text() == '') && ($('#tbl47c').text() == '') && ($('#tbl48c').text() == 'X') && ($('#tbl49c').text() == '') && ($('#tbl410c').text() == 'X') && ($('#tbl411c').text() == 'X') && ($('#tbl412c').text() == '') && ($('#tbl413c').text() == '') && ($('#tbl414c').text() == '') && ($('#tbl415c').text() == '') && ($('#tbl416c').text() == '')) {
					localStorage.setItem('tbl4c', 5);
				} else localStorage.setItem('tbl4c', 0);
				$('#timer').runner('stop');
				$('#timer').runner('reset');
				$('#table4c').css('visibility', 'hidden');
				stage++;
			}
		}
		if (stage == 4) {
			$('#timer').runner('start');
			$('#table4c').css('display', 'none');
			$('#table5').css('display', 'table');
			if ($('#timer').val() >= '03.00') {
				$('#table5').css('display', 'none'); 
				$('#table5c').css('display', 'table');
			}
			if ($('#timer').val() >= '10.00') $('#table5c').addClass('blink');
			if ($('#timer').val() <= '13.00') {
				$("td").click(function(event) {
					var target = $(event.target);
					switch (true) {
						case (target.is("#tbl51c")) : $('#tbl51c').html('X'); break;
						case (target.is("#tbl52c")) : $('#tbl52c').html('X'); break;
						case (target.is("#tbl53c")) : $('#tbl53c').html('X'); break;
						case (target.is("#tbl54c")) : $('#tbl54c').html('X'); break;
						case (target.is("#tbl55c")) : $('#tbl55c').html('X'); break;
						case (target.is("#tbl56c")) : $('#tbl56c').html('X'); break;
						case (target.is("#tbl57c")) : $('#tbl57c').html('X'); break;
						case (target.is("#tbl58c")) : $('#tbl58c').html('X'); break;
						case (target.is("#tbl59c")) : $('#tbl59c').html('X'); break;
						case (target.is("#tbl510c")) : $('#tbl510c').html('X'); break;
						case (target.is("#tbl511c")) : $('#tbl511c').html('X'); break;
						case (target.is("#tbl512c")) : $('#tbl512c').html('X'); break;
						case (target.is("#tbl513c")) : $('#tbl513c').html('X'); break;
						case (target.is("#tbl514c")) : $('#tbl514c').html('X'); break;
						case (target.is("#tbl515c")) : $('#tbl515c').html('X'); break;
						case (target.is("#tbl516c")) : $('#tbl516c').html('X'); break;
					}
				})
			} else {
				if (($('#tbl51c').text() == '') && ($('#tbl52c').text() == '') && ($('#tbl53c').text() == 'X') && ($('#tbl54c').text() == '') && ($('#tbl55c').text() == 'X') && ($('#tbl56c').text() == '') && ($('#tbl57c').text() == '') && ($('#tbl58c').text() == '') && ($('#tbl59c').text() == '') && ($('#tbl510c').text() == 'X') && ($('#tbl511c').text() == '') && ($('#tbl512c').text() == 'X') && ($('#tbl513c').text() == '') && ($('#tbl514c').text() == 'X') && ($('#tbl515c').text() == 'X') && ($('#tbl516c').text() == '')) {
					localStorage.setItem('tbl5c', 6);
				} else localStorage.setItem('tbl5c', 0);
				$('#timer').runner('stop');
				$('#timer').runner('reset');
				$('#table5c').css('visibility', 'hidden');
				stage++;
			}
		}
		if (stage == 5) {
			$('#timer').runner('start');
			$('#table5c').css('display', 'none');
			$('#table6').css('display', 'table');
			if ($('#timer').val() >= '03.00') {
				$('#table6').css('display', 'none'); 
				$('#table6c').css('display', 'table');
			}
			if ($('#timer').val() >= '15.00') $('#table6c').addClass('blink');
			if ($('#timer').val() <= '18.00') {
				$("td").click(function(event) {
					var target = $(event.target);
					switch (true) {
						case (target.is("#tbl61c")) : $('#tbl61c').html('X'); break;
						case (target.is("#tbl62c")) : $('#tbl62c').html('X'); break;
						case (target.is("#tbl63c")) : $('#tbl63c').html('X'); break;
						case (target.is("#tbl64c")) : $('#tbl64c').html('X'); break;
						case (target.is("#tbl65c")) : $('#tbl65c').html('X'); break;
						case (target.is("#tbl66c")) : $('#tbl66c').html('X'); break;
						case (target.is("#tbl67c")) : $('#tbl67c').html('X'); break;
						case (target.is("#tbl68c")) : $('#tbl68c').html('X'); break;
						case (target.is("#tbl69c")) : $('#tbl69c').html('X'); break;
						case (target.is("#tbl610c")) : $('#tbl610c').html('X'); break;
						case (target.is("#tbl611c")) : $('#tbl611c').html('X'); break;
						case (target.is("#tbl612c")) : $('#tbl612c').html('X'); break;
						case (target.is("#tbl613c")) : $('#tbl613c').html('X'); break;
						case (target.is("#tbl614c")) : $('#tbl614c').html('X'); break;
						case (target.is("#tbl615c")) : $('#tbl615c').html('X'); break;
						case (target.is("#tbl616c")) : $('#tbl616c').html('X'); break;
					}
				})
			} else {
				if (($('#tbl61c').text() == 'X') && ($('#tbl62c').text() == '') && ($('#tbl63c').text() == '') && ($('#tbl64c').text() == '') && ($('#tbl65c').text() == '') && ($('#tbl66c').text() == 'X') && ($('#tbl67c').text() == '') && ($('#tbl68c').text() == 'X') && ($('#tbl69c').text() == '') && ($('#tbl610c').text() == 'X') && ($('#tbl611c').text() == 'X') && ($('#tbl612c').text() == '') && ($('#tbl613c').text() == '') && ($('#tbl614c').text() == 'X') && ($('#tbl615c').text() == '') && ($('#tbl616c').text() == 'X')) {
					localStorage.setItem('tbl6c', 7);
				} else localStorage.setItem('tbl6c', 0);
				$('#timer').runner('stop');
				$('#timer').runner('reset');
				$('#table6c').css('visibility', 'hidden');
				stage++;
			}
		}
		if (stage == 6) {
			$('#timer').runner('start');
			$('#table6c').css('display', 'none');
			$('#table7').css('display', 'table');
			if ($('#timer').val() >= '03.00') {
				$('#table7').css('display', 'none'); 
				$('#table7c').css('display', 'table');
			}
			if ($('#timer').val() >= '15.00') $('#table7c').addClass('blink');
			if ($('#timer').val() <= '18.00') {
				$("td").click(function(event) {
					var target = $(event.target);
					switch (true) {
						case (target.is("#tbl71c")) : $('#tbl71c').html('X'); break;
						case (target.is("#tbl72c")) : $('#tbl72c').html('X'); break;
						case (target.is("#tbl73c")) : $('#tbl73c').html('X'); break;
						case (target.is("#tbl74c")) : $('#tbl74c').html('X'); break;
						case (target.is("#tbl75c")) : $('#tbl75c').html('X'); break;
						case (target.is("#tbl76c")) : $('#tbl76c').html('X'); break;
						case (target.is("#tbl77c")) : $('#tbl77c').html('X'); break;
						case (target.is("#tbl78c")) : $('#tbl78c').html('X'); break;
						case (target.is("#tbl79c")) : $('#tbl79c').html('X'); break;
						case (target.is("#tbl710c")) : $('#tbl710c').html('X'); break;
						case (target.is("#tbl711c")) : $('#tbl711c').html('X'); break;
						case (target.is("#tbl712c")) : $('#tbl712c').html('X'); break;
						case (target.is("#tbl713c")) : $('#tbl713c').html('X'); break;
						case (target.is("#tbl714c")) : $('#tbl714c').html('X'); break;
						case (target.is("#tbl715c")) : $('#tbl715c').html('X'); break;
						case (target.is("#tbl716c")) : $('#tbl716c').html('X'); break;
					}
				})
			} else {
				if (($('#tbl71c').text() == '') && ($('#tbl72c').text() == 'X') && ($('#tbl73c').text() == '') && ($('#tbl74c').text() == '') && ($('#tbl75c').text() == 'X') && ($('#tbl76c').text() == '') && ($('#tbl77c').text() == 'X') && ($('#tbl78c').text() == 'X') && ($('#tbl79c').text() == '') && ($('#tbl710c').text() == 'X') && ($('#tbl711c').text() == 'X') && ($('#tbl712c').text() == '') && ($('#tbl713c').text() == 'X') && ($('#tbl714c').text() == '') && ($('#tbl715c').text() == '') && ($('#tbl716c').text() == 'X')) {
					localStorage.setItem('tbl7c', 8);
				} else localStorage.setItem('tbl7c', 0);
				$('#timer').runner('stop');
				$('#timer').runner('reset');
				$('#table7c').css('visibility', 'hidden');
				stage++;
			}
		}
		if (stage == 7) {
			$('#timer').runner('start');
			$('#table7c').css('display', 'none');
			$('#table8').css('display', 'table');
			if ($('#timer').val() >= '03.00') {
				$('#table8').css('display', 'none'); 
				$('#table8c').css('display', 'table');
			}
			if ($('#timer').val() >= '15.00') $('#table8c').addClass('blink');
			if ($('#timer').val() <= '18.00') {
				$("td").click(function(event) {
					var target = $(event.target);
					switch (true) {
						case (target.is("#tbl81c")) : $('#tbl81c').html('X'); break;
						case (target.is("#tbl82c")) : $('#tbl82c').html('X'); break;
						case (target.is("#tbl83c")) : $('#tbl83c').html('X'); break;
						case (target.is("#tbl84c")) : $('#tbl84c').html('X'); break;
						case (target.is("#tbl85c")) : $('#tbl85c').html('X'); break;
						case (target.is("#tbl86c")) : $('#tbl86c').html('X'); break;
						case (target.is("#tbl87c")) : $('#tbl87c').html('X'); break;
						case (target.is("#tbl88c")) : $('#tbl88c').html('X'); break;
						case (target.is("#tbl89c")) : $('#tbl89c').html('X'); break;
						case (target.is("#tbl810c")) : $('#tbl810c').html('X'); break;
						case (target.is("#tbl811c")) : $('#tbl811c').html('X'); break;
						case (target.is("#tbl812c")) : $('#tbl812c').html('X'); break;
						case (target.is("#tbl813c")) : $('#tbl813c').html('X'); break;
						case (target.is("#tbl814c")) : $('#tbl814c').html('X'); break;
						case (target.is("#tbl815c")) : $('#tbl815c').html('X'); break;
						case (target.is("#tbl816c")) : $('#tbl816c').html('X'); break;
					}
				})
			} else {
				if (($('#tbl81c').text() == 'X') && ($('#tbl82c').text() == '') && ($('#tbl83c').text() == 'X') && ($('#tbl84c').text() == '') && ($('#tbl85c').text() == 'X') && ($('#tbl86c').text() == 'X') && ($('#tbl87c').text() == '') && ($('#tbl88c').text() == '') && ($('#tbl89c').text() == 'X') && ($('#tbl810c').text() == '') && ($('#tbl811c').text() == 'X') && ($('#tbl812c').text() == 'X') && ($('#tbl813c').text() == '') && ($('#tbl814c').text() == 'X') && ($('#tbl815c').text() == 'X') && ($('#tbl816c').text() == '')) {
					localStorage.setItem('tbl8c', 9);
				} else localStorage.setItem('tbl8c', 0);
				$('#timer').runner('stop');
				$('#timer').runner('reset');
				$('#table8c').css('display', 'none');
				stage++;
				$(location).attr('href', 'results.html');
			}
		}
	}, 1000);
});