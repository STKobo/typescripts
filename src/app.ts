const enum STEPS {
    Intro = "Intro", 
    Selection = "Selection", 
    Panier = "Panier",
    Paiement = "Paiement"
}

let step: STEPS = STEPS.Selection 


function demo () {
    step = STEPS.Paiement
}
