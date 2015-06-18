

jQuery( document ).ready(function() {
	/* --- Fade in Grid --- */
	 initiateGrid();
	/* --- Move Grid --- */
	 window.setInterval(moveGrid, 50);

	/* --- Grid mouse detection --- */
	/*
	jQuery( ".grid-cell>a" ).mouseenter(function() {
	  jQuery( this ).delay(800).append(jQuery("<div class='cell-hover'><span>"+jQuery('img',this).attr('title')+"</span></div>"));
	});

	jQuery( ".grid-cell>a" ).mouseleave(function() {
	  jQuery( ".grid-cell>a>div" ).remove();
	});
*/
});

/*  --- duplicate cell blocks to new table--- */
function appendGridCell(){
	jQuery(entry).remove();
	createTable();
	jQuery('.main-grid-slider').css('margin-left','0')
}

// creates an empty grid table
function createTable(){
	// create clone of existing table
    var table = jQuery('.main-grid-slider table').clone(true);
    // append table after first in main-grid-slider
	jQuery(table).appendTo(jQuery('.main-grid-slider'));
}
// fade in initial grid create grid
function initiateGrid()
{
	// -1656px
	jQuery('#cell-1').delay(001).fadeIn('slow');
	jQuery('#cell-2').delay(001).fadeIn('slow');
	jQuery('#cell-3').delay(100).fadeIn('slow');
	jQuery('#cell-4').delay(400).fadeIn('slow');
	jQuery('#cell-5').delay(300).fadeIn('slow');
	jQuery('#cell-6').delay(200).fadeIn('slow');
	jQuery('#cell-7').delay(500).fadeIn('slow');
	jQuery('#cell-8').delay(700).fadeIn('slow');
	jQuery('#cell-9').delay(600).fadeIn('slow');
	jQuery('#cell-10').delay(800).fadeIn('slow');
	jQuery('#cell-11').delay(900).fadeIn('slow');
	jQuery('#cell-12').delay(1100).fadeIn('slow');
	jQuery('#cell-13').delay(1200).fadeIn('slow');
	jQuery('#cell-14').delay(1300).fadeIn('slow');
	jQuery('#cell-15').delay(1000).fadeIn('slow');
	createTable();
}

/* --- Move grid cells to the left and stop if mouse is hovering --- */
function moveGrid(){
	if(jQuery('.main-grid-slider').is(':hover')===false){
		jQuery('.main-grid-slider').css('margin-left','-=1');
	}

	if(parseInt(jQuery('.main-grid-slider').css('margin-left'))<-1659){
	// if(parseInt(jQuery('.main-grid-slider').css('margin-left'))>1840){
		jQuery('.main-grid-slider').css('margin-left','0');
	}
}

/* --- removes grid table and sets new first table margin to zero -- */
function removeTable(){
	// remove first table from slider
	jQuery('.main-grid-slider table:first').remove();
}
