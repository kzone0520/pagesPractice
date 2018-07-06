// section1 获取 input 中内容
// get dom
var inputFiled1 = document.querySelector('.section1 input');
var submitBtn = document.querySelector('#submit-btn');
var para1 = document.querySelector('.section1 p');

// add Event
submitBtn.addEventListener('click', submitInput);
inputFiled1.addEventListener('keydown', keyPressCode);

// function
// 提交
function submitInput() {
  para1.textContent = inputFiled1.value;
  inputFiled1.value = '';
}
// keyPress
function keyPressCode(e) {
  var keyCode = e.keyCode;

  // 13 回车键
  if (keyCode === 13) {
    e.preventDefault();
    para1.textContent = inputFiled1.value;
    inputFiled1.value = '';
  }

  // 27 Esc
  if (keyCode === 27) {
    inputFiled1.value = '';
  }
}

// section2 控制元素的显示及隐藏
// get dom
var radios = document.querySelectorAll('.section2 input');
var schoolSelect = document.querySelector('#school-select');
var companySelect = document.querySelector('#company-select');

// for add Event
for (let i = 0; i < radios.length; i++) {
  radios[i].addEventListener('click', function() {
    // alert(radios[i].id);
    // alert(i)
    if (i === 0) {
      schoolSelect.classList.add('active');
      companySelect.classList.remove('active');
    }
    if (i === 1) {
      schoolSelect.classList.remove('active');
      companySelect.classList.add('active');
    }
  });
}

// section3 获取 颜色
// get dom
var colorList = document.querySelector('.palette');
var para3 = document.querySelector('.section3 .color-picker');

colorList.addEventListener('click', function(e) {
  var e = e || window.event;
  var target = e.target || e.srcElement;

  if (target.nodeName.toLowerCase() === 'li') {
    para3.textContent = target.style.backgroundColor;
    para3.style.color = target.style.backgroundColor;
  }
});

// section4 淡入淡出
// get dom
var fadeObj = document.querySelector('#fade-obj');
var fadeBtn = document.querySelector('#fade-btn');

// init
// 控制淡入淡出
var fade = true;
var num,
  step,
  interval = null;

fadeBtn.addEventListener('click', function() {
  // init
  num = fade ? 10 : 0;
  step = fade ? -1 : 1;
  fadeBtn.disabled = true;

  // setInterval
  var interval = setInterval(function() {
    num = num + step;
    nowNum = num / 10;
    console.log(num);
    fadeObj.style.opacity = nowNum;
    if (num === 0 || num === 10) {
      clearInterval(interval);
      fadeBtn.disabled = false;
      fadeBtn.textContent = fade ? '淡入' : '淡出';
      fade = !fade;
    }
  }, 200);
});

// section5 CSS Sprite
// get dom
var imgGallery = document.querySelector('.section5 .img');
var move5 = document.querySelector('#Move');
var stop5 = document.querySelector('#Stop');
var section5 = document.querySelector('.section5');

// init
var imgPosition = 0;
var interval5 = null;

// add Event
section5.addEventListener('click', function(e) {
  var e = e || window.event;
  var target = e.target || e.srcElement;
  switch (target.id) {
    case 'Move':
      interval5 = setInterval(imgDown, 100);
      break;
    case 'Stop':
      clearInterval(interval5);
      break;
    default:
      break;
  }
});

// function
function imgDown() {
  imgPosition -= 480;
  if (imgPosition <= -7680) {
    imgPosition = 0;
  } 
  imgGallery.style.backgroundPosition = '0 '+imgPosition+'px';
}
