
/**
 * Canvia el torn si les cartes estan de manera correcte en el taulell. 
 * En cas que no, retorna una alerta.
 * @param {Id del jugador que finalitza el torn} actualPlayerId 
 */
function changeTurn () {
    var actualPlayer = getSessionActualPlayer();
    var numberOfPlayers = getNumberOfPlayers();
    if (ableToFinishTurn()) {
        openPlayer(actualPlayer);
        $("#player"+actualPlayer).removeClass("playerSelected"); 
        $("#player"+actualPlayer).addClass("playerNotSelected");
        $("#finishTurn").prop("innerText","ROBAR CARTA")
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
 * Obre el panell del jugador 
 * @param {numero de jugador} i 
 */
function openPlayer(i) {
    window.open(`./resources/html/player${i}.html`,`player${i}`);
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
}

/**
 * Desfà els canvis del taulell i panells recuperant els de sessió
 */
function undo() {
    getSessionBoard();
    getSessionPanels();
    setSessionMovedArray([]);
    $("#finishTurn").prop("innerText","ROBAR CARTA");
}
