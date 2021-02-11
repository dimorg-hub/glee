$(document).ready(function () {
	$('.footer__services, .footer__account').on("click", function () {
		$('.footer__services, .footer__account').removeClass('active');
		$(this).addClass("active");
	});
});

$(function () {
	if (window.innerWidth <= 1200) {
		$('.nav-user__link--menu,.header__menu a').on("click", function () {
			$('.nav-user__link--menu,.header__list').toggleClass('active');
		})
	}

	$('.smart__inner').slick({
		dots: true,
		arrows: false
	});

	$('.partners__inner').slick({
		arrows: false,
		slidesToShow: 5,
		slidesToScroll: 5,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.design__video').fancybox();

	var mixer1 = mixitup('.products__list', {
		selectors: {
			control: '.controls__btn'
		}
	});
	var mixer2 = mixitup('.design__list', {
		selectors: {
			control: '.controls__btn--2'
		}
	});
});


