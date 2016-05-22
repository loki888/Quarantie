$(document).ready(function() {

	$(document).ready(function () {

		var owl = $("#owl-demo");

		$("#owl-demo").owlCarousel({

			navigation: false, // Show next and prev buttons
			slideSpeed: 800,
			singleItem: true,
			autoPlay: false,
			pagination: true,
			paginationSpeed: 600,
			lazyFollow: true,
			lazyEffect: "fade",
			addClassActive: true
			// "singleItem:true" is a shortcut for:
			// items : 1, 
			// itemsDesktop : false,
			// itemsDesktopSmall : false,
			// itemsTablet: false,
			// itemsMobile : false

		});
		// .owl-wrapper div  has


		$(".js_next").click(function () {
			owl.trigger('owl.next');
		})
		$(".js_prev").click(function () {
			owl.trigger('owl.prev');
		})


	});
/*
	var active_block = document.querySelectorAll('.carusel_sm_block');
	var owl_item = document.querySelectorAll('.owl-page');
	for (var i = 0; i < owl_item.length; i++) {
		if (owl_item[i].classList.contains('active')) {
			active_block[i].classList.add('active_block');

		} else {
			alert("Щось пішло не так");
		}
	};
	
    */
    
    

});




                  
                  
                  
                  
 $(document).ready(function () {

     $('.img_cover_wrapper').mouseenter(function(){
      
        $(this).find('.heart').animate( {left:"29%"}, 600 );
        $(this).find('.chain').animate( { left:"58%"}, 600 );
        
    } );
                      
     $('.img_cover_wrapper').mouseleave(function(){   
        
        $(this).find('.heart').animate( {left:"-100%"}, 600 );
        $(this).find('.chain').animate( { left:"-100%"}, 600 );
        
    });         
});