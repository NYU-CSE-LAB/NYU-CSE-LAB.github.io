jQuery(function(){
    jQuery('.item').click(function(){
		jQuery('.calendar:visible').hide();
    	jQuery('#rh223'+$(this).attr('name')).toggle();
    });
});