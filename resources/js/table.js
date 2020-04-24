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

    if (canDrag(dragged,dropped)) {
        aux.insertBefore(dropped);
        dropped.insertBefore(dragged);
        dragged.insertAfter(aux);  
        $("#auxDiv").append(aux);
    }

}

function canDrag(dragged,dropped) {
    var canDrag = true;
    if (parentOf(dragged) != 'boardDiv') {
        if (parentOf(dropped) == 'boardDiv') {

            if (dragged.prop('id').split('-')[0] != 'joker') {
                var filaDragged = dragged.prop('id').split('-')[1];
                var coluDragged = dragged.prop('id').split('-')[2];
                canDrag = playerHasCard(`${filaDragged}-${coluDragged}`);
            } else {
                canDrag = playerHasCard(`joker`);
            }

            if (canDrag) {
                putDraggedOnMoveds(dragged);
            }
        }
    } else {
        if (parentOf(dropped) != 'boardDiv') {
            canDrag = playerHasMoved(dragged.prop('id'));
            if (canDrag) {
                removeDraggedFromMoveds(dragged);
            }
        }
    }
    return canDrag;
}

/**
 * Booleà que retorna si el jugador actual te la carta que vol moure o no
 * @param {carta} card 
 */
function playerHasCard(card) {
    var player = getSessionActualPlayer();
    var cards = getSessionPlayerCards(player);
    var ind = cards.indexOf(card);
    if (ind == -1) return false;

    if (cards.indexOf(card,ind+1) != -1) { // si té una segona carta igual

    } else {
        
    }
    var moved = getSessionMovedArray();
    // si la card està dins de moved, i només en te una (no te caracter |)-> return false;
    //TODO: Tenir en compte no tirar una carta repetida que ja hagi mogut i que no tingui dos cops.
    return  ind != -1;
}

/**
 * Indica si el jugador intenta retornar al panell una carta que havia mogut o no
 * @param {carta que es vol moure} card 
 */
function playerHasMoved(card) {
    var moves = getSessionMovedArray();
    var ind = moves.indexOf(card);
    return ind != -1;
}