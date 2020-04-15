function inicializeCards () {
    //Creem el vector de cartes
	var Cartes; //106
	for (i = 0; i < 106; ++i) {
		let pal;
		if (i < 26) pal = 1;
		else if (i < 52) pal = 2;
		else if (i < 78) pal = 3;
		else if (i < 104) pal = 4;
		else pal = 5;
		
		Cartes[i] = pal*100 + (i+1)%13;
    }	
}

function initializePlayersHtml(id, playerNumber) {
    let table = "<table>";
    for (i = 1; i <= 4; ++i) {
        table += "<tr>";
        for (j = 1; j <= 14; ++j) {
			if (i == 1 || i == 4) {
				if (j == 14) continue;
			}
           	table += "<td id='player"+playerNumber+"-"+i+"-"+j+"'></td>";
        }
        table += "</tr>";
    }
    table += "</table>";
    $("#"+id).html(table);
}
    
/*
function inicializeSets (numberOfPlayer) {
    //Creem els sets inicials i els escrivim a l'HTML de cada jugador
    let k = numberOfPlayer;
    let numberOfCards = Cartes.size();
    let nomcolor = ["redCards","blueCards","greenCards","yellowCards","jokerCards"];	
    for (int j = 0; j < 13; ++j) {
        let r = Math.floor(Math.random()*numberOfCards);
        let numCard = Cartes[r];
        let fila = numCard/100;
        let colu = numCard-(100*pal);
        if (colu == 0) colu = 13;
        if (fila == 5) {
            $("#"+k+(colu+1)"-"+(14)).val("*");
            $("#"+k+(colu+1)"-"+(14)).addClass("jokerCards");
        }
        else {
            if ($("#"+k+(fila)"-"+(colu)).val() == "") $("#"+k+(fila)"-"+(colu)).val(colu);
            else $("#"+k+(fila)"-"+(colu)).val((colu+1)+"&"+(colu+1));            
            $("#"+k+(fila)"-"+(colu)).addClass(nomcolor[fila-1]);
        }
        
        Cartes.splice(r);
    }
}

function takeCard (numberOfPlayer) {
    //Agafem una carta nova i la posem a l'HTML del jugador
    let k = numberOfPlayer;
    let numberOfCards = Cartes.size();
    let nomcolor = ["redCards","blueCards","greenCards","yellowCards","jokerCards"];	
    let r = Math.floor(Math.random()*numberOfCards);

    let numCard = Cartes[r];
    let fila = numCard/100;
    let colu = numCard-(100*pal);
    if (colu == 0) colu = 13;

    if (fila == 5) {
        $("#"+k+(colu+1)"-"+(14)).val("*");
        $("#"+k+(colu+1)"-"+(14)).addClass("jokerCards");
    }
    else {
        if ($("#"+k+(fila)"-"+(colu)).val() == "") $("#"+k+(fila)"-"+(colu)).val(colu);
        else $("#"+k+(fila)"-"+(colu)).val((colu+1)+"&"+(colu+1));            
        $("#"+k+(fila)"-"+(colu)).addClass(nomcolor[fila-1]);
    }
    
    Cartes.splice(r);
}
*/