var menuMouseEnterHandler = function(event) {

	if(event.type == 'mouseenter') { // user hovers or clicks a menu
			if($(this).hasClass('dropdown')) { // cursor enters a dropdown menu

				let header = $('header'),
					dropdownMenu = $(this).find('.dropdown-menu');

					dropdownMenu.css('top', dropdownMenu.parent().offset().top + dropdownMenu.parent().outerHeight() - 5 +'px').show();

					$('#hover-border').stop().css({
						left: $(this).offset().left - 73,
						visibility: 'hidden'
					});
			} else { // custom enters a non-dropdown menu

				$('#hover-border').css('visibility', 'visible').stop().animate({
						left: $(this).offset().left - 73
					},
					1000,
					function() {
						setTimeout(function() {
							if(!this.is(':animated')) {
								this.animate({
									visibility: 'hidden'
								}, 1000, function() {
									$(this).css('visibility', 'hidden');
								});
							}
						}.bind($(this)), 3000);
					}
				);

			}
		} else if((event.type == 'mouseleave') &&
			event.relatedTarget != null &&
			!event.relatedTarget.classList.contains('menu') &&
			!event.relatedTarget.classList.contains('dropdown-menu') &&
			(event.relatedTarget.tagName != 'HEADER')) { // cursor leaves a dropdown menu

			$(this).find('.dropdown-menu').hide();

		}

	},
	searchIconClickHandler = function() {
		'use strict';
		var inputWidth = $(this).siblings('input').outerWidth(),
			inputHeight = $(this).siblings('input').outerHeight();
		$(this).parent().addClass('searching')
		.find('input').css({ width: 0, height: 0 }).animate({
			width: inputWidth,
			height: inputHeight
		})
		.parent().find("[title='Close Search']").one('click', function() {
			$(this).parent().removeClass('searching');
		});
	};

$(function() {
	$('#main-menu > .menu').on('mouseenter mouseleave', menuMouseEnterHandler);
	$("#search-bar > span[title='Search Page']").on('click', searchIconClickHandler);
});