import { displayPlanetsCards } from "./cards.js";

import {
	alternateButtonsVisibility,
	clearPreviousContent,
	handleError,
} from "./utils.js";

export let currentPageUrl = "https://swapi.dev/api/planets/";

export async function loadPage(url) {
	const contentContainer = clearPreviousContent("content-container");

	try {
		const planets = await fetch(url);
		const planetsJson = await planets.json();

		displayPlanetsCards(planetsJson.results, contentContainer);
		alternateButtonsVisibility(planetsJson);

		currentPageUrl = url;
	} catch (error) {
		handleError(error, "Erro ao carregar a página");
	}
}

export async function loadPreviousPage() {
	if (!currentPageUrl) return;

	try {
		const planets = await fetch(currentPageUrl);
		const planetsJson = await planets.json();

		await loadPage(planetsJson.previous);
	} catch (error) {
		handleError(error, "Erro ao carregar a página anterior");
	}
}

export async function loadNextPage() {
	if (!currentPageUrl) return;

	try {
		const planets = await fetch(currentPageUrl);
		const planetsJson = await planets.json();

		await loadPage(planetsJson.next);
	} catch (error) {
		handleError(error, "Erro ao carregar a próxima página");
	}
}
