/*
Template: Kalla - Restaurant HTML Template
Author: Peacefulqode.com
Version: 1.0
Design and Developed by: Peaceful Qode

*/

/*================================================
[  Table of contents  ]
==================================================

==> Page Loader
==> Search Button
==> Accordion
==> Sidebar Toggle
==> Sticky Header
==> Owl Carousel
==> Progressbar
==> Form Validation
==> Back To Top
==> Isotope
==> before-after
==> counter
==> wow
==> Video

==================================================
[ End table content ]
================================================*/



(function (jQuery) {
   "use strict";
   jQuery(window).on('load', function (e) {


      /*==================================================
      [ Page Loader ]
      ==================================================*/
      jQuery("#part-loading").fadeOut();
      jQuery("#part-loading").delay(0).fadeOut("slow");

      var Scrollbar = window.Scrollbar;


      /*==================================================
      [ Search Button ]
      ==================================================*/
      jQuery('#part-seacrh-btn').on('click', function () {
         jQuery('.part-search-form').slideToggle();
         jQuery('.part-search-form').toggleClass('part-form-show');
         if (jQuery('.part-search-form').hasClass("part-form-show")) {
            jQuery(this).html('<i class="ti-close"></i>');
         } else {
            jQuery(this).html('<i class="ti-search"></i>');
         }


      });


      /*==================================================
      [ Accordion ]
      ==================================================*/
      jQuery('.part-accordion-block .part-accordion-box .part-accordion-details').hide();
      jQuery('.part-accordion-block .part-accordion-box:first').addClass('part-active').children().slideDown('slow');
      jQuery('.part-accordion-block .part-accordion-box').on("click", function () {
         if (jQuery(this).children('div.part-accordion-details').is(':hidden')) {
            jQuery('.part-accordion-block .part-accordion-box').removeClass('part-active').children('div.part-accordion-details').slideUp('slow');
            jQuery(this).toggleClass('part-active').children('div.part-accordion-details').slideDown('slow');
         }
      });





      /*==================================================
      [ Sticky Header ]
      ==================================================*/
      var view_width = jQuery(window).width();
      if (!jQuery('header').hasClass('part-header-default') && view_width >= 1023) {
         var height = jQuery('header').height();
         jQuery('.part-breadcrumb').css('padding-top', height * 1.3);
      }
      if (jQuery('header').hasClass('part-header-default')) {
         jQuery(window).scroll(function () {
            var scrollTop = jQuery(window).scrollTop();
            if (scrollTop > 300) {
               jQuery('.part-bottom-header').addClass('part-header-sticky animated fadeInDown animate__faster');
            } else {
               jQuery('.part-bottom-header').removeClass('part-header-sticky animated fadeInDown animate__faster');
            }
         });
      }
      if (jQuery('header').hasClass('part-has-sticky')) {
         jQuery(window).scroll(function () {
            var scrollTop = jQuery(window).scrollTop();
            if (scrollTop > 300) {
               jQuery('header').addClass('part-header-sticky animated fadeInDown animate__faster');
            } else {
               jQuery('header').removeClass('part-header-sticky animated fadeInDown animate__faster');
            }
         });
      }


      /*==================================================
      [ Owl Carousel ]
      ==================================================*/
      jQuery('.owl-carousel').each(function () {
         var app_slider = jQuery(this);
         app_slider.owlCarousel({
            items: app_slider.data("desk_num"),
            loop: app_slider.data("loop"),
            margin: app_slider.data("margin"),
            nav: app_slider.data("nav"),
            dots: app_slider.data("dots"),
            autoplay: app_slider.data("autoplay"),
            autoplayTimeout: app_slider.data("autoplay-timeout"),
            navText: ["<i class='ion-ios-arrow-back'></i><span></span>", "<span></span><i class='ion-ios-arrow-forward'></i>"],
            responsiveClass: true,
            // center: true,
            responsive: {
               // breakpoint from 0 up
               0: {
                  items: app_slider.data("mob_sm"),
                  nav: false
               },
               // breakpoint from 480 up
               480: {
                  items: app_slider.data("mob_num"),
                  nav: false
               },
               // breakpoint from 786 up
               786: {
                  items: app_slider.data("tab_num")
               },
               // breakpoint from 1023 up
               1024: {
                  items: app_slider.data("lap_num")
               },
               1199: {
                  items: app_slider.data("desk_num")
               }
            }
         });
      });

      /*==================================================
      [ Progressbar ]
      ==================================================*/

      jQuery('.part-progress-bar > span').each(function () {
         var app_slider = jQuery('.part-progressbar-box-1');
         jQuery(this).progressBar({
            shadow: false,
            animation: true,
            height: app_slider.data('h'),
            percentage: false,
            border: false,
            animateTarget: true,
         });
      });


   });

   /*==================================================
   [ Back To Top ]
   ==================================================*/
   jQuery('#back-to-top').fadeOut();
   jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > 250) {
         jQuery('#back-to-top').fadeIn(1400);
      } else {
         jQuery('#back-to-top').fadeOut(400);
      }
   });
   jQuery('#top').on('click', function () {
      jQuery('top').tooltip('hide');
      jQuery('body,html').animate({
         scrollTop: 0
      }, 800);
      return false;
   });


   /*==================================================
   [ Isotope ]
   ==================================================*/
   if ($('#beer-slider').length > 0) {


      /*==================================================
      [ before-after ]
      ==================================================*/
      new BeerSlider(document.getElementById('slider'));
      $.fn.BeerSlider = function (options) {
         options = options || {};
         return this.each(function () {
            new BeerSlider(this, options);
         });
      };
      $('.beer-slider').BeerSlider({
         start: 50
      });

   }




   if ($('.part-masonry').length > 0) {
      // Do something if class exists


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
         jQuery('.part-masonry').isotope({
            filter: filterValue
         });
         jQuery('.part-grid').isotope({
            filter: filterValue
         });
         jQuery('.part-filter-button-group .part-filter-btn').removeClass('active');
         jQuery(this).addClass('active');


      });

      var initial_items = 6;
      var next_items = 3;

      if (jQuery('.part-masonry').length > 0) {
         var initial_items = jQuery('.part-masonry').data('initial_items');
         var next_items = jQuery('.part-masonry').data('next_items');
      }

      if (jQuery('.part-grid').length > 0) {
         var initial_items = jQuery('.part-grid').data('initial_items');
         var next_items = jQuery('.part-grid').data('next_items');
      }

   }

   /*==================================================
   [ counter ]
   ==================================================*/

   jQuery('.timer').countTo();


   /*==================================================
   [ Video ]
   ==================================================*/
   $(document).ready(function () {
      $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
         disableOn: 700,
         type: 'iframe',
         mainClass: 'mfp-fade',
         removalDelay: 160,
         preloader: false,
         fixedContentPos: false
      });
   });

})(jQuery);