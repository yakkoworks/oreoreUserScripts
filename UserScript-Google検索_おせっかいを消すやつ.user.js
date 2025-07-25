// ==UserScript==
// @name         Google検索のおせっかいを消すやつ
// @namespace    http://tampermonkey.net/
// @version      2025-07-25
// @description  try to take over the world!
// @author       You
// @match        https://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var question = document.getElementsByClassName('ouy7Mc');
for(let i=0; i< question.length; i++){
    question[i].style.display = "none";
}
var ai = document.getElementsByClassName('YzCcne');
for(let i=0; i< ai.length; i++){
    ai[i].style.display = "none";
}
    // Your code here...
})();