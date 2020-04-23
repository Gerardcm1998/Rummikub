
/**
 * Guara el nombre de jugadors a sessió
 * @param {nombre de jugadors} np 
 */
function setNumberOfPlayers(np) {
    sessionStorage.setItem("numberOfPlayers", np);
}

/**
 * Recupera el nombre de jugadors de sessió
 */
function getNumberOfPlayers() {
    return parseInt(sessionStorage.getItem("numberOfPlayers"));
}

/**
 * Guarda el nom dels jugadors a sessió
 */
function setPlayerNames() {
    var numberOfPlayers = getNumberOfPlayers();
    for (i=1; i<=numberOfPlayers;++i) {
        var player = $("#playerName"+i).val();
        sessionStorage.setItem("Player"+i, player);
    }
}

/**
 * Recupera el nom del jugador n de sessió
 * @param {numero de jugador} n 
 */
function getPlayerName(n) {
    var numberOfPlayers = getNumberOfPlayers();
    if (n <= numberOfPlayers) {
        return sessionStorage.getItem("Player"+n);
    }
}

/**
 * Agafem les cartes restants de sessió
 */
function getSessionCards() {
    return JSON.parse(sessionStorage.getItem("Cards"));
}

/**
 * Guardem les cartes restants a sessió
 * @param {Cartes restants} Cards 
 */
function setSessionCards(Cards) {
    sessionStorage.setItem("Cards",JSON.stringify(Cards))
}


/**
 * Guardem el taulell a sessió
 */
function setSessionBoard() {
    sessionStorage.setItem("Board",$("#boardDiv").html());
}

/**
 * Recuperem el taulell de sessió
 */
function getSessionBoard() {
    $("#boardDiv").html(sessionStorage.getItem("Board"));
}

/**
 * Guardem els panells de cartes de sessió
 */
function setSessionPanels() {
    sessionStorage.setItem("Panel1",$("#cardsPanel1").html());
    sessionStorage.setItem("Panel2",$("#cardsPanel2").html());
    sessionStorage.setItem("PanelJokers",$("#jokerPanel").html());
}

/**
 * Recuperem els panells de cartes de sessió
 */
function getSessionPanels() {
   getSessionPanel(1);
   getSessionPanel(2);
   getSessionPanel(0);
}

/**
 * Retorna el panell n de cartes de sessió
 * @param {numero de panell} n 
 */
function getSessionPanel(n) {
    if (n!=0) {
        $(`#cardsPanel${n}`).html(sessionStorage.getItem(`Panel${n}`));
    } else {
        $("#jokerPanel").html(sessionStorage.getItem("PanelJokers"));
    }
}

/**
 * Guarda el jugador actual de sessió
 */
function setSessionActualPlayer() {
    var actualPlayerId = $(".playerSelected").prop('id');
    var playerNumber = actualPlayerId.charAt(actualPlayerId.length-1);
    sessionStorage.setItem("ActualPlayer", playerNumber);
}

/**
 * Retorna el jugador actual de sessió
 */
function getSessionActualPlayer() {
    return parseInt(sessionStorage.getItem("ActualPlayer"));
}
/**
 * Retorna el vector de cartes mogudes de sessió
 */
function getSessionMovedArray() {
    return JSON.parse(sessionStorage.getItem("Moved"));
}

/**
 * Guarda el vector de cartes mogudes a sessió
 * @param {vector de cartes mogudes} moved 
 */
function setSessionMovedArray(moved) {
    sessionStorage.setItem("Moved",JSON.stringify(moved))
}

/**
 * Introdueix la carta moguda al vector de moguts
 * @param {carta moguda} dragged 
 */
function putDraggedOnMoveds(dragged) {
    console.log(`putting card ${dragged.prop('id')} in moveds`);
    var moves = getSessionMovedArray();
    moves.push(dragged.prop('id'));
    setSessionMovedArray(moves);
}

/**
 * Treu la carta moguda del vector de moguts
 * @param {carta mogda} dragged 
 */
function removeDraggedFromMoveds(dragged) {
    console.log(`removing card ${dragged.prop('id')} from moveds`);
    var moves = getSessionMovedArray();
    var ind = moves.indexOf(dragged.prop('id'));
    if (ind == -1) {
        return false;
    }
    moves.splice(ind,1);
    setSessionMovedArray(moves);
    return true;
}