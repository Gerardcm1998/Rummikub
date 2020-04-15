
function stealToken(actualPlayerId) {
    giveToken();
    changeTurn(actualPlayerId);
}

function giveToken() {
    //TODO
}

function changeTurn (actualPlayerId) {
    var actualPlayer = parseInt(actualPlayerId.charAt(actualPlayerId.length-1));
    var numberOfPlayers = getNumberOfPlayers();
    finishTurn(actualPlayer);
    if (actualPlayer >= numberOfPlayers) {
        startTurn(1);
    } else {
        startTurn(actualPlayer+1);
    }
}

function finishTurn(player) {
    $("#player"+player).removeClass("playerSelected");
    $("#player"+player).addClass("playerNotSelected");
}

function startTurn(player) {
    $("#player"+player).removeClass("playerNotSelected");
    $("#player"+player).addClass("playerSelected");
}