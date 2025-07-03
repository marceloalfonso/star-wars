import { loadNextPage, loadPreviousPage } from "./pages.js";

export function clearPreviousContent(contentId) {
	const content = document.getElementById(contentId); // Retorna a referência do elemento HTML através do seu ID
	content.innerHTML = ""; // Altera o código HTML do elemento (neste caso, estamos limpando os resultados anteriores)
	return content;
}

export function alternateButtonsVisibility(charactersJson) {
	const previousButton = document.getElementById("previous-button");
	const nextButton = document.getElementById("next-button");

	previousButton.disabled = !charactersJson.previous; // Quando houver uma página anterior, o botão "anterior" estará habilitado (disabled = false)
	nextButton.disabled = !charactersJson.next; // Quando houver uma próxima pagina, o botão "próxima" estará habilitado (disabled = false)

	previousButton.style.visibility = charactersJson.previous
		? "visible"
		: "hidden";
	nextButton.style.visibility = charactersJson.next ? "visible" : "hidden";
}

export function navigateWithButtons() {
	const previousButton = document.getElementById("previous-button");
	const nextButton = document.getElementById("next-button");

	previousButton.addEventListener("click", loadPreviousPage); // Ao clicar no botão "anterior", a página anterior é carregada
	nextButton.addEventListener("click", loadNextPage); // Ao clicar no botão "próxima", a próxima página é carregada
}

export function showModal() {
	const modalContainer = document.getElementById("modal-container");
	modalContainer.style.visibility = "visible";
}

export function hideModal() {
	const modalContainer = document.getElementById("modal-container");
	modalContainer.onclick = () => {
		modalContainer.style.visibility = "hidden";
	}; // Ao clicar em qualquer parte da tela, o modal é ocultado
}

export function getNumbersFromUrl(url) {
	return url.replace(/\D/g, "");
}

export function handleError(error, errorMessage) {
	console.log(error);
	alert(errorMessage);
}

export function convertHeightFromCentimetersToMeters(heightInCentimeters) {
	if (heightInCentimeters.toLowerCase() === "unknown") {
		return "desconhecida";
	}

	const centimetersInAMeter = 100;
	const heightInMeters = heightInCentimeters / centimetersInAMeter;

	return `${heightInMeters.toFixed(2).replace(".", ",")} m`;
}

export function formatMass(mass) {
	if (mass.toLowerCase() === "unknown") {
		return "desconhecida";
	}

	return `${mass} kg`;
}

export function convertEyeColorFromEnglishToPortuguese(eyeColorInEnglish) {
	const colorDictionary = {
		blue: "azul",
		brown: "marrom",
		green: "verde",
		yellow: "amarelo",
		black: "preto",
		pink: "rosa",
		red: "vermelho",
		orange: "laranja",
		hazel: "castanho claro",
		unknown: "desconhecida",
	};

	const eyeColorInPortuguese =
		colorDictionary[eyeColorInEnglish.toLowerCase()] || eyeColorInEnglish; // Retorna a própria "eyeColorInEnglish" caso esta não esteja presente em "colorDictionary"

	return eyeColorInPortuguese;
}

export function formatBirthYear(birthYear) {
	if (birthYear.toLowerCase() === "unknown") {
		return "desconhecido";
	}

	return birthYear;
}
