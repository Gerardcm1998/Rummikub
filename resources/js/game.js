
/**
 * Canvia el torn si les cartes estan de manera correcte en el taulell. 
 * En cas que no, retorna una alerta.
 * @param {Id del jugador que finalitza el torn} actualPlayerId 
 */
function changeTurn() {
    var actualPlayer = getSessionActualPlayer();
    var numberOfPlayers = getNumberOfPlayers();
    if (ableToFinishTurn()) {
        // Si ha tirat les ultimes cartes que tenia
        if (getSessionPlayerCards(actualPlayer).length == getSessionMovedArray().length) {
            window.open(`./resources/html/victory.html`, `win`);
            return;
        }
        openPlayer(actualPlayer, isOpening = false);
        $("#player" + actualPlayer).removeClass("playerSelected");
        $("#player" + actualPlayer).addClass("playerNotSelected");
        $("#finishTurn").prop("innerText", "ROBAR CARTA")
        if (actualPlayer >= numberOfPlayers) {
            startTurn(1);
        } else {
            startTurn(actualPlayer + 1);
        }
    } else {
        alert("El taulell no esta ben insertat!")
        return;
    }
}

/**
 * Retorna true si totes les peces estan ben posades, i es pot finalitzar el torn.
 * Sinó, retornarà un false.
 */
function ableToFinishTurn() {
    //TODO: Fer la comprovació de si totes les peces del taulell estan ben posades
    return true;
}

/**
 * Obre l'HTML del jugador a la banda corresponent de la pantalla
 * i crida a les funcions de canvi de torn si cal.
 * @param {numero de jugador} n 
 * @param {si nomes s'esta obrint és true, si s'està canviant el torn és false} isOpening 
 */
function openPlayer(n, isOpening) {
    var playerWindow;
    var open = isOpening ? "open" : "";
    switch (n) {
        case (1):
            playerWindow =
                window.open(`./resources/html/player.html`, `${open}player${n}`, "width=520, height=190, resizable=no,left=0,top=0");
            break;
        case (2):
            playerWindow =
                window.open(`./resources/html/player.html`, `${open}player${n}`, "width=520, height=190, resizable=no,left=1000,top=0");
            break;
        case (3):
            playerWindow =
                window.open(`./resources/html/player.html`, `${open}player${n}`, "width=520, height=190, resizable=no,left=0,top=700");
            break;
        case (4):
            playerWindow =
                window.open(`./resources/html/player.html`, `${open}player${n}`, "width=520, height=190, resizable=no,left=1000,top=700");
            break;
        default:
            break;
    }
}

/**
 * Inicia el torn del seguent jugador i guarda el taulell i panells a sessió
 * @param {numero de jugador} player 
 */
function startTurn(player) {
    $("#player" + player).removeClass("playerNotSelected");
    $("#player" + player).addClass("playerSelected");
    setSessionBoard();
    setSessionPanels();
    setSessionActualPlayer();
}

/**
 * Desfà els canvis del taulell i panells recuperant els de sessió
 */
function undo() {
    getSessionBoard();
    getSessionPanels();
    setSessionMovedArray([]);
    $("#finishTurn").prop("innerText", "ROBAR CARTA");
}

/**
 * Indica el nombre total de punts per mostrar-lo a la taula de victòria.
 * @param {player number} n 
 */
function getCurrentGamePlayerPoints(n) { 
    if (n == window.opener.getSessionActualPlayer()) {
        return 0;
    }
    var cards = window.opener.getSessionPlayerCards(n);
    var points = 0;
    cards.forEach(c => {
        if (c.split("-").length == 1) { // si és un joker, té format "joker"
            points += 20;
        } else { // Si no és un joker, té format "fila-columna"
            points += parseInt(c.split("-")[1]);
        }
    });
    return points;
}

function playAgain() {
    window.open("../../index.html");
}