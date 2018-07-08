// 公用方法

// checkRadio 检测点击按钮前是否选中了 radio
function checkRadio(target1, target2) {
  var radioChecked = target1.checked === true || target2.checked === true;
  var whichChecked = target1.checked ? target1 : target2;
  return radioChecked ? whichChecked : 'notChecked';
}

// checkNum 检测是否为 数字
function checkNum(num) {
  return isNaN(num) ? false : typeof num === 'number';
}

// section1 数字练习
// 未完成项
// 1. 进一步封装, 简化确认 input 框

// get dom
var numA1 = document.querySelector('#num-a1');
var numB1 = document.querySelector('#num-b1');
var radioA1 = document.querySelector('#radio-a1');
var radioB1 = document.querySelector('#radio-b1');
var buttons1 = document.querySelector('.section1 .buttons1');
var para1 = document.querySelector('.section1 .result');

// init
var paraNum1;

// add Event
buttons1.addEventListener('click', function(e) {
  var numA = parseFloat(numA1.value);
  var numB = parseFloat(numB1.value);
  var e = e || window.event;
  var target = e.target || e.srcElement;

  if (target.nodeName.toLocaleLowerCase() === 'button') {
    if (checkRadio(radioA1, radioB1) === 'notChecked') {
      alert('没有选择 radio 按钮');
    } else {
      switch (target.className) {
        // 判断当前选中的输入框输入内容是否为数字
        case 'btn1':
          paraNum1 =
            checkRadio(radioA1, radioB1).id === 'radio-a1' ? numA : numB;
          para1.textContent = checkNum(paraNum1)
            ? `输出为: ${paraNum1}`
            : '输入不为数字, 请重新输入';
          break;
        // 把 A 四舍五入为 B 个小数位数的数字
        case 'btn2':
          para1.textContent =
            checkNum(numA) && checkNum(numB)
              ? `输出为 ${numA.toFixed(numB)}`
              : '输入不为数字, 请重新输入';
          break;
        // 当前选中数字的绝对值
        case 'btn3':
          paraNum1 =
            checkRadio(radioA1, radioB1).id === 'radio-a1' ? numA : numB;
          para1.textContent = checkNum(paraNum1)
            ? `输出为 ${Math.abs(paraNum1)}`
            : '输入不为数字, 请重新输入';
          break;
        // 对当前选中的数字进行上舍入
        case 'btn4':
          paraNum1 =
            checkRadio(radioA1, radioB1).id === 'radio-a1' ? numA : numB;
          para1.textContent = checkNum(paraNum1)
            ? `输出为 ${Math.ceil(paraNum1)}`
            : '输入不为数字, 请重新输入';
          break;
        case 'btn5':
          paraNum1 =
            checkRadio(radioA1, radioB1).id === 'radio-a1' ? numA : numB;
          para1.textContent = checkNum(paraNum1)
            ? `输出为 ${Math.floor(paraNum1)}`
            : '输入不为数字, 请重新输入';
          break;
        case 'btn6':
          paraNum1 =
            checkRadio(radioA1, radioB1).id === 'radio-a1' ? numA : numB;
          para1.textContent = checkNum(paraNum1)
            ? `输出为 ${Math.round(paraNum1)}`
            : '输入不为数字, 请重新输入';
          break;
        case 'btn7':
          para1.textContent =
            checkNum(numA) && checkNum(numB)
              ? `输出为 ${Math.max(numA, numB)}`
              : '输入不为数字, 请重新输入';
          break;
        case 'btn8':
          para1.textContent =
            checkNum(numA) && checkNum(numB)
              ? `输出为 ${Math.min(numA, numB)}`
              : '输入不为数字, 请重新输入';
          break;
        default:
          break;
      }
    }
  }
});

// section2 字符串练习
// get dom
var strA2 = document.querySelector('#str-a2');
var strB2 = document.querySelector('#str-b2');
var radioA2 = document.querySelector('#radio-a2');
var radioB2 = document.querySelector('#radio-b2');
var numA2 = document.querySelector('#num-a2');
var numB2 = document.querySelector('#num-b2');
var buttons2 = document.querySelector('.section2 .buttons2');
var para2 = document.querySelector('.section2 .result');

// init
var paraResult2;

