document.getElementById("clear").onclick = e => {
  canvas.clear();
  DisplayCanvasInfo();
};

document.getElementById("draw").onclick = e => {
  console.table(RectArray,["top","left","width","height","zoomX","zoomY","scaleX","scaleY"]);
  canvasMode = Mode.draw;
  canvas.forEachObject(function(obj) {
    obj.selectable = false;
  });
};

document.getElementById("selection").onclick = e => {
  console.table(RectArray,["top","left","width","height","zoomX","zoomY","scaleX","scaleY"]);
  canvasMode = Mode.normal;
  canvas.forEachObject(function(obj) {
    obj.selectable = true;
  });
};

document.getElementById("DrawOptions").onclick = e => {
  DrawOptions('2',5);
};

var DisplayCanvasInfo = function() {
  document.getElementById("CanvasObjectsNumbers").innerHTML =
    canvas._objects.length;
};

function DisplayMouseInfo(e){
  document.getElementById("Mouse").innerHTML = e.pointer.x + " : " + e.pointer.y;
}

