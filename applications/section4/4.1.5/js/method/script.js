$(document).on('ready', function() {
	var sel = $('.ranks'),
    opt = $('option:not(:first-child)', sel);

	function review(){
	    var chosen = sel.map(function(i, el){
	        return $(':selected',el);
	    });
	    var rankID = 0;
	    opt.show();
	    chosen.each(function(i, el){
	        rankID = $(el).val();
	        opt.not(el).filter(function(){
	            return $(this).val() == rankID;
	        }).hide();
	    });
	    return false;
	}

	sel.on('change',review);
});