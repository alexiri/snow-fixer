// ==UserScript==
// @name         Service Now Fixer
// @namespace    http://cern.ch
// @version      1.3
// @description  Fixes SNOW's annoying new interface
// @match        https://cern.service-now.com/*
// @copyright    2015+, Alex Iribarren
// @downloadURL  https://raw.githubusercontent.com/alexiri/snow-fixer/master/snow-fixer.user.js
// @require 	 https://code.jquery.com/jquery-latest.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle('@import url(//fonts.googleapis.com/css?family=Coming+Soon);');
    GM_addStyle('.navbar-brand { font-family: "Coming Soon"; }');

    GM_addStyle('div.container { width: 99% !important; }');
    
    waitForKeyElements('a[ng-if$=openTool]', function() {
        // Don't open 'Tool view' in another tab
        $('a[ng-if$=openTool]').attr('target', '_self');
    });
})();