// add Event
buttons2.addEventListener('click', function(e) {
  var strA = strA2.value;
  var strB = strB2.value;
  var numA = parseFloat(numA2.value);
  var numB = parseFloat(numB2.value);
  var e = e || window.event;
  var target = e.target || e.srcElement;

  if (target.nodeName.toLocaleLowerCase() === 'button') {
    if (checkRadio(radioA2, radioB2) === 'notChecked') {
      alert('没有选择 radio 按钮');
    } else {
      switch (target.className) {
        case 'btn1':
          paraNum1 =
            checkRadio(radioA2, radioB2).id === 'radio-a2' ? strA : strB;
          para2.textContent = `字符串长度为: ${paraNum1.length}`;
          break;
        case 'btn2':
          paraNum1 =
            checkRadio(radioA2, radioB2).id === 'radio-a2' ? strA : strB;
          para2.textContent = `第三个字符为: ${paraNum1.charAt(2)}`;
          break;
        case 'btn3':
          para2.textContent = `两个输入框文字连接在一起: ${strA.concat(strB)}`;
          break;
        case 'btn4':
          para2.textContent = `B中的内容，在输入A的内容中第一次出现的位置: ${strA.indexOf(
            strB,
          ) + 1}`;
          break;
        case 'btn5':
          para2.textContent = `A中的内容，在输入B的内容中最后第一次出现的位置: ${strB.lastIndexOf(
            strA,
          ) + 1}`;
          break;
        case 'btn6':
          paraNum1 =
            checkRadio(radioA2, radioB2).id === 'radio-a2' ? strA : strB;
          para2.textContent = `截取的字符为: ${paraNum1.slice(numA, numB)}`;
          break;
        case 'btn7':
          paraNum1 =
            checkRadio(radioA2, radioB2).id === 'radio-a2' ? strA : strB;
          para2.textContent = `输入框的行数为: ${paraNum1.split('\n').length}`;
          break;
        case 'btn8':
          paraNum1 =
            checkRadio(radioA2, radioB2).id === 'radio-a2' ? strA : strB;
          para2.textContent = `substr截取的字符为: ${paraNum1.substr(
            numA,
            numB,
          )}`;
          break;
        case 'btn9':
          paraNum1 =
            checkRadio(radioA2, radioB2).id === 'radio-a2' ? strA : strB;
          para2.textContent = `转为大写字符: ${paraNum1.toUpperCase()}`;
          break;
        case 'btn10':
          paraNum1 =
            checkRadio(radioA2, radioB2).id === 'radio-a2' ? strA : strB;
          para2.textContent = `转为小写字符: ${paraNum1.toLowerCase()}`;
          break;
        case 'btn11':
          paraNum1 =
            checkRadio(radioA2, radioB2).id === 'radio-a2' ? strA : strB;
          para2.textContent = `去除半角空格后: ${paraNum1.replace(/\s/g, '')}`;
          break;
        case 'btn12':
          paraNum1 =
            checkRadio(radioA2, radioB2).id === 'radio-a2' ? strA : strB;
          if (paraNum1 === strA) {
            para2.textContent = `a全部替换后结果: ${paraNum1.replace(
              /a/g,
              strB,
            )}`;
          } else {
            para2.textContent = `a全部替换后结果: ${paraNum1.replace(
              /a/g,
              strA,
            )}`;
          }
          break;
        default:
          break;
      }
    }
  }
});

// section3 字符串进一步练习
function diyTrim(str) {
  var result = '';

  result = str.trim();
  return result;
}

// 测试用例
console.log('练习三 \n\n');
console.log('1. 去除首尾空格');
console.log(diyTrim(' a f b    ')); // ->a f b
console.log(diyTrim('    ffdaf    ')); // ->ffdaf
console.log(diyTrim('1    ')); // ->1
console.log(diyTrim('　　f')); // ->f
console.log(diyTrim('  　  a f b 　　 ')); // ->a f b
console.log(diyTrim(' ')); // ->
console.log(diyTrim('　')); // ->
console.log(diyTrim('')); // ->

function removeRepetition(str) {
  var result = '';

  // do something
  for (var i = 0; i < str.length; i++) {
    if (str[i] != str[i + 1]) {
      result = result + str[i];
    }
  }
  return result;
}

