// ==UserScript==
// @name         Grepolis Scroll+
// @author       Aktyn & Droni
// @description  Scroll the forum of the alliance using arrow keys
// @updateURL    https://github.com/xDroni/grepolisScroll/raw/master/grepolisScroll%2B.user.js
// @downloadURL	 https://github.com/xDroni/grepolisScroll/raw/master/grepolisScroll%2B.user.js
// @include      http://*.grepolis.com/game/*
// @include      https://*.grepolis.com/game/*
// @exclude      view-source://*
// @exclude      https://classic.grepolis.com/game/*
// @grant        none
// @version      0.1.2
// @copyright    2018+
// @license      MIT License
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('keydown', (e) => {
	let el = document.getElementById('postlist');
	if(!el)	return;
	if(e.keyCode === 40)///arrow down
		el.scrollBy(0, 120);
	else if(e.keyCode === 38)///arrow up
		el.scrollBy(0, -120);
	else if(e.keyCode === 34)///page down
		el.scrollBy(0, 340);
	else if(e.keyCode === 33)///page up
		el.scrollBy(0, -340);
}, false);
})();
