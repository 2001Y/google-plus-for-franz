// ==UserScript==
// @name SimpleDesign for Google+
// @namespace https://2001y.blogspot.com
// @description Google+がシンプルなデザインになり、小さなウィンドウサイズでも快適になります。
// @author 2001Y
// @version 1.0
// @encoding utf-8
// @icon https://raw.github.com/2001Y/google-plus-for-franz/master/icon.png
// @updateURL https://raw.github.com/2001Y/google-plus-for-franz/master/google-plus-for-franz.user.js
// @downloadURL https://raw.github.com/2001Y/google-plus-for-franz/master/google-plus-for-franz.user.js
// @include https://plus.google.com/*
// @include http://plus.google.com/*
// ==/UserScript==

let link = document.createElement('link');
link.href = "//rawgit.com/2001Y/google-plus-for-franz/master/style.css";
link.rel = 'stylesheet';
document.getElementsByTagName('head').item(0).appendChild(link);