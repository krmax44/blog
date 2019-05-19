import {
	scaleOut,
	scaleIn,
	fadeOut,
	fadeIn,
	setScaleZero,
	bodyScroll
} from './animation-utils';

export default {
	css: false,
	beforeEnter(el) {
		const container = el.querySelector('.page-container');
		setScaleZero(container);
		container.firstChild.style.opacity = '0';
	},
	async enter(el, done) {
		const container = el.querySelector('.page-container');
		await fadeIn(container.firstChild);
		scaleIn(container).then(done);
	},
	afterEnter() {
		bodyScroll('auto');
	},
	beforeLeave() {
		bodyScroll('scroll');
	},
	async leave(el, done) {
		const container = el.querySelector('.page-container');
		await fadeOut(container.firstChild);
		scaleOut(container).then(done);
	},
	afterLeave() {
		bodyScroll('auto');
	}
};
