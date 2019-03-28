
 document.getElementById("clear").onclick = (e)=>{
     canvas.clear();
     DisplayCanvasInfo();
    };

document.getElementById("draw").onclick = (e)=>{
     
     canvas.selection = false;
    };

document.getElementById("selection").onclick = (e)=>{
     canvas.selection = true;
     DisplayCanvasInfo();
    };
   

    

var DisplayCanvasInfo = function(){ document.getElementById('CanvasObjectsNumbers').innerHTML = canvas._objects.length};