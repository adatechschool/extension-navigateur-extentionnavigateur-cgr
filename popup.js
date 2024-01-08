document.getElementById("googleSearch").addEventListener("click", function () {
    const query = document.getElementById("searchBox").value;
    if (query) {
        const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        chrome.tabs.create({ url: googleSearchURL });
    }
});

document.getElementById("wikipediaSearch").addEventListener("click", function () {
    const query = document.getElementById("searchBox").value;
    if (query) {
        const wikipediaSearchURL = `https://fr.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(query)}`;
        chrome.tabs.create({ url: wikipediaSearchURL });
    }
});