var Mode = Object.freeze({"normal":1,"draw":2});
var canvasMode = Mode.normal;

var canvas = new fabric.Canvas("mainCanvas");

var bgColorPermanent = new fabric.Color('rgb(0,0,0)');
var bgColor = new fabric.Color('rgb(185,185,185)');

var startx = null;
var starty = null;

var endx = null;
var endy =  null;

var shapeProps = {
  hasRotatingPoint: false,
  transparentCorners: false,
  centeredScaling: true,
  cornerStyle: 'circle',
  padding: 5,
};
canvas.on('mouse:down',function(options){
 
  let position = options.pointer;

  startx = position.x;
  starty = position.y;
  canvasMode = Mode.draw;
});

canvas.on("mouse:up",function(options){
  /** @type {MouseEvent}*/
  let e = options.e;
  let position = options.pointer
  //console.log(bgColor.toRgba());

  if (e.ctrlKey == true) {
    endx = position.x;
    endy = position.y;
    var rect = new fabric.Rect({
      left: startx,
      top: starty,
      width: endx - startx,
      height: endy - starty ,
      fill: 'transparent',
      stroke: bgColor.toRgba(),
      strokeWidth: 2,
      ...shapeProps,

    });
    canvas.add(rect);
    canvasMode = Mode.normal;
    canvas.renderAll();
    DisplayCanvasInfo();
  }
});

