// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_ondrag

function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
  }

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var draggedId = event.dataTransfer.getData("Text");
    
    var dragged = $(document.getElementById(draggedId));
    var dropped = $(event.target);
    var aux = $("#aux");

    aux.insertBefore(dropped)
    dropped.insertBefore(dragged);
    dragged.insertAfter(aux);  
    $("#auxDiv").append(aux)
}

