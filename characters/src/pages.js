import { displayCharactersCards } from "./cards.js";

import {
	alternateButtonsVisibility,
	clearPreviousContent,
	handleError,
} from "./utils.js";

export let currentPageUrl = "https://swapi.dev/api/people/";

export async function loadPage(url) {
	const contentContainer = clearPreviousContent("content-container");

	try {
		const characters = await fetch(url);
		const charactersJson = await characters.json();

		displayCharactersCards(charactersJson.results, contentContainer);
		alternateButtonsVisibility(charactersJson);

		currentPageUrl = url;
	} catch (error) {
		handleError(error, "Erro ao carregar a página");
	}
}

export async function loadPreviousPage() {
	if (!currentPageUrl) return; // Se "currentPageUrl" for null, interrompe a execução da função (prevenção de erros)

	try {
		const characters = await fetch(currentPageUrl);
		const charactersJson = await characters.json();

		await loadPage(charactersJson.previous);
	} catch (error) {
		handleError(error, "Erro ao carregar a página anterior");
	}
}

export async function loadNextPage() {
	if (!currentPageUrl) return;

	try {
		const characters = await fetch(currentPageUrl);
		const charactersJson = await characters.json();

		await loadPage(charactersJson.next);
	} catch (error) {
		handleError(error, "Erro ao carregar a próxima página");
	}
}
