const url = "https://api.rawg.io/api/games/4200";

async function createGameDetails() {

    const getGame = document.querySelector("h1");
    const image = document.querySelector(".image");
    const description = document.querySelector(".description");
    

    try {
        const response = await fetch(url);
        const gameDetails = await response.json();

        console.log(gameDetails);

        getGame.innerHTML = gameDetails.name;
        image.innerHTML = gameDetails.background_image;
        description.innerHTML = gameDetails.description;

    } catch (error) {
        console.log(error);
    }
}
createGameDetails();


