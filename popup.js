const fetchChelseaPlayers = (playerName) => {
    fetch('https://drop-api.ea.com/rating/fc-24?locale=en&offset=0&limit=100&team=5')
        .then(response => response.json())
        .then(chelseaPlayersData => {
            const player = chelseaPlayersData.find(player => `${player.firstName} ${player.lastName}`.toLowerCase() === playerName.toLowerCase());

            if (player) {
                document.getElementById('firstName').textContent = player.firstName;
                document.getElementById('lastName').textContent = player.lastName;
            } else {
                console.error('Joueur non trouvé');
            }
        })
        .catch(error => {
            console.error('Une erreur s\'est produite lors de la récupération des joueurs de Chelsea : ', error);
        });
};

document.getElementById('search').addEventListener('click', () => {
    const playerName = document.getElementById('playerName').value;
    fetchChelseaPlayers(playerName);
});