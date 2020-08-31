(() => {
	class Carousel {
		constructor(carousel, leftControl, rightControl) {
			this.carousel = carousel;
			this.scrollAmount = 240;
			this.toLeft = this.toLeft.bind(this);
			this.toRight = this.toRight.bind(this);
			leftControl.addEventListener('click', this.toLeft);
			rightControl.addEventListener('click', this.toRight);
		}
		toRight() {
			this.carousel.scrollLeft += this.scrollAmount;
		}
		toLeft() {
			this.carousel.scrollLeft -= this.scrollAmount;
		}
	}
	const carouselList = document.querySelectorAll('.carousel'),
		slideBtnNextList = document.querySelectorAll('.slide-next'),
		slideBtnPrevList = document.querySelectorAll('.slide-prev');
	new Carousel(carouselList[0], slideBtnPrevList[0], slideBtnNextList[0]);
	new Carousel(carouselList[1], slideBtnPrevList[1], slideBtnNextList[1]);
	new Carousel(carouselList[2], slideBtnPrevList[2], slideBtnNextList[2]);
})();
