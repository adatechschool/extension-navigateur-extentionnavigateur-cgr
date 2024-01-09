const fetchPlayerDetails = () => {
    const playerNameInput = document.querySelector("#playerName");
    const playerName = playerNameInput.value.toLowerCase();

    fetch(`https://drop-api.ea.com/rating/fc-24?locale=en&offset=0&limit=100&firstName=${playerName}`)
        .then(response => response.json())
        .then(playerData => {
            // Traitez les données du joueur ici
            console.log(playerData);

            // Exemple : Afficher les détails du joueur
            const playerDetails = document.querySelector("#playerDetails");
            playerDetails.innerHTML = `
                <h2>${playerData.firstName} ${playerData.lastName}</h2>
                <p>Position: ${playerData.position.label}</p>
                <p>Club: ${playerData.team.label}</p>
                <!-- Ajoutez d'autres détails du joueur selon vos besoins -->
            `;
        })
        .catch(error => {
            console.error(`Une erreur s'est produite lors de la récupération des données du joueur ${playerName} : `, error);
            // Afficher un message d'erreur à l'utilisateur si le joueur n'est pas trouvé
            const playerDetails = document.querySelector("#playerDetails");
            playerDetails.innerHTML = `<p>Joueur non trouvé</p>`;
        });
};

// Ajoutez un gestionnaire d'événements pour le bouton de recherche
document.querySelector('#search').addEventListener("click", fetchPlayerDetails);

// Ajoutez un gestionnaire d'événements pour la touche "Enter" dans la boîte de saisie
let input = document.getElementById("playerName");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        fetchPlayerDetails();
    }
});