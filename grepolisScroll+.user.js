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
// @version      0.1.3
// @copyright    2018+
// @license      MIT License
// ==/UserScript==

(function() {
    'use strict';

    var postlist;

    function useScroll(val) {
    	if((postlist = document.getElementById('postlist')) === null) return;

    	//nie scrolluj podczas pisania postu
    	if(document.activeElement === document.getElementById('forum_post_textarea')) return;

    	if(val === 'bottom')
    		postlist.scrollBy(0, postlist.scrollHeight);
    	else if(val === 'top')
    		postlist.scrollBy(0, -postlist.scrollHeight);
    	else
    		postlist.scrollBy(0, val);
    }

    window.addEventListener('keydown', (e) => {
		switch(e.keyCode) {
			case 40: return useScroll(120);		//arrow down
			case 38: return useScroll(-120);	//arrow up
			case 34: return useScroll(340);		//page down
			case 33: return useScroll(-340);	//page up
			case 35: return useScroll('bottom');//end
			case 36: return useScroll('top');	//home
		}
	}, false);
})();
