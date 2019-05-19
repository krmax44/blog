import anime from 'animejs';
import elementPosition from './element-position';

export function scaleIn(targets) {
	return anime({
		targets,
		scale: 1,
		translateY: 0,
		duration: 300,
		delay: anime.stagger(100),
		easing: 'easeInCubic'
	}).finished;
}

export function scaleOut(targets) {
	return anime({
		targets,
		scale: 0,
		translateY: 200,
		duration: 300,
		delay: anime.stagger(100),
		easing: 'easeInCubic'
	}).finished;
}

export function fadeIn(targets) {
	return anime({
		targets,
		opacity: [0, 1],
		duration: 200,
		easing: 'linear'
	}).finished;
}

export function fadeOut(targets) {
	return anime({
		targets,
		opacity: [1, 0],
		duration: 200,
		easing: 'linear'
	}).finished;
}

export function moveToCoords(targets, to = {}) {
	return anime({
		targets,
		...to,
		easing: 'easeInOutCubic',
		duration: 400
	}).finished;
}

export function moveToElement(targets, element) {
	return moveToCoords(targets, elementPosition(element));
}

export function setScaleZero(target) {
	target.style.transform = 'scale(0) translateY(200px)';
}

export function setScaleOne(target) {
	target.style.transform = 'scale(1) translateY(0)';
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
