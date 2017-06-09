if ( $.fn.makisu.enabled ) {
	var $nigiri = $( '.nigiri' );

	// Create Makisus

	$nigiri.makisu({
		selector: 'dd',
		overlap: 0.85,
		speed: 1.7
	});

	// Open all
	
	//$( '.list' ).makisu( 'open' );

	// Toggle on click

	$( '.toggle' ).on( 'click', function() {
		$( '.list' ).makisu( 'toggle' );
	});

	// Disable all links

	$( '.demo a' ).click( function( event ) {
		event.preventDefault();
	});

} else {

	$( '.warning' ).show();
}