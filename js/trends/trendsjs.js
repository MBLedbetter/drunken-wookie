
jQuery( document ).ready(function() {

/* === Nav Menu === */

	while(parseInt(jQuery("#custommenu").height())>40){
		removeNavCell();
	}


/* === End Nav Menu=== */

});

/* --- Menu width detection --- */
jQuery( window ).resize(function(){
	detectWidth();
});

/* === Nav menu functions === */

function addNavCell()
{
	jQuery("#nav>.nav-primary>li.last>ul>li:first").appendTo(jQuery('#nav>.nav-primary')).insertBefore('#nav>ol.nav-primary>li.last');

	//jQuery("#nav>.nav-primary>li:nth-last-child(2)>a").css('text-transform','Uppercase');
}


function detectWidth()
{

	if((jQuery("#custommenu").height()>40)&&(jQuery(window).width()>770))
	{
		removeNavCell();
	}

	if((jQuery(window).width()>1224)&&((jQuery("#nav>ol.nav-primary li").not("#nav>ol.nav-primary li ul li").length)<8))
	{
		addNavCell();
	}
}


function removeNavCell()
{
	// jQuery("#custommenu>div:nth-last-child(2)").prependTo(jQuery('#custommenu>#popup9'));
	jQuery("#custommenu>div:nth-last-child(3)").remove();
}

/* === End Nav Menu functions === */

jQuery('li.form-title').click(function(){
	jQuery(this).next().fadeIn('slow');
});



// ----- Keep At End of Script -----
var $j=jQuery.noConflict();
// ----- Keep At End of Script -----
