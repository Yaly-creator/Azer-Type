const listeMots = ["Cachalot", "Pétunia", "Serviette"]
const listePhrases =["Pas de panique !", "La vie, l’univers et le reste", "Merci pour le poisson"]

let score = 0
let choix= ""



function afficherResultatMots(score, listeMots) {
    console.log("Votre score est de "+score +" sur " +listeMots.length)
 }
function afficherResultatPhrases (score, listePhrases){
    console.log("Votre score est de "+score +" sur " +listePhrases.length)
}


function choisirPhrasesOuMots() {
    let choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
    // Tant que l'utilisateur n'a pas saisi "mots" ou "phrases", on lui redemande de saisir un choix
    while (choix !== "mots" && choix !== "phrases") {
        choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
    }
    return choix
    
}



function lancerBoucleDeJeu(listeMots, listePhrases){
    
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
    choix =choisirPhrasesOuMots()
    score =lancerBoucleDeJeu(listeMots, listePhrases)
    if (choix=="mots"){
        afficherResultatMots(score, listeMots)
    }else{
        afficherResultatPhrases(score, listePhrases)
    }
}
   
console.log(lancerJeu(listeMots, listePhrases, score))