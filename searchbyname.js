function searchByName() {
    var searchTerm = document.getElementById("searchByNameInput").value.trim().toLowerCase();
    if (!searchTerm) return;

    var searchResults = [];

    var h3Elements = document.querySelectorAll("h3");

    h3Elements.forEach(function(h3) {
        var h3Text = h3.innerText.trim();
        var links = h3.nextElementSibling.querySelectorAll("a");

        links.forEach(function(link) {
            var linkText = link.innerText.trim().toLowerCase();
            var href = link.getAttribute("href");
            var resolutionNumber = linkText.match(/\d+\/\d+/)[0]; // Extraer el número de resolución del texto del enlace

            if (h3Text.toLowerCase().includes(searchTerm)) { // Comprobamos si el nombre de la carrera incluye el término de búsqueda
                var resultLink = document.createElement("a");
                resultLink.href = href;
                resultLink.textContent = resolutionNumber; // Mostrar el número de resolución como texto del enlace
                resultLink.target = "_blank";

                var resultItem = document.createElement("p");
                resultItem.innerHTML = "<strong>" + h3Text + ": </strong>"; // Mostrar solo el nombre de la carrera
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
