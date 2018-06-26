// wrapper1 JS
var wrapper1 = document.getElementsByClassName('wrapper1')[0];
document.querySelector('#select1').addEventListener('change', function (ev) {
  var value = ev.target.value;
  // select 触发后 提示项变为不可选
  ev.target[0].disabled = true;
  // 根据 value 添加 className
  switch (value) {
    case 'float':
      wrapper1.className = 'wrapper wrapper1 wrapper1-float clearfix';
      break;
    case 'position':
      wrapper1.className = 'wrapper wrapper1 wrapper1-position';
      break;
    case 'flex':
      wrapper1.className = 'wrapper wrapper1 wrapper1-flex';
      break;
  }
});

// wrapper2 JS
var wrapper2 = document.getElementsByClassName('wrapper2')[0];
document.querySelector('#select2').addEventListener('change', function (ev) {
  var value = ev.target.value;
  // select 触发后 提示项变为不可选
  ev.target[0].disabled = true;
  // 根据 value 添加 className
  switch (value) {
    case 'float':
      wrapper2.className = 'wrapper wrapper2 wrapper2-float clearfix';
      break;
    case 'position':
      wrapper2.className = 'wrapper wrapper2 wrapper2-position';
      break;
    case 'flex':
      wrapper2.className = 'wrapper wrapper2 wrapper2-flex';
      break;
  }
});

// wrapper3 JS
var wrapper3 = document.getElementsByClassName('wrapper3')[0];
document.querySelector('#select3').addEventListener('change', function (ev) {
  var value = ev.target.value;
  // select 触发后 提示项变为不可选
  ev.target[0].disabled = true;
  // 根据 value 添加 className
  switch (value) {
    case 'float':
      wrapper3.className = 'wrapper wrapper3 wrapper3-float clearfix';
      break;
    case 'position':
      wrapper3.className = 'wrapper wrapper3 wrapper3-position';
      break;
    case 'flex':
      wrapper3.className = 'wrapper wrapper3 wrapper3-flex';
      break;
  }
});

// wrapper4 JS
var wrapper4 = document.getElementsByClassName('wrapper4')[0];
document.querySelector('#select4').addEventListener('change', function (ev) {
  var value = ev.target.value;
  // select 触发后 提示项变为不可选
  ev.target[0].disabled = true;
  // 根据 value 添加 className
  switch (value) {
    case 'float0':
      wrapper4.className = 'wrapper wrapper4 wrapper4-float0 clearfix';
      alert('双飞翼布局需要给 middle的内容 添加一个包裹层')
      break;
    case 'float1':
      wrapper4.className = 'wrapper wrapper4 wrapper4-float1 clearfix';
      break;
    case 'position':
      wrapper4.className = 'wrapper wrapper4 wrapper4-position';
      break;
    case 'flex':
      wrapper4.className = 'wrapper wrapper4 wrapper4-flex';
      break;
  }
});