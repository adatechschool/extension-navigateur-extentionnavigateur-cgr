/* Maintenir les éléments dans le Dropdown DEBUT

const dropdown1 = document.getElementById('dr');
const dropdown2 = document.getElementById('dr1');

// Fonction pour récupérer les options depuis une API
async function fetchOptions(apiEndpoint, dropdownElement) {
  try {
    const response = await fetch(apiEndpoint);
    const data = await response.json();

    // Efface le contenu actuel du dropdown
    dropdownElement.innerHTML = '';

    // Remplit le dropdown avec les nouvelles options
    data.forEach(option => {
      const item = document.createElement('div');
      item.textContent = option.name; // Assurez-vous d'adapter cela en fonction de la structure de votre API
      dropdownElement.appendChild(item);
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des options :', error);
  }
}

// Fonction pour remplir le premier dropdown depuis l'API
async function populateDropdown1() {
  const apiEndpoint1 = 'URL_DE_VOTRE_API_1'; // Remplacez cela par l'URL de votre première API
  fetchOptions(apiEndpoint1, dropdown1);
}

// Fonction pour remplir le deuxième dropdown depuis l'API
async function populateDropdown2() {
  const apiEndpoint2 = 'URL_DE_VOTRE_API_2'; // Remplacez cela par l'URL de votre deuxième API
  fetchOptions(apiEndpoint2, dropdown2);
}

populateDropdown1();
populateDropdown2();

// ... (le reste du script reste inchangé)


Maintenir les éléments dans le Dropdown FIN */

async function sendMoney(monnaie1, monnaie2) {
    let valeur0 = document.querySelector("#value1").value
    console.log(valeur0);
    try {
        let response = await fetch(
            `https://v6.exchangerate-api.com/v6/39ecb2f0add46213f99afb5f/pair/${monnaie1}/${monnaie2}`
        );
        let data = await response.json();
        let transaction = parseFloat(data.conversion_rate);
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
        console.log(dico)
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
            let drp1 = document.getElementById("dr1");
            let divElement = document.createElement("div");
            let divElement1 = document.createElement("div1");
            divElement.innerHTML = `
            <input type="radio" id="${résu[i]}" name="Money1" value="${résu[i]}" />
            <label for="${résu[i]}">${résu[i]}</label>
        `;
            divElement1.innerHTML = `
            <input type="radio" id="${résu[i]}" name="Money" value="${résu[i]}" />
            <label for="${résu[i]}">${résu[i]}</label>
        `;
            document.getElementById("dr").appendChild(divElement);
            document.getElementById("dr1").appendChild(divElement1);
        }
    } catch (error) {
        console.error("Une erreur s'est produite : ", error);
    }
}

function monnaie_select(){
    
}
testasync()