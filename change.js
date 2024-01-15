async function money(monnaie1, monnaie2) {
    let valeur0 = document.querySelector("#Value").value
    console.log(valeur0);
    try {
        let response = await fetch(
            `https://v6.exchangerate-api.com/v6/47eafb64232b369043e6c27c/pair/${monnaie1}/${monnaie2}`
        );
        let data = await response.json();
        let transaction = parseFloat(data.conversion_rate);
        console.log(valeur0);
        let valeur = parseFloat(valeur0);
        let calculator = parseFloat(valeur * transaction);
        console.log(calculator);
        document.getElementById("final").value = calculator
    } catch (error) {
        console.error("Une erreur s'est produite : ", error);
    }
}
function money_choice() {
}