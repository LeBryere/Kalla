jQuery(function (jQuery) {
	"use strict";

	jQuery(window).on('load', function (e) {
		jQuery('.part-masonry').isotope({
			itemSelector: '.part-masonry-item',
			masonry: {
				columnWidth: '.grid-sizer',
				gutter: 0
			}

		});

		jQuery('.part-grid').isotope({
			itemSelector: '.part-grid-item',

		});

		jQuery('.part-filter-button-group').on('click', '.part-filter-btn', function () {

			var filterValue = jQuery(this).attr('data-filter');
			jQuery('.part-masonry').isotope({ filter: filterValue });
			jQuery('.part-grid').isotope({ filter: filterValue });
			jQuery('.part-filter-button-group .part-filter-btn').removeClass('active');
			jQuery(this).addClass('active');


			updateFilterCounts();

		});

		var initial_items = 5;
		var next_items = 3;

		if (jQuery('.part-masonry').length > 0) {
			var initial_items = jQuery('.part-masonry').data('initial_items');
			var next_items = jQuery('.part-masonry').data('next_items');
		}

		if (jQuery('.part-grid').length > 0) {
			var initial_items = jQuery('.part-grid').data('initial_items');
			var next_items = jQuery('.part-grid').data('next_items');
		}

		function showNextItems(pagination) {
			var itemsMax = jQuery('.visible_item').length;
			var itemsCount = 0;
			jQuery('.visible_item').each(function () {
				if (itemsCount < pagination) {
					jQuery(this).removeClass('visible_item');
					itemsCount++;
				}
			});
			if (itemsCount >= itemsMax) {
				jQuery('#showMore').hide();
			}

			if (jQuery('.part-masonry').length > 0) {
				jQuery('.part-masonry').isotope('layout');
			}

			if (jQuery('.part-grid').length > 0) {
				jQuery('.part-grid').isotope('layout');
			}



		}
		// function that hides items when page is loaded
		function hideItems(pagination) {
			var itemsMax = jQuery('.part-filter-items').length;

			var itemsCount = 0;
			jQuery('.part-filter-items').each(function () {
				if (itemsCount >= pagination) {
					jQuery(this).addClass('visible_item');
				}
				itemsCount++;
			});
			if (itemsCount < itemsMax || initial_items >= itemsMax) {
				jQuery('#showMore').hide();
			}
			if (jQuery('.part-masonry').length > 0) {
				jQuery('.part-masonry').isotope('layout');
			}

			if (jQuery('.part-grid').length > 0) {
				jQuery('.part-grid').isotope('layout');
			}
		}
		jQuery('#showMore').on('click', function (e) {
			e.preventDefault();
			showNextItems(next_items);
		});
		hideItems(initial_items);

		function updateFilterCounts() {
			// get filtered item elements
			if (jQuery('.part-masonry').length > 0) {
				var itemElems = jQuery('.part-masonry').isotope('getFilteredItemElements');
			}
			if (jQuery('.part-grid').length > 0) {
				var itemElems = jQuery('.part-grid').isotope('getFilteredItemElements');
			}


			var count_items = jQuery(itemElems).length;


			if (count_items > initial_items) {
				jQuery('#showMore').show();
			} else {
				jQuery('#showMore').hide();
			}
			if (jQuery('.part-filter-items').hasClass('visible_item')) {
				jQuery('.part-filter-items').removeClass('visible_item');
			}
			var index = 0;

			jQuery(itemElems).each(function () {
				if (index >= initial_items) {
					jQuery(this).addClass('visible_item');
				}
				index++;
			});
			if (jQuery('.part-masonry').length > 0) {
				jQuery('.part-masonry').isotope('layout');
			}

			if (jQuery('.part-grid').length > 0) {
				jQuery('.part-grid').isotope('layout');
			}
		}
	});
});