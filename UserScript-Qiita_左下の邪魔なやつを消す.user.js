// ==UserScript==
// @name         Qiita 左下の邪魔なやつを消す
// @namespace    http://tampermonkey.net/
// @version      2024-07-18
// @description  try to take over the world!
// @author       You
// @match        https://qiita.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=qiita.com
// @grant        none
// @run-at document-idle
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector(".mainWrapper").childNodes[6].childNodes[0].style.display = "none";
})();