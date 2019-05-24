export default function elementPosition(el) {
	const computedStyle = window.getComputedStyle(el);
	const boundingRect = el.getBoundingClientRect();
	const { width, height } = boundingRect;
	const top =
		el.offsetTop - parseInt(computedStyle.getPropertyValue('margin-top'), 10);

	const left =
		boundingRect.left -
		parseInt(computedStyle.getPropertyValue('margin-left'), 10);

	return { top, left, width, height };
}
