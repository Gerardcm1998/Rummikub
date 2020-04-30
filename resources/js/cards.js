
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
function initializeSets(player) {
    var Cards = getSessionCards();
    var k = player;
    var nomcolor = ["redCards","blueCards","greenCards","yellowCards","jokerCards"];
    setSessionPlayerCards(player,[]);
    for (j = 0; j < 14; ++j) {
        var numberOfCards = Cards.length;
        var r = Math.floor(Math.random()*numberOfCards);
        var numCard = Cards[r];
        var fila = Math.trunc(numCard/100);
        var colu = numCard-(100*fila);
        if (colu == 0) colu = 13;
        putCard(k,fila,colu,nomcolor,true);
        Cards.splice(r,1);
    }
    setSessionCards(Cards);
}

/**
 * Introdueix la carta al panell del jugador k a la fila i columna corresponents i amb la seva classe.
 * @param {numero de jugador} k 
 * @param {fila} fila 
 * @param {columna} colu 
 * @param {array de class segons el color} nomcolor 
 */
function putCard(k,fila,colu,nomcolor, initializing) {
    if (fila == 5) { // Nomes hi ha les cartes 501 i 502, que son jokers
        cellOf(k,colu+1,14).text("*");
        cellOf(k,colu+1,14).addClass(nomcolor[fila-1]);
        setSessionPlayerCard(k,fila,colu);
        if (!initializing) {alert(`New Card: Joker`)}
    } else {
        if (cellOf(k,fila,colu).text() == "") {
            cellOf(k,fila,colu).text(colu);
        } else {
            cellOf(k,fila,colu).text(colu+"|"+colu);
        }
        cellOf(k,fila,colu).addClass(nomcolor[fila-1]);
        setSessionPlayerCard(k,fila,colu);

        if (!initializing) {alert(`New Card: ${colu} ${nomcolor[fila-1]}`)}
    }
}

/**
 * Agafem una carta nova i la posem a l'HTML del jugador
 * @param {player number} player
 */
function takeCard(player) {
    var Cards = getSessionCards();
    var k = player;
    var numberOfCards = Cards.length;
    var nomcolor = ["redCards", "blueCards", "greenCards", "yellowCards", "jokerCards"];
    var r = Math.floor(Math.random() * numberOfCards);
    var numCard = Cards[r];
    var fila = Math.trunc(numCard/100);
    var colu = numCard-(100*fila);
    if (colu == 0) colu = 13;
    putCard(k,fila,colu,nomcolor,false);
    Cards.splice(r, 1);
    setSessionCards(Cards);
}
/**
 * Treu les cartes que el jugador ha tirat
 * @param {numero de jugador} player 
 */
function throwCards(player) {
    // TODO Eliminar cartes del panell del jugador
}