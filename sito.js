//definire le variabili degli elementi da modificare o da monitorare
const nomeProdotto = document.getElementById("cerca-un-nome")
const caratteriRimanenti3 = document.getElementById("caratteri-rimanenti")
const caratteriMassimi = nomeProdotto.maxLength;
function caratteriRimanenti(event){
    const testoinserito = event.target.value;
    const LunghezzaTesto = testoinserito.length;
    const caratteriRimanenti2 = caratteriMassimi - LunghezzaTesto;
    caratteriRimanenti3.textContent = caratteriRimanenti2
    if (caratteriRimanenti2 ===0){
        caratteriRimanenti.classlist.add("error")
        nomeProdotto.classList.add("error")
        caratteriRimanenti.classList.remove("warning")
        nomeProdotto.classList.remove("warning")
    } else if (caratteriRimanenti2 <=10){
        caratteriRimanenti.classlist.remove("error")
        nomeProdotto.classList.remove("error")
        caratteriRimanenti.classList.add("warning")
        nomeProdotto.classList.add("warning")
    }else {
        
    caratteriRimanenti.classlist.remove("error")
    nomeProdotto.classList.remove("error")
    caratteriRimanenti.classList.remove("warning")
    nomeProdotto.classList.remove("warning")
    }
}
nomeProdotto.addEventListener("input", caratteriRimanenti)
