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

    if (canDrag(dragged, dropped)) {
        aux.insertBefore(dropped);
        dropped.insertBefore(dragged);
        dragged.insertAfter(aux);
        $("#auxDiv").append(aux);
        if (arraysEqual(getSessionMovedArray(), [])) {
            $("#finishTurn").prop("innerText", "ROBAR CARTA");
        } else {
            $("#finishTurn").prop("innerText", "FINALITZAR TORN");
        }
    }

}

function canDrag(dragged, dropped) {
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
 * Booleà que retorna si el jugador actual posseeix la carta que vol moure
 * @param {carta en format "f-c" o "joker"} card 
 */
function playerHasCard(card) {
    var player = getSessionActualPlayer();
    var cards = getSessionPlayerCards(player); // format "f-c" o "joker"
    var ind = cards.indexOf(card);
    if (ind == -1) {
        return false;
    }
    var count = 1;
    if (cards.indexOf(card, ind + 1) != -1) { // si té una segona carta igual
        ++count;
    }
    var moved = getSessionMovedArray(); // format "paneli-f-c" o "joker-i"
    if (arraysEqual(moved, [])) {
        return true;
    }
    var pos = -1, iter = 0;
    c = moved.find(m => m.endsWith(card) || m.startsWith(card));
    while (iter < count) {
        pos = moved.indexOf(c, pos + 1);
        if (pos == -1) return true;
        ++iter;
    }
    return false;
}

/**
 * Indica si la carta que el jugador intenta retornar al panell la havia tirat ell o no
 * @param {carta que es vol moure} card 
 */
function playerHasMoved(card) {
    var moves = getSessionMovedArray();
    var ind = moves.indexOf(card);
    return ind != -1;
}