$(document).ready(function () {
	$('.footer__services, .footer__account').on("click", function () {
		if ($(this).hasClass('active')) {
			$(this).removeClass("active");
		} else {
			$(this).addClass("active");
		}
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
		arrows: false
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