// 测试用例
console.log('2. 去掉字符串str中，连续重复的地方');
console.log(removeRepetition('aaa')); // ->a
console.log(removeRepetition('abbba')); // ->aba
console.log(removeRepetition('aabbaabb')); // ->abab
console.log(removeRepetition('')); // ->
console.log(removeRepetition('abc')); // ->abc

// section4 对象的操作
var tree = {
  id: 0,
  name: 'root',
  left: {
    id: 1,
    name: 'Simon',
    left: {
      id: 3,
      name: 'Carl',
      left: {
        id: 7,
        name: 'Lee',
        left: {
          id: 11,
          name: 'Fate',
        },
      },
      right: {
        id: 8,
        name: 'Annie',
        left: {
          id: 12,
          name: 'Saber',
        },
      },
    },
    right: {
      id: 4,
      name: 'Tony',
      left: {
        id: 9,
        name: 'Candy',
      },
    },
  },
  right: {
    id: 2,
    name: 'right',
    left: {
      id: 5,
      name: 'Carl',
    },
    right: {
      id: 6,
      name: 'Carl',
      right: {
        id: 10,
        name: 'Kai',
      },
    },
  },
};

// 假设id和name均不会重复，根据输入name找到对应的id
function findIdByName(name) {
  var find = function(tree) {
    if (!tree) {
      return;
    }
    if (tree.name === name) {
      return tree.id;
    }
    // if (find(tree.left)) {
    //   return find(tree.left);
    // }
    // if (find(tree.right)) {
    //   return find(tree.right);
    // }

    // 化简为下
    return find(tree.left) || find(tree.right);
  };
  return find(tree);
}

// 假设id和name均不会重复，根据输入id找到对应的name
function findNameById(id) {
  var find = function(tree) {
    if (!tree) {
      return;
    }
    if (tree.id === id) {
      return tree.name;
    }

    return find(tree.left) || find(tree.right);
  };
  return find(tree);
}

// 把这个对象中所有的名字以“前序遍历”的方式全部输出到console中
function getListWithDLR() {
  // 前序遍历: 根节点, 左子树, 右子树
  var loopDLR = function(tree) {
    if (tree) {
      console.log(tree.name);
      loopDLR(tree.left);
      loopDLR(tree.right);
    }
  };
  loopDLR(tree);
}

// 把这个对象中所有的名字以“中序遍历”的方式全部输出到console中
function getListWithLDR() {
  // 中序遍历: 左子树，根节点，右子树
  var loopDLR = function(tree) {
    if (tree) {
      loopDLR(tree.left);
      console.log(tree.name);
      loopDLR(tree.right);
    }
  };
  loopDLR(tree);
}

// 把这个对象中所有的名字以“后序遍历”的方式全部输出到console中
function getListWithLRD() {
  // 后序遍历: 左子树, 右子树, 根结点
  var loopDLR = function(tree) {
    if (tree) {
      loopDLR(tree.left);
      loopDLR(tree.right);
      console.log(tree.name);
    }
  };
  loopDLR(tree);
}

console.log('\n\n练习四 \n\n');
console.log('\n根据name找到对应的id：');
console.log('name:root, id:' + findIdByName('root'));
console.log('name:Lee, id:' + findIdByName('Lee'));
console.log('name:Kai, id:' + findIdByName('Kai'));
console.log('\n根据id找到对应的name：');
console.log('id:1, name:' + findNameById(1));
console.log('id:8, name:' + findNameById(8));
console.log('id:5, name:' + findNameById(5));
console.log('\n所有名字前序遍历：');
getListWithDLR();
console.log('\n所有名字中序遍历：');
getListWithLDR();
console.log('\n所有名字后序遍历：');
getListWithLRD();

// section5 用数组来实现队列 右侧
// get dom
var section5 = document.querySelector('.section5');
var queueInput5 = document.querySelector('#queue-input5');
var para5 = document.querySelector('#queue-cont5');

// init
var queue = ['apple', 'pear'];

