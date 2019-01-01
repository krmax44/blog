const Hexo = require('hexo');
const hexo = new Hexo(process.cwd(), {});

async function generate () {
	try {
		await hexo.init();
		await hexo.call('generate');
		hexo.exit();
	}
	catch (e) {
		console.error('Could not generate site', e);
	}
}

generate();