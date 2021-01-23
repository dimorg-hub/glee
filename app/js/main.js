$(function () {
	$('.smart__inner').slick({
		dots: true,
		arrows: false
	});

	var mixer1 = mixitup('.products__list', {
		selectors: {
			control: '.controls__btn'
		}
	});
	var mixer2 = mixitup('.desing__list', {
		selectors: {
			control: '.controls-btn2'
		}
	});

	$('.partners__inner').slick({
		arrows: false
	});

});


//
