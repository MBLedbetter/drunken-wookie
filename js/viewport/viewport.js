
jQuery( document ).ready(function() {

	while(parseInt(jQuery("#nav>ol.nav-primary").height())>40){
		removeNavCell();
	}
	initiateGrid();
	/* --- Grid mouse detection --- */
	jQuery( ".grid-cell>a" ).mouseenter(function() {
	  jQuery( this ).delay(800).append(jQuery("<div class='cell-hover'><span>"+jQuery('img',this).attr('title')+"</span></div>"));
	});

	jQuery( ".grid-cell>a" ).mouseleave(function() {
	  jQuery( ".grid-cell>a>div" ).remove();
	});

	/* --- Menu mouse detection --- */

	jQuery('ol.nav-primary > li').bind('mouseover', openSubMenu); 
	jQuery('ol.nav-primary > li').bind('mouseout', closeSubMenu);
	jQuery('ol.nav-secondary > ul').bind('mouseout', closeSubMenu);

});

jQuery( window ).resize(function(){
	if(isElementVisible('#cell-15')){
		alert('visible');
	}
	else{
		alert('not visible');
	}
	detectWidth();
});

function openSubMenu() { 
	if(jQuery(window).width()>770){
		var navClass = '#nav>.nav-secondary>ul.'+jQuery(this).attr('class').split(' ')[1];
    	jQuery(navClass).css('display','block');
    }
};
function closeSubMenu() { 
	if(jQuery(window).width()>770){
		var primaryClass = '#nav>.nav-primary>li.'+jQuery(this).attr('class').split(' ')[1];
		var secondaryClass = '#nav>.nav-secondary>ul.'+jQuery(this).attr('class').split(' ')[1];
		if((jQuery(secondaryClass).is(':hover')===false)&&(jQuery(primaryClass).is(':hover')===false)){
   				jQuery(secondaryClass).css('display','none');
   		}
   	}
};

function detectWidth()
{
	if((jQuery("#nav>ol.nav-primary").height()>40)&&(jQuery(window).width()>770))
	{
		removeNavCell();
	}

	if((jQuery(window).width()>1224)&&((jQuery("#nav>ol.nav-primary li").not("#nav>ol.nav-primary li ul li").length)<8))
	{
		addNavCell();
	}
}

function moveGrid() {
 		jQuery(".main-grid td").animate({'left':'+=1'});
}

function removeNavCell()
{
	jQuery("#nav>.nav-primary>li:nth-last-child(2)").prependTo(jQuery('#nav>ol.nav-secondary>ul.last'));
    jQuery('#nav>.nav-secondary>ul.last>li:first>a').css('text-transform','capitalize');
}

function addNavCell()
{
	jQuery("#nav>ol.nav-secondary>ul.last>li:first").appendTo(jQuery('#nav>ol.nav-primary')).insertBefore('#nav>ol.nav-primary>li.last');
	jQuery("#nav>.nav-primary>li:nth-last-child(2)>a").css('text-transform','Uppercase');
}


function initiateGrid()
{
	jQuery('#cell-1').fadeIn('slow');
	jQuery('#cell-2').fadeIn('slow');
	jQuery('#cell-3').delay(500).fadeIn('slow');
	jQuery('#cell-4').delay(900).fadeIn('slow');
	jQuery('#cell-5').delay(1100).fadeIn('slow');
	jQuery('#cell-6').delay(700).fadeIn('slow');
	jQuery('#cell-7').delay(1300).fadeIn('slow');
	jQuery('#cell-8').delay(1700).fadeIn('slow');
	jQuery('#cell-9').delay(1500).fadeIn('slow');
	jQuery('#cell-10').delay(2100).fadeIn('slow');
	jQuery('#cell-11').delay(2300).fadeIn('slow');
	jQuery('#cell-12').delay(1900).fadeIn('slow');
	jQuery('#cell-13').delay(2700).fadeIn('slow');
	jQuery('#cell-14').delay(2900).fadeIn('slow');
	jQuery('#cell-15').delay(3100).fadeIn('slow');
}


// ----- Keep At End of Script -----
var $j=jQuery.noConflict();
// ----- Keep At End of Script -----
