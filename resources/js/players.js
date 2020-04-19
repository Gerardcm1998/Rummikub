
function setNumberOfPlayers(np) {
    sessionStorage.setItem("numberOfPlayers", np);
}

function getNumberOfPlayers() {
    return parseInt(sessionStorage.getItem("numberOfPlayers"));
}

function setPlayerNames() {
    var numberOfPlayers = getNumberOfPlayers();
    for (i=1; i<=numberOfPlayers;++i) {
        var player = $("#playerName"+i).val();
        sessionStorage.setItem("Player"+i, player);
    }
}

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
function initializePlayer(divId, playerNumber) {
    var table = "<table>";
    for (i = 1; i <= 4; ++i) {
        table += "<tr>";
        for (j = 1; j <= 14; ++j) {
			if (i == 1 || i == 4) {
				if (j == 14) continue;
			}
           	table += "<td id='player"+playerNumber+"-"+i+"-"+j+"'></td>";
        }
        table += "</tr>";
    }
    table += "</table>";
    $("#"+divId).html(table);
    initializeSets(playerNumber);
}