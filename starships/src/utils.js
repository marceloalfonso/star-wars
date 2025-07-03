import { loadNextPage, loadPreviousPage } from "./pages.js";

export function clearPreviousContent(contentId) {
	const content = document.getElementById(contentId); // Retorna a referência do elemento HTML através do seu ID
	content.innerHTML = ""; // Altera o código HTML do elemento (neste caso, estamos limpando os resultados anteriores)
	return content;
}

export function alternateButtonsVisibility(starshipsJson) {
	const previousButton = document.getElementById("previous-button");
	const nextButton = document.getElementById("next-button");

	previousButton.disabled = !starshipsJson.previous; // Quando houver uma página anterior, o botão "anterior" estará habilitado (disabled = false)
	nextButton.disabled = !starshipsJson.next; // Quando houver uma próxima pagina, o botão "próxima" estará habilitado (disabled = false)

	previousButton.style.visibility = starshipsJson.previous
		? "visible"
		: "hidden";
	nextButton.style.visibility = starshipsJson.next ? "visible" : "hidden";
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

export function formatCost(cost) {
	if (cost.toLowerCase() === "unknown") {
		return "desconhecido";
	}

	return `${cost} créditos`;
}

export function formatLength(length) {
	if (length.toLowerCase() === "unknown") {
		return "desconhecido";
	}

	return `${length.replace(".", ",")} m`;
}

export function formatMaximumSpeed(maximumSpeed) {
	if (
		maximumSpeed.toLowerCase() === "unknown" ||
		maximumSpeed.toLowerCase() === "n/a"
	) {
		return "desconhecida	";
	}

	return `${maximumSpeed} km/h`;
}

export function formatPassengers(passengers) {
	if (
		passengers.toLowerCase() === "unknown" ||
		passengers.toLowerCase() === "n/a"
	) {
		return "desconhecido";
	}

	return passengers.replace(",", "");
}
