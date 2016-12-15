function CDOisotope() {

  "use strict"; 
	
  // for each filters
  jQuery('.option-set').each( function( i, buttonGroup ) {
    var $buttonGroup = jQuery( buttonGroup );
	
    // init isotope
    var grid = $buttonGroup.data('target');
    
      imagesLoaded(grid, function(){
	  jQuery(grid).isotope({
        itemSelector: '.element',
		animationOptions: {
		duration: 750,
		easing: 'linear',
		queue: false
		}
      });
	  });
   
    
    // button click
    $buttonGroup.on( 'click', 'li', function() {
      var $this = jQuery( this );
      // filter isotope
      var filterValue = $this.attr('data-filter');
      jQuery(grid).isotope({ filter: filterValue })
      // change selected
      $buttonGroup.find('.selected').removeClass('selected');
      $this.addClass('selected');
    });
  });


};
CDOisotope();