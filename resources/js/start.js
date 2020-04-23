
/**
 * Inicia i mostra els primers camps
 */
function play() {
    sessionStorage.clear();
    $("#playButtonDiv").hide();
    $("#playersDiv").show();
    $("#numberPlayersDiv").show();
}

/**
 * Demana el nom de cada jugador
 */
function askPlayersName() {
    setNumberOfPlayers($("#numberOfPlayers").val());
    var numberOfPlayers = getNumberOfPlayers();
    if (numberOfPlayers>4 || numberOfPlayers<2) return;
    $("#playerNamesDiv").show();
    getHTML("playerNamesInput");
}

/**
 * Ensenya els links per a poder veure les cartes de cada jugador
 */
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

