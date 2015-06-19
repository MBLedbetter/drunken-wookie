
jQuery( document ).ready(function() {

/* === Nav Menu === */
	while(parseInt(jQuery("#custommenu").height())>40){
		removeNavCell();
	}

/* === End Nav Menu=== */

/* Associates Documents Functionality */

jQuery('li.form-title').click(function(){
	jQuery(this).next().fadeToggle('slow');
});

	appendMore();
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

function appendMore(){
	jQuery('div#menu19').attr('onmouseover', "wpShowMenuPopup(this, event, 'popup19');");
	jQuery('div#menu19').attr('onmouseout', "wpHideMenuPopup(this, event, 'popup19', 'menu19')");

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



// ----- Keep At End of Script -----
var $j=jQuery.noConflict();
// ----- Keep At End of Script -----
