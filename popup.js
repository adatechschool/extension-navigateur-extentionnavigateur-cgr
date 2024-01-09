const fetchPlayerDetails = async () => {
    const playerNameInput = document.querySelector("#playerName").value;
    const playerName = playerNameInput.toLowerCase();

    try {
        const response = await fetch(`https://drop-api.ea.com/rating/fc-24?locale=en&offset=0&limit=100&firstName=${playerName}`);
        const playerData = await response.json();

        // Traitez les données du joueur ici
        console.log(playerData);

        // Exemple : Afficher les détails du joueur
        console.log(`${playerData.firstName} ${playerData.lastName}`);
        console.log(`Position: ${playerData.position.label}`);
        console.log(`Club: ${playerData.team.label}`);
        // Ajoutez d'autres détails du joueur selon vos besoins
    } catch (error) {
        console.error(`Une erreur s'est produite lors de la récupération des données du joueur ${playerName} : `, error);
        // Afficher un message d'erreur à l'utilisateur si le joueur n'est pas trouvé
        console.error('Joueur non trouvé');
    }
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