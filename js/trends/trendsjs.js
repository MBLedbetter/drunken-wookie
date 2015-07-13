/*
jQuery( document ).ready(function() {

	//window.currentTarget = (jQuery("#custommenu").find(".menu").length)-3;
	window.currentTarget = 3;
	*/
/* === Nav Menu === */
/*
	while(parseInt(jQuery("#custommenu").height())>40){
		removeNavCell(currentTarget);
	}
*/
/* === End Nav Menu=== */

/* Associates Documents Functionality */
/*
jQuery('li.form-title').click(function(){
	jQuery(this).next().fadeToggle('slow');
});

	appendMore();
});
*/
/* --- Menu width detection --- */
/*
jQuery( window ).resize(function(){
	detectWidth();
});
*/
/* === Nav menu functions === */

function addNavCell(target)
{
	jQuery("#nav>.nav-primary>li.last>ul>li:first").appendTo(jQuery('#nav>.nav-primary')).insertBefore('#nav>ol.nav-primary>li.last');
	currentTarget--;
}

function appendMore(){
	jQuery('div#menu19').attr('onmouseover', "wpShowMenuPopup(this, event, 'popup19');");
	jQuery('div#menu19').attr('onmouseout', "wpHideMenuPopup(this, event, 'popup19', 'menu19')");
	jQuery('#custommenu').prepend('<div id="popup19" class="wp-custom-menu-popup" onmouseout="wpHideMenuPopup(this, event, \'popup19\')" onmouseover="wpShowMenuPopup(this, event,\'popup19\')"></div>');
	jQuery('#popup19').prepend('<div class="block1"><div class="column first last odd"><div class="itemMenu level1"></div></div><div class="clearBoth"></div></div>');
}

function detectWidth()
{

	if((jQuery("#custommenu").height()>40)&&(jQuery(window).width()>770))
	{
		removeNavCell(currentTarget);
	}

	if((jQuery(window).width()>1224)&&((jQuery("#nav>ol.nav-primary li").not("#nav>ol.nav-primary li ul li").length)<8))
	{
		addNavCell(currentTarget);
	}
}
function removeNavCell(target)
{
	jQuery("#popup19 div.itemMenu").prepend('<a class="itemMenuName level1" href="'+jQuery("#custommenu>div:nth-last-child("+target+") a.level0").attr('rel')+'"><span>'+jQuery("#custommenu>div:nth-last-child("+target+")>div>a.level0 span").text()+'</span></a>');
	jQuery("#custommenu>div:nth-last-child("+target+")").css('display','none');
	currentTarget ++;
}

/* === End Nav Menu functions === */



// ----- Keep At End of Script -----
var $j=jQuery.noConflict();
// ----- Keep At End of Script -----
