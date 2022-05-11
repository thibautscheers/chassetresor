
// Tableau2D renvoit un objet tableau en 2D
function drawTableau2D(x, y, emplacement) {
    let idString = ""
    let texte = "<table>"
    for (let xx = 0; xx < x; xx++) {
        texte += `<tr>`
        for (let yy = 0; yy < y; yy++) {
            idString = xx + "-" + yy
            texte += `<td onclick="choix(this.id);" id="${idString}"></td>`
        }
        texte += `</tr>`
    }
    texte += `</table>`

    document.getElementById(emplacement).innerHTML = texte

}

drawTableau2D(10, 10, "emplacementTable")
// rajoute les coordonner de la case cliquer
let cpt = 0
function choix(x, y) {
    // compteur de tour 
    
    cpt = cpt+1
    document.getElementById("compte").innerHTML = cpt
    document.getElementById("emplacementCommentaires").innerHTML = x, y
}



function getAction(event) {
    const button = event.target.nodeName === "BUTTON";
    if (button) {
        return true;
    }
}
function actionHandler() {
    let carte = document.getElementById("emplacementTable");
    // On récupère les évents dans l'élément "carte"
    carte.addEventListener("click", (event) => {
        /**
         * Avec la fonction getAction(event)
         * On récupère ce qui a été cliqué
         * Si c'est un bouton alors on change 
         * La valeur de l'id à "clicked"
         * */
        const isButton = this.getAction(event);
        if (isButton) {
            return true;
        }
    })
}