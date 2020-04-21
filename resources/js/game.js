
function setSessionBoard() {
    sessionStorage.setItem("Board",$("#boardDiv").html());
}

function getSessionBoard() {
    $("#boardDiv").html(sessionStorage.getItem("Board"));
}

function setSessionPanel() {
    sessionStorage.setItem("Panel1",$("#cardsPanel1").html());
    sessionStorage.setItem("Panel2",$("#cardsPanel2").html());
    sessionStorage.setItem("PanelJokers",$("#jokerPanel").html());
}

function getSessionPanel() {
    $("#cardsPanel1").html(sessionStorage.getItem("Panel1"));
    $("#cardsPanel2").html(sessionStorage.getItem("Panel2"));
    $("#jokerPanel").html(sessionStorage.getItem("PanelJokers"));
}


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
    setSessionBoard();
    setSessionPanel();
}

function undo() {
    getSessionBoard();
    getSessionPanel();
}

