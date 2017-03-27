window.onload = function() {
	document.documentElement.style.fontSize = document.documentElement.clientWidth / 320 * 20 + 'px';
	window.onresize = function() {
		document.documentElement.style.fontSize = document.documentElement.clientWidth / 320 * 20 + 'px';
	};
};