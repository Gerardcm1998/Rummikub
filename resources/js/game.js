
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
function setSessionPanel() {
    sessionStorage.setItem("Panel1",$("#cardsPanel1").html());
    sessionStorage.setItem("Panel2",$("#cardsPanel2").html());
    sessionStorage.setItem("PanelJokers",$("#jokerPanel").html());
}

/**
 * Recuperem els panells de cartes de sessió
 */
function getSessionPanel() {
    $("#cardsPanel1").html(sessionStorage.getItem("Panel1"));
    $("#cardsPanel2").html(sessionStorage.getItem("Panel2"));
    $("#jokerPanel").html(sessionStorage.getItem("PanelJokers"));
}

/**
 * Obre la finestra del jugador per a introduir una carta al html del jugador 
 * en cas que el taulell sigui correcte
 * @param {id del jugador actual} actualPlayerId 
 */
function stealToken(actualPlayerId) {
    if (ableToFinishTurn()) {
        var playerNumber = parseInt(actualPlayerId.charAt(actualPlayerId.length-1));
        window.open(`./resources/html/player${playerNumber}.html`,'_blank')

        //TODO: Fer que la funcio takeCard afegeixi una carta a l'html del jugador

        //takeCard(playerNumber);
        changeTurn(actualPlayerId);
    }
}

/**
 * Retorna true si totes les peces estan ben posades, i es pot finalitzar el torn.
 * Sinó, retornarà un false.
 */
function ableToFinishTurn() {
    //TODO: Fer la comprovació de si totes les peces del taulell estan ben posades
    return true;
}

/**
 * Canvia el torn si les cartes estan de manera correcte en el taulell. 
 * En cas que no, retorna una alerta.
 * @param {Id del jugador que finalitza el torn} actualPlayerId 
 */
function changeTurn (actualPlayerId) {
    var actualPlayer = parseInt(actualPlayerId.charAt(actualPlayerId.length-1));
    var numberOfPlayers = getNumberOfPlayers();
    var isCorrectBoard = ableToFinishTurn();
    if (!isCorrectBoard) {
        alert("El taulell no esta ben insertat!")
        return;
    } else {
        $("#player"+actualPlayer).removeClass("playerSelected");
        $("#player"+actualPlayer).addClass("playerNotSelected");
        if (actualPlayer >= numberOfPlayers) {
            startTurn(1);
        } else {
            startTurn(actualPlayer+1);
        }
    }
}

/**
 * Inicia el torn del seguent jugador i guarda el taulell i panells a sessió
 * @param {numero de jugador} player 
 */
function startTurn(player) {
    $("#player"+player).removeClass("playerNotSelected");
    $("#player"+player).addClass("playerSelected");
    setSessionBoard();
    setSessionPanel();
}

/**
 * Desfà els canvis del taulell i panells recuperant els de sessió
 */
function undo() {
    getSessionBoard();
    getSessionPanel();
}

