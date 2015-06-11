// ==UserScript==
// @name       Service Now Fixer
// @namespace  http://cern.ch
// @version    1.0
// @description  Fixes SNOW's annoying new interface
// @match      https://cern.service-now.com/*
// @copyright  2015+, Alex Iribarren
// @downloadURL https://raw.githubusercontent.com/alexiri/snow-fixer/master/snow-fixer.user.js
// @require http://code.jquery.com/jquery-latest.min.js
// ==/UserScript==

(function() {

var css = " \
 HTML[data-doctype=true] TD.vt { padding: 0px !important } \
 body { line-height: 1 !important } \
 .table > thead > tr > th, .table > thead > tr > td, .table > tbody > tr > th, .table > tbody > tr > td, .table > tfoot > tr > th, .table > tfoot > tr > td { line-height: 1 !important } \
";

 GM_addStyle(css);
})();
