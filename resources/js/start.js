
function play() {
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
    var players = '<br>';
    for (i = 1; i <= numberOfPlayers; ++i) {
        players += `<label for="player${i}">Player ${i}:</label>`;
        players += `<input id="playerName${i}" class="playersInput" type="text" name="playerName${i}"><br><br>`;
    }
    players += "<br>";
    $("#playerNamesInput").html(players);
}

function showTokenLinks() {
    var numberOfPlayers = getNumberOfPlayers();
    initializeCards();
    setPlayerNames();
    $("#openTokensDiv").show();
    $("#playersDiv").hide();
    let code = '';
    for (i=1; i<=numberOfPlayers;++i) {
        playerName = getPlayerName(i);
        code += `<a href="./resources/html/player${i}.html" onclick="$(this).prop('style','display:none')" target="_blank" class="playerNotSelected">${playerName}</a>`
    }
    $("#openTokens").html(code);
}

/**
 * Creates the table and the auxiliary tokens, and write the player names above the table
 */
function start() {
    $("#initialMargin").hide();
    $("#playersDiv").hide();
    $("#openTokensDiv").hide();
    $("#playerNames").show();
    writePlayerNames();
    createBoard();
    createPanels();
}

/**
 * Writes the player names above the table
 */
function writePlayerNames() {
    var numberOfPlayers = getNumberOfPlayers();
    var player = getPlayerName(1);
    var code = `<label id="player1" class="playerSelected">${player}</label>`;
    for (i=2; i <= numberOfPlayers; ++i) {
        var playerName = getPlayerName(i);
        code += `<label id="player${i}" class="playerNotSelected">${playerName}</label>`;
    }
    $("#playerNames").html(code);
}

/**
 * Creates the board
 */
function createBoard() {
    $("#panel").show();
    var code = "<table>";
    for (row = 1; row <= 16; ++row) {
        code += "<tr>";
        for (col = 1; col <= 25; ++col) {
            code += `<td id="table-${row}-${col}" ondragover="allowDrop(event)" ondrop="drop(event)"></td>`;
        }
        code += "</tr>";
    }
    code += "</table>";
    $("#tableDiv").html(code);
    setSessionBoard();
}

/**
 * creates the panel tokens
 */
function createPanels() {
    createPanel(1);
    createPanel(0);
    createPanel(2);
    setSessionPanel();
}

function createPanel(n) {
    $("#cardPanelsDiv").show();
    if (n != 0) {
        let code = "<table>";
        for (row = 1; row <= 4; ++row) {
            code += "<tr>";
            for (col = 1; col <= 13; ++col) {
                if (row==1) {
                    code += `<td id="panel${n}-${row}-${col}" class='redCards' draggable="true" ondragstart="dragStart(event)"> `;
                } else if (row==2) {
                    code += `<td id="panel${n}-${row}-${col}" class='blueCards' draggable="true" ondragstart="dragStart(event)"> `;
                } else if (row==3) {
                    code += `<td id="panel${n}-${row}-${col}" class='greenCards' draggable="true" ondragstart="dragStart(event)"> `;
                } else if (row==4) {
                    code += `<td id="panel${n}-${row}-${col}" class='yellowCards' draggable="true" ondragstart="dragStart(event)"> `;
                }
                code += col+"</td>";
            }
            code += "</tr>";
        }
        code += "</table>";
        $(`#cardsPanel${n}`).html(code);
    } else {
        let code = `<table>`;
        for (row = 1; row <=2; ++row) {
            code += `<tr> <td id="joker-${row}" class="jokerCards" draggable="true" ondragstart="dragStart(event)" ondrag="dragging(event)">*</td></tr>`;
        }
        code += `</table>`;
        $(`#jokerPanel`).html(code);
    }
}

