// ==UserScript==
// @name         Grepolis Scroll+
// @author       Aktyn
// @description  Scroll the forum of the alliance using arrow keys
// @updateURL    http://dronidev.pl/grepolisScroll/grepolisScroll+.user.js
// @downloadURL	 http://dronidev.pl/grepolisScroll/grepolisScroll+.user.js
// @include      http://*.grepolis.com/game/*
// @include      https://*.grepolis.com/game/*
// @exclude      view-source://*
// @exclude      https://classic.grepolis.com/game/*
// @grant        none
// @version      0.1.0
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
}, false);
})();