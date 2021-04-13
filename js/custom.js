
'use strict';

(function ($) {

    /*----------------------------------------------------------------*/
/*Preeloader Starts*/
/*----------------------------------------------------------------*/
 
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preeloader").delay(200).fadeOut("slow");
    });
})(jQuery);    

$(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });



			$('.owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                responsiveClass: true,
                nav:false,
                responsive: {
                  0: {
                    items: 1,
                    nav: true
                  },
                  600: {
                    items: 2,
                    nav: false
                  },
                  1000: {
                    items: 3,
                    nav: true,
                    loop: false,
                    margin: 20
                  }
                }

              })

		const second = 1000,
      		minute = second * 60,
      		hour = minute * 60,
     		day = hour * 24;

		let countDown = new Date('feb 29, 2020 00:00:00').getTime(),
    	x = setInterval(function() {

      		let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
      
      //do something later when date is reached
      //if (distance < 0) {
      //  clearInterval(x);
      //  'IT'S MY BIRTHDAY!;
      //}

    }, second)
			