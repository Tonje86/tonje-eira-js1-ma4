const gamesUrl = "https://api.rawg.io/api/games";

async function fetchGames() {
    try {
        const response = await fetch(gamesUrl);
        const games = await response.json();
        createGames(games);
    } catch (error) {
        console.log(error);
    }
}
fetchGames();

function createGames(games) {
    console.log(games);

    const gamesContainer = document.querySelector(".results");

    let html = "";

    for (let i = 0; i < games.length; i++) {
        console.log(games[i].name);
        console.log(games[i].image);

        html += `<div class="game">
                    <h2>${games[i].name}</h2>
                    <div class="image" style="background-image: url(${games[i].image});"></div>
                </div>`;
    }

    gamesContainer.innerHTML = html;
}
