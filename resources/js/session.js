
/**
 * Recupera el nombre de jugadors de sessió
 */
function getNumberOfPlayers() {
    return parseInt(sessionStorage.getItem("numberOfPlayers"));
}

/**
 * Guara el nombre de jugadors a sessió
 * @param {nombre de jugadors} np 
 */
function setNumberOfPlayers(np) {
    sessionStorage.setItem("numberOfPlayers", np);
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
 * Recuperem el taulell de sessió
 */
function getSessionBoard() {
    $("#boardDiv").html(sessionStorage.getItem("Board"));
}

/**
 * Guardem el taulell a sessió
 */
function setSessionBoard() {
    sessionStorage.setItem("Board",$("#boardDiv").html());
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
 * Guardem els panells de cartes de sessió
 */
function setSessionPanels() {
    sessionStorage.setItem("Panel1",$("#cardsPanel1").html());
    sessionStorage.setItem("Panel2",$("#cardsPanel2").html());
    sessionStorage.setItem("PanelJokers",$("#jokerPanel").html());
}

/**
 * Retorna el jugador actual de sessió
 */
function getSessionActualPlayer() {
    return parseInt(sessionStorage.getItem("ActualPlayer"));
}

/**
 * Guarda el jugador actual a sessió
 */
function setSessionActualPlayer() {
    var actualPlayerId = $(".playerSelected").prop('id');
    var playerNumber = actualPlayerId.charAt(actualPlayerId.length-1);
    sessionStorage.setItem("ActualPlayer", playerNumber);
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
 * Retorna l'array de cartes del jugador n
 * @param {numero jugador} n 
 */
function getSessionPlayerCards(n) {
    return JSON.parse(sessionStorage.getItem(`player${n}Cards`));
}

/**
 * Afegeix la carta fila-columna a l'array de cartes del jugador en sessió
 * @param {numero jugador} player 
 * @param {fila} row 
 * @param {columna} col 
 */
function setSessionPlayerCard(player,row,col) {
    var cards = getSessionPlayerCards(player);
    if (row == 5) {
        console.log(`player ${player} has obtained a joker`)
        cards.push(`joker`);
    } else {
        var card = cellOf(player,row,col);
        console.log(`putting card ${card.prop('id')} into player ${player} cards`);
        cards.push(`${row}-${col}`);
    }
    setSessionPlayerCards(player,cards);
}

/**
 * Guarda l'html de les cartes del jugador en sessió
 * @param {numero jugador} player 
 * @param {fila} row 
 * @param {columna} col 
 */
function setSessionPlayerCards(player, obj) {
    sessionStorage.setItem(`player${player}Cards`,JSON.stringify(obj));
}
