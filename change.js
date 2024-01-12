let valeur = 100;

async function Money(monnaie1, monnaie2) {
    try {
        let response = await fetch(
            `https://v6.exchangerate-api.com/v6/47eafb64232b369043e6c27c/pair/${monnaie1}/${monnaie2}`
        );
        let data = await response.json();
        let transaction = parseFloat(data.conversion_rate);
        let calculator = valeur * transaction;
        console.log(calculator)
    } catch (error) {
        console.error("Une erreur s'est produite : ", error);
    }
}
Money("JPY", "EUR");