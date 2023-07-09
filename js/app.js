document.querySelectorAll('.slider').forEach((n, i) => {
	window[`slider${ i + 1 }`] = new Swiper (n, {
		freeMode: true,
		centeredSlides: true,
		direction: 'vertical',
		mousewheel: true,
		slidesPerView: 1.75,
		slidesOffsetBefore: -125
	});
});

bindSwipers(slider1, slider2, slider3, slider4);

document.querySelectorAll('.slider__item').forEach(item => {
	item.addEventListener('click', event => {
		if (item.classList.toggle('opened')) {
			document.addEventListener('click', (e) => {
				const withinBoundaries = e.composedPath().includes(item);
				if (!withinBoundaries) {
					item.classList.remove('opened');
				}
			})
		}
	})
});