import anime from 'animejs';
import elementPosition from './element-position';

const easeIn = 'cubicBezier(0.0, 0.0, 0.2, 1)';
const easeOut = 'cubicBezier(0.4, 0.0, 1, 1)';
const easeStandard = 'cubicBezier(0.4, 0.0, 0.2, 1)';

export function scaleIn(targets) {
	return anime({
		targets,
		scaleY: 1,
		duration: 250,
		opacity: [0, 1],
		delay: anime.stagger(100),
		easing: easeIn
	}).finished;
}

export function scaleOut(targets) {
	return anime({
		targets,
		scaleY: 0,
		duration: 200,
		opacity: [1, 0],
		delay: anime.stagger(100),
		easing: easeOut
	}).finished;
}

export function fadeIn(targets) {
	return anime({
		targets,
		opacity: [0, 1],
		duration: 150,
		easing: 'linear'
	}).finished;
}

export function fadeOut(targets) {
	return anime({
		targets,
		opacity: [1, 0],
		duration: 150,
		easing: 'linear'
	}).finished;
}

export function moveToCoords(targets, to = {}) {
	return anime({
		targets,
		...to,
		easing: easeStandard,
		duration: 400
	}).finished;
}

export function moveToElement(targets, element, collapse) {
	return moveToCoords(targets, elementPosition(element), collapse);
}

export function setScaleZero(target) {
	target.style.transform = 'scaleY(0)';
}

export function setScaleOne(target) {
	target.style.transform = 'scaleY(1)';
}

export function setOpacityZero(target) {
	target.style.opacity = '0';
}

export function setOpacityOne(target) {
	target.style.opacity = '1';
}

export function setPosition(target, position = {}) {
	target.style.position = 'absolute';
	target.style.zIndex = '9';

	for (const item of ['top', 'left', 'width', 'height']) {
		if (position[item]) {
			target.style[item] = `${position[item]}px`;
		}
	}
}

export function bodyScroll(to = 'auto') {
	document.body.style.overflowY = to;
}
