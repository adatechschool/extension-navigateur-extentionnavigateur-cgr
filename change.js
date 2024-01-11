function Money (monnaie1, monnaie2){
    let value = fetch(`https://v6.exchangerate-api.com/v6/47eafb64232b369043e6c27c/pair/${monnaie1}/${monnaie2}`)
    console.log(value)
}

console.log(Money("EUR", "USD"))