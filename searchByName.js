function searchByName() {
    var searchTerm = document.getElementById("searchByNameInput").value.trim();
    if (!searchTerm) return;

    var sections = document.querySelectorAll("section");
    var searchResults = [];

    sections.forEach(function(section) {
        var h3 = section.querySelectorAll("h3");
        h3.forEach(function(h3Element) {
            var h3Text = h3Element.innerText.trim();
            if (h3Text.includes(searchTerm)) {
                var links = h3Element.nextElementSibling.querySelectorAll("a");
                links.forEach(function(link) {
                    var href = link.getAttribute("href");
                    var linkText = link.innerText.trim();
                    
                    var resultLink = document.createElement("a");
                    resultLink.href = href;
                    resultLink.textContent = linkText;
                    resultLink.target = "_blank";

                    var resultItem = document.createElement("p");
                    resultItem.innerHTML = "<strong>" + h3Text + ": </strong>";
                    resultItem.appendChild(resultLink);

                    searchResults.push(resultItem);
                });
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
