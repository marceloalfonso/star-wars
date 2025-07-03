import {
	clearPreviousContent,
	formatDiameter,
	formatPeriod,
	formatPopulation,
	getNumbersFromUrl,
	showModal,
} from "./utils.js";

export function createPlanetCard(planet) {
	const planetCard = document.createElement("div");
	planetCard.className = "planet-card";
	planetCard.style.backgroundImage = `url("https://starwars-visualguide.com/assets/img/planets/${getNumbersFromUrl(
		planet.url,
	)}.jpg")`;

	const planetNameContainer = document.createElement("div");
	planetNameContainer.className = "planet-name-container";

	const planetName = document.createElement("span");
	planetName.className = "planet-name";
	planetName.innerText = `${planet.name}`;

	planetNameContainer.appendChild(planetName);
	planetCard.appendChild(planetNameContainer);

	return planetCard;
}

export function displayPlanetModal(planet) {
	showModal();

	const modalContent = clearPreviousContent("modal-content");

	const planetImage = document.createElement("div");
	planetImage.className = "planet-image";
	planetImage.style.backgroundImage = `url("https://starwars-visualguide.com/assets/img/planets/${getNumbersFromUrl(
		planet.url,
	)}.jpg")`;
	modalContent.appendChild(planetImage);

	const planetDetails = [
		{ label: "Nome", value: planet.name },
		{
			label: "Período de rotação",
			value: `${formatPeriod(planet.rotation_period)}`,
		},
		{
			label: "Período de translação",
			value: `${formatPeriod(planet.orbital_period)}`,
		},
		{
			label: "Diâmetro",
			value: `${formatDiameter(planet.diameter)}`,
		},
		{ label: "População", value: `${formatPopulation(planet.population)}` },
	];

	for (const planetDetail of planetDetails) {
		const planetDetailElement = document.createElement("span");
		planetDetailElement.className = "planet-information";
		planetDetailElement.innerText = `${planetDetail.label}: ${planetDetail.value}`;
		modalContent.appendChild(planetDetailElement);
	}
}

export function displayPlanetsCards(planets, content) {
	for (const planet of planets) {
		const planetCard = createPlanetCard(planet);
		content.appendChild(planetCard);
		planetCard.onclick = () => displayPlanetModal(planet);
	}
}
