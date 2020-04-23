
/**
 * Retorna si els dos arrays son identicament iguals
 * @param {array 1} a1 
 * @param {array 2} a2 
 */
function arraysEqual(a1,a2) {
    return JSON.stringify(a1)==JSON.stringify(a2);
}

/**
 * Agafa la casella row-col del jugador player
 * @param {Player number} player 
 * @param {Row} row 
 * @param {Column} col 
 */
function cellOf(player,row,col) {
    return $("#player"+player+"-"+row+"-"+col);
}