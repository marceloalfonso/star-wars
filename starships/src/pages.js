import { displayStarshipsCards } from "./cards.js";

import {
	alternateButtonsVisibility,
	clearPreviousContent,
	handleError,
} from "./utils.js";

export let currentPageUrl = "https://swapi.dev/api/starships/";

export async function loadPage(url) {
	const contentContainer = clearPreviousContent("content-container");

	try {
		const starships = await fetch(url);
		const starshipsJson = await starships.json();

		displayStarshipsCards(starshipsJson.results, contentContainer);
		alternateButtonsVisibility(starshipsJson);

		currentPageUrl = url;
	} catch (error) {
		handleError(error, "Erro ao carregar a página");
	}
}

export async function loadPreviousPage() {
	if (!currentPageUrl) return; // Se "currentPageUrl" for null, interrompe a execução da função (prevenção de erros)

	try {
		const starships = await fetch(currentPageUrl);
		const starshipsJson = await starships.json();

		await loadPage(starshipsJson.previous);
	} catch (error) {
		handleError(error, "Erro ao carregar a página anterior");
	}
}

export async function loadNextPage() {
	if (!currentPageUrl) return;

	try {
		const starships = await fetch(currentPageUrl);
		const starshipsJson = await starships.json();

		await loadPage(starshipsJson.next);
	} catch (error) {
		handleError(error, "Erro ao carregar a próxima página");
	}
}
