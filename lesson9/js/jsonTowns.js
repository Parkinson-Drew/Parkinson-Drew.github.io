function getHomePageData() {

    const requesturl = 'https://byui-cit230.github.io/weather/data/towndata.json';

    fetch(requesturl)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            //console.table(jsonObject);
            let towns = jsonObject['towns'];
            const townSection = document.querySelector('section.towninfocards');
            //console.log(townSection);
            towns.forEach(town => {
                if (town.name == "Fish Haven" || town.name == "Preston" || town.name == "Soda Springs") {
                    let townCard = document.createElement('article');
                    let townName = document.createElement('h2');
                    let motto = document.createElement('h3');
                    let founded = document.createElement('p');
                    let population = document.createElement('p');
                    let rain = document.createElement('p');
                    let image = document.createElement('img');

                    townName.textContent = town.name;
                    motto.textContent = town.motto;
                    founded.textContent = 'Year Founded: ' + town.yearFounded;
                    population.textContent = 'Population: ' + town.currentPopulation;
                    rain.textContent = 'Average Rainfall: ' + town.averageRainfall;
                    image.setAttribute('src', 'images/' + town.photo);
                    image.setAttribute('alt', 'Selected image for ' + town.name);
                    townCard.appendChild(townName);
                    townCard.appendChild(motto);
                    townCard.appendChild(founded);
                    townCard.appendChild(population);
                    townCard.appendChild(rain);
                    townCard.appendChild(image);
                    townSection.appendChild(townCard);
                }
            });
        });
}