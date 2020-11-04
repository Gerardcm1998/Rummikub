
/**
 * S'executa en iniciar l'HTML d'un jugador en cas que estigui canviant el torn.
 * @param {player number} n 
 */
function playerChangeTurn(n) {
    window.document.title = "Cartes de " + getPlayerName(n);
    $(`#titlePlayer`).text(`Cartes de ${getPlayerName(n)}`);
    var Cards = window.opener.getSessionCards();
    if (window.opener.sessionStorage.getItem(`player${n}Panel`) == null) { // Inicialització a l'inici de la partida 
        generatePlayerPanelsHTML(n);
        initializePlayerSets(n);
        Cards = getSessionCards();
    } else {
        $(`#playerPanel`).html(window.opener.sessionStorage.getItem(`player${n}Panel`));
        var movedCards = window.opener.getSessionMovedArray().length != 0;
        if (movedCards) {
            $(`#playerNewPanel`).hide();
            throwCards(n);
        } else if (window.opener.getSessionCards().length != 0) { // Si queden cartes per robar
            $(`#playerNewPanel`).show();
            takeCard(n);
            Cards = getSessionCards();
        }
    }
    if (window.opener.getSessionCards().length != 0) {
        var playerCards = getSessionPlayerCards(n);
        window.opener.sessionStorage.setItem("Cards", JSON.stringify(Cards));
        window.opener.sessionStorage.setItem(`player${n}Panel`, $(`#playerPanel`).html());
        window.opener.sessionStorage.setItem(`player${n}Cards`, JSON.stringify(playerCards));
        window.opener.setSessionMovedArray([]);
    }
    window.opener.$("#cardsLeft").text(`Cartes restants: ${window.opener.getSessionCards().length}`);
    window.close();
}

/**
 * S'executa en iniciar l'HTML d'un jugador en cas que no estigui canviant el torn.
 * @param {player number} n 
 */
function playerOpen(n) {
    window.document.title = "Cartes de " + getPlayerName(n);
    $(`#titlePlayer`).text(`Cartes de ${getPlayerName(n)}`);
    $(`#playerPanel`).html(window.opener.sessionStorage.getItem(`player${n}Panel`));
    $(`#playerNewPanel`).show();
    var playerLastCard = JSON.parse(window.opener.sessionStorage.getItem(`player${n}LastCard`));
    $(`#playerNewCard`).text(playerLastCard[0]);
    $(`#playerNewCard`).addClass(playerLastCard[1]);
}