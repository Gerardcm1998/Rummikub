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
 * Creates the table and the auxiliary tokens, and write the player names above the table
 */
function startOld() {
    $("#playersDiv").hide();
    $("#openTokensDiv").hide();
    $("#playerNames").show();
    getHTML("playerNames");
    createBoard();
    createPanels();
    startTurn(1);
    setSessionMovedArray([]);
}

/**
 * Creates the board
 */
function createBoard() {
    $("#panel").show();
    getHTML("boardDiv");
}

/**
 * creates the panel tokens
 */
function createPanels() {
    createPanel(1);
    createPanel(0);
    createPanel(2);
}

