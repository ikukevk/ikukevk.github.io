
/************
Modal Show/Hide
*************/

$( "#congrats_modal" ).click(function() {
  $('.overlay').show( "slow" );
});

$( ".close" ).click(function() {
  $('.overlay').hide( "slow" );
});


$(document).keyup(function(e) {
     if (e.keyCode == 27) { 
	$('.overlay').hide( "slow" );

    }
});
