// ==UserScript==
// @name         Service Now Fixer
// @namespace    http://cern.ch
// @version      1.1
// @description  Fixes SNOW's annoying new interface
// @match        https://cern.service-now.com/*
// @copyright    2015+, Alex Iribarren
// @downloadURL  https://raw.githubusercontent.com/alexiri/snow-fixer/master/snow-fixer.user.js
// @require 	 http://code.jquery.com/jquery-latest.min.js
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle('div.container { width: 99% !important; }');
})();
