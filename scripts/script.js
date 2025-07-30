let score = 0




function afficherResultat(score, listeMots) {
    let scoreSpan = document.querySelector(".zoneScore span")
    let contenu_span = score/listeMots.length
    scoreSpan.textContent= contenu_span
    
    
 
}
function choisirPhrasesOuMots() {
    let choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
    // Tant que l'utilisateur n'a pas saisi "mots" ou "phrases", on lui redemande de saisir un choix
    while (choix !== "mots" && choix !== "phrases") {
        choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
    }
    return choix
    
}



function lancerBoucleDeJeu(listeMots, listePhrases, choix){
    
    if (choix==="mots"){ 
        for (i=0; i<listeMots.length; i++){
    
            let motApp = listeMots[i]
            let motUtilisateur = prompt("Entrer le mot: "+motApp )
        
            if (motUtilisateur=== motApp ) {
                console.log("Bravo!")
                score++
                
            } else{
                console.log("Raté!")
                  }

        }
    }
    else {
    for (i=0; i<listePhrases.length; i++){
    
    let phraseApp = listePhrases[i]
    let phraseUtilisateur = prompt("Entrer le mot: "+phraseApp )
    
    if (phraseUtilisateur=== phraseApp ) {
        console.log("Bravo!")
        score++
        
    } else{
        console.log("Raté!")
    }
    }
    

    
}
    return score
}


function lancerJeu(listeMots, listePhrases, score) {
    let choix = choisirPhrasesOuMots()
    score = lancerBoucleDeJeu(listeMots, listePhrases, choix)
    if (choix === "mots") {
        afficherResultat(score, listeMots)
    } else {
        afficherResultat(score, listePhrases)
    }
}

let zone_saisie = document.getElementById("inputEcriture")
console.log(zone_saisie)
let zone_boutton= document.getElementById("btnValiderMot")
console.log(zone_boutton)
let zone_score = document.querySelector(".zoneScore")
console.log(zone_score)
let zone_boutton_radio = document.querySelectorAll(".optionSource input")
console.log(zone_boutton_radio)




