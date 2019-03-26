
var Mode = Object.freeze({"normal":1,"draw":2});
var canvasMode = Mode.normal;

var canvas = new fabric.Canvas("mainCanvas");

var bgColorPermanent = new fabric.Color('rgb(0,0,0)');
var bgColor = new fabric.Color('rgb(185,185,185)');

var startx = null;
var starty = null;

var endx = null;
var endy =  null;

canvas.on('mouse:down',function(options){
  startx = options.e.clientX;
  starty = options.e.clientY;
  canvasMode = Mode.draw;
});

canvas.on("mouse:up",function(options){
  endx = options.e.clientX  ;
  endy = options.e.clientY ;
  if (canvasMode == Mode.draw) {
    var rect = new fabric.Rect({
      left: startx - canvas._offset.left,
      top: starty - canvas._offset.top,
      fill: 'red',
      width: endx - startx,
      height: endy - starty 
    });
    canvas.add(rect);
    canvasMode = Mode.normal;
  }
});