// add Event
section5.addEventListener('click', function(e) {
  var queueValue5 = queueInput5.value;
  var e = e || window.event;
  var target = e.target || e.srcElement;

  if (target.nodeName.toLowerCase() === 'button') {
    switch (target.id) {
      case 'in-btn':
        if (queueValue5 !== '') {
          queue.push(queueValue5);
          para5.textContent = `队列为 ${queue.join('->')}`;
        } else {
          para5.textContent = `输入不能为空`;
        }
        break;
      case 'out-btn':
        if (queue.length === 0) {
          para5.textContent = '队列已空';
          return;
        }
        queue.pop();
        para5.textContent = `队列为 ${queue.join('->')}`;
        break;
      case 'font-btn':
        para5.textContent = `队列头为 ${queue[queue.length - 1]}`;
        break;
      case 'empty-btn':
        para5.textContent = queue.length ? '队列非空' : '队列空';
        break;
      default:
        break;
    }
  }
});

// section6 用数组来实现队列 左侧
// get dom
var section6 = document.querySelector('.section6');
var queueInput6 = document.querySelector('#queue-input6');
var para6 = document.querySelector('#queue-cont6');

// init
var queue2 = ['apple', 'pear'];

// add Event
section6.addEventListener('click', function(e) {
  var queueValue6 = queueInput6.value;
  var e = e || window.event;
  var target = e.target || e.srcElement;

  if (target.nodeName.toLowerCase() === 'button') {
    switch (target.id) {
      case 'in-btn':
        if (queueValue6) {
          queue2.unshift(queueValue6);
          para6.textContent = `队列为 ${queue2.join('<-')}`;
        } else {
          para6.textContent = `输入不能为空`;
        }
        break;
      case 'out-btn':
        if (queue2.length === 0) {
          para6.textContent = '队列已空';
          return;
        }
        queue2.shift();
        para6.textContent = `队列为 ${queue2.join('<-')}`;
        break;
      case 'font-btn':
        if (queue2.length === 0) {
          para6.textContent = '队列已空';
          return;
        }
        para6.textContent = `队列头为 ${queue2[0]}`;
        break;
      case 'empty-btn':
        para6.textContent = queue2.length ? '队列非空' : '队列空';
        break;
      default:
        break;
    }
  }
});

// section7 用数组来实现栈 右侧
// get dom
var section7 = document.querySelector('.section7');
var stackInput7 = document.querySelector('#stack-input7');
var para7 = document.querySelector('#stack-cont7');

// init
var stack = ['apple', 'pear'];

// add Event
section7.addEventListener('click', function(e) {
  var stackValue7 = stackInput7.value;
  var e = e || window.event;
  var target = e.target || e.srcElement;

  if (target.nodeName.toLowerCase() === 'button') {
    switch (target.id) {
      case 'push-btn':
        if (stackValue7 !== '') {
          stack.push(stackValue7);
          para7.textContent = `栈为 ${stack.join('->')}`;
        } else {
          para7.textContent = `输入不能为空`;
        }
        break;
      case 'pop-btn':
        if (stack.length === 0) {
          para7.textContent = '栈已空';
          return;
        }
        stack.shift();
        para7.textContent = `栈为 ${stack.join('->')}`;
        break;
      case 'font-btn':
        para7.textContent = `栈顶为 ${stack[stack.length - 1]}`;
        break;
      case 'empty-btn':
        para7.textContent = stack.length ? '栈非空' : '栈空';
        break;
      default:
        break;
    }
  }
});

// section8 用数组来实现栈 左侧
// get dom
var section8 = document.querySelector('.section8');
var stackInput8 = document.querySelector('#stack-input8');
var para8 = document.querySelector('#stack-cont8');

// init
var stack2 = ['apple', 'pear'];

// add Event
section8.addEventListener('click', function(e) {
  var stackValue8 = stackInput8.value;
  var e = e || window.event;
  var target = e.target || e.srcElement;

  if (target.nodeName.toLowerCase() === 'button') {
    switch (target.id) {
      case 'push-btn':
        if (stackValue8 !== '') {
          stack2.unshift(stackValue8);
          para8.textContent = `栈为 ${stack2.join('<-')}`;
        } else {
          para8.textContent = `输入不能为空`;
        }
        break;
      case 'pop-btn':
        if (stack2.length === 0) {
          para8.textContent = '栈已空';
          return;
        }
        stack2.pop();
        para8.textContent = `栈为 ${stack2.join('<-')}`;
        break;
      case 'font-btn':
        para8.textContent = `栈顶为 ${stack2[0]}`;
        break;
      case 'empty-btn':
        para8.textContent = stack2.length ? '栈非空' : '栈空';
        break;
      default:
        break;
    }
  }
});

