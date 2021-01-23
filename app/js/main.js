$(function () {
	$('.smart__inner').slick({
		dots: true,
		arrows: false
	});
	// var mixer = mixitup('.products__list');

	var mixer1 = mixitup('.controls__list1', {
		controls: {
			scope: 'local'
		},
		selectors: {
			control: '.filter-1'
		}
	});
	var mixer2 = mixitup('.controls__list2', {
		controls: {
			scope: 'local'
		},
		selectors: {
			control: '.filter-2'
		}
	});

	$('.partners__inner').slick({
		arrows: false
	});

});


// .products__list
