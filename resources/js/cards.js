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
		let nomcolor = {"vermell","blau","verd","groc","joker"};	
		for (int j = 0; j < 13; ++j) {
			let r = Math.floor(Math.random()*numberOfCards);
			let numCard = Cartes[r];
			let pal = numCard/100;
			let valor = numCard-(100*pal);
			if (pal == 1) {
				if (V[0][valor] != 0) V[0][valor] = (valor+1)*1000+(valor+1);
				else V[0][valor] = valor+1;
			}
			else if (pal == 2) {
				if (V[1][valor] != 0) V[1][valor] = (valor+1)*1000+(valor+1);
				else V[1][valor] = valor+1;
			}
			else if (pal == 3) {
				if (V[2][valor] != 0) V[2][valor] = (valor+1)*1000+(valor+1);
				else V[2][valor] = valor+1;
			}
			else if (pal == 4) {
				if (V[3][valor] != 0) V[3][valor] = (valor+1)*1000+(valor+1);
				else V[3][valor] = valor+1;
			}
			else {
				V[4][valor] = 0;
			}
			int intermedi = Cartes[l-1];
			Cartes[l-1] = Cartes[r];
			Cartes[r] = intermedi;
			Cartes.pop_back();
		}
		for (int i = 0; i < 5; ++i) {
			myfile << nomcolor[i];
			for (int j = 0; j < 13; ++j) {
				if (V[i][j] == 0) myfile << "," << "";
				else myfile << "," << V[i][j];
			}
			myfile << endl;
		}
		myfile.close();
	}

}
	//Demanem agafar una carta nova
	bool fijoc = false;
	while (fijoc == false){
		string nomjugador;
		ofstream myfile;
		cout << "Quin jugador vol una carta extra?" << endl;
		cin >> nomjugador;
		if (nomjugador == "FI") fijoc = true;
		else {
			myfile.open( nomjugador+".txt" );
			int l = Cartes.size();
			int r = (rand() % l)*aleatori % l;
			myfile << "Has agafat la carta: " << donarnomcarta(Cartes[r]) << endl;
			int intermedi = Cartes[l-1];
			Cartes[l-1] = Cartes[r];
			Cartes[r] = intermedi;
			Cartes.pop_back();
			if (l-1 == 0) fijoc = true;
		}
		myfile.close();
	}
		
	cout << "El joc s'ha acabat! Gràcies per la vostra participació i felicitats als guanyadors!!" << endl;
}
