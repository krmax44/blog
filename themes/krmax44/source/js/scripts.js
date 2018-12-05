function copy(text) {
	let selection = window.getSelection();
	let range = document.createRange();	
	let node = document.createElement('div');

	node.textContent = text;
	node.setAttribute('style', [
		'position: absolute',
		'top: -100px',
		'width: 0',
		'height: 0'
	].join(';'));
	document.body.appendChild(node);

	range.selectNode(node);
	selection.removeAllRanges();
	selection.addRange(range);

	try {
		document.execCommand('copy');
	}
	catch (err) {
		console.log('unable to copy.');
	}

	document.body.removeChild(node);
	selection.removeAllRanges();
}

const copyBtn = document.querySelector('.copy-url');

if (copyBtn) {
	copyBtn.addEventListener('click', () => {
		copy(location.href);
		copyBtn.classList.add('copied');
	});
}