// banner js
var banner = document.querySelector('.banner');
var banner_tabs = document.querySelectorAll('.banner ul li');
// add banner_tabs click
for (var i = 0; i < banner_tabs.length; i++) {
  banner_tab = banner_tabs[i];
  banner_tabsHandles(banner_tab);
}
function banner_tabsHandles(banner_tab) {
  banner_tab.onclick = function () {
    for (var i = 0; i < banner_tabs.length; i++) {
      banner_tabs[i].className = '';
    }
    banner_tab.className = 'active';
    banner.style.backgroundColor = getRandomBGColor();
  }
}

function getRandomBGColor() {
  return '#' + Math.floor(Math.random() * 0xffffff).toString(16);
}


// nav js
var nav_tabs = document.querySelectorAll('.nav-container ul li');
// add nav_tabs click
for (var i = 0; i < nav_tabs.length; i++) {
  nav_tab = nav_tabs[i];
  nav_tabsHandles(nav_tab);
}
function nav_tabsHandles(nav_tab) {
  nav_tab.onclick = function () {
    for (var i = 0; i < nav_tabs.length; i++) {
      nav_tabs[i].className = '';
    }
    nav_tab.className = 'active';
  }
}