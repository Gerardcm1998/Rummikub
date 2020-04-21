
function play() {
    sessionStorage.clear();
    hidePlayButton();
    showNumberPlayersInput();
}

function hidePlayButton() {
    $("#playButtonDiv").hide();
}

function showNumberPlayersInput() {
    $("#playersDiv").show();
    $("#numberPlayersDiv").show();
}

function askPlayersName() {
    setNumberOfPlayers($("#numberOfPlayers").val());
    var numberOfPlayers = getNumberOfPlayers();
    if (numberOfPlayers>4 || numberOfPlayers<2) return;
    $("#playerNamesDiv").show();
    getHTML("playerNamesInput");
}

function showTokenLinks() {
    initializeCards();
    setPlayerNames();
    $("#openTokensDiv").show();
    $("#playersDiv").hide();
    getHTML("openTokens");
}

/**
 * Creates the table and the auxiliary tokens, and write the player names above the table
 */
function start() {
    $("#initialMargin").hide();
    $("#playersDiv").hide();
    $("#openTokensDiv").hide();
    $("#playerNames").show();
    getHTML("playerNames");
    createBoard();
    createPanels();
    startTurn(1);
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

