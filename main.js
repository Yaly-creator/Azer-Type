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