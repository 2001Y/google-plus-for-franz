// ==UserScript==
// @name SimpleDesign for Google+
// @namespace https://2001y.blogspot.com
// @description Google+がシンプルなデザインになり、小さなウィンドウサイズでも快適になります。
// @author 2001Y
// @version 2.0
// @encoding utf-8
// @icon https://raw.github.com/2001Y/google-plus-for-franz/master/icon.png
// @updateURL https://raw.github.com/2001Y/google-plus-for-franz/master/google-plus-for-franz.user.js
// @downloadURL https://raw.github.com/2001Y/google-plus-for-franz/master/google-plus-for-franz.user.js
// @include https://plus.google.com/*
// @include http://plus.google.com/*
// ==/UserScript==

(function () {
  let baseStyle = document.createElement('link');
  baseStyle.href = "//rawgit.com/2001Y/google-plus-for-franz/master/base-style.css";
  baseStyle.rel = 'stylesheet';
  document.getElementsByTagName('head').item(0).appendChild(baseStyle);
  
  let setting = document.createElement('a');
  setting.classList.add("M9kDrd");
  setting.classList.add("original-setting");
  setting.innerHTML = '<div class="Hj0nzc"><img src="//rawgit.com/2001Y/google-plus-for-franz/master/icon.svg"></div><div class="CjySve">Franz設定</div>';
  document.getElementsByClassName('PvjVhe')[0].appendChild(setting);
  
  let originalWindow = document.createElement('div');
  originalWindow.classList.add('window');
  originalWindow.innerHTML = '<h1>Google+ for Franz</h1><h2>設定</h2><form id="FranzSetting"><label for="check1">シンプルテーマを使用</label><input type="checkbox" class="GoogleSwitch" id="check1" checked/><br><label for="check2">暗いテーマを使用</label><input type="checkbox" class="GoogleSwitch" id="check2"/></form><h2>バージョン</h2><p>Google+ for Franz：<br>DarkThema for Google+：</p>';
  document.body.appendChild(originalWindow);
  let Blur = document.createElement('div');
  Blur.classList.add('blur');
  document.body.appendChild(Blur);
  
  let GoogleSwitch = document.querySelectorAll(".GoogleSwitch");
  for (var i = 0, len = GoogleSwitch.length; i < len; ++i) {
    GoogleSwitch[i].dataset.num = i;
    GoogleSwitch[i].addEventListener("click", settingSave);
  }
  function settingSave() {
    if (document.getElementById("check1").checked == true) {
      let Style = document.createElement('link');
      Style.href = "//rawgit.com/2001Y/google-plus-for-franz/master/style.css";
      Style.rel = 'stylesheet';
      Style.classList.add('FranzStyle');
      document.getElementsByTagName('head').item(0).appendChild(Style);
    } else {
      document.getElementsByClassName('FranzStyle')[0].parentNode.removeChild(document.getElementsByClassName('FranzStyle')[0]);
    }
    if (document.getElementById("check2").checked == true) {

    } else {
      
    }
  }
  settingSave();
  document.getElementsByClassName('original-setting')[0].onclick = function () {
    document.getElementsByClassName('window')[0].classList.add("open");
    document.getElementsByClassName('blur')[0].classList.add("open");
  };
  document.getElementsByClassName('blur')[0].onclick = function () {
    document.getElementsByClassName('window')[0].classList.remove("open");
    document.getElementsByClassName('blur')[0].classList.remove("open");
  };
}());