
/**
 * Canvia el torn si les cartes estan de manera correcte en el taulell. 
 * En cas que no, retorna una alerta.
 * @param {Id del jugador que finalitza el torn} actualPlayerId 
 */
function changeTurn () {
    var actualPlayer = getSessionActualPlayer();
    var numberOfPlayers = getNumberOfPlayers();
    if (ableToFinishTurn()) {
        if ( ! movedCards()) {
            stealToken(actualPlayer);
        } else {
            throwCards(actualPlayer);
        }
        $("#player"+actualPlayer).removeClass("playerSelected");
        $("#player"+actualPlayer).addClass("playerNotSelected");
        if (actualPlayer >= numberOfPlayers) {
            startTurn(1);
        } else {
            startTurn(actualPlayer+1);
        }
    } else {
        alert("El taulell no esta ben insertat!")
        return;
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
 * Booleà que indica si el jugador ha tirat cartes
 */
function movedCards() {
    return !arraysEqual(getSessionMovedArray(),[]);
}

/**
 * Obre el panell del jugador per a introduir una carta
 * @param {numero de jugador} actualPlayer 
 */
function stealToken(actualPlayer) {
    window.open(`./resources/html/player${actualPlayer}.html`,'_blank');
    takeCard(actualPlayer);
}

/**
 * Inicia el torn del seguent jugador i guarda el taulell i panells a sessió
 * @param {numero de jugador} player 
 */
function startTurn(player) {
    $("#player"+player).removeClass("playerNotSelected");
    $("#player"+player).addClass("playerSelected");
    setSessionBoard();
    setSessionPanels();
    setSessionActualPlayer();
    setSessionMovedArray([]);
}

/**
 * Desfà els canvis del taulell i panells recuperant els de sessió
 */
function undo() {
    getSessionBoard();
    getSessionPanels();
    setSessionMovedArray([]);
}

