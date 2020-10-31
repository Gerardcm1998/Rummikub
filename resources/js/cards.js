
/**
 * Creem el vector de 106 Cards 
 */
function initializeCards() {
    var Cards = [];
	for (i = 0; i < 106; ++i) {
		let pal;
		if (i < 26) pal = 1;
		else if (i < 52) pal = 2;
		else if (i < 78) pal = 3;
		else if (i < 104) pal = 4;
		else pal = 5;
		
		Cards[i] = pal*100 + (i+1)%13;
    }	
    setSessionCards(Cards);
}

/**
 * Creem els sets inicials i els escrivim a l'HTML de cada jugador
 * @param {player number} player 
 */
function initializePlayerSets(player) {
    var Cards = window.opener.getSessionCards();
    var nomcolor = ["redCards","blueCards","greenCards","yellowCards","jokerCards"];
    setSessionPlayerCards(player,[]);
    for (j = 0; j < 14; ++j) {
        var numberOfCards = Cards.length;
        var r = Math.floor(Math.random()*numberOfCards);
        var numCard = Cards[r];
        var fila = Math.trunc(numCard/100);
        var colu = numCard-(100*fila);
        if (colu == 0) colu = 13;
        putCardIntoPlayerHTML(player,fila,colu,nomcolor);
        setSessionPlayerCard(player,fila,colu);
        Cards.splice(r,1);
    }
    setSessionCards(Cards);
}

/**
 * Introdueix la carta al panell del jugador a la fila i columna corresponents i amb la seva classe.
 * @param {numero de jugador} player 
 * @param {fila} fila 
 * @param {columna} colu 
 * @param {array de class segons el color} nomcolor 
 */
function putCardIntoPlayerHTML(player,fila,colu,nomcolor) {
    if (fila == 5) { // Nomes hi ha les cartes 501 i 502, que son jokers
        cellOf(player,colu+1,14).text("*"); 
        cellOf(player,colu+1,14).addClass(nomcolor[fila-1]);

        $(`#player${player}NewCard`).text("*"); 
        $(`#player${player}NewCard`).addClass(nomcolor[fila-1])
    } else {
        if (cellOf(player,fila,colu).text() == "") {
            cellOf(player,fila,colu).text(colu);
        } else {
            cellOf(player,fila,colu).text(colu+"|"+colu);
        }
        cellOf(player,fila,colu).addClass(nomcolor[fila-1]);

        $(`#player${player}NewCard`).text(colu);
        $(`#player${player}NewCard`).addClass(nomcolor[fila-1]);
    }
}

/**
 * Agafem una carta nova i la posem a l'HTML del jugador
 * @param {player number} player
 */
function takeCard(player) {
    var Cards = window.opener.getSessionCards();
    var numberOfCards = Cards.length;
    var nomcolor = ["redCards", "blueCards", "greenCards", "yellowCards", "jokerCards"];
    var r = Math.floor(Math.random() * numberOfCards);
    var numCard = Cards[r];
    var fila = Math.trunc(numCard/100);
    var colu = numCard-(100*fila);
    if (colu == 0) colu = 13;
    
    putCardIntoPlayerHTML(player,fila,colu,nomcolor);
    setSessionPlayerCard(player,fila,colu);
    Cards.splice(r, 1);
    setSessionCards(Cards);
}

/**
 * Treu les cartes que el jugador ha tirat
 * @param {player number} player 
 */
function throwCards(player) {
    var moved = window.opener.getSessionMovedArray();
    var cards = window.opener.getSessionPlayerCards(player);
    moved.forEach(m => {
        var card;
        if (m.split("-").length == 3) { // Si no és un joker
            var row = m.split("-")[1];
            var col = m.split("-")[2];
            card = cellOf(player,row,col);
            var ind = cards.indexOf(`${row}-${col}`);
            if (cards.indexOf(`${row}-${col}`,ind+1) != -1) { // si tens dues cartes repetides
                card.text(card.text().split("|")[0]);
            } else {
                card.removeClass();
                card.addClass("emptyCell")
                card.text("");
            }
            cards.splice(cards.indexOf(`${row}-${col}`),1);
        } else {
            card = cellOf(player,2,14); 
            if(card.prop("class") != "jokerCards"){
                card = cellOf(player,3,14);
            }
            cards.splice(cards.indexOf("joker"),1);
            card.removeClass();
            card.addClass("emptyCell")
            card.text("");
        }
    });
    setSessionPlayerCards(player,cards);
}

/**
 * Introdueix la carta moguda al vector de moguts
 * @param {dragged card} dragged 
 */
function putDraggedOnMoveds(dragged) {
    console.log(`putting card ${dragged.prop('id')} in moveds`);
    var moves = getSessionMovedArray();
    moves.push(dragged.prop('id'));
    setSessionMovedArray(moves);
}

/**
 * Treu la carta moguda del vector de moguts
 * @param {dragged card} dragged 
 */
function removeDraggedFromMoveds(dragged) {
    console.log(`removing card ${dragged.prop('id')} from moveds`);
    var moves = getSessionMovedArray();
    var ind = moves.indexOf(dragged.prop('id'));
    if (ind == -1) {
        return false;
    }
    moves.splice(ind,1);
    setSessionMovedArray(moves);
    return true;
}