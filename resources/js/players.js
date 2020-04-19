
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
function initializePlayer(n) {

    document.title = "Cartes de "+ getPlayerName(n);
    $(`#titlePlayer${n}`).text(`Cartes de ${getPlayerName(n)}`);

    var table = "<table>";
    for (row = 1; row <= 4; ++row) {
        table += "<tr>";
        for (col = 1; col <= 14; ++col) {
            if (row == 1 || row == 4) {
                if (col == 14) continue;
			}
            table += `<td id='player${n}-${row}-${col}'></td>`;
        }
        table += "</tr>";
    }
    table += "</table>";
    $(`#player${n}Board`).html(table);
    initializeSets(n);
}