#include <iostream>
#include <vector>
#include <string>
#include <stdlib.h>
#include <fstream>
using namespace std;

typedef vector<string> Fila;
typedef vector<Fila> Matriu;

string donarnomcarta (int num) {
	int pal = num/100;
	int valor = num-100*pal;
	
	string nomcarta;
	string nompal;
	string nomvalor;
	
	//donem el nom del pal
	if (pal == 1) nompal = "Vermell";
	else if (pal == 2) nompal = "Blau";
	else if (pal == 3) nompal = "Verd";
	else if (pal == 4) nompal = "Groc";
	
	//donem el nom al valor
	//if (valor < 11 and valor != 0) nomvalor = std::to_string(valor);
	//else if (valor == 11) nomvalor = "J";
	//else if (valor == 12) nomvalor = "Q";
	if (valor != 0) nomvalor = std::to_string(valor);
	else nomvalor = "13";
	
	if (num > 500) nomcarta = "joker"; 
	else nomcarta = nomvalor + " de " + nompal;
	
	return nomcarta;
}

int main () {
    cout << "BENVINGUT AL RUMMY!!!" << endl;
    int aleatori;
    cout << "Digues un nombre aleatori" << endl;
    cin >> aleatori;
    cout << "Quants jugadors sou?" << endl;
    int n;
    cin >> n;
    //Creem els jugadors
    vector<string> Jugadors(n);
    for (int i = 0; i < n; ++i) {
			string nom;
			cout << "Quin és el nom del jugador " << i+1 << "?" << endl;
			cin >> nom;
			Jugadors[i] = nom;
	}
	
	//Creem el vector de cartes
	vector <int> Cartes(106);
	for (int i = 0; i < 106; ++i) {
		int pal;
		if (i < 26) pal = 1;
		else if (i < 52) pal = 2;
		else if (i < 78) pal = 3;
		else if (i < 104) pal = 4;
		else pal = 5;
		
		Cartes[i] = pal*100 + (i+1)%13;
	}	
	
	//Creem els sets inicials
	for (int i = 0; i < n; ++i) {
		string nomjugador = Jugadors[i];
		ofstream myfile;
		myfile.open( nomjugador+".txt" );
		myfile << "Aquestes són les teves cartes inicials:" << endl;
		for (int j = 0; j < 14; ++j) {
			int l = Cartes.size();
			int r = (rand() % l)*aleatori % l;
			myfile << donarnomcarta(Cartes[r]) << endl;
			int intermedi = Cartes[l-1];
			Cartes[l-1] = Cartes[r];
			Cartes[r] = intermedi;
			Cartes.pop_back();
		}
		myfile.close();
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
