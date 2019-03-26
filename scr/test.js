import 'fabric';

var canvas = new fabric.Canvas("mainCanvas");

var rect = new fabric.rect({
    left: 100,
    top: 150,
    fill: 'red',
    width: 200,
    height: 20,  
  });

canvas.add(rect);


// var rect = new fabric.Rect({
//   left: 100,
//   top: 150,
//   fill: 'red',
//   width: 200,
//   height: 200
// });

// var circle = new fabric.Circle({
//   radius: 50,
//   fill: '#eef',
//   scaleY: 0.5,
//   originX: 'center',
//   originY: 'center'
// })



// rect.on('selected',function(){
//   console.log('Rectangle is selected');
// });
// rect.on('deselected',function(){
//   console.log('Rectangle is deselected');
// });
// canvas.add(rect);

// var text = new fabric.Text('hello world', {left: 100, top:100});
// canvas.add(text);
// document.getElementById("b").onclick = (e)=>{
//   // rect.set({
//   //   left: rect.left + 10,
//   //   fill: 'blue'
//   // })
//   //rect.left = rect.left - 10;
//   //rect.rotate(Math.random() * 360);
  
//   canvas.renderAll();
//   //window.open("toolbox.html","Toolbox",'height=400,width=200');
// };

var circle = new fabric.Circle({
  radius: 100,
  fill: '#eef',
  scaleY: 0.5,
  originX: 'center',
  originY: 'center'
});

var text = new fabric.Text('hello world', {
  fontSize: 30,
  originX: 'center',
  originY: 'center'
});

var group = new fabric.Group([ circle, text ], {
  left: 150,
  top: 100,
  angle: -10
});



canvas.add(group);


canvas.on('mouse:up',function(options){
  group.item(0).set('fill','red');
  group.item(1).set({
  text: 'trololo',
  fill: 'white'
  });
  console.log('Canvas Clicked');
  canvas.renderAll();
});