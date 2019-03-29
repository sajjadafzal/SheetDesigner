document.getElementById("clear").onclick = e => {
  canvas.clear();
  DisplayCanvasInfo();
};

document.getElementById("draw").onclick = e => {
  canvasMode = Mode.draw;
  canvas.forEachObject(function(obj) {
    obj.selectable = false;
  });
};

document.getElementById("selection").onclick = e => {
  canvasMode = Mode.normal;
  canvas.forEachObject(function(obj) {
    obj.selectable = true;
  });
};

var DisplayCanvasInfo = function() {
  document.getElementById("CanvasObjectsNumbers").innerHTML =
    canvas._objects.length;
};
