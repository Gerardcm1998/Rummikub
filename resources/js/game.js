
function setSessionBoard() {
    sessionStorage.setItem("Board",$("#tableDiv").html());
}

function getSessionBoard() {
    $("#tableDiv").html(sessionStorage.getItem("Board"));
}

function setSessionPanel() {
    sessionStorage.setItem("Panel1",$("#cardsPanel1").html());
    sessionStorage.setItem("Panel2",$("#cardsPanel2").html());
    sessionStorage.setItem("JokerPanel",$("#jokerPanel").html());
}

function getSessionPanel() {
    $("#cardsPanel1").html(sessionStorage.getItem("Panel1"));
    $("#cardsPanel2").html(sessionStorage.getItem("Panel2"));
    $("#jokerPanel").html(sessionStorage.getItem("JokerPanel"));
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

