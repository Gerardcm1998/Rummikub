
/**
 * Retorna si els dos arrays son identicament iguals
 * @param {array 1} a1 
 * @param {array 2} a2 
 */
function arraysEqual(a1, a2) {
    return JSON.stringify(a1) == JSON.stringify(a2);
}

/**
 * Agafa la casella row-col del jugador player
 * @param {Player number} n 
 * @param {Row} row 
 * @param {Column} col 
 */
function cellOf(n, row, col) {
    return $(`#player${n}-${row}-${col}`);
}

/**
 * Retorna l'id de la taula on es troba el <td>
 * @param {objecte} td 
 */
function parentOf(td) {
    return td.parent().parent().parent().parent().prop('id');
}