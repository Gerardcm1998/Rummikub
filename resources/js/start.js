/**
 * Compute and show ID
 */
function newGame() {
    sessionStorage.clear();

    //Connect to Database
    // dataBaseConnect()

    $("#startGame").hide();
    $("#newIdDiv").show();
    var gameId = Math.floor(Math.random()*100000);
    sessionStorage.setItem("GAMEID",gameId);
    $("#gameNameId").prop("value",gameId);
}

/**
 * Asks players name
 */
function askPlayerName() {
    $("#startGame").hide();
    $("#newIdDiv").hide();
    $("#newPlayerDiv").show();
}

/**
 * Show panel and player cards
 */
function start() {
    $("#newPlayerDiv").hide();
    $("#initialMargin").hide();
    createBoard();

    //TODO
}

/**
 * Creates the board
 */
function createBoard() {
    $("#panel").show();
    getHTML("boardDiv");
}
