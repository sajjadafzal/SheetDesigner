
var canvas = new fabric.Canvas("mainCanvas");

var rect = new fabric.Rect({
  left: 100,
  top: 150,
  fill: 'red',
  width: 200,
  height: 200
});

canvas.add(rect);

document.getElementById("b").onclick = (e)=>{
  // rect.set({
  //   left: rect.left + 10,
  //   fill: 'blue'
  // })
  //rect.left = rect.left - 10;
  rect.rotate(Math.random() * 360);
  
  canvas.renderAll();
  //window.open("toolbox.html","Toolbox",'height=400,width=200');
};


