/**
 * Genera codi HTML pel destí source
 * @param {Div on emmagatzemar el html} source 
 */
function getHTML(source) {
    var code = "";
    switch (source) {        
        case "boardDiv" : 
            code = "<table>";
            for (row = 1; row <= 16; ++row) {
                code += "<tr>";
                for (col = 1; col <= 25; ++col) {
                    code += `<td id="table-${row}-${col}" class="emptyCell" ondragover="allowDrop(event)" ondrop="drop(event)"></td>`;
                }
                code += "</tr>";
            }
            code += "</table>";
        break;
    }
    $("#"+source).html(code);
}