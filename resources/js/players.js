
/**
 * Creem la taula on escriurem el set del jugador, en el HTML que hem obert
 * @param {Id del div del panell del jugador, de format "player_Board"} divId 
 * @param {Numero de jugador} playerNumber 
 */
function initializePlayer(n) {
    generatePlayerPanelsHTML(n);
    initializeSets(n);
}