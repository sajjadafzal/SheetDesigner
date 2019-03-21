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


