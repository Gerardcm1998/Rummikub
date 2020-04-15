
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
        players += '<label for="player'+i+'">Player '+i+':</label> ';
        players += '<input id="playerName'+i+'" class="playersInput" type="text" name="playerName'+i+'"><br><br>';
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
        code += '<a href="./resources/html/player'+i+'.html" target="_blank" class="playerNotSelected">'+playerName+'</a>'
    }
    $("#openTokens").html(code);
}

function start() {
    $("#initialMargin").hide();
    $("#playersDiv").hide();
    $("#openTokensDiv").hide();
    $("#playerNames").show();
    writePlayerNames();
    createTable();
    createCards();
}

function writePlayerNames() {
    var numberOfPlayers = getNumberOfPlayers();
    var player = getPlayerName(1);
    var code = '<label id="player1" class="playerSelected">'+player+'</label>';
    for (i=2; i <= numberOfPlayers; ++i) {
        var playerName = getPlayerName(i);
        code += '<label id="player'+i+'" class="playerNotSelected">'+playerName+'</label>';
    }
    $("#playerNames").html(code);
}

function createTable () {
    $("#panel").show();
    var table = "<table>";
    for (i = 1; i <= 16; ++i) {
        table += "<tr>";
        for (j = 1; j <= 25; ++j) {
            table += "<td></td>";
        }
        table += "</tr>";
    }
    table += "</table>";
    $("#tableDiv").html(table);
}

function createCards() {
    $("#cardPanelsDiv").show();
    let table = "<table>";
    for (i = 1; i <= 4; ++i) {
        table += "<tr>";
        for (j = 1; j <= 13; ++j) {
            if (i==1)      table += "<td class='redCards'> ";
            else if (i==2) table += "<td class='blueCards'> ";
            else if (i==3) table += "<td class='greenCards'> ";
            else if (i==4) table += "<td class='yellowCards'> ";
            
            table += j+"</td>";
        }
        table += "</tr>";
    }
    table += "</table>";
    $("#cardsPanel1").html(table);
    $("#cardsPanel2").html(table);
}

