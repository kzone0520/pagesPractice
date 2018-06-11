let anim1 = bodymovin.loadAnimation({
  container:document.getElementById('animation1'),
  path:'data_1.json',
  renderer:'svg',
  loop:true,
  autoplay:true,
});
let anim2 = bodymovin.loadAnimation({
  container:document.getElementById('animation2'),
  path:'data_2.json',
  renderer:'svg',
  loop:false,
  autoplay:false,
});

let animation = document.getElementById('animation2');
animation.addEventListener('mouseover', function() {
  anim2.play();
}, false);
animation.addEventListener('mouseout', function() {
  anim2.stop();
}, false);