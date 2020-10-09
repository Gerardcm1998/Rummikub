
/**
 * Genera codi HTML pel destí source
 * @param {Div on emmagatzemar el html} source 
 */
function getHTML(source) {
    var numberOfPlayers = getNumberOfPlayers();
    var code = "";
    switch (source) {
        case "playerNamesInput" : 
            code = '<br>';
            for (i = 1; i <= numberOfPlayers; ++i) {
                code += `<label for="player${i}">Jugador ${i}:</label>`;
                code += `<input id="playerName${i}" class="playersInput" type="text" name="playerName${i}"><br><br>`;
            }
            code += "<br>";
        break;

        case "playerNames": 
            for (i=1; i <= numberOfPlayers; ++i) {
                var playerName = getPlayerName(i);
                code += `<label id="player${i}" class="playerNotSelected">${playerName}</label>`;
            }
        break;

        case "openTokens" : 
            for (i=1; i<=numberOfPlayers;++i) {
                playerName = getPlayerName(i);
                code += `<a href="./resources/html/player${i}.html" onclick="$(this).prop('style','display:none')" target="_blank" class="playerNotSelected">${playerName}</a>`
            }
        break;
        
        case "boardDiv" : 
            code = "<table>";
            for (row = 1; row <= 16; ++row) {
                code += "<tr>";
                for (col = 1; col <= 25; ++col) {
                    code += `<td id="table-${row}-${col}" class="emptyCell" ondragover="allowDrop(event)" ondrop="drop(event)"></td>`;
                }
                code += "</tr>";
            }
            code += "</table>";
        break;

    }
    $("#"+source).html(code);
}

/**
 * Crea el panell inferior amb les cartes movibles
 * @param {nuumero del panell} n 
 */
function createPanel(n) {
    $("#cardPanelsDiv").show();
    var code = "<table>";
    if (n != 0) {
        for (row = 1; row <= 4; ++row) {
            code += "<tr>";
            for (col = 1; col <= 13; ++col) {
                if (row==1) {
                    code += `<td id="panel${n}-${row}-${col}" class='redCards' draggable="true" ondragstart="dragStart(event)" > `;
                } else if (row==2) {
                    code += `<td id="panel${n}-${row}-${col}" class='blueCards' draggable="true" ondragstart="dragStart(event)" > `;
                } else if (row==3) {
                    code += `<td id="panel${n}-${row}-${col}" class='greenCards' draggable="true" ondragstart="dragStart(event)" > `;
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
        for (row = 1; row <=2; ++row) {
            code += `<tr> <td id="joker-${row}" class="jokerCards" draggable="true" ondragstart="dragStart(event)">*</td></tr>`;
        }
        code += `</table>`;
        $(`#jokerPanel`).html(code);
    }
}

/**
 * Genera el HTML dels panells de cates del jugador n
 * @param {numero de jugador} n 
 */
function generatePlayerPanelsHTML(n) {
    var code = "<table>";
    for (row = 1; row <= 4; ++row) {
        code += "<tr>";
        for (col = 1; col <= 14; ++col) {
            if (row == 1 || row == 4) {
                if (col == 14) continue;
			}
            code += `<td id='player${n}-${row}-${col}'></td>`;
        }
        code += "</tr>";
    }
    code += "</table>";
    $(`#player${n}Panel`).html(code);
}