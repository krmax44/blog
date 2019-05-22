import { fadeOut, fadeIn, bodyScroll, setOpacityZero } from './animation-utils';

export default function(selector) {
	return {
		css: false,
		beforeEnter(el) {
			const container = el.querySelector(selector);
			setOpacityZero(container.firstChild);
		},
		enter(el, done) {
			const container = el.querySelector(selector);
			fadeIn(container.firstChild).then(done);
		},
		afterEnter() {
			bodyScroll('auto');
		},
		beforeLeave() {
			bodyScroll('scroll');
		},
		leave(el, done) {
			const container = el.querySelector(selector);
			fadeOut(container.firstChild).then(done);
		},
		afterLeave() {
			bodyScroll('auto');
		}
	};
}
