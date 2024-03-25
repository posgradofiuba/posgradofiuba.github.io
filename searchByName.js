function normalizeText(text) {
    console.log("Normalized text: ", text);
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function searchByName() {
    console.log("searchByName() function called");
    var searchTerm = normalizeText(document.getElementById("searchByNameInput").value.trim());
    var searchResultsElement = document.getElementById("searchResultsByName");

    if (!searchTerm) {
        searchResultsElement.innerHTML = "";
        return;
    }

    var sections = document.querySelectorAll("section");
    var searchResults = [];

    sections.forEach(function(section) {
        var h3 = section.querySelectorAll("h3");
        h3.forEach(function(h3Element) {
            var h3Text = normalizeText(h3Element.innerText.trim());
            if (h3Text.includes(searchTerm)) {
                var links = h3Element.nextElementSibling.querySelectorAll("a");
                links.forEach(function(link) {
                    var href = link.getAttribute("href");
                    var linkText = normalizeText(link.innerText.trim());

                    // Obtener el número de resolución
                    var resolutionNumber = linkText.match(/\d+/);

                    // Verificar si el número de resolución contiene el año de búsqueda
                    if (resolutionNumber && resolutionNumber[0].endsWith(searchTerm)) {
                        var resultLink = document.createElement("a");
                        resultLink.href = href;
                        resultLink.textContent = linkText; // Mantener el texto del enlace
                        resultLink.target = "_blank";

                        var resultItem = document.createElement("p");
                        resultItem.innerHTML = "<strong>" + h3Element.innerText.trim() + ": </strong>";
                        resultItem.appendChild(resultLink);

                        searchResults.push(resultItem);
                    }
                });
            }
        });
    });

    searchResultsElement.innerHTML = "";
    if (searchResults.length > 0) {
        searchResults.forEach(function(result) {
            searchResultsElement.appendChild(result);
        });
    } else {
        searchResultsElement.innerHTML = "<p>No se encontraron resultados.</p>";
    }
}
