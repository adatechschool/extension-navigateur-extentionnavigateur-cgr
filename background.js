// Fonction exécutée lorsque l'extension est installée ou mise à jour
chrome.runtime.onInstalled.addListener(function() {
    // Faire quelque chose ici, comme enregistrer des paramètres par défaut
});

// Fonction exécutée lorsque l'extension est activée
chrome.runtime.onStartup.addListener(function() {
    // Faire quelque chose ici, comme charger des ressources supplémentaires
});

// Fonction exécutée lorsque l'extension reçoit un message de contenu ou d'une autre partie de l'extension
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    // Faire quelque chose ici en fonction du message reçu
});

// Fonction exécutée lorsque l'utilisateur clique sur l'icône de l'extension dans la barre d'outils
chrome.action.onClicked.addListener(function(tab) {
    // Faire quelque chose ici, comme ouvrir une nouvelle page ou afficher une fenêtre contextuelle
});