function donarnomcarta(num){
    let pal = num/100;
    let valor = num - 100*pal;

    let nomcarta;
    let nompal;
    let nomvalor;

    //donem el nom del pal
	if (pal == 1) nompal = "Vermell";
	else if (pal == 2) nompal = "Blau";
	else if (pal == 3) nompal = "Verd";
    else if (pal == 4) nompal = "Groc";
    
    //donem el nom al valor
	if (valor != 0) nomvalor = valor;
	else nomvalor = 13;
	if (num > 500) nomcarta = "joker"; 
	else nomcarta = nomvalor + " de " + nompal;
	
	return nomcarta;
}


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
    
function inicializeSets () {
    //Creem els sets inicials
    let numberOfCards = Cartes.size();
    let nomcolor = ["redCards","blueCards","greenCards","yellowCards","jokerCards"];	
    for (int j = 0; j < 13; ++j) {
        let r = Math.floor(Math.random()*numberOfCards);
        let numCard = Cartes[r];
        let fila = numCard/100;
        let colu = numCard-(100*pal);
        if (colu == 0) colu = 13;

        if (fila == 5) {
            $("#"+(colu+1)"-"+(14)).val("*");
            $("#"+(colu+1)"-"+(14)).addClass("jokerCards");
        }
        else {
            if ($("#"+(fila)"-"+(colu)).val() == "") $("#"+(fila)"-"+(colu)).val(colu);
            else $("#"+(fila)"-"+(colu)).val((colu+1)+"&"+(colu+1));            
            $("#"+(fila)"-"+(colu)).addClass(nomcolor[fila-1]);
        }
        
        Cartes.splice(r);
    }
}

function takeCard () {
	//Agafem una carta nova i la posem a l'HTML del jugador
    let numberOfCards = Cartes.size();
    let nomcolor = ["redCards","blueCards","greenCards","yellowCards","jokerCards"];	
    let r = Math.floor(Math.random()*numberOfCards);

    let numCard = Cartes[r];
    let fila = numCard/100;
    let colu = numCard-(100*pal);
    if (colu == 0) colu = 13;

    if (fila == 5) {
        $("#"+(colu+1)"-"+(14)).val("*");
        $("#"+(colu+1)"-"+(14)).addClass("jokerCards");
    }
    else {
        if ($("#"+(fila)"-"+(colu)).val() == "") $("#"+(fila)"-"+(colu)).val(colu);
        else $("#"+(fila)"-"+(colu)).val((colu+1)+"&"+(colu+1));            
        $("#"+(fila)"-"+(colu)).addClass(nomcolor[fila-1]);
    }
    
    Cartes.splice(r);
}
