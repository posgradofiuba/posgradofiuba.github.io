function searchByName() {
    var searchTerm = document.getElementById("searchByNameInput").value.trim().toLowerCase(); // Convertir el término de búsqueda a minúsculas
    var searchResultsElement = document.getElementById("searchResultsByName");

    // Limpiar los resultados si el campo de búsqueda está vacío
    if (!searchTerm) {
        searchResultsElement.innerHTML = "";
        return;
    }

    var sections = document.querySelectorAll("section");
    var searchResults = [];

    sections.forEach(function(section) {
        var h3 = section.querySelectorAll("h3");
        h3.forEach(function(h3Element) {
            var h3Text = h3Element.innerText.trim().toLowerCase(); // Convertir el texto del h3 a minúsculas
            if (h3Text.includes(searchTerm)) {
                var links = h3Element.nextElementSibling.querySelectorAll("a");
                links.forEach(function(link) {
                    var href = link.getAttribute("href");
                    var linkText = link.innerText.trim().toLowerCase(); // Convertir el texto del enlace a minúsculas
                    
                    var resultLink = document.createElement("a");
                    resultLink.href = href;
                    resultLink.textContent = linkText; // Mantener el texto del enlace en minúsculas
                    resultLink.target = "_blank";

                    var resultItem = document.createElement("p");
                    resultItem.innerHTML = "<strong>" + h3Element.innerText.trim() + ": </strong>"; // Usar el texto original del h3
                    resultItem.appendChild(resultLink);

                    searchResults.push(resultItem);
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
