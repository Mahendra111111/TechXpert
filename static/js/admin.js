 // Sorting function
 function sortTable(columnIndex) {
    let table = document.getElementById("reportTable");
    let rows = Array.from(table.getElementsByClassName("item1"));
    let sortedRows = rows.sort((a, b) => {
        let textA = a.getElementsByTagName("h3")[columnIndex].innerText.toLowerCase();
        let textB = b.getElementsByTagName("h3")[columnIndex].innerText.toLowerCase();
        return textA.localeCompare(textB);
    });
    // Remove all rows and re-add sorted ones
    table.innerHTML = "";
    sortedRows.forEach(row => table.appendChild(row));
}

// Filtering function
function filterTable() {
    let input = document.getElementById("searchInput");
    let filter = input.value.toLowerCase();
    let rows = document.getElementsByClassName("item1");
    Array.from(rows).forEach(row => {
        let name = row.getElementsByTagName("h3")[1].innerText.toLowerCase();
        row.style.display = name.includes(filter) ? "" : "none";
    });
}