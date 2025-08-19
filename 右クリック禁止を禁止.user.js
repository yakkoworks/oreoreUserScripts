// ==UserScript==
// @name         右クリック禁止を禁止
// @namespace    http://tampermonkey.net/
// @version      2023-12-23
// @description  try to take over the world!
// @author       You
// @match        https://app.nizikano-2d.jp/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

var center = document.querySelector("iframe#center");
center.addEventListener('contextmenu', function(e) {
alert(e)
}, false);
})();