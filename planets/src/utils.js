import { loadNextPage, loadPreviousPage } from "./pages.js";

export function clearPreviousContent(contentId) {
	const content = document.getElementById(contentId);
	content.innerHTML = "";
	return content;
}

export function alternateButtonsVisibility(planetsJson) {
	const previousButton = document.getElementById("previous-button");
	const nextButton = document.getElementById("next-button");

	previousButton.disabled = !planetsJson.previous;
	nextButton.disabled = !planetsJson.next;

	previousButton.style.visibility = planetsJson.previous ? "visible" : "hidden";
	nextButton.style.visibility = planetsJson.next ? "visible" : "hidden";
}

export function navigateWithButtons() {
	const previousButton = document.getElementById("previous-button");
	const nextButton = document.getElementById("next-button");

	previousButton.addEventListener("click", loadPreviousPage);
	nextButton.addEventListener("click", loadNextPage);
}

export function showModal() {
	const modalContainer = document.getElementById("modal-container");
	modalContainer.style.visibility = "visible";
}

export function hideModal() {
	const modalContainer = document.getElementById("modal-container");
	modalContainer.onclick = () => {
		modalContainer.style.visibility = "hidden";
	};
}

export function getNumbersFromUrl(url) {
	return url.replace(/\D/g, "");
}

export function handleError(error, errorMessage) {
	console.log(error);
	alert(errorMessage);
}

export function formatPeriod(period) {
	if (period.toLowerCase() === "unknown") {
		return "desconhecido";
	}

	return `${period} dias`;
}

export function formatDiameter(diameter) {
	if (diameter.toLowerCase() === "unknown" || diameter === "0") {
		return "desconhecido";
	}

	return `${diameter} km`;
}

export function formatPopulation(population) {
	if (population.toLowerCase() === "unknown") {
		return "desconhecida";
	}

	return population;
}
