var $newTag = $('<li class="tag"></li>');

// var $newQuestion;
// $newDiv = $('<div class="left_container clearfix"></div>');
// $newFigure = $('<figure></figure>');
// $newImg = $('<img src="img/riley.svg" alt="">');
// $newFigCap= $('<figcaption>Riley 1992</figcaption>');
// $newTime= $('<time>1 minute ago</time>');
// $newAsk = $('<h2></h2>')





$( "#ask_modal" ).click(function() {
   $('.modal').show( "slow" );
});

$( ".close" ).click(function() {
   $('.modal').hide( "slow" );
});

$(document).keyup(function(e) {
     if (e.keyCode == 27) { 
	$('.modal').hide( "slow" );

    }
});


$('.buttonsubmit').click(function(){
	var $value = $("textarea").val();

    $('.comments').prepend(
    	'<article class="clearfix">' +
                    '<div class="left_container clearfix">' +
                        '<figure>' +
                           ' <img src="img/riley.svg" alt="">' +
                            '<figcaption>Riley1212</figcaption>' +
                       '</figure>' +
                        '<h2>' + $value + '</h2>' +
                        '<time>1 minute ago</time>' +
                   '</div> ' +
                   '<div class="right_container"> ' +
                       ' <b>0</b><p>answers</p>' +
                    '</div>' +
                '</article>'

	);

	$('.modal').hide( "slow" );


	// var tag = $( "#tag option:selected").val();
	// $newTag.text(tag).appendTo($newQuestion);



});
 