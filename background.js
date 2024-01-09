chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed');
  });
  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'fetchPlayerDetails') {
      const playerName = message.playerName;
      fetchPlayerDetails(playerName)
        .then(playerData => {
          chrome.tabs.sendMessage(sender.tab.id, { action: 'playerDetails', playerData });
        })
        .catch(error => {
          console.error(`Error fetching player details: ${error}`);
        });
    }
  });
  
  const fetchPlayerDetails = async playerName => {
    const response = await fetch(`https://drop-api.ea.com/rating/fc-24?locale=en&offset=0&limit=100&firstName=${playerName}`);
    return response.json();
  };
  