import { currentPageUrl, loadPage } from "./pages.js";

import { handleError, hideModal, navigateWithButtons } from "./utils.js";

window.onload = async () => {
	try {
		await loadPage(currentPageUrl);
	} catch (error) {
		handleError(error, "Erro ao carregar os cards dos planetas");
	}

	navigateWithButtons();
	hideModal();
};
