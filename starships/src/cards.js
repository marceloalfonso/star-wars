import {
	clearPreviousContent,
	formatCost,
	formatLength,
	formatMaximumSpeed,
	formatPassengers,
	getNumbersFromUrl,
	showModal,
} from "./utils.js";

export function createStarshipCard(starship) {
	const starshipCard = document.createElement("div"); // Cria o elemento HTML especificado
	starshipCard.className = "starship-card";
	starshipCard.style.backgroundImage = `url("https://starwars-visualguide.com/assets/img/starships/${getNumbersFromUrl(
		starship.url,
	)}.jpg")`;

	/*
  A expressão regular (RegExp) retorna todos os caracteres que não são números
  Em seguida, cada um destes caracteres é substituído por string vazia através do método "replace()""
  Dessa forma, obtemos apenas o número presente na URL do personagem
  https://www.w3schools.com/jsref/jsref_replace.asp e https://www.w3schools.com/jsref/jsref_replace.asp
  */

	const starshipNameContainer = document.createElement("div");
	starshipNameContainer.className = "starship-name-container";

	const starshipName = document.createElement("span");
	starshipName.className = "starship-name";
	starshipName.innerText = `${starship.name}`;

	starshipNameContainer.appendChild(starshipName); // http://devfuria.com.br/javascript/dom-append-child/
	starshipCard.appendChild(starshipNameContainer);

	return starshipCard;
}

export function displayStarshipModal(starship) {
	showModal();

	const modalContent = clearPreviousContent("modal-content");

	const starshipImage = document.createElement("div");
	starshipImage.className = "starship-image";
	starshipImage.style.backgroundImage = `url("https://starwars-visualguide.com/assets/img/starships/${getNumbersFromUrl(
		starship.url,
	)}.jpg")`;
	modalContent.appendChild(starshipImage);

	const starshipDetails = [
		{ label: "Nome", value: starship.name },
		{ label: "Custo", value: `${formatCost(starship.cost_in_credits)}` },
		{ label: "Comprimento", value: `${formatLength(starship.length)}` },
		{
			label: "Velocidade máxima",
			value: `${formatMaximumSpeed(starship.max_atmosphering_speed)}`,
		},
		{ label: "Passageiros", value: `${formatPassengers(starship.passengers)}` },
	];

	for (const starshipDetail of starshipDetails) {
		const starshipDetailElement = document.createElement("span");
		starshipDetailElement.className = "starship-information";
		starshipDetailElement.innerText = `${starshipDetail.label}: ${starshipDetail.value}`;
		modalContent.appendChild(starshipDetailElement);
	}
}

export function displayStarshipsCards(starships, content) {
	for (const starship of starships) {
		const starshipCard = createStarshipCard(starship);
		content.appendChild(starshipCard);
		starshipCard.onclick = () => displayStarshipModal(starship);
	}
}
