async function sendMoney(monnaie1, monnaie2) {
    let valeur0 = document.querySelector("#value1").value
    console.log(valeur0);
    try {
        let response = await fetch(
            `https://v6.exchangerate-api.com/v6/39ecb2f0add46213f99afb5f/pair/${monnaie1}/${monnaie2}`
        );
        let data = await response.json();
        let transaction = parseFloat(data.conversion_rate);
        console.log(valeur0);
        let valeur = parseFloat(valeur0);
        let calculator = parseFloat(valeur * transaction);
        console.log(calculator);
        document.getElementById("value2").value = calculator
    } catch (error) {
        console.error("Une erreur s'est produite : ", error);
    }
}
async function money_choice() {
    try {
        res = await fetch('https://v6.exchangerate-api.com/v6/39ecb2f0add46213f99afb5f/latest/USD')
        fullJSON = await res.json();
        moneyConv = fullJSON["conversion_rates"]
        dico = Object.keys(moneyConv)
        return (dico)
    } catch (error) {
        console.error("Une erreur s'est produite : ", error);
    }
}
async function testasync() {
    try {
        résu = await money_choice()
        //console.log("je suis le resultat", résu)
        for (i = 0; i < résu.length; i++) {
            console.log("je suis dans la boucle")
            let drp = document.getElementById("dr");
            let divElement = document.createElement("div");
            divElement.innerHTML = `
            <input type="radio" id="${résu[i]}" name="drone" value="${résu[i]}" checked />
            <label for="${résu[i]}">${résu[i]}</label>
        `;
            document.getElementById("dr").appendChild(divElement);
        }
    } catch (error) {
        console.error("Une erreur s'est produite : ", error);
    }
}
testasync()