function searchByName() {
    var searchTerm = document.getElementById("searchByNameInput").value.trim().toLowerCase();
    if (!searchTerm) return;

    var sections = document.querySelectorAll("section");
    var searchResults = [];

    sections.forEach(function(section) {
        var h2Text = section.querySelector("h2").innerText.trim(); // Obtenemos el texto del h2 de la sección
        var h3Elements = section.querySelectorAll("h3");

        h3Elements.forEach(function(h3) {
            var h3Text = h3.innerText.trim();
            var links = h3.nextElementSibling.querySelectorAll("a");

            links.forEach(function(link) {
                var linkText = link.innerText.trim().toLowerCase();
                var href = link.getAttribute("href");

                if (linkText.includes(searchTerm)) { // Comprobamos si el nombre de la carrera incluye el término de búsqueda
                    var resultLink = document.createElement("a");
                    resultLink.href = href;
                    resultLink.textContent = linkText;
                    resultLink.target = "_blank";

                    var resultItem = document.createElement("p");
                    resultItem.innerHTML = "<strong>" + h2Text + " - " + h3Text + ": </strong>";
                    resultItem.appendChild(resultLink);

                    searchResults.push(resultItem);
                }
            });
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
