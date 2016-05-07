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

	var active_block = document.querySelectorAll('.carusel_sm_block');
	var owl_item = document.querySelectorAll('.owl-page');
	for (var i = 0; i < owl_item.length; i++) {
		if (owl_item[i].classList.contains('active')) {
			active_block[i].classList.add('active_block');

		} else {
			alert("Щось пішло не так");
		}
	};
	/*
			var elems = document.body.children;

  for (var i = 0; i < elems.length; i++) {
    if (elems[i].matches('a[href$="zip"]')) {
      alert( "Ссылка на архив: " + elems[i].href );
    }
  }

			$(document).ready(function() {
	var active_block =$(".carusel_sm_block");
	var owl_item = $(".owl-page");
		if( $(owl_item[0]).has(".active")){
			active_block[0].addClass("active_block");
		}else if( $(owl_item[1]).has(".active")){
			active_block[1].addClass("active_block");
		}else if( $(owl_item[2]).has(".active")){
			active_block[2].addClass("active_block");
		}
			}); */
});