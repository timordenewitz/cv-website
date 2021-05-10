window.addEventListener('sempliceTransitionsDone', function () {
	moveFooter();
})

window.addEventListener('load', function () {
	moveFooter();
})

function moveFooter() {
	document.querySelector('.transition-wrap').appendChild(document.querySelector('.footer'));
	document.querySelector('.footer').className += " movedFooter";
}

// Move the menu items around
jQuery('.menu-right > .menu-item').eq(0).clone().appendTo('.menu-left .menu')
jQuery('.menu-right > .menu-item').eq(1).clone().appendTo('.menu-right .menu')
jQuery('.menu-right > .menu-item').eq(2).clone().appendTo('.menu-right .menu')


// Mobile Menu
jQuery('.overlay-nav .container .menu-item-has-children').children('a').on('click', function (e) {
	const subMenu = jQuery(this).parent().find('.sub-menu');
	if (subMenu.hasClass('open')) {
		return;
	}
	e.preventDefault();
	e.stopImmediatePropagation()
	subMenu.parent().parent().css('margin-top', subMenu.children().length * 55)
	jQuery('.open').removeClass('open');
	subMenu.addClass('open');
});