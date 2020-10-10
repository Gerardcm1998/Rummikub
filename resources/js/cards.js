
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
    var Cards = getSessionCards();
    var nomcolor = ["redCards","blueCards","greenCards","yellowCards","jokerCards"];
    setSessionPlayerCards(player,[]);
    for (j = 0; j < 14; ++j) {
        var numberOfCards = Cards.length;
        var r = Math.floor(Math.random()*numberOfCards);
        var numCard = Cards[r];
        var fila = Math.trunc(numCard/100);
        var colu = numCard-(100*fila);
        if (colu == 0) colu = 13;
        putCard(player,fila,colu,nomcolor);
        setSessionPlayerCard(player,fila,colu);
        Cards.splice(r,1);
    }
    setSessionCards(Cards);
}

/**
 * Introdueix la carta al panell del jugador k a la fila i columna corresponents i amb la seva classe.
 * @param {numero de jugador} player 
 * @param {fila} fila 
 * @param {columna} colu 
 * @param {array de class segons el color} nomcolor 
 */
function putCard(player,fila,colu,nomcolor) {
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
    var Cards = getSessionCards();
    var numberOfCards = Cards.length;
    var nomcolor = ["redCards", "blueCards", "greenCards", "yellowCards", "jokerCards"];
    var r = Math.floor(Math.random() * numberOfCards);
    var numCard = Cards[r];
    var fila = Math.trunc(numCard/100);
    var colu = numCard-(100*fila);
    if (colu == 0) colu = 13;
    
    putCard(player,fila,colu,nomcolor);
    setSessionPlayerCard(player,fila,colu);
    Cards.splice(r, 1);
    setSessionCards(Cards);
}

/**
 * Treu les cartes que el jugador ha tirat
 * @param {numero de jugador} player 
 */
function throwCards(player) {
    // TODO: Eliminar cartes del panell del jugador
}