// section8 排序
var arr1 = [43, 54, 4, -4, 84, 100, 58, 27, 140];
var arr2 = ['apple', 'dog', 'cat', 'car', 'zoo', 'orange', 'airplane'];
var arr3 = [[10, 14], [16, 60], [7, 44], [26, 35], [22, 63]];
var arr4 = [
  {
    id: 1,
    name: 'candy',
    value: 40,
  },
  {
    id: 2,
    name: 'Simon',
    value: 50,
  },
  {
    id: 3,
    name: 'Tony',
    value: 45,
  },
  {
    id: 4,
    name: 'Annie',
    value: 60,
  },
];

console.log('\n\n练习八 \n\n');
console.log('原数组: ' + arr1);
console.log('从小到大: ' + arr1.sort(function numAscSort(a, b){
  return a - b;
}));
console.log('从大到小: ' + arr1.sort(function numDescSort(a, b) {
  return b - a;
}) + '\n\n');
console.log('原数组: ' + arr2);
console.log('从a-z: ' + arr2.sort());
console.log('从z-a: ' + arr2.reverse() + '\n\n');
console.log('原数组: ');
console.log(arr3);
console.log('按照每个元素中第二个数从大到小的顺序: ');
console.log(arr3.sort(function index2Sort(a, b){
  return b[1] - a[1];
}));
console.log('原数组: ');
console.log(arr4);
console.log('根据value值从小到大顺序: ');
console.log(arr4.sort(function index2Sort(a, b){
  return a.value - b.value;
}));


// section9 转换数据结构
// init
var scoreObject = {
  "Tony": {
      "Math": 95,
      "English": 79,
      "Music": 68
  }, 
  "Simon": {
      "Math": 100,
      "English": 95,
      "Music": 98
  }, 
  "Annie": {
      "Math": 54,
      "English": 65,
      "Music": 88
  }
};

var menuArr = [
  [1, "Area1", -1],
  [2, "Area2", -1],
  [3, "Area1-1", 1],
  [4, "Area1-2", 1],
  [5, "Area2-1", 2],
  [6, "Area2-2", 2],
  [7, "Area1-2-3", 4],
  [8, "Area2-2-1", 6],
];

var scoreArray = [];
var menuObject = {};

// scoreArray
for (var key in scoreObject) {
  var temp = [];
  temp.push(key);
  for (var item in scoreObject[key]) {
    temp.push(scoreObject[key][item]);
  }
  scoreArray.push(temp);
}

// menuObject
function objectLoop(menuObject, keyDad) {
  // init
  var dad = null;

  for (var key in menuObject) {
    // 一层查找
    if (key === keyDad) {
      // 找到对应的后将其生初始化为对象并赋值
      if (!menuObject[key]) {
        menuObject[key] = {};
      }
      dad = menuObject[key];
      break;
    } 
    // 存在 subMenu 时继续向下查找
    else if (menuObject[key].subMenu) {
      dad = objectLoop(menuObject[key].subMenu, keyDad);
      if (dad) {break};
    }
  }
  return dad;
}

menuArr.forEach(function(item) {
  // 先保存 key 并转化为字符串
  var keyDad = item[2].toString(); // 父级 key
  var keySelf = item[0].toString(); // 自身 key

  // 利用 父级 key 查找 父级
  var objDad = objectLoop(menuObject, keyDad);

  // 无父级 存储为 root级
  if (!objDad) {
    menuObject[keySelf] = {name: item[1]};
  } else {
    // 存在父级时,为其初始化 suMenu 及添加属性
    if (!objDad.subMenu) {
      objDad.subMenu = {};
    } 
    objDad.subMenu[keySelf] = {name: item[1]};
  }

});

console.log('\n\n练习九 \n\n');
console.log('原对象: ');
console.log(scoreObject);
console.log('对象转为数组: ');
console.log(scoreArray);
console.log('\n原数组: ');
console.log(menuArr);
console.log('数组转为对象: ');
console.log(menuObject);