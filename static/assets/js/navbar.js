"use strict";

(function ($) {
  jQuery(document).ready(function () {

    // change navbar style on scroll
    // ==================================================
    // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
    // $.onscroll = function() {scrollFunction()};
    $(document).scroll(function () {
		if(location.pathname == "/"){
		  if ($(document).scrollTop() > 40) {
			$('#top-navbar').removeClass('initial-navbar');
			$('#top-navbar').addClass('final-navbar shadow');

			$('#navbar-toggler').removeClass('navbar-dark');
			$('#navbar-toggler').addClass('navbar-light');

			// get the main logo from hidden img tag
			let mainLogo = document.getElementById("main-logo").getAttribute("src");
			$('#logo').attr("src", mainLogo);
		  } else {
			$('#top-navbar').removeClass('final-navbar shadow');
			$('#top-navbar').addClass('initial-navbar');

			$('#navbar-toggler').removeClass('navbar-light');
			$('#navbar-toggler').addClass('navbar-dark');

			// get the inverted logo from hidden img tag
			let invertedLogo = document.getElementById("inverted-logo").getAttribute("src");
			$('#logo').attr("src", invertedLogo);
		  }
		}
    });
  });

})(jQuery);
