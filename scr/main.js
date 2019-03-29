var Mode = Object.freeze({ normal: 1, draw: 2 });
var canvasMode = Mode.normal;

fabric.Object.prototype.objectCaching = false;
var canvas = new fabric.Canvas("mainCanvas");
var bgColorPermanent = new fabric.Color("rgb(0,0,0)");
var bgColor = new fabric.Color("rgb(185,185,185)");

var startx = null;
var starty = null;

var endx = null;
var endy = null;
//for testing the two different states of the same object
var RectArray = [];

var shapeProps = {
  hasRotatingPoint: false,
  transparentCorners: false,
  centeredScaling: true,
  cornerStyle: "circle",
  borderColor: "rgb(255,0,0)",
  padding: 0,
  selectable: false
  //noScaleCache: false,
};

canvas.observe("object:modified", ObjectModified);
canvas.observe("object:scaling", ObjectScaling);
canvas.observe("object:scaled", ObjectScaled);
canvas.observe("selection:created",SelectionCreated);
canvas.on('mouse:move',MouseMove);
canvas.on("mouse:down", function(options) {
  let position = options.pointer;

  startx = position.x;
  starty = position.y;
});

canvas.on("mouse:up", function(options) {
  /** @type {MouseEvent}*/
  let e = options.e;
  let position = options.pointer;
  //console.log(bgColor.toRgba());

  if (canvasMode === Mode.draw) {
    endx = position.x;
    endy = position.y;
    let width = endx - startx;
    let height = endy - starty;
      if (width > 5 && height > 5 )
      {
        var rect = new fabric.Rect({
          left: startx,
          top: starty,
          width: width,
          height: height,
          fill: "transparent",
          stroke: bgColor.toRgba(),
          strokeWidth: 2,
          ...shapeProps,
          padding: 0
        });
        //console.log(rect.get('height'));
        canvas.add(rect);
        console.log(rect);
        RectArray.push(rect);
        canvas.renderAll();
        DisplayCanvasInfo();
      }
    }
    
});

function ObjectModified(e) {
  var o = e.target;
  console.log(o);
  //if(!o.objectCaching) o.objectCaching = true;
  // o.width *= scaleX;
  // o.height *= scaleY;
  // o.scaleX = 1;
  // o.scaleY = 1;
  // o.strokeWidth = 2;

  //canvas.renderAll();
  console.log("modified");
  //console.log(o.strokeWidth);
  //console.log(`Widh: ${ob.width} , Height: ${ob.height} , StrokeWidth: ${ob.strokeWidth}, ScaleX: ${ob.scaleX} , ScaleY: ${ob.scaleY}`);
}

function ObjectScaling(e) {
  var o = e.target;
  o.set({ stroke: "transparent" });
  // if (!o.strokeWidthUnscaled && o.strokeWidth) {
  // 	o.strokeWidthUnscaled = o.strokeWidth;
  // }
  // if (o.strokeWidthUnscaled) {
  //   if(o.objectCaching) o.objectCaching = false;
  //   o.strokeWidth = o.strokeWidthUnscaled  / ((o.scaleX + o.scaleY) / 2);

  //}
  //console.log("scaling");
  //console.log(`Widh: ${ob.width} , Height: ${ob.height} , StrokeWidth: ${ob.strokeWidth}, ScaleX: ${ob.scaleX} , ScaleY: ${ob.scaleY}`);
}

function ObjectScaled(e) {
  var o = e.target;

  if (!(o instanceof fabric.Group)) {
    o.set({
      // width: o.width * o.scaleX,
      // height: o.height * o.scaleY,
      // scaleX: 1,
      // scaleY: 1,
       stroke: bgColor.toRgba()
    });
  }
  else 
  {
    var objs = canvas.getActiveObjects();
    console.log(objs);
    canvas.getActiveObjects().forEach(function(item,index){
        item.set({
          // width: item.width * item.zoomX,
          // height: item.height * item.zoomY,
          // scaleX: 1,
          // scaleY: 1,
          // zoomX: 1,
          // zoomY: 1,
          //stroke: bgColor.toRgba()
        })
        //item.group.set({scaleX:1,scaleY:1,zoomX:1,zoomY:1});
         // scale
    });
  }
  // ob.width *= ob.scaleX;
  // ob.height *= ob.scaleY;
  // ob.scaleX = 1;
  // ob.scaleY = 1;
  //console.log(o instanceof fabric.Group);
  //console.log(`Widh: ${ob.width} , Height: ${ob.height} , StrokeWidth: ${ob.strokeWidth}, ScaleX: ${ob.scaleX} , ScaleY: ${ob.scaleY} , ScaledWidth: ${scaledWidth}, ScaledHeight: ${scaledHeight}`);
}

function SelectionCreated(){
  console.log('selection created');
  var objs = canvas.getActiveObjects();
  console.log(objs);
}

function MouseMove(e){
  DisplayMouseInfo(e);
}