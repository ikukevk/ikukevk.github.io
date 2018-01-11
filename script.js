$('li').on("click", function() {

	var filterValue = $(this).data('filter');
	$('.overlay_container').hide();
	$('.item-'+ filterValue).css('display' , 'grid').css('display' , '-ms-grid');

	$(this).addClass('selected').siblings().removeClass('selected');
	// $(this).css('color' , 'rgba(0,0,0,1)').siblings().css('color' , 'rgba(0,0,0,.5)');

});


// $('nav a').on("click", function() {
// $(this).addClass('selected_nav').siblings().removeClass('selected_nav');
// });

$("nav a").on("click", function() {
	var filterValue = $(this).data('navigation-item');
	var offSetPosition = $(".section-" + filterValue).offset().top;
	$("body , html").animate( {
		scrollTop: offSetPosition  
	});
	$(".mobile_menu").css('left' , '-100%');
});

$(".desktop_menu img").on("click", function() {
	$(".mobile_menu").css('left' , '0');
});

// $(document).ready(function () {
//     $('iframe').mouseover(function() {
//         $('iframe').each(function () {
//             $(this)[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
//         });
//     });
// });

$(".modal").on("click", function() {
	var filterValue = $(this).data('navigation-item');

	$(".modal_popup" + filterValue).removeClass("hidden");
	$(".background_modal").fadeIn();
});

$(".close_window").on("click", function() {
	// $(".popup_window").addClass("hidden");
	$(".popup_window").addClass("hidden");
	$(".background_modal").fadeOut();
	$(".modal_popup2")
	[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
});

// $(window).on("scroll", function() {
// 	var topPosition = $(".video_container").offset().top;
// 	var currentPosition = $(this).scrollTop();
// 	// $(".header_container h1").text(currentPosition);
// 	// $(".header_container h2").text(topPosition);
// 	if (currentPosition  > topPosition/2) {
// 		console.log("should move");
	
// 		$(".overlay_container:nth-child(odd)").css('transform', 'translateX(0)');
// 		$(".overlay_container:nth-child(even)").css('transform', 'translateX(0)');
// 		} else {
// 		console.log("nothing happened");
		
// 		}

// });



( function() {

	var youtube = document.querySelectorAll( ".youtube" );
	
	for (var i = 0; i < youtube.length; i++) {
		
		var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";
		
		var image = new Image();
				image.src = source;
				image.addEventListener( "load", function() {
					youtube[ i ].appendChild( image );
				}( i ) );
		
				youtube[i].addEventListener( "click", function() {

					var iframe = document.createElement( "iframe" );

							iframe.setAttribute( "frameborder", "0" );
							iframe.setAttribute( "allowfullscreen", "" );
							iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

							this.innerHTML = "";
							this.appendChild( iframe );
				} );	
	};
	
} )();
