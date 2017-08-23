
/************
Modal Show/Hide
*************/

$( "#project_modal" ).click(function() {
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

/************
Slideshow
*************/
	
	var currIndex = 0;
	var totalSlides = $(".slideshow > li").length;

	
  function next(){
		var nextIndex = currIndex + 1;
		if (nextIndex >= totalSlides){
			nextIndex = 0;
		}
    gotoSlide(nextIndex);

  }

  function prev(){
	   var prevIndex = currIndex - 1;
	   if (prevIndex < 0){
			prevIndex = totalSlides - 1;
		}
    gotoSlide(prevIndex);
  }

	function gotoSlide( $index ){
		currIndex = $index;
		var target = "#slide"+currIndex;
		$(".slideshow > li").removeClass("activeslide");		
		$(target).addClass("activeslide");


	}
	
	$("#next").on("click", function(){
		next();
	});

	$("#prev").on("click", function(){
		next();
	});


/************
User Profile Modal
*************/	

	$( "#user_modal" ).click(function() {
  $('.user_profile').show( "slow" );
});

$( ".close" ).click(function() {
  $('.user_profile').hide( "slow" );
});

/************
Project Upload Modal
*************/	

 $( "#upload_modal" ).click(function() {
  $('.upload_project').show( "slow" );
});

$( ".close" ).click(function() {
  $('.upload_project').hide( "slow" );
});

$('#submit_file').click(function(event){
	 event.preventDefault();

	var $oldImg = $('li#upload_modal');
	$oldImg.css('background-color','green');
    $('#upload_modal>img.first').hide();
    $('#upload_modal>img.second').css('display','block').fadeIn();
	 $('.upload_project').hide( "slow" );

});