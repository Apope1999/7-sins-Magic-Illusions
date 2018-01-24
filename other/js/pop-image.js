var overlay,
	popup;

$(function() {
	overlay = $('#overlay'),
	popup = $('#image-popup');

		$('figure.image img').click(function(event) {

			if(!overlay.hasClass('visible') && window.innerWidth > 991) {

				event.preventDefault();

				$('body').on('click keydown', function(event) {

					if((event.type == 'click' && event.target.tagName != 'IMG' && event.target.href == null)
						|| (event.type == 'keydown' && event.keyCode == 27)) {

						overlay.removeClass('visible');
						popup.removeClass('visible');


						setTimeout(function() {

							$('body').unbind('click keydown');

						}, 100);

					}

					return true;

				});

				overlay.addClass('visible');
				popup.addClass('visible');
				popup.find('a').attr('href', $(this).attr('src'));
				popup.find('a').attr('title', $(this).attr('alt'));
				popup.find('img').attr('src', $(this).attr('src'));
				popup.find('img').attr('alt', $(this).attr('alt'));
				popup.find('span').html($(this).attr('alt'));

				return false;
			} else {
				console.log("Window's width smaller than 991px, image popup deactivated.");
			}

			return true;
		});


});
