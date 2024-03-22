function searchByName() {
    var searchTerm = document.getElementById("searchByNameInput").value.trim().toLowerCase();
    if (!searchTerm) return;

    var searchResults = [];

    var links = document.querySelectorAll("a");

    links.forEach(function(link) {
        var linkText = link.innerText.trim().toLowerCase();
        var href = link.getAttribute("href");
        var resolutionNumber = linkText.match(/\d+\/\d+/)[0]; // Extraer el número de resolución del texto del enlace
        var h3Text = link.closest("ul").previousElementSibling.innerText.trim(); // Obtener el texto del h3 más cercano al enlace

        if (h3Text.toLowerCase().includes(searchTerm) || resolutionNumber.startsWith(searchTerm)) { // Comprobar si el término de búsqueda está incluido en el nombre de la carrera o si coincide con el número de resolución
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
