import {
	clearPreviousContent,
	convertEyeColorFromEnglishToPortuguese,
	convertHeightFromCentimetersToMeters,
	formatBirthYear,
	formatMass,
	getNumbersFromUrl,
	showModal,
} from "./utils.js";

export function createCharacterCard(character) {
	const characterCard = document.createElement("div"); // Cria o elemento HTML especificado
	characterCard.className = "character-card";
	characterCard.style.backgroundImage = `url("https://starwars-visualguide.com/assets/img/characters/${getNumbersFromUrl(
		character.url,
	)}.jpg")`;

	/*
	A expressão regular (RegExp) retorna todos os caracteres que não são números
	Em seguida, cada um destes caracteres é substituído por string vazia através do método "replace()""
	Dessa forma, obtemos apenas o número presente na URL do personagem
	https://www.w3schools.com/jsref/jsref_replace.asp e https://www.w3schools.com/jsref/jsref_replace.asp
	*/

	const characterNameContainer = document.createElement("div");
	characterNameContainer.className = "character-name-container";

	const characterName = document.createElement("span");
	characterName.className = "character-name";
	characterName.innerText = `${character.name}`;

	characterNameContainer.appendChild(characterName); // http://devfuria.com.br/javascript/dom-append-child/
	characterCard.appendChild(characterNameContainer);

	return characterCard;
}

export function displayCharacterModal(character) {
	showModal();

	const modalContent = clearPreviousContent("modal-content");

	const characterImage = document.createElement("div");
	characterImage.className = "character-image";
	characterImage.style.backgroundImage = `url("https://starwars-visualguide.com/assets/img/characters/${getNumbersFromUrl(
		character.url,
	)}.jpg")`;
	modalContent.appendChild(characterImage);

	const characterDetails = [
		{ label: "Nome", value: character.name },
		{
			label: "Altura",
			value: `${convertHeightFromCentimetersToMeters(character.height)}`,
		},
		{ label: "Massa", value: `${formatMass(character.mass)}` },
		{
			label: "Cor dos olhos",
			value: `${convertEyeColorFromEnglishToPortuguese(character.eye_color)}`,
		},
		{
			label: "Ano de nascimento",
			value: `${formatBirthYear(character.birth_year)}`,
		},
	];

	for (const characterDetail of characterDetails) {
		const characterDetailElement = document.createElement("span");
		characterDetailElement.className = "character-information";
		characterDetailElement.innerText = `${characterDetail.label}: ${characterDetail.value}`;
		modalContent.appendChild(characterDetailElement);
	}
}

export function displayCharactersCards(characters, content) {
	for (const character of characters) {
		const characterCard = createCharacterCard(character);
		content.appendChild(characterCard);
		characterCard.onclick = () => displayCharacterModal(character);
	}
}
