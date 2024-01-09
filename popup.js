const fetchChelseaPlayers = () => {
    fetch('https://drop-api.ea.com/rating/fc-24?locale=en&offset=0&limit=100&team=5')
        .then(response => response.json())
        .then(chelseaPlayersData => {
            // Traitez les données des joueurs de Chelsea ici
            console.log(chelseaPlayersData);

            // Exemple : Afficher le nom des joueurs de Chelsea
            chelseaPlayersData.forEach(player => {
                console.log(player.firstName, player.lastName);
            });
        })
        .catch(error => {
            console.error('Une erreur s\'est produite lors de la récupération des joueurs de Chelsea : ', error);
        });
};

// Appelez la fonction pour récupérer les joueurs de Chelsea
fetchChelseaPlayers();