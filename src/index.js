CONFIG.debug.hooks = false;

function onReady() {
	console.log('Hej');
}
Hooks.on('ready', onReady);