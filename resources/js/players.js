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
 * Creem la taula on escriurem el set del jugador, en el HTML que hem obert
 * @param {Id del div del panell del jugador, de format "player_Board"} divId 
 * @param {Numero de jugador} playerNumber 
 */
function initializePlayer(n) {
    generatePlayerPanelsHTML(n);
    initializeSets(n);
}