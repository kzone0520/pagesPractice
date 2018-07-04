// part1 加减乘除
// get dom
var number1 = document.querySelector('.number1');
var number2 = document.querySelector('.number2');

var addBtn = document.querySelector('#add-btn');
var minusBtn = document.querySelector('#minus-btn');
var timesBtn = document.querySelector('#times-btn');
var divideBtn = document.querySelector('#divide-btn');
var result1 = document.querySelector('.result1');

// add Event
addBtn.addEventListener('click', addNumber);
minusBtn.addEventListener('click', minusNumber);
timesBtn.addEventListener('click', timesNumber);
divideBtn.addEventListener('click', divideNumber);

// function
function addNumber() {
  var result = Number(number1.value) + Number(number2.value);
  result1.textContent = '运算结果: ' + result;
}
function minusNumber() {
  var result = Number(number1.value) - Number(number2.value);
  result1.textContent = '运算结果: ' + result;
}
function timesNumber() {
  var result = Number(number1.value) * Number(number2.value);
  result1.textContent = '运算结果: ' + result;
}
function divideNumber() {
  if (number2.value == 0) {
    alert('除数不能为0');
    return;
  }
  var result = Number(number1.value) / Number(number2.value);
  result1.textContent = '运算结果: ' + result;
}


// part2 十进制 to 二进制
// get dom 
var decNumber = document.querySelector('.dec-number');
var transBtn = document.querySelector('#trans-btn');
var result2 = document.querySelector('.result2');

// add Event
transBtn.addEventListener('click', dec2Number);

// function
function dec2Number() {
  if (Number(decNumber.value) < 0 || (Number(decNumber.value)%1 !== 0)) {
    alert('请输入非负整数');
    return;
  }
  result = Number(decNumber.value).toString(2);
  result2.textContent = '运算结果: ' + result;
}

// part3 3的小游戏
// get dom 
var para3 = document.querySelector('.section3 div');
para3.innerHTML = '';

// for
for (var i = 1; i <= 100; i++) {
  var spanItem = document.createElement('span');
  if ((i % 3) === 0 || String(i).indexOf(3) !== -1) {
    spanItem.textContent = 'Pa ';
  } else {
    spanItem.textContent = i + ' ';
  }
  para3.appendChild(spanItem);
}


// part4 九九乘法表
// get dom
var table4 = document.querySelector('.section4 table');

// for
for (var i = 1; i<= 9; i++) {
  var tr = document.createElement('tr');
  for (var j = 1; j <= i; j++) {
    var td = document.createElement('td');
    td.textContent = i + '*' + j + '=' + i*j;
    tr.appendChild(td);
  }
  table4.appendChild(tr);
}


// part5 问候语
// get dom
var hello = document.querySelector('.section5 p');

var nowHour = new Date().getHours();
if ( nowHour > 6 && nowHour < 9 ) {
  hello.textContent = 'Good Morning!';
} else if (nowHour > 9 && nowHour < 12) {
  hello.textContent = 'Good Noon!';
} else if (nowHour > 12 && nowHour < 18) {
  hello.textContent = 'Good Afternoon!';
} else if (nowHour > 18 && nowHour < 24) {
  hello.textContent = 'Good Evening!';
} else {
  hello.textContent = 'You should go to bed!!!';
}