function searchByName() {
    var searchTerm = normalize(document.getElementById("searchByNameInput").value.trim().toLowerCase());
    if (!searchTerm) return;

    var sections = document.querySelectorAll("section");
    var searchResults = [];

    sections.forEach(function(section) {
        var h3Text = normalize(section.querySelector("h3").innerText.trim().toLowerCase());

        var links = section.querySelectorAll("a");
        links.forEach(function(link) {
            var linkText = normalize(link.innerText.trim().toLowerCase());
            var href = link.getAttribute("href");

            if (linkText.includes(searchTerm)) {
                var resultLink = document.createElement("a");
                resultLink.href = href;
                resultLink.textContent = linkText;
                resultLink.target = "_blank";

                var resultItem = document.createElement("p");
                resultItem.innerHTML = "<strong>" + h3Text + ": </strong>";
                resultItem.appendChild(resultLink);

                searchResults.push(resultItem);
            }
        });
    });

    var searchResultsElement = document.getElementById("searchResultsByName");
    searchResultsElement.innerHTML = "";
    if (searchResults.length > 0) {
        searchResults.forEach(function(result) {
            searchResultsElement.appendChild(result);
        });
    } else {
        searchResultsElement.innerHTML = "<p>No se encontraron resultados.</p>";
    }
}

// Función para eliminar las tildes de una cadena de texto
function normalize(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
