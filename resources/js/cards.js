
function getCards() {
    return JSON.parse(sessionStorage.getItem("Cards"));
}

function setCards(Cards) {
    sessionStorage.setItem("Cards",JSON.stringify(Cards))
}

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
    setCards(Cards);
}


/**
 * Take the cell row-col of player k
 * @param {Player number} player 
 * @param {Row} row 
 * @param {Column} col 
 */
function cellOf(player,row,col) {
    return $("#player"+player+"-"+row+"-"+col);
}

/**
 * Creem els sets inicials i els escrivim a l'HTML de cada jugador
 * @param {player number} player 
 */
function initializeSets(player) {
    var Cards = getCards();
    var k = player;
    var nomcolor = ["redCards","blueCards","greenCards","yellowCards","jokerCards"];	
    for (j = 0; j < 14; ++j) {
        var numberOfCards = Cards.length;
        var r = Math.floor(Math.random()*numberOfCards);
        var numCard = Cards[r];
        var fila = Math.trunc(numCard/100);
        var colu = numCard-(100*fila);
        if (colu == 0) colu = 13;

        //si és el joker o si és una carta qualsevol
        if (fila == 5) {
            cellOf(k,colu+1,14).text("*");
            cellOf(k,colu+1,14).addClass(nomcolor[fila-1]);

        } else {
            if (cellOf(k,fila,colu).text() == "") {
                cellOf(k,fila,colu).text(colu);
            } else {
                cellOf(k,fila,colu).text(colu+"&"+colu);
            }
            cellOf(k,fila,colu).addClass(nomcolor[fila-1]);
        }
        Cards.splice(r,1);
    }
    setCards(Cards);
}

/**
 * Agafem una carta nova i la posem a l'HTML del jugador
 * @param {player number} player 
 */
function takeCard (player) {
    var Cards = getCards();
    var k = player;
    var numberOfCards = Cards.length;
    var nomcolor = ["redCards","blueCards","greenCards","yellowCards","jokerCards"];	
    var r = Math.floor(Math.random()*numberOfCards);

    var numCard = Cards[r];
    var fila = numCard/100;
    var colu = numCard-(100*pal);
    if (colu == 0) colu = 13;

    //si és el joker o si és una carta qualsevol
    if (fila == 5) {
        cellOf(k,fila+1,14).text("*");
        cellOf(k,fila+1,14).addClass("jokerCards");
    } else {
        if  (cellOf(k,fila,colu).text() == "") {
            cellOf(k,fila,colu).text(colu);
        } else {
            cellOf(k,fila,colu).text((colu+1)+"&"+(colu+1));
        }
        cellOf(k,fila,colu).addClass(nomcolor[fila-1]);
    }
    Cards.slice(r);
    setCards(Cards);
}
