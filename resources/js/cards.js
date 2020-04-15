
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

//Creem els sets inicials i els escrivim a l'HTML de cada jugador
function initializeSets(player) {
    var Cards = getCards();
    var k = player;
    var nomcolor = ["redCards","blueCards","greenCards","yellowCards","jokerCards"];	
    for (j = 0; j < 14; ++j) {
        console.log("Iteracio "+j)
        var numberOfCards = Cards.length;
        var r = Math.floor(Math.random()*numberOfCards);
        var numCard = Cards[r];
        var fila = Math.trunc(numCard/100);
        var colu = numCard-(100*fila);
        if (colu == 0) colu = 13;

        //si és el joker o si és una carta qualsevol
        if (fila == 5) {
            /*
            $("#player"+k+"-"+(colu)+"-"+(14)).val("*");
            $("#player"+k+"-"+(colu)+"-"+(14)).addClass("jokerCards");
            */
            cellOf(k,colu+1,14).text("*");
            console.log ("* a "+(colu+1))
            cellOf(k,colu+1,14).addClass(nomcolor[fila-1]);

        } else {
            /*
            if ($("#player"+k+"-"+(fila)+"-"+(colu)).val() == "") $("#player"+k+"-"+(fila)+"-"+(colu)).val(colu);
            else $("#player"+k+"-"+(fila)+"-"+(colu)).val((colu+1)+"&"+(colu+1));            
            $("#player"+k+"-"+(fila)+"-"+(colu)).addClass(nomcolor[fila-1]);
            */

            if (cellOf(k,fila,colu).text() == "") {
                cellOf(k,fila,colu).text(colu);
            } else {
                cellOf(k,fila,colu).text(colu+"&"+colu);
            }
            console.log(colu+" a "+fila +'-'+colu);
            cellOf(k,fila,colu).addClass(nomcolor[fila-1]);
        }
        Cards.splice(r,1);
    }
    setCards(Cards);
}

//Agafem una carta nova i la posem a l'HTML del jugador
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
        $("#player"+k+"-"+(fila+1)+"-"+(14)).text("*");
        $("#player"+k+"-"+(fila+1)+"-"+(14)).addClass("jokerCards");
    }
    else {
        if  ($("#player"+k+"-"+(fila)+"-"+(colu)).text() == "") $("#player"+k+"-"+(fila)+"-"+(colu)).text(colu);
        else $("#player"+k+"-"+(fila)+"-"+(colu)).text((colu+1)+"&"+(colu+1));            
        $("#player"+k+"-"+(fila)+"-"+(colu)).addClass(nomcolor[fila-1]);
    }
    
    Cards.slice(r);
    setCards(Cards);
}
