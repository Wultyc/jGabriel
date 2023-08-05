// counter
const counter = document.querySelectorAll('.counter-value');
const speed = 2500; // The lower the slower

counter.forEach(counter_value => {
	const updateCount = () => {
		const target = +counter_value.getAttribute('data-target');
		const count = +counter_value.innerText;

		// Lower inc to slow and higher to slow
        var inc = target / speed;

        if(inc < 1){
            inc = 1;
        }
        
		// Check if target is reached
		if (count < target) {
            // Add inc to count and output in counter_value
			counter_value.innerText = (count + inc).toFixed(0);
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter_value.innerText = target;
		}
	};

	updateCount();
});



// var a = 0;
// $(window).scroll(function() {
//     var oTop = $('#counter').offset().top - window.innerHeight;
//     if (a == 0 && $(window).scrollTop() > oTop) {
//         $('.counter-value').each(function() {
//             var $this = $(this),
//                 countTo = $this.attr('data-target');
//             $({
//                 countNum: $this.text()
//             }).animate({
//                     countNum: countTo
//                 },

//                 {
//                     duration: 2000,
//                     easing: 'swing',
//                     step: function() {
//                         $this.text(Math.floor(this.countNum));
//                     },
//                     complete: function() {
//                         $this.text(this.countNum);
//                         //alert('finished');
//                     }

//                 });
//         });
//         a = 1;
//     }
// });