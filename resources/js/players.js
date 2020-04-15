var numberOfPlayers;

var player1;
var player2; 
var player3;
var player4;

function setPlayerNames() {
    for (i=1; i<=numberOfPlayers;++i) {
       if (i==1) player1 = $("#playerName1").val();
       else if (i==2) player2 = $("#playerName2").val();
       else if (i==3) player3 = $("#playerName3").val();
       else if (i==4) player4 = $("#playerName4").val();
    }
}

function getPlayerName(n) {
    if (n<=numberOfPlayers) {
        if (n==1) return player1;
        if (n==2) return player2;
        if (n==3) return player3;
        if (n==4) return player4;
    }
